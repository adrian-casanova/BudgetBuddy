import React from 'react';
import {AsyncStorage} from 'react-native'
import {createStackNavigator} from 'react-navigation'
import SetUpScreen from './src/screens/SetUpScreen';
import MainScreen from './src/screens/MainScreen';
import Settings from './src/screens/Settings';


export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      budget : null,
      currentDay : null,
      month : null,
    }
  }

  _retrieveData = async () => {
    let month = this.state.month;
    let day = this.state.currentDay;
    let key = month.toString() + day.toString()
    try {
     const value = await AsyncStorage.getItem(key);
      if(value !== null){
        this.setState({
          budget : value
        })
      }
    } catch (error) {
      console.log(error);
    }
  }
  getDate(){
    let date = new Date();

    let day = date.getDate();
    let month = date.getMonth() 
  
    
    this.setState({
       
        currentDay : day,
        month : month
    })
}

  async componentWillMount(){
    await this.getDate();
    
    this._retrieveData()
  }

  conditionalRendering(){
    if(this.state.budget !== null){
      return(
        <AuthStack />
      )
    }else {
      return(
        <RootStack />
      )
    }
  }

  render() {
    return (
     <RootStack />
    );
  }
}

const RootStack = createStackNavigator({
  SetUpScreen : SetUpScreen,
  MainScreen : MainScreen
    
  
},
{
  navigationOptions : {
    header : null,
    
  },

})

const AuthStack =  createStackNavigator({
  MainScreen : MainScreen,
  SetUpScreen : SetUpScreen,
  Settings : Settings
  
    
  
},
{
  navigationOptions : {
    header : null,
    
  },

})


