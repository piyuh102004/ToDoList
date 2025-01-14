import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TodoListScreen from './screens/TodoListScreen';
import CompletedTasksScreen from './screens/CompletedTasksScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Todo List" component={TodoListScreen} />
        <Tab.Screen name="Completed Tasks" component={CompletedTasksScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
