import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalHandler = (text) => {
        setEnteredGoal(text);
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal)
        setEnteredGoal('')
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
                <View style={styles.button}>
                   
                <Button title="add" onPress={addGoalHandler}/>
                <Button title="cancel" color="red" onPress={props.onCancel}/>
                </View>
                
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    input: {
        width: 260, 
        borderColor: 'black', 
        borderWidth: 1, 
        padding: 10,
        marginBottom: 10,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '35%'
    }
})

export default GoalInput;