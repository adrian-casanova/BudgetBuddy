import React from 'react';
import {Text, View} from 'react-native';

class BudgetAnimated extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
          
            budget : 0,
        }

    }

   async componentWillMount(){
        let budget = this.props.budget;
      
      let interval = setInterval(() => {
               
                this.setState({
                    budget : this.state.budget + 1
                })
                if(this.state.budget == budget){
                    clearInterval(interval);
                }
            }, 25)
    
        

        
       
     
    
     
            
        
    }
    
    render(){
        return(
           
                <Text style = {{
                            fontSize : 100, color : 'white', fontWeight : 'bold',textAlign : 'center'}}>
                    ${this.state.budget}
                </Text>
          
        );
    }
}

export default BudgetAnimated;