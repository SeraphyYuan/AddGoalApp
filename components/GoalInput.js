import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal, Slider } from 'react-native'

//Test for git
const GoalInput = props => {
    const [enteredGoal, setEnterGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnterGoal(enteredText);
    };

    function addGoalHandler(){
        props.onAddGoal(enteredGoal);
        setEnterGoal('')
    }

    return (
    <Modal visible={props.isVisable} animationType="slide"> 
        <View style={styles.inputContainer}>
            <TextInput placeholder="Course Goal"
                style={styles.input}
                onChangeText={goalInputHandler}
                value={props.input} />
            <View style={styles.buttonContainer}>
                <View>
                    <Button style={styles.button} title="CANCEL" color="red" onPress={props.onCancel} />
                </View>
                <View>
                    <Button style={styles.button} title="ADD" color="blue" onPress={addGoalHandler} />
                </View>
            </View>
        </View>
    </Modal>
    );
}





export default GoalInput;

const styles = StyleSheet.create({
    input: {
        borderBottomColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: 200,
        margin: 10,
    },

    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonContainer: {
        flexDirection:'row',
        justifyContent: 'space-between',
        width: '60%'
    },
    button: {
        width:'40%',
    }

    

    
});