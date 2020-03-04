import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {db} from '../config'
import {DB_REF} from '../constants/todoConstants'

const Task = ({item}) => {   
    const handleToggle = (itemId, isCompleted) => {
        let query = db.ref(DB_REF).orderByChild("id").equalTo(itemId);
        query.once("child_added", (snapshot) => {
            snapshot.ref.update({ completed: !isCompleted })
            }
        )
    }
    
    return(
        <View>
            <TouchableOpacity style = {{marginBottom:2}} onPress={() => handleToggle(item.id, item.completed)}>
                <View style={styles.taskContainer}>
                    <Text style={styles.taskText, {textDecorationLine: item.completed ? 'line-through' : 'none'}}>{item.task}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    taskContainer :
    {
        height : 40,
        backgroundColor : '#eee',
        padding : 10,
        justifyContent: 'center',
    },
    taskText : {
        padding: '5%',
        color : '#222',
        fontSize: 15,
        

    }
});

export default Task;

