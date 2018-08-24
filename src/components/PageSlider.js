import React from 'react';
import {View, Dimensions} from 'react-native';


var {height, width} = Dimensions.get('window');
const PageSlider = ({circleOne, circleTwo,circleThree, circleFour}) => {
    return(
        <View style = {{
            position : 'absolute',
            top : '90%',
            
            width : width / 3, flexDirection : 'row', justifyContent : 'space-evenly', bottom : '10%'}}>
            <View  style = {{width : 17, height : 17, borderRadius : 8.5, backgroundColor : circleOne}}/>
            <View  style = {{width : 17, height : 17, borderRadius : 8.5, backgroundColor : circleTwo}}/>
            <View  style = {{width : 17, height : 17, borderRadius : 8.5, backgroundColor : circleThree}}/>
            <View  style = {{width : 17, height : 17, borderRadius : 8.5, backgroundColor : circleFour}}/>
        </View>
    );
}

export default PageSlider;