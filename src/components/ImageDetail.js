import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = (props) => {
    console.log(props)
    return <View>
         <Text>{props.title}</Text>
        <Image 
         source={props.imageSource}
         style={{ height: 133, left: 0, right: 0, width: 200 }}
        />
       
        <Text>Image Score - {props.imageScore}</Text>

    </View>
}

const styles = StyleSheet.create({});

export default ImageDetail;