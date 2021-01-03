import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import Header from './Header';
import TodoList from './TodoList';
import TaskModal from './TaskModal';
import AsyncStorage from '@react-native-community/async-storage';

export default class App extends React.Component{
  componentDidMount() {
    AsyncStorage.getItem('@todo:state').then((state) => {
      this.setState(JSON.parse(state))
    })
  }
    state = {
      todos: [
      ],
      showModal: false,
    }
    save = () => {
      AsyncStorage.setItem('@todo:state', JSON.stringify(this.state))
    }
  render()  {
    return (
      <SafeAreaView style={styles.container}>
        <Header 
          show={() => {
            this.setState({ showModal: true});
          }}  
        />

        <FlatList 
            data={this.state.todos}
            renderItem={({ item, index }) => {
              return (
                <TodoList
                  todo={item.todo}
                  endStatus={item.endStatus}
                  keyExtractor={(_, index) => {
                    return '${index}'
                  }}
                  remove={() => {
                    this.setState({
                      todos: this.state.todos.filter((_, i) => i !== index)
                    })
                  }}
                  toggle={() => {
                    const newTodos = [...this.state.todos]
                    newTodos[index].endStatus = !newTodos[index].endStatus
                    this.setState({ todos: newTodos})
                  }}
                />
              )
            }}
          />
        <TaskModal isVisible={this.state.showModal} 
          add={(todo) => {
            this.setState({
              todos: this.state.todos.concat({
                todo: todo,
                endStatus: false
              }),
              showModal: false
            }, this.save)
          }}
          hide={() => {
            this.setState({ showModal : false })
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
