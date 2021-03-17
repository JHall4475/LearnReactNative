import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  
  return (
  <View>
    <Text style={styles.text}>Jared's Home Screen</Text>
    
    <Button 
    title="Go to Components Demo"
    onPress={() => navigation.navigate('Components')}
    />
     <Button 
    title="Go to List Demo"
    onPress={() => navigation.navigate('List')}
    />
     <Button 
    title="Go to ImageScreen Demo"
    onPress={() => navigation.navigate('Image')}
    />
      <Button 
    title="Go to CounterScreen Demo"
    onPress={() => navigation.navigate('Counter')}
    />
    <Button 
    title="Go to ColorScreen Demo"
    onPress={() => navigation.navigate('Color')}
    />
    <Button 
    title="Go to SquareScreen Demo"
    onPress={() => navigation.navigate('Square')}
    />
    <Button 
    title="Go to TextScreen Demo"
    onPress={() => navigation.navigate('Text')}
    />


    {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
      <Text>Go to List Demo</Text>
    </TouchableOpacity> */}
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;


