import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <View style={styles.viewOneStyle}></View>
        <View style={styles.viewTwoStyle}></View>
        <View style={styles.viewThreeStyle}></View>

    </View>
}

const styles = StyleSheet.create({
    viewStyle:{
       flexDirection: 'row',
       justifyContent: 'space-between'
      
    },
    viewOneStyle:{
        height:200,
        width: 300,
        borderWidth:5,
        borderColor: 'darkred',
        backgroundColor: 'red',
        
    },
    viewTwoStyle:{
        height:200,
        width: 300,
        borderWidth:5,
        borderColor: 'darkgreen',
        backgroundColor: 'green',
        marginTop: 200,
        
    },
    viewThreeStyle:{
        height:200,
        width: 300,
        borderWidth:5,
        borderColor: 'darkblue',
        backgroundColor: 'blue',
        
    },
})


export default BoxScreen;