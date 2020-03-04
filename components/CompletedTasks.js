import React from 'react'
import {View, FlatList} from 'react-native'
import Heading from './Heading'
import {useSelector} from 'react-redux'
import Task from './Task'

const CompletedTasks = () => {
    const items = useSelector(state => state.todo);    
    return (
        <React.Fragment>
            <Heading title={'Completed'}/>
            <View>
                <FlatList
                    data={items}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => {
                        if(item.completed) 
                            return <Task item={item}/>
                    }}
                />
            </View>
        </React.Fragment>
    );
}
export default CompletedTasks;
