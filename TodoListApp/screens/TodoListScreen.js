import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, TextInput, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TodoListScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem('tasks');
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addTask = async () => {
    if (taskName) {
      const newTask = { name: taskName, completed: false };
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      setTaskName('');
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.taskItem}>
      <Text>{item.name}</Text>
      <Button title="Complete" onPress={() => markAsCompleted(item)} />
    </View>
  );

  const markAsCompleted = async (task) => {
    const updatedTasks = tasks.map(t => 
      t.name === task.name ? { ...t, completed: true } : t
    );
    setTasks(updatedTasks);
    await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={taskName}
        onChangeText={setTaskName}
      />
      <Button title="Add Task" onPress={addTask} />
      <FlatList
        data={tasks}
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default TodoListScreen;
