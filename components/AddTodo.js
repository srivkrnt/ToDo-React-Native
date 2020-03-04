import React, { useState} from 'react';
import { View, StyleSheet, Button, TextInput} from 'react-native';
import {addTodo} from '../actions/Action'
import uuid from 'uuid4'
import {useDispatch} from 'react-redux'
import {db} from '../config'
import { DB_REF } from '../constants/todoConstants';

const AddTodo = () => {
    const [taskDesc, setTaskDesc] = useState('');
    const dispatch = useDispatch()
    
    const changeTaskDesc = (val) => {
        setTaskDesc(() => val);
    }

    const handleAddTodo =  () => {
        const todoItem = {
            id : uuid(),
            task : taskDesc,
            completed : false
        };
        setTaskDesc('');
        db.ref(DB_REF).push(todoItem).then(dispatch(addTodo(todoItem)))
        
    }
    
    return (
        <View> 
            <View style={styles.textBox}>            
                <TextInput placeholder='Add Text' style={{padding:20}} onChangeText={changeTaskDesc} value={taskDesc} />
            </View>
            <View style={styles.buttonContainer}>  
                <View style={styles.addTodo}>
                    <Button title='Add' onPress={handleAddTodo} />
                </View>
            </View> 
        </View> 
    );
}

const styles = StyleSheet.create({
    textBox : {
        margin : 10,
        backgroundColor : '#e4e4e4',
        borderRadius: 5
        
    },
    addTodo : {
        margin : 10,
        width : 200,
        marginBottom: 10,
    },
    buttonContainer : {
        height: 40,
        alignItems: "center",
        marginBottom: 10
    }
});
    
export default AddTodo;









