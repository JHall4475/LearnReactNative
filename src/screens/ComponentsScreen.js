import React from 'react';
import { Text, StyleSheet, View } from 'react-native';



const ComponentsScreen = () => {
    const name ='Jared';
    return (
        <View>
            <Text style={styles.textStyle}>Getting started with React Native!</Text>
            <Text style={styles.textStyle1}>My name is {name} and this is the componentsScreen</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    textStyle1: {
        fontSize: 20
    }
});

export default ComponentsScreen;