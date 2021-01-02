import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Modal from 'react-native-modal';

const TaskModal = ({ isVisible }) => {
    return (
        <Modal
            isVisible={isVisible}
            avoidKeyboard
            style={styles.modal}
        >
            <View style={styles.container}>
                <TextInput 
                    placeholder="typing new todo"
                />
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 8,
    },
    container: {
        padding: 16,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      },
})
export default TaskModal;