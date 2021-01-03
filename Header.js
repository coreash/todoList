import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

const Header = ({ show }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>This is your TodoList !!</Text>
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.button}
                onPress={show}
            >
                <Ionicons name='ios-add' color='#FFFFFF' size={24} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
        marginLeft: 16,
        marginRight: 16,
    },
    title: {
        fontSize:25,
        marginBottom: 10,
        paddingLeft:10
    },
    button: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: '#212121',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Platform.select({
            ios: 2,
            android: 0
        }),
        paddingLeft: Platform.select({
            ios: 1,
            android: 0,
        })
    }
})
export default Header;