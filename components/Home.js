import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import TitleBar  from './TitleBar'
import AddTodo from './AddTodo'
import CompletedTasks from './CompletedTasks';
import PendingTasks from './PendingTasks';
import {fetchFromFirebase, listenToChanges} from '../Utils'

const Home = () => {
  fetchFromFirebase()
  listenToChanges()
  
  return (
    <View style={styles.container}>
      <TitleBar/>
      <AddTodo />
      <ScrollView>
        <PendingTasks />
        <CompletedTasks/>
      </ScrollView>                
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop : 5,
    backgroundColor: 'white'
  },
});