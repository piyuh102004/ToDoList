# Todo List App

This is a simple Todo List application built with React Native. It allows users to add, edit, and delete tasks, as well as mark tasks as completed. The app uses React Navigation for bottom tab navigation and AsyncStorage for local persistence.

## Features

- **Todo List Screen**: Add new tasks, mark tasks as completed, and delete tasks.
- **Completed Tasks Screen**: View and delete completed tasks.
- **Local Storage**: Tasks are saved locally using AsyncStorage and persist across app restarts.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/TodoListApp.git
   ```
2. Navigate to the project directory:
   ```bash
   cd TodoListApp
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the app on an Android or iOS device/emulator:
   ```bash
   npx react-native run-android
   ```
   or
   ```bash
   npx react-native run-ios
   ```

## Usage

- **Add a Task**: Enter a task name in the input field and press "Add Task".
- **Mark as Completed**: Press the "Complete" button next to a task to mark it as completed.
- **Delete a Task**: On the Completed Tasks screen, press the "Delete" button next to a task to remove it.

## Dependencies

- React Navigation
- AsyncStorage
- React Native Gesture Handler
- React Native Reanimated
- React Native Screens
- React Native Safe Area Context
- React Native Masked View

## License

This project is licensed under the MIT License.
