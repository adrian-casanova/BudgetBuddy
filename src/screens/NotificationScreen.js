import React from 'react';
import {Text, View, Dimensions} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Constants} from 'expo';

var {height , width } = Dimensions.get('window');

class NotificationScreen extends React.Component{

    constructor(props){
        super(props);
        this.state = {
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

            PmbackgroundColorOne : '#2cfa7a',
            PmbackgroundColorTwo : '#2cfa7a',
            PmbackgroundColorThree : '#2cfa7a',
            PmbackgroundColorFour : '#2cfa7a',
            PmbackgroundColorFive : '#2cfa7a',
            PmbackgroundColorSix : '#2cfa7a',
            PmbackgroundColorSeven : '#2cfa7a',
            PmbackgroundColorEight : '#2cfa7a',
            PmbackgroundColorNine : '#2cfa7a',
            PmbackgroundColorTen : '#2cfa7a',
            PmbackgroundColorEleven : '#2cfa7a',
            PmbackgroundColorTwelve : '#2cfa7a',

            PmfontColorOne : 'white',
            PmfontColorTwo : 'white',
            PmfontColorThree : 'white',
            PmfontColorFour : 'white',
            PmfontColorFive : 'white',
            PmfontColorSix : 'white',
            PmfontColorSeven: 'white',
            PmfontColorEight : 'white',
            PmfontColorNine : 'white',
            PmfontColorTen : 'white',
            PmfontColorEleven : 'white',
            PmfontColorTwelve : 'white',
            
        }
    }

    timePressedAm(value){
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
                    fontColorThree : 'white'
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
    timePressedPm(value){
        switch(value) {
            case 1 : 
            if(this.state.PmbackgroundColorOne === '#2cfa7a'){
                this.setState({
                    PmbackgroundColorOne : 'white',
                    PmfontColorOne : 'green'
                })
            }else {
                this.setState({
                    PmbackgroundColorOne : '#2cfa7a',
                    PmfontColorOne : 'white'
                })
            }

            break;
            case 2 : 
            if(this.state.PmbackgroundColorTwo === '#2cfa7a'){
                this.setState({
                    PmbackgroundColorTwo : 'white',
                    PmfontColorTwo : 'green'
                })
            
            }else {
                this.setState({
                    PmbackgroundColorTwo : '#2cfa7a',
                    PmfontColorTwo : 'white',

                })
            }
            
            break;
          
            case 3 : 
            if(this.state.PmbackgroundColorThree === '#2cfa7a'){
                this.setState({
                    PmbackgroundColorThree : 'white',
                    PmfontColorThree : 'green'
                })
            }else {
                this.setState({
                    PmbackgroundColorThree : '#2cfa7a',
                    PmfontColorThree : 'white'
                })
            }
                
            break;
            case 4 :

            if(this.state.PmbackgroundColorFour === '#2cfa7a'){
            this.setState({
                PmbackgroundColorFour : 'white',
                PmfontColorFour : 'green'
            })
        }else {
            this.setState({
                PmbackgroundColorFour : '#2cfa7a',
                PmfontColorFour : 'white'
            })
        }
        break;
        case 5 : 
        if(this.state.PmbackgroundColorFive === '#2cfa7a'){
            this.setState({
                PmbackgroundColorFive : 'white',
                PmfontColorFive : 'green'
            })
        }else {
            this.setState({
                PmbackgroundColorFive : '#2cfa7a',
                PmfontColorFive : 'white'
            })
        }
    break;
        case 6 : 
        if(this.state.PmbackgroundColorSix === '#2cfa7a'){
            this.setState({
                PmbackgroundColorSix : 'white',
                PmfontColorSix : 'green'
            })
        }else {
            this.setState({
                PmbackgroundColorSix : '#2cfa7a',
                PmfontColorSix : 'white'
            })
        }
        break;
        case 7 : 
        if(this.state.PmbackgroundColorSeven === '#2cfa7a'){
            this.setState({
                PmbackgroundColorSeven : 'white',
                PmfontColorSeven : 'green'
            })
        }else {
            this.setState({
                PmbackgroundColorSeven : '#2cfa7a',
                PmfontColorSeven : 'white'
            })
        }
        case 8 : 
        if(this.state.PmbackgroundColorEight === '#2cfa7a'){
            this.setState({
                PmbackgroundColorEight : 'white',
                PmfontColorEight : 'green'
            })
        }else {
            this.setState({
                PmbackgroundColorEight : '#2cfa7a',
                PmfontColorEight : 'white'
            })
        }
         break;
         case 9 : 
         if(this.state.PmbackgroundColorNine === '#2cfa7a'){
            this.setState({
                PmbackgroundColorNine : 'white',
                PmfontColorNine : 'green'
            })
        }else {
            this.setState({
                PmbackgroundColorNine : '#2cfa7a',
                PmfontColorNine : 'white'
            })
        }
        break;
        case 10 : 
        if(this.state.PmbackgroundColorTen === '#2cfa7a'){
            this.setState({
                PmbackgroundColorTen : 'white',
                PmfontColorTen : 'green'
            })
        }else {
            this.setState({
                PmbackgroundColorTen: '#2cfa7a',
                PmfontColorTen : 'white'
            })
        }
        break;
        case 11 : 
        if(this.state.PmbackgroundColorEleven === '#2cfa7a'){
            this.setState({
                PmbackgroundColorEleven : 'white',
                PmfontColorEleven : 'green'
            })
        }else {
            this.setState({
                PmbackgroundColorEleven : '#2cfa7a',
                PmfontColorEleven : 'white'
            })
        }
        break;
        case 12 : 
        if(this.state.PmbackgroundColorTwelve === '#2cfa7a'){
            this.setState({
                PmbackgroundColorTwelve : 'white',
                PmfontColorTwelve : 'green'
            })
        }else {
            this.setState({
                PmbackgroundColorTwelve : '#2cfa7a',
                PmfontColorTwelve : 'white'
            })
        }
        break;
        }
     

    }


    render(){

        
        return(
    
        <View  style = {{paddingTop : Constants.statusBarHeight, alignItems : 'center', width : width - 40,
        alignSelf : 'center', height : height , justifyContent : 'center'}}>
            
            <View>
            <Animatable.Text animation = 'fadeIn'
            ref = {(ref) => {
                this.notificationText = ref
            }}
             style = {{fontSize : 40, textAlign : 'center', color : 'white',  }}>
                In what hours of the day would you like to be notified?
            </Animatable.Text>
            </View>
           
            <Animatable.View 
            ref = {(ref) => {
                this.amView = ref
            }}
            animation = 'fadeIn'
            style ={styles.ContainerStyle}>
            <View style = {{width : width - 40, alignItems : 'flex-start'}}>
            <Text style = {{color : 'white', fontSize : 24}}>
                AM
            </Text>
            </View>
            <View style ={{width : width - 40, height : 20.2
            ,
            backgroundColor : 'white', alignSelf :'center'}}/>
            <View style ={styles.SmallContainer}>
        <TimeSquare time = '12' onPress = {() => this.timePressedAm(12)} color = {this.state.backgroundColorTwelve} textColor = {this.state.fontColorTwelve} />
        <TimeSquare time = '1'   onPress = {() => this.timePressedAm(1)} color = {this.state.backgroundColorOne}  textColor = {this.state.fontColorOne}  />
        <TimeSquare time = '2'  onPress= {() => this.timePressedAm(2)} color = {this.state.backgroundColorTwo} textColor = {this.state.fontColorTwo} />
        <TimeSquare time = '3'  onPress = {() => this.timePressedAm(3)} color = {this.state.backgroundColorThree} textColor = {this.state.fontColorThree} />
        <TimeSquare time = '4'   onPress = {() => this.timePressedAm(4)} color = {this.state.backgroundColorFour} textColor = {this.state.fontColorFour} />
        <TimeSquare time = '5'   onPress = {() => this.timePressedAm(5)} color = {this.state.backgroundColorFive} textColor = {this.state.fontColorFive} />
     </View>
     <View style = {styles.SmallContainerTwo}>
     <TimeSquare time = '6'   onPress = {() => this.timePressedAm(6)} color = {this.state.backgroundColorSix} textColor = {this.state.fontColorSix} />
        <TimeSquare time = '7'  onPress = {() => this.timePressedAm(7)} color = {this.state.backgroundColorSeven} textColor = {this.state.fontColorSeven} />
        <TimeSquare time = '8'  onPress = {() => this.timePressedAm(8)} color = {this.state.backgroundColorEight} textColor = {this.state.fontColorEight} />
        <TimeSquare time = '9'  onPress = {() => this.timePressedAm(9)} color = {this.state.backgroundColorNine} textColor = {this.state.fontColorNine} />
        <TimeSquare time = '10'  onPress = {() => this.timePressedAm(10)} color = {this.state.backgroundColorTen} textColor = {this.state.fontColorTen} />
        <TimeSquare time = '11'   onPress = {() => this.timePressedAm(11)} color = {this.state.backgroundColorEleven} textColor = {this.state.fontColorEleven} />
     </View>
  </Animatable.View>  
  <Animatable.View 
  animation = 'fadeIn'
  ref = {(ref) => {
      this.pmView = ref
  }}
  style ={styles.ContainerStyle}>
            <View style = {{width : width - 40, alignItems : 'flex-start'}}>
            <Text style = {{color : 'white', fontSize : 24}}>
                PM
            </Text>
            </View>
            <View style ={{width : width - 40, height : 20.2
            ,
            backgroundColor : 'white', alignSelf :'center'}}/>
            <View style ={styles.SmallContainer}>
        <TimeSquare time = '12' onPress = {() => this.timePressedPm(12)} color = {this.state.PmbackgroundColorTwelve} textColor = {this.state.PmfontColorTwelve} />
        <TimeSquare time = '1'   onPress = {() => this.timePressedPm(1)} color = {this.state.PmbackgroundColorOne}  textColor = {this.state.PmfontColorOne}  />
        <TimeSquare time = '2'  onPress= {() => this.timePressedPm(2)} color = {this.state.PmbackgroundColorTwo} textColor = {this.state.PmfontColorTwo} />
        <TimeSquare time = '3'  onPress = {() => this.timePressedPm(3)} color = {this.state.PmbackgroundColorThree} textColor = {this.state.PmfontColorThree} />
        <TimeSquare time = '4'   onPress = {() => this.timePressedPm(4)} color = {this.state.PmbackgroundColorFour} textColor = {this.state.PmfontColorFour} />
        <TimeSquare time = '5'   onPress = {() => this.timePressedPm(5)} color = {this.state.PmbackgroundColorFive} textColor = {this.state.PmfontColorFive} />
     </View>
     <View style = {styles.SmallContainerTwo}>
     <TimeSquare time = '6'   onPress = {() => this.timePressedPm(6)} color = {this.state.PmbackgroundColorSix} textColor = {this.state.PmfontColorSix} />
        <TimeSquare time = '7'  onPress = {() => this.timePressedPm(7)} color = {this.state.PmbackgroundColorSeven} textColor = {this.state.PmfontColorSeven} />
        <TimeSquare time = '8'  onPress = {() => this.timePressedPm(8)} color = {this.state.PmbackgroundColorEight} textColor = {this.state.PmfontColorEight} />
        <TimeSquare time = '9'  onPress = {() => this.timePressedPm(9)} color = {this.state.PmbackgroundColorNine} textColor = {this.state.PmfontColorNine} />
        <TimeSquare time = '10'  onPress = {() => this.timePressedPm(10)} color = {this.state.PmbackgroundColorTen} textColor = {this.state.PmfontColorTen} />
        <TimeSquare time = '11'   onPress = {() => this.timePressedPm(11)} color = {this.state.PmbackgroundColorEleven} textColor = {this.state.PmfontColorEleven} />
     </View>
  </Animatable.View>  
               
            </View>
           
        );
    }
}


export default NotificationScreen;