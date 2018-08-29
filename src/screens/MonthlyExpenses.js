import React from 'react';
import {Text, View, Dimensions, AsyncStorage, FlatList, ScrollView,
    TouchableOpacity, Modal, TextInput
} from 'react-native';
import {Constants} from 'expo';
import ExpenseContainer from '../components/ExpenseContainer';
import AddCircle from '../components/AddCircle';
import * as Animatable from 'react-native-animatable'
import GenExpenseContainer from '../components/GenExpenseContainer'

 
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
            expenseCost : '00.00'

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
        paddingTop : Constants.statusBarHeight}}>
                    <GenExpenseContainer  text = {this.state.expenseSelected}/>
                    <View style = {{top : '20%'}}>
                        <Text style = {{fontSize : 36, color : '#2cfa7a'}}>
                            Cost
                        </Text>
                    </View>
                    <View style ={{
                        width : width - 40,
                        height : 50,
                        borderWidth : 2,
                        borderRadius : 30,
                        justifyContent : 'center',
                        alignItems  : 'center'
                    }}>
                        <TextInput 
                        value = {this.state.expenseCost}
                        clearTextOnFocus = {true}
                        keyboardType = 'numeric'
                        onChangeText ={ (text) => {
                            
                            this.setState({
                                expenseCost : text
                            })
                        }}
                        style = {{textAlign : 'center', fontSize : 24}}
                        />
                    </View>
            </View>
        </Modal>
        )
    }

    render(){
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