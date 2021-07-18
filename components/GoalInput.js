import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';
const GoalInput = props => {
    const [newGoal, setNewGoal] = useState("");

    const goalInputHandler = enteredText => {
        setNewGoal(enteredText)
    }

    const onSubmit = () => {

        props.addGoalHandler(newGoal);
        setNewGoal("")
    }

    const onCancel = () => {
        setNewGoal("");
        props.cancel();
    }
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput

                    placeholder="New Goal"
                    value={newGoal}
                    onChangeText={goalInputHandler}
                    style={styles.textInput} />

                <View style={styles.buttonContainer}>

                    <View style={styles.button}>
                        <Button
                            color="green"
                            title="Add"
                            onPress={onSubmit} />
                    </View>


                    <View style={styles.button}>
                        <Button
                            color={"red"}
                            title="Cancel"
                            onPress={onCancel} />

                    </View>

                </View>

            </View>
        </Modal>

    )
}


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        width: "80%",
        borderBottomColor: 'black',
        borderWidth: 1,
        marginBottom: 10
    },
    buttonContainer: {
        width: "60%",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    button: {
        width: "40%"
    }
});


export default GoalInput