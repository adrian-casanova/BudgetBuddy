import React from 'react'
import {Text, View, Dimensions, TouchableOpacity} from 'react-native';

var {height, width} = Dimensions.get('window');
const TimeSquare = ({time, color, textColor, onPress}) => {
    return(
        <TouchableOpacity style = {{
            borderColor : 'white',
            borderWidth : 2,
            height : 40,
            width : 40,
            backgroundColor : color,
            borderRadius : 10,
            justifyContent : 'center',
            alignItems : 'center'
        }}
        onPress = {onPress}>
        <Text style ={{
            fontSize : 24, 
            color : textColor
        }}>{time}</Text>
    </TouchableOpacity>
    );
}

const styles = {
    timeStyle : {
        fontSize : 24, 
        color : 'white'
    },
    SmallSquares : {
        borderColor : 'white',
        borderWidth : 2,
        height : 40,
        width : 40,
        borderRadius : 10,
        justifyContent : 'center',
        alignItems : 'center'
    }

}

export default TimeSquare;