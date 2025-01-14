import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CompletedTasksScreen = () => {
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    loadCompletedTasks();
  }, []);

  const loadCompletedTasks = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem('tasks');
      if (storedTasks) {
        const tasks = JSON.parse(storedTasks);
        const completed = tasks.filter(task => task.completed);
        setCompletedTasks(completed);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTask = async (taskName) => {
    const storedTasks = await AsyncStorage.getItem('tasks');
    const tasks = JSON.parse(storedTasks);
    const updatedTasks = tasks.filter(task => task.name !== taskName);
    setCompletedTasks(updatedTasks.filter(task => task.completed));
    await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const renderItem = ({ item }) => (
    <View style={styles.taskItem}>
      <Text>{item.name}</Text>
      <Button title="Delete" onPress={() => deleteTask(item.name)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={completedTasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default CompletedTasksScreen;
