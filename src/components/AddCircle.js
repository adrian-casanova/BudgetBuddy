import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const AddCircle = ({onPress}) => {
    return(
        <TouchableOpacity
            onPress = {onPress}
        style = {{
            height : 80, width : 80, backgroundColor : '#2cfa7a',
            borderRadius : 40,
            justifyContent : 'center', alignItems : 'center'
        }}>
            <Text style = {{
                fontSize : 60, color : 'white',
                fontWeight : 'bold'
            }}>
                +
            </Text>
        </TouchableOpacity>
    );
}



export default AddCircle;