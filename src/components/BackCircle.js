import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icons from '@expo/vector-icons/Ionicons'
const BackCircle = ({onPress}) => {
    return(
        <TouchableOpacity
            onPress = {onPress}
        style = {{
            height : 80, width : 80, borderWidth : 4,
            borderColor : '#2cfa7a',
            borderRadius : 40,
            justifyContent : 'center', alignItems : 'center'
        }}>
           <Icons 
           name = 'ios-arrow-back' size = {60} color = '#2cfa7a'
           />
        </TouchableOpacity>
    );
}



export default BackCircle;