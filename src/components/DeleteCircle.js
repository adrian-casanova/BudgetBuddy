import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const DeleteCircle = ({onPress}) => {
    return(
        <TouchableOpacity
            onPress = {onPress}
        style = {{
            height : 80, width : 80, backgroundColor : 'red',
            borderRadius : 40,
            justifyContent : 'center', alignItems : 'center'
        }}>
            <Text style = {{
                fontSize : 60, color : 'white',
                fontWeight : 'bold'
            }}>
                x
            </Text>
        </TouchableOpacity>
    );
}



export default DeleteCircle;