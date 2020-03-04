import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

 const Heading = ({title}) => {
    return(
        <View style={styles.headerView}> 
            <Text style={styles.headerText}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerView :
    {
        width: "100%",
        backgroundColor : '#1B3A57',
        padding : 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    headerText : {
        color : '#fff',
        fontSize: 15,

    }
});

export default Heading;