import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import Header from './Header';
import TodoList from './TodoList';
import TaskModal from './TaskModal';

export default function App() {

  const todoList = [
    {
      code: 1,
      todo: "study",
      endStatus: false
    },
    {
      code: 2,
      todo: "go to hospital",
      endStatus: true
    },
    {
      code: 3,
      todo: "read a book",
      endStatus: false
    }
  ]
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      {todoList.map((item) => <TodoList key={item.code} todo={item.todo} endStatus={item.endStatus} />)}
      <TaskModal isVisible={false} />
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
