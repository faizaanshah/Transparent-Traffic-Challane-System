import React, { Component } from 'react';
import { StyleSheet, 
TextInput, 
View, 
Alert, 
Button, 
Text,
AsyncStorage,
Keyboard} from 'react-native';
 import {create} from 'apisauce'
// Importing Stack Navigator library to add multiple activities.
import {TabNavigator} from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import challanForm from './challanForm.js';
// Creating Login Activity.
class LoginActivity extends Component {
  // Setting up Login Activity title.
  static navigationOptions = {
		tabBarLabel: 'login',
		title: 'Login Form',
	}
constructor(props) {
 
    super(props)
 
    this.state = {
 
      wardanEmail: '',
      wardanPassword: ''
 
    }
 
  }
 
wardanLoginFunction = () =>{
 
	const { wardanEmail }  = this.state ;
	const { wardanPassword }  = this.state ;
			const api = create({
		  baseURL: 'http://ttraffic.000webhostapp.com/',
		  headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 
			/*'Cookie': "__test=52be8066863a10c17c325c899530619e; expires=Friday, January 1, 2038 at 4:55:55 AM; path=/"*/}
		})
		let d = JSON.stringify({
				email: wardanEmail,
				pass: wardanPassword
			  })
		api.post('/signIn.php', d)
		.then((response)=>{
			console.log(response)
			if(response.ok){
				if(response.data == 'ok'){
					/*let myArray{
						email: wardanEmail,
						pass: wardanPassword
					}
					AsyncStorage.setItem('myArray',
					JSON.stringify(myArray));*/
					Keyboard.dismiss();
					this.props.navigation.navigate('Tab1');
					alert('Login Successful');
				}else{
					alert(response.data);
				}
			}
		})
        
 
  }
 
  render() {
    return (
 
<View style={styles.MainContainer}>
 
        <Text style= {styles.TextComponentStyle}>Wardan Login Form</Text>
  
        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter Wardan Email"
 
          onChangeText={wardanEmail => this.setState({wardanEmail})}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />
 
        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter Wardan Password"
 
          onChangeText={wardanPassword => this.setState({wardanPassword})}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
 
          secureTextEntry={true}
        />
 
        <Button title="Click Here To Sign In" onPress={this.wardanLoginFunction} color="#2196F3" />
      
  
 
</View>
            
    );
  }
}
 
// Creating Profile activity.
class ProfileActivity extends Component
{
 
  // Setting up profile activity title.
   static navigationOptions =
   {
      title: 'ProfileActivity',
    
   };
    
 
   render()
   {
 
     const {goBack} = this.props.navigation;
 
      return(
         <View style = { styles.MainContainer }>
 
            <Text style = {styles.TextComponentStyle}> { this.props.navigation.state.params.Email } </Text>
 
            <Button title="Click here to Logout" onPress={ () => goBack(null) } />
 
         </View>
      );
   }
}
 
export default MainProject = StackNavigator(
{
   First: { screen: LoginActivity },
   
   Second: { screen: ProfileActivity }
 
});
 
const styles = StyleSheet.create({
 
MainContainer :{
 
justifyContent: 'center',
flex:1,
margin: 10,
},
 
TextInputStyleClass: {
 
textAlign: 'center',
marginBottom: 7,
height: 40,
borderWidth: 1,
// Set border Hex Color Code Here.
 borderColor: '#2196F3',
 
 // Set border Radius.
 borderRadius: 5 ,
 
},
 
 TextComponentStyle: {
   fontSize: 20,
  color: "#000",
  textAlign: 'center', 
  marginBottom: 15
 }
});