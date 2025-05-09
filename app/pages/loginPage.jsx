import React from 'react';
import {View,StyleSheet,Text }from 'react-native';




export default function login(){
    return(
        <View style={styles.body}>
            <Text>Register Here</Text>

        </View>
    )
}

const styles =StyleSheet.create({
    body:{
      flex:1,
      alignItem:'center',
      backgroundColor:'#0080ff'
    }
})