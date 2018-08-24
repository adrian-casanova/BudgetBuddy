import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const AddCircle = ({onPress}) => {
    return(
        <TouchableOpacity
            onPress = {onPress}
        style = {{
            height : 80, width : 80, backgroundColor : 'white',
            borderRadius : 40,
            justifyContent : 'center', alignItems : 'center'
        }}>
            <Text style = {{
                fontSize : 40, color : 'green',
                fontWeight : 'bold'
            }}>
                +
            </Text>
        </TouchableOpacity>
    );
}



export default AddCircle;