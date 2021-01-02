import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

const TodoList = ({ todo, endStatus }) => {
    return (
        <View style={styles.todoItem}>
            <View style={styles.todo}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={endStatus ? styles.done : styles.check}
                >
                    <FontAwesome name="check" color={endStatus ? '#FFFFFF' : '#E0E0E0'} size={14} />
                    
                </TouchableOpacity>
                <Text style={styles.todoItemText}>{todo}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    todoItem:{
        paddingLeft: 16,
        paddingRight: 16,
        marginBottom:10,
        backgroundColor:"#c0c0c0"
    },
    todo:{
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
    },
    todoItemText:{
        fontSize: 16,
        color: '#424242'
    },
    check: {
        borderWidth: 1,
        borderColor: '#E5E5E5',
        width: 28,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight : 8,
        borderRadius: 14,
    },
    done: {
        width: 28,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight : 8,
        borderRadius: 14,
        backgroundColor: '#6830CF',
    }
})
export default TodoList;