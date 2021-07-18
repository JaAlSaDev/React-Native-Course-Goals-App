
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
const GoalItem = props => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete}>
            <View style={styles.listItem}  >
                <Text >{props.value}</Text>
            </View>
        </TouchableOpacity>

    )
}


export default GoalItem;


const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: "#ccc",
        borderColor: 'black',
        borderWidth: 1,
    }
})