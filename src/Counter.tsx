import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import {useSelector,useDispatch} from  "react-redux";
import {addition,subtraction} from "./store/actions"


export default function Counter() {
   const data = useSelector(state => state.counter);
   const dispatch = useDispatch() 
    return (
        <View style={styles.container}>
            <Button style = {styles.button} title="add" onPress={()=>dispatch(addition())}/>
            <Button style = {styles.button} title = "subtract" onPress={()=>dispatch(subtraction())}/>
            <Text>{data}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center"
    },
    button:{
        width:80,
    }
})
