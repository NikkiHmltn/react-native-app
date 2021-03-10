import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [courseAdd, setCourseAdd] = useState(false)
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoal = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      {key: Math.random().toString(), value: goalTitle}
    ])
    setCourseAdd(false)
  }

  const removeGoal = goalKey => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key !== goalKey)
    })
  }

  const cancelGoal = () => {
    setCourseAdd(false)
  }

  return (
    <View style={styles.screen}>
      <Button title="Add new goal" onPress={() => setCourseAdd(true)}/>
      <GoalInput visible={courseAdd} onAddGoal={addGoal} onCancel={cancelGoal} />
      <FlatList 
        data={courseGoals} 
        renderItem={itemData => <GoalItem onDelete={removeGoal.bind(this, itemData.item.key)} children={itemData.item.value} 
        /> }>
        
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  
});
