import React from 'react';
import { StyleSheet,Text, View, ImageBackground} from 'react-native';

function TitleBar (){
    return(
        <React.Fragment>
            <ImageBackground source={"https://cdn3.iconfinder.com/data/icons/pixel-perfect-at-16px-volume-3-1/16/5091-512.png"} style={styles.titleBarImage}>
            </ImageBackground>
            <Text style = {styles.titleBarText}> ToDo </Text>
            <View style = {styles.lineStyle}/>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    titleBarImage : {
        width : 100,
        height : 100,
        alignSelf : 'center'
    },
    titleBarText : {
        fontSize : 30,
        alignSelf : "center"
    },
    lineStyle:{
        borderWidth: 1.5,
        borderColor:'black',
        margin:5,
   }
})
export default TitleBar;