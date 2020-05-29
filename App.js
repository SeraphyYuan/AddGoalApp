import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
//Test

  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle }]);
    setIsAddMode(false);
  };

  function removeGoalHandler(goalId) {
    setCourseGoals(currentGoals =>{
      return currentGoals.filter(item => item.id !== goalId)
    });
  }

  function cancelGoalHandler(){
    setIsAddMode(false);
  }

  
  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={()=>setIsAddMode(true)}/>
      <GoalInput isVisable={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalHandler}/>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} />}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    padding: 50
  },
  
});
