import React from 'react';
import {Text, View, Dimensions} from 'react-native';
import {Constants} from 'expo';

var {height, width} = Dimensions.get('window');
class Settings extends React.Component {
    
    render(){
        return(
            <View style = {{
                height : height,
                width : width,
                backgroundColor : '#3ba357',
                justifyContent : 'center'
            }}>
                <View style = {{
                    height : height - Constants.statusBarHeight,
                    width : width
                }}>
                     <Text>
                    Hello From Settings
                </Text>
                </View>
               
            </View>
        );
    }
}

export default Settings;