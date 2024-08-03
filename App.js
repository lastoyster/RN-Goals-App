import { StyleSheet, View,Button,FlatList } from 'react-native';
import React,{useState} from 'react';
import * as Font from "expo-font";
import {AppLoading} from "expo"
// You can import supported modules from npm
import { Card } from 'react-native-paper';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App(){
 const [courseGoals,setCourseGoals] = useState([]);
 const [isAddMode,setIsAddMode]= useState(false);
 
 const addGoalHandler = goalTitle => {
   setCourseGoals(currentGoals =>[
     ...currentGoals,
     {key:Math.random().toString(),value:goalTitle}
   ]);
   setIsAddMode(false);
 };

 const removeGoalHandler =goalId =>{
   setCourseGoals(currentGoals =>{
     return currentGoals.filter(goal => goal.key !== goalId);
   });
 };

 const cancelGoalAdditionHandler =()=>{
   setIsAddMode(false);
 };

  return(
    <View style={styles.screen}>
    <Button title="Add New Goal" onPress={()=> setIsAddMode(true)}/>
    <GoalInput
    visible={isAddMode}
    onAddGoal = {addGoalHandler}
    onCancel={cancelGoalAdditionHandler}
    />

  <FlatList 
  data={courseGoals}
  renderItem={itemData =>(
    <GoalItem id={itemData.item.key}
    onDelete={removeGoalHandler}
    title={itemData.item.value}
    />
  )}
  />
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding:60
  }
});