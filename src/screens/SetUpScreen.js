import React from 'react';
import {Text,View, Dimensions, TextInput, TouchableOpacity,
     KeyboardAvoidingView, AsyncStorage, Modal, Platform} from 'react-native';
import {Constants, Notifications, Permissions} from 'expo';
import GestureHandler from 'react-native-swipe-gestures';
import Icons from '@expo/vector-icons/Ionicons'
import * as Animatable from 'react-native-animatable'
import PageSlider from '../components/PageSlider'
import TimeSquare from '../components/TimeSquare'
import AddCircle from '../components/AddCircle';
import MonthlyExpenses from './MonthlyExpenses';
import {clearKeys} from '../helpers/helpers'
var {height , width} = Dimensions.get('window');
class SetUpScreen extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            setUpOne : true,
            setUpTwo : false,
            setUpThree : false,
            budget : null,
            circleOne : '#6666ff',
            circleTwo : 'white',
            circleThree : 'white',
            daysLeft : null,
            month : null,
            daysInMonth : null,
            showExpensesModal : false,
            expenseDescription : '',
            expenseCost : '',
            rentCost : '',
            billsCost : '',
            savingsCost : '',
            totalExpenses : 0,
            monthlyIncome : '',
            moneyLeft : 0
           
            
        }
    }

async storeDailyBudget(value){
    try {
        await AsyncStorage.setItem('DailyBudget', value);
    }
    catch(error){
        console.log(error)
    }
}



  async  componentWillMount() {
       await this.getDate();
       clearKeys();
   
        // this.showNotifications();
       
        console.log(this.state.daysLeft)
    }

    async showNotifications(time){
       const {status} = await  Permissions.askAsync(Permissions.NOTIFICATIONS)
        
            if(status !== 'granted'){
                alert('Please allow app to use notifications')
            }

        let localNotification = {title : 'Budget Buddy', body : "Hey! Don't forget to update you expenses!"};
       let t = new Date();
       t.setSeconds(t.getSeconds() + 10);
       const schedulingOptions = {
           time : t,
           repeat : 'day' 
       }
       
        Notifications.scheduleLocalNotificationAsync(
          localNotification, schedulingOptions );
          
        
        // await Notifications.scheduleLocalNotificationAsync()
    }

    _storeDataOld = async (key, value) => {
        let dailyBudget = value.toString();
      try{
        await AsyncStorage.setItem(key, dailyBudget);
        
      }
      catch(error){
          console.log(error);
      }
    }

    _storeData = async (key, value) => {
        
        try {
            await AsyncStorage.setItem(key, value);
        }
        catch(error){
            console.log(error)
        }
    }

    showExpensesModal(){
        return(
        <Modal
            visible = {this.state.showExpensesModal}
            onRequestClose = {() => {
                this.setState({
                    showExpensesModal : false
                })
            }}
            animationType = 'slide'
            transparent = {true}
        >
        <View style = {{
            height : height - 100,
            width : width - 40, alignSelf : 'center',
           justifyContent : 'center',
           alignItems : 'center',
          
        }}>
            <View style = {{height : 100, width : width - 80,
            backgroundColor : 'white', borderRadius : 30, justifyContent : 'center',
            alignItems : 'center'}}>
                <TextInput 
                    value = {this.state.expenseDescription}
                    onChangeText = {(text) => {
                        this.setState({
                            expenseDescription : text
                        })
                    }}
                    placeholder = 'Description'
                    style = {{
                        fontSize : 36,
                        width : width - 100,
                        textAlign : 'center'
                    }}
                />
            </View>
            <View style = {{height : 50, width : width - 80,
            backgroundColor : 'white', borderRadius : 20, justifyContent : 'center',
            alignItems : 'center', top : '2%'}}>
                <TextInput 
                    value = {this.state.expenseCost}
                    onChangeText = {(text) => {
                        this.setState({
                            expenseCost : text
                        })
                    }}
                    placeholder = 'Cost'
                    style = {{
                        fontSize : 36,
                        width : width - 100,
                        textAlign : 'center'
                    }}
                />
            </View>
        </View>

        </Modal>
        );
    }

    _storeDailyBudget = async (value) => {
        let month = this.state.month;
        let daysInMonth = this.state.daysInMonth;
        console.log(daysInMonth);
        let dailyBudget = value.toString();
        console.log(dailyBudget);
        for (i = 1; i <= daysInMonth; i++){
            let key = i.toString();
            let realKey =  month.toString() + key;
            
            try {
                await AsyncStorage.setItem(realKey, dailyBudget);
            }
            catch(error){
                console.log(error);
            }
        }
     
        
    }

    onSwipeLeftOne(gestureState){
        this.setState({
            setUpTwo : true,
            circleOne : 'white',
            circleTwo : '#6666ff'
        })
    }

    onSwipeRightTwo(gestureState){
        this.setState({
            setUpTwo : false,
            circleOne : '#6666ff',
            circleTwo : 'white'
        })
    }
    onSwipeLeftTwo(gestureState){
       
       
        this.setState({
            setUpThree : true,
            circleOne : 'white',
            circleTwo : 'white',
            circleThree : '#6666ff',
            
        })

    }

    onSwipeRightThree(gestureState){
        this.setState({
            setUpThree : false,
            circleThree : 'white',
            circleTwo : '#6666ff'
        })
    }
    onSwipeLeftThree(gestureState){
        this.props.navigation.navigate('MainScreen')
    }

    daysInMonth(month, year){
        return new Date(year, month, 0).getDate();
    }


    getDate(){
        let date = new Date();
        let month = date.getMonth();
        let year = date.getFullYear();
        let day = date.getDate();
        let daysinMonth = this.daysInMonth(month, year);
        let daysleft = daysinMonth - day;
        this.setState({
            daysLeft : daysleft,
            month : month,
            daysInMonth : daysinMonth
        })

    }

     calculateDailyBudget(){
        let totalExpenses = this.state.totalExpenses;
        let monthlyIncome = parseInt(this.state.monthlyIncome);
        let moneyLeft = monthlyIncome - totalExpenses;
        let daysLeft = this.state.daysLeft;
        let dailyBudget = Math.floor(moneyLeft / daysLeft);
        this.setState({
            budget : dailyBudget.toString()
        })
        
    }

    conditionalRendering(){
        const {setUpOne, setUpTwo, setUpThree} = this.state;

        if(setUpOne === true && setUpTwo === false && setUpThree === false){
            return(
            <GestureHandler
            onSwipeLeft = {async (state) => {
              this.welcomeText.fadeOut(200);
              await   this.getStarted.fadeOut(200);
              
               this.onSwipeLeftOne(state)
            
            }}
            style = {{paddingTop : Constants.statusBarHeight, alignItems : 'center', width : width - 40,
            alignSelf : 'center', height : height - 40, justifyContent : 'space-evenly'}}>
                
                <Animatable.Text animation = 'fadeIn'
                ref = {(ref) => {
                    this.welcomeText = ref;
                }}
                 style = {{fontSize : 50, textAlign : 'center', color : 'white' }}>
                    Welcome To BudgetBuddy
                </Animatable.Text>
          
                <Animatable.Text animation = 'fadeIn'
                ref = {(ref) => {
                    this.getStarted = ref;
                }}
                style = {{fontSize : 32, textAlign : 'center' , color : 'white'}}>
                    Lets get started with a few questions
                </Animatable.Text>
                </GestureHandler>
            )
        }
        else if(setUpOne === true && setUpTwo === true && setUpThree === false){
            return(
                <GestureHandler 
                onSwipeRight = {async (state) => {
                 
                        this.monthlyBudget.fadeOut(400);
                        await this.budgetView.fadeOut(400);
                        this.onSwipeRightTwo(state);
       
                   
                }}
                onSwipeLeft = {async (state) => {
                    if(this.state.monthlyIncome !== null){
                    
                    
                   this._storeData('Monthly Income', this.state.monthlyIncome);
                    
                    
                    this.monthlyBudget.fadeOut(400);
                    await this.budgetView.fadeOut(400);
                    this.onSwipeLeftTwo(state)
                    }else {
                        alert('Please Fill Out Your Monthly Income!')
                    }
                }}

                >
            <KeyboardAvoidingView behavior = 'padding' style = {{paddingTop : Constants.statusBarHeight, alignItems : 'center', width : width - 40,
            alignSelf : 'center', height : height - 40, justifyContent : 'space-between'}}>
                
                <View>
                <Animatable.Text animation = 'fadeIn'
                ref = {(ref) => {
                    this.monthlyBudget = ref;
                }}
                 style = {{fontSize : 50, textAlign : 'center', color : 'white', top : '25%' }}>
                    What is your monthly income?
                </Animatable.Text>
                </View>
                   
                    <Animatable.View 
                    ref = {(ref) => {
                        this.budgetView = ref;
                    }}
                    animation = 'fadeIn'
                    style = {{backgroundColor : 'white', width : width /  2, height : 100, 
                    borderRadius : 40, justifyContent :'center', alignItems :'center', bottom : '15%'}}>

                        <TextInput 
                        value ={this.state.budget}
                        placeholder = '$0'
                        keyboardType = 'number-pad'
                        returnKeyType = 'done'
                        underlineColorAndroid = 'transparent'
                        onChangeText = {(text) => {
                            this.setState({
                                monthlyIncome : text
                            })
                        }}
                        style = {{ textAlign : 'center', fontSize : 40, width : width - 50}}
                            />
                    </Animatable.View>
                   
                </KeyboardAvoidingView>
                </GestureHandler>
            )
        }
        else if(setUpOne === true && setUpTwo === true && setUpThree === true){
            return(
            
                  <MonthlyExpenses text = 'Water' expensesCost = {'$' + 246} />
               
            );
        }

    }
    render(){
        return(
            <View style = {{height : height, width : width,
            alignItems : 'center',
            backgroundColor : '#2cfa7a',  }}>
               {this.conditionalRendering()}
               <PageSlider 
                circleOne = {this.state.circleOne}
                circleTwo = {this.state.circleTwo}
                circleThree = {this.state.circleThree}
               />
               </View>
        );
    }
}

const styles = {
    ContainerStyle:{
        height : '30%',
        width : width ,
        alignItems : 'center',
        justifyContent : 'center'
    },
    timeStyle : {
        fontSize : 24, 
        color : 'green'
    },
    SmallContainer : {
        height : '25%',
        flexDirection : 'row',
        justifyContent : 'space-evenly',
        width : width - 10,
        alignSelf : 'center',
        top : '5%'

    },
    SmallContainerTwo : {
        height : '15%',
        flexDirection : 'row',
        justifyContent : 'space-evenly',
        width : width - 10,
        alignSelf : 'center',
        top : '5%'

    },
    SmallSquares : {
        backgroundColor : 'white',
        height : 50,
        width : 50,
        borderRadius : 10,
        justifyContent : 'center',
        alignItems : 'center'
    }
}

export default SetUpScreen;