import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalHandler = (text) => {
        setEnteredGoal(text);
    }

    return (
        <Modal 
            visible={props.visible}
            animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput 
                placeholder="Enter your goal here" 
                style={styles.input} 
                onChangeText={goalHandler}
                value={enteredGoal} />
                <Button title="+" onPress={props.onAddGoal.bind(this, enteredGoal)}/>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
    },
    input: {
        width: 260, 
        borderColor: 'black', 
        borderWidth: 1, 
        padding: 10
    },
})

export default GoalInput;