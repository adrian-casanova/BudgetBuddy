import React from 'react';
import {Text,View, Dimensions, AsyncStorage,Modal, TextInput,
TouchableOpacity} from 'react-native';
import {Constants} from 'expo'
import Icons from '@expo/vector-icons/Ionicons'
var {height , width} = Dimensions.get('window');
var monthsDatabase = ['January','February','March', 'April',
'May', 'June','July','August','September', 'October','November','December']
class MainScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            budget : null,
            date : null,
            currentDay : null,
            showBeginningModal : false,
            month : null,
            change : '',
            key : ''
        }
    }

  async  componentWillMount(){
    await this.getDate();
        this._retrieveDailyBudget();
     
            this.checkIfBeginningOfMonth();
    }

    _retrieveDailyBudget = async () => {
        let month = this.state.month;
        let day = this.state.currentDay;
        let key = month.toString() + day.toString();
        try {
         const value = await AsyncStorage.getItem(key);
         if(value !== null){
             this.setState({
                 budget : value,
                 key : key
             })
         }
        }
        catch(error){
            console.log(error);
        }

    }

    _updateDailyBudget = async () => {
        let key = this.state.key;
        let budget = this.state.budget.toString()
        try {
            await AsyncStorage.setItem(key, budget);
        }
        catch(error){
            console.log(erorr)
        }
    }

    checkIfBeginningOfMonth(){
        if(this.state.currentDay === 22){
            this.setState({
                showBeginningModal : true
            })
        }else {
            return;
        }
    }

    daysInMonth(month, year){
        return new Date(year, month, 0).getDate();
    }
    getDate(){
        let date = new Date();
        let year = date.getFullYear();
        let day = date.getDate();
        let month = date.getMonth() 
        let fullDate = monthsDatabase[month] + ' ' + day + ', ' + year;
        
        this.setState({
            date : fullDate,
            currentDay : day,
            month : month
        })
    }
    //This Functions runs when the beginning of month starts in order to set a budget
    NewStartModal(){
        return(
            <Modal
                visible = {this.state.showBeginningModal}
                onRequestClose = {() => {
                    this.setState({
                        showBeginningModal : false
                    })
                }}
                animationType = 'slide'
                transparent = {true}

            >
                <Text>
                    Hello From Modal
                </Text>

            </Modal>
        )
    }

    //When Minus Button is pressed this reduces the daily budget
    async reducedBuget(){
        let budget = this.state.budget;
        let change = this.state.change;
        let newBudget = budget - change;
      await  this.setState({
            budget : newBudget,
            change : ''
        })
        this._updateDailyBudget();
    }
//When the Plus Button is pressed this increases the budget
  async addToBudget(){
        let budget = parseInt(this.state.budget);
        let change = parseInt(this.state.change);
        let newBudget = budget + change;
     await   this.setState({
            budget : newBudget,
            change : ''
        })
        this._updateDailyBudget();


    }

    goToSettings() {
        this.props.navigation.navigate('Settings')
    }

    render(){
        return(
            <View style = {{height : height, width :width, backgroundColor : '#3ba357',
            alignItems : 'center' }}>
                
                <View style  = {{paddingTop : Constants.statusBarHeight, width : width - 40,
                top : '5%',
                alignSelf : 'center', height : 100, flexDirection : 'row', justifyContent : 'space-evenly'}}>
                    <TouchableOpacity onPress = {this.addToBudget.bind(this)}>
                    <Icons 
                        name = 'ios-add-circle' size = {50} color = 'white'
                    /> 
                    </TouchableOpacity>
                    <View 
                    style = {{backgroundColor : 'white',
                     width : width / 2.5, height : 50, borderRadius : 25,
                    justifyContent : 'center',
                alignItems : 'center'}}
                    >
                    <TextInput 
                        style = {{
                            fontSize : 24,
                            textAlign :'center',
                            width : width / 2.5
                        }}
                        value = {this.state.change}
                        onChangeText = {(change) => {
                            this.setState({
                                change : change
                            })
                        }}
                        placeholder = '$'

                    />
                    </View>
                    <TouchableOpacity
                    onPress = {this.reducedBuget.bind(this)}
                    >
                    <Icons 
                        name = 'ios-remove-circle' size = {50} color = 'white'
                    /> 
                    </TouchableOpacity>

                </View>
                    <View style = {{
                        top : '5%',
                        width : width, alignItems : 'center'
                    }}>
                    <Text style = {{
                        color : 'white',
                        fontSize : 24
                    }}>
                        {this.state.date}
                    </Text>
                    </View>
                 <View style = {{height : height / 2 , width : width, alignItems : 'center', justifyContent : 'center'}}>  
                <Text style = {{fontSize : 130, color : 'white'}}>
                   ${this.state.budget}
                </Text>
                </View> 
                <TouchableOpacity style = {{
                    width : width, alignSelf : 'center'
                }}
                onPress = {this.goToSettings.bind(this)}
                >
                <Text style = {{fontSize : 40, color : 'white', 
            textAlign : 'center' }}>
                    Settings
                </Text>
                </TouchableOpacity>
               
            </View>
        );
    }
}


export default MainScreen;