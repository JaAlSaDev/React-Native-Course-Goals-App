import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {
  const [goals, setGoals] = useState([])
  const [isAddMode,setIsAddMode]= useState(false)

  const addGoalHandler = newGoal => {
    setGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: newGoal }])

    setIsAddMode(false)
  }

  const deleteGoal = goalID => {


    setGoals(currentGoals => {

      return currentGoals.filter(goal => goal.id !== goalID)
    })
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={()=> setIsAddMode(true)}/>
      <GoalInput

        visible={isAddMode}
        cancel={()=> setIsAddMode(false)}
        addGoalHandler={addGoalHandler}

      />
      {/* The scroll view is great for small lists, not so good for long lists.
        This is because it renders the whole list, even items that aren't visible on the screen, making ScrollView inefficient
        */}
      <FlatList
        data={goals}
        keyExtractor={(item, index) => item.id}
        renderItem={itemData => <GoalItem onDelete={() => deleteGoal(itemData.item.id)} value={itemData.item.value} />} />

    </View>
  );
}

// You might get optimization by using this
// This adds validation for CSS properties
const styles = StyleSheet.create({
  screen: {
    padding: 50
  }

});
