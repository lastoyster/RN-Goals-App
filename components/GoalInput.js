import  React, {useState}  from "react";
import { Text, View,TextInput, StyleSheet,Button, Modal } from 'react-native';

const GoalInput = props =>{
  const [enteredGoal,setEnteredGoal]= useState("");

const goalInputHandler = enteredText => {setEnteredGoal(enteredText);
};

const addGoalHandler =()=>{
  props.onAddGoal(enteredGoal);
  setEnteredGoal("");
};


return(
  <Modal visible={props.visible} animationType="slide">
  <View style={styles.inputContainer}>
  <TextInput placeholder="Enter your goal"
  style={styles.input}
  onChangeText={goalInputHandler}
  value={enteredGoal}
  />

  <View style={styles.buttonContainer}>
  <View styles={styles.button}>
  <Button title="CANCEL" onPress={props.onCancel} color="red"/>
  </View>

  <View style={styles.button}>
  <Button title="ADD" onPress={addGoalHandler}/>
  </View>
  </View>
 </View>
 </Modal>
);
}

const styles= StyleSheet.create({
  inputContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  input:{
    width:"80%",
    borderBottomColor:"black",
    padding:10,
    marginBottom:10
  },
  buttonContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    width:"60%"
  },
  button:{
    width:"40%"
  }
});