import React from 'react';
import {Text,View, Dimensions, TextInput} from 'react-native';


var {height, width} = Dimensions.get('window')
class GenExpenseContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <View style = {styles.ContainerStyle}>
                <Text style = {styles.TextStyle}>
                  {this.props.text}  
                </Text>
            </View>
        );
    }
}

const styles = {
    ContainerStyle :{
        width : width - 40,
        height : 70,
        backgroundColor : '#2cfa7a',
        borderRadius : 20,
        justifyContent : 'center',
        alignItems : 'center',
        
        
    

    },
    TextStyle : {
        fontSize : 24,
        color : 'white'
    }

}

export default GenExpenseContainer;





