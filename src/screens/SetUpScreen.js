import React from 'react';
import {Text,View, Dimensions, TextInput, TouchableOpacity,
     KeyboardAvoidingView, AsyncStorage} from 'react-native';
import {Constants, Notifications, Permissions} from 'expo';
import GestureHandler from 'react-native-swipe-gestures';
import Icons from '@expo/vector-icons/Ionicons'
import * as Animatable from 'react-native-animatable'
import PageSlider from '../components/PageSlider'
import TimeSquare from '../components/TimeSquare'
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
            backgroundColorOne : '#2cfa7a',
            backgroundColorTwo : '#2cfa7a',
            backgroundColorThree : '#2cfa7a',
            backgroundColorFour : '#2cfa7a',
            backgroundColorFive : '#2cfa7a',
            backgroundColorSix : '#2cfa7a',
            backgroundColorSeven : '#2cfa7a',
            backgroundColorEight : '#2cfa7a',
            backgroundColorNine : '#2cfa7a',
            backgroundColorTen : '#2cfa7a',
            backgroundColorEleven : '#2cfa7a',
            backgroundColorTwelve : '#2cfa7a',

            fontColorOne : 'white',
            fontColorTwo : 'white',
            fontColorThree : 'white',
            fontColorFour : 'white',
            fontColorFive : 'white',
            fontColorSix : 'white',
            fontColorSeven: 'white',
            fontColorEight : 'white',
            fontColorNine : 'white',
            fontColorTen : 'white',
            fontColorEleven : 'white',
            fontColorTwelve : 'white',
            
            
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
       await console.log(AsyncStorage.getAllKeys());
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

    _storeData = async (key, value) => {
        let dailyBudget = value.toString();
      try{
        await AsyncStorage.setItem(key, dailyBudget);
        
      }
      catch(error){
          console.log(error);
      }
    }

    _storeDailyBudget = async (value) => {
        let month = this.state.month;
        let daysInMonth = this.state.daysInMonth;
        let dailyBudget = value.toString();
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

    timePressed(value){
        switch(value) {
            case 1 : 
            if(this.state.backgroundColorOne === '#2cfa7a'){
                this.setState({
                    backgroundColorOne : 'white',
                    fontColorOne : 'green'
                })
            }else {
                this.setState({
                    backgroundColorOne : '#2cfa7a',
                    fontColorOne : 'white'
                })
            }

            break;
            case 2 : 
            if(this.state.backgroundColorTwo === '#2cfa7a'){
                this.setState({
                    backgroundColorTwo : 'white',
                    fontColorTwo : 'green'
                })
            
            }else {
                this.setState({
                    backgroundColorTwo : '#2cfa7a',
                    fontColorTwo : 'white',

                })
            }
            
            break;
          
            case 3 : 
            if(this.state.backgroundColorThree === '#2cfa7a'){
                this.setState({
                    backgroundColorThree : 'white',
                    fontColorThree : 'green'
                })
            }else {
                this.setState({
                    backgroundColorThree : '#2cfa7a',
                    fontColorFour : 'white'
                })
            }
                
            break;
            case 4 :

            if(this.state.backgroundColorFour === '#2cfa7a'){
            this.setState({
                backgroundColorFour : 'white',
                fontColorFour : 'green'
            })
        }else {
            this.setState({
                backgroundColorFour : '#2cfa7a',
                fontColorFour : 'white'
            })
        }
        break;
        case 5 : 
        if(this.state.backgroundColorFive === '#2cfa7a'){
            this.setState({
                backgroundColorFive : 'white',
                fontColorFive : 'green'
            })
        }else {
            this.setState({
                backgroundColorFive : '#2cfa7a',
                fontColorFive : 'white'
            })
        }
    break;
        case 6 : 
        if(this.state.backgroundColorSix === '#2cfa7a'){
            this.setState({
                backgroundColorSix : 'white',
                fontColorSix : 'green'
            })
        }else {
            this.setState({
                backgroundColorSix : '#2cfa7a',
                fontColorSix : 'white'
            })
        }
        break;
        case 7 : 
        if(this.state.backgroundColorSeven === '#2cfa7a'){
            this.setState({
                backgroundColorSeven : 'white',
                fontColorSeven : 'green'
            })
        }else {
            this.setState({
                backgroundColorSeven : '#2cfa7a',
                fontColorSeven : 'white'
            })
        }
        case 8 : 
        if(this.state.backgroundColorEight === '#2cfa7a'){
            this.setState({
                backgroundColorEight : 'white',
                fontColorEight : 'green'
            })
        }else {
            this.setState({
                backgroundColorEight : '#2cfa7a',
                fontColorEight : 'white'
            })
        }
         break;
         case 9 : 
         if(this.state.backgroundColorNine === '#2cfa7a'){
            this.setState({
                backgroundColorNine : 'white',
                fontColorNine : 'green'
            })
        }else {
            this.setState({
                backgroundColorNine : '#2cfa7a',
                fontColorNine : 'white'
            })
        }
        break;
        case 10 : 
        if(this.state.backgroundColorTen === '#2cfa7a'){
            this.setState({
                backgroundColorTen : 'white',
                fontColorTen : 'green'
            })
        }else {
            this.setState({
                backgroundColorTen: '#2cfa7a',
                fontColorTen : 'white'
            })
        }
        break;
        case 11 : 
        if(this.state.backgroundColorEleven === '#2cfa7a'){
            this.setState({
                backgroundColorEleven : 'white',
                fontColorEleven : 'green'
            })
        }else {
            this.setState({
                backgroundColorEleven : '#2cfa7a',
                fontColorEleven : 'white'
            })
        }
        break;
        case 12 : 
        if(this.state.backgroundColorTwelve === '#2cfa7a'){
            this.setState({
                backgroundColorTwelve : 'white',
                fontColorTwelve : 'green'
            })
        }else {
            this.setState({
                backgroundColorTwelve : '#2cfa7a',
                fontColorTwelve : 'white'
            })
        }
        break;
        }
     

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
                    if(this.state.budget !== null){
                    
                    let dailyBudget = Math.floor(this.state.budget / this.state.daysLeft)
                    this._storeDailyBudget(dailyBudget);
                    console.log(dailyBudget)
                    
                    this.monthlyBudget.fadeOut(400);
                    await this.budgetView.fadeOut(400);
                    this.onSwipeLeftTwo(state)
                    }else {
                        alert('Please Fill Out A Budget!')
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
                    What is your monthly budget?
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
                        placeholder = '$'
                        keyboardType = 'number-pad'
                        onChangeText = {(text) => {
                            this.setState({
                                budget : text
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
                <GestureHandler 
                onSwipeRight = {async (state) => {
                    await this.notificationText.fadeOut(400)
                    this.onSwipeRightThree(state)
                }}
                onSwipeLeft = {async (state) => {
                    await this.notificationText.fadeOut(400);
                    this.onSwipeLeftThree(state);
                }}
                >
            <View behavior = 'padding' style = {{paddingTop : Constants.statusBarHeight, alignItems : 'center', width : width - 40,
            alignSelf : 'center', height : height - 40, justifyContent : 'space-between'}}>
                
                
                <Animatable.Text animation = 'fadeIn'
                ref = {(ref) => {
                    this.notificationText = ref
                }}
                 style = {{fontSize : 40, textAlign : 'center', color : 'white', top : '25%' }}>
                    In what hours of the day would you like to be notified?
                </Animatable.Text>
               
                <View style ={styles.ContainerStyle}>
                <View style = {{width : width - 40, alignItems : 'flex-start'}}>
                <Text style = {{color : 'white', fontSize : 24}}>
                    AM
                </Text>
                </View>
                <View style ={{width : width - 40, height : 20.2
                ,
                backgroundColor : 'white', alignSelf :'center'}}/>
                <View style ={styles.SmallContainer}>
            <TimeSquare time = '12' onPress = {() => this.timePressed(12)} color = {this.state.backgroundColorTwelve} textColor = {this.state.fontColorTwelve} />
            <TimeSquare time = '1'   onPress = {() => this.timePressed(1)} color = {this.state.backgroundColorOne}  textColor = {this.state.fontColorOne}  />
            <TimeSquare time = '2'  onPress= {() => this.timePressed(2)} color = {this.state.backgroundColorTwo} textColor = {this.state.fontColorTwo} />
            <TimeSquare time = '3'  onPress = {() => this.timePressed(3)} color = {this.state.backgroundColorThree} textColor = {this.state.fontColorThree} />
            <TimeSquare time = '4'   onPress = {() => this.timePressed(4)} color = {this.state.backgroundColorFour} textColor = {this.state.fontColorFour} />
            <TimeSquare time = '5'   onPress = {() => this.timePressed(5)} color = {this.state.backgroundColorFive} textColor = {this.state.fontColorFive} />
         </View>
         <View style = {styles.SmallContainerTwo}>
         <TimeSquare time = '6'   onPress = {() => this.timePressed(6)} color = {this.state.backgroundColorSix} textColor = {this.state.fontColorSix} />
            <TimeSquare time = '7'  onPress = {() => this.timePressed(7)} color = {this.state.backgroundColorSeven} textColor = {this.state.fontColorSeven} />
            <TimeSquare time = '8'  onPress = {() => this.timePressed(8)} color = {this.state.backgroundColorEight} textColor = {this.state.fontColorEight} />
            <TimeSquare time = '9'  onPress = {() => this.timePressed(9)} color = {this.state.backgroundColorNine} textColor = {this.state.fontColorNine} />
            <TimeSquare time = '10'  onPress = {() => this.timePressed(10)} color = {this.state.backgroundColorTen} textColor = {this.state.fontColorTen} />
            <TimeSquare time = '11'   onPress = {() => this.timePressed(11)} color = {this.state.backgroundColorEleven} textColor = {this.state.fontColorEleven} />
         </View>
      </View>  
                 
                   
                </View>
                </GestureHandler>
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
        height : '60%',
        width : width ,
        alignItems : 'center',
        justifyContent : 'center'
    },
    timeStyle : {
        fontSize : 24, 
        color : 'green'
    },
    SmallContainer : {
        height : '15%',
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