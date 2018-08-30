import React from 'react';
import {Dimensions, View , TextInput, Text, AsyncStorage} from 'react-native';
import BackCircle from './BackCircle';
import AddCircle from './AddCircle';
import DeleteCircle from './DeleteCircle';
var {height, width } = Dimensions.get('window');
 class FormattedInput extends React.Component {
    constructor(props) {
      super(props);
      
      
      
      this.state = {
        value: '0',
      };
    }
    
    async setItem(key, value){
        try{
            await AsyncStorage.setItem(key, value)
        }
        catch(error){
            console.log(error)
        }
    }
    
    AddExpense(){
        
    }
    

    
    formatValue(value) {
      return (parseFloat(value) / 100);
    }
    
    render() {
      return (
        <View style = {{height : '50%'}}>
        <View style = {styles.ContainerStyle}>
        <Text style = {styles.TextStyle}>
          {this.props.selectedExpense}
        </Text>
        {/*This is the Text Box for Cost------------------------------------*/}
        <View style = {{
            backgroundColor : 'white',
            height : '100%',
            width : '40%',
            borderRadius : 20,
            justifyContent : 'center',
            alignItems : 'center'
        }}>
         <Text style = {{
              fontSize : 18,
             color : '#2cfa7a'
          }}> ${this.formatValue(this.state.value)} 
          </Text>
        
        </View>
    </View>
    <View
    style  = {{
        width : width - 40,
        flexDirection : 'row',
        justifyContent : 'space-evenly',
        alignItems : 'center',
        top : '10%'
    }}
    >
    <BackCircle onPress = {this.props.backCirclePress} />
    <AddCircle onPress = {() => {
        this.setItem(this.props.selectedExpense, this.state.value)}
    }/>
   

    </View>
    
       
         
         
          
         <View style = {{top : '100%'}}>
        <TextInput
          
          
          keyboardType = 'numeric'
          autoFocus = {true}
          clearTextOnFocus = {true}
           onChangeText = {(text) => {
               if(text === ''){
                   this.setState({
                       value : '0'
                   })
               }else {
                this.setState({
                    value : text
                })
               }
                
           }}
            value={this.state.value}
            maxLength = {6}
          />
       </View>
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

  export default FormattedInput;
  