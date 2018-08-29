import React from 'react';
import {Text,View, Dimensions, TextInput} from 'react-native';


var {height, width} = Dimensions.get('window')
class ExpenseContainer extends React.Component{
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
                <Text style = {styles.TextStyle}>
                    {this.props.expensesCost}
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
        justifyContent : 'space-between',
        alignItems : 'center',
        flexDirection : 'row',
        padding : 15,
        top : '2%'
    

    },
    TextStyle : {
        fontSize : 24,
        color : 'white'
    }

}

export default ExpenseContainer;





