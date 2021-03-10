import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  
  const goalHandler = (text) => {
    setEnteredGoal(text);
  }

  const addGoal = () => {
    console.log(enteredGoal)
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Enter your goal here" 
          style={styles.input} 
          onChangeText={goalHandler}
          value={enteredGoal} />
      </View>
      <View>
        <Button title="ADD" onPress={addGoal}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
  },
  input: {
    width: 200, 
    borderColor: 'black', 
    borderWidth: 1, 
    padding: 10
  },
});
