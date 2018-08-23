import React from 'react';
import {Text,View, Dimensions} from 'react-native';
import {Constants} from 'expo';
import TimeSquare from './TimeSquare';


var {height, width} = Dimensions.get('window');
const ScheduleAm = () => {
    return(
      <View style ={styles.ContainerStyle}>
        <View style ={styles.SmallContainer}>
            <TimeSquare time = '12' color = '' textColor = 'white' />
            <TimeSquare time = '1'  color = '' textColor = 'white'  />
            <TimeSquare time = '2' color = '' textColor = 'white'  />
            <TimeSquare time = '3' color = '' textColor = 'white'  />
            <TimeSquare time = '4'  color = '' textColor = 'white' />
            <TimeSquare time = '5'  color = '' textColor = 'white' />
         </View>
         <View style = {styles.SmallContainerTwo}>
         <TimeSquare time = '6'  color = '' textColor = 'white' />
            <TimeSquare time = '7'  color = '' textColor = 'white' />
            <TimeSquare time = '8'  color = '' textColor = 'white' />
            <TimeSquare time = '9'  color = '' textColor = 'white' />
            <TimeSquare time = '10'  color = '' textColor = 'white' />
            <TimeSquare time = '11'  color = '' textColor = 'white' />
         </View>
      </View>  
    );
}

const styles = {
    ContainerStyle:{
        height : '40%',
        width : width ,
        alignItems : 'center',
        justifyContent : 'center'
    },
    timeStyle : {
        fontSize : 24, 
        color : 'green'
    },
    SmallContainer : {
        height : '15%',
        flexDirection : 'row',
        justifyContent : 'space-evenly',
        width : width - 10,
        alignSelf : 'center',

    },
    SmallContainerTwo : {
        height : '15%',
        flexDirection : 'row',
        justifyContent : 'space-evenly',
        width : width - 10,
        alignSelf : 'center',
        top : '5%'

    },
    SmallSquares : {
        backgroundColor : 'white',
        height : 50,
        width : 50,
        borderRadius : 10,
        justifyContent : 'center',
        alignItems : 'center'
    }
}

export default ScheduleAm;