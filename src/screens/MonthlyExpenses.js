import React from 'react';
import {Text, View, Dimensions, AsyncStorage, FlatList, ScrollView,
    TouchableOpacity, Modal, TextInput
} from 'react-native';
import {Constants} from 'expo';
import ExpenseContainer from '../components/ExpenseContainer';
import AddCircle from '../components/AddCircle';
import * as Animatable from 'react-native-animatable'
import GenExpenseContainer from '../components/GenExpenseContainer'
import FormattedInput from '../components/FormattedInput'
 


var listOfExpenses = [];
var {height, width} = Dimensions.get('window');
class MonthlyExpenses extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showModal : false,
            listOfExpenses : null,
             generalExpense : [{'Expense' :'Water'},
             {'Expense' :'Entertainment'}, 
             {'Expense' :'Rent'}, 
             {'Expense' :'Light'},
             {'Expense' :'Transportation'},
             {'Expense' :'Shopping'},
             {'Expense' : 'Food'},
             {'Expense' : 'Gasoline'},
            {'Expense' : 'Subscriptions'}],
            expenseSelected : null,
            expenseCost : '00.00',
            keys : []

        }
    }

   async componentWillMount(){
        await this._retrieveAllKeys();
    }

    _retrieveAllKeys = async(key) => {
        try{
            let value = await AsyncStorage.getAllKeys();
            this.setState({
                keys : value
            })
            console.log(value)
        }catch(error){
            console.log(error)
        }
    }

    _retrieveData = async (key) => {
        try{
            let value = await AsyncStorage.getItem(key)
            if(value !== null){
                this.setState({

                })
            }
        }
        catch(error){
            console.log(error)
        }
    }




    goBack() {
        this.setState({
            showModal : false
        })
    }

    conditionalLoading(){
        if(this.state.keys.length < 2){
            return(
                <Animatable.View 
                animation = 'fadeIn'
                style = {styles.ContainerStyle}>
                    {/* <View style ={styles.AddCircleStyle}>
                        <AddCircle />
                    </View> */}
                    {this.showModal()}
                    <Text style = {styles.TextStyle}>
                        Select Monthly Expense
                    </Text>
                  
    
                    <View style = {styles.LineView} />
                 
                    <FlatList
                
                data = {this.state.generalExpense}
                keyExtractor = {(item, index) => item.Expense}
                renderItem = {({item}) => (
                   <TouchableOpacity style ={styles.ExpensesView} 
                  
                  
                   onPress = {() => {
                      
                       this.setState({
                           expenseSelected : item.Expense,
                           showModal : true
                       })
                   }}>
                    <GenExpenseContainer  text = {item.Expense}/>
                    </TouchableOpacity>
                   
                )}
                />
                
                </Animatable.View>
            )
        }
    }

    showModal(){
        
        return(
        <Modal
        visible = {this.state.showModal}
        onRequestClose = {() => {
            this.setState({
                showModal : false
            })
        }}
        transparent = {false}
        animationType = 'slide'
        >
            <View style = {{flex : 1, backgroundColor : 'white', alignItems : 'center',
        paddingTop : Constants.statusBarHeight, top : '20%'}}>
                  
                    <View >
                        <Text style = {{fontSize : 36, color : '#2cfa7a'}}>
                            Enter Expense
                        </Text>
                    </View>

                        <FormattedInput
                        backCirclePress = {this.goBack.bind(this)}
                        
                        selectedExpense = {this.state.expenseSelected} />

            </View>
        </Modal>
        )
    }

    render(){
        return(
           <View>
               {this.conditionalLoading()}
           </View>
        );
    }
}

const styles ={
    AddCircleStyle : {
    position : 'absolute',
    top : '80%',
    right : '8%'  
    },
    LineView : {
        height : 2,
        width : width - 20,
        backgroundColor : '#2cfa7a'
    },
    ContainerStyle : {
        paddingTop : Constants.statusBarHeight,
       flex  : 1,
        backgroundColor : 'white',
        alignItems : 'center'
    },
    TextStyle : {
        fontSize : 36,
        color : '#2cfa7a',
        padding : 20,
        textAlign : 'center'

    },
    ExpensesView : {
        marginTop : '5%',
        
    }
}

export default MonthlyExpenses;