import React, { Component } from 'react';
import { StyleSheet, 
TextInput, 
View, 
Alert, 
Button, 
Text} from 'react-native';
 import {create} from 'apisauce'
// Importing Stack Navigator library to add multiple activities.
import {TabNavigator} from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import { AsyncStorage } from "react-native";
class Logout extends Component {
 
  // Setting up Login Activity title.
  static navigationOptions = {
		tabBarLabel: 'logOut',
		title: 'LogOut',
	}
 

 
 
wardanLogoutFunction = () =>{
 
	let keys = ['email', 'password'];
	AsyncStorage.multiRemove(keys, (err) => {
		('Local storage user info removed!');
	});
 
  }
 
  render() {
    return (
 
<View style={styles.MainContainer}>
        <Button title="Click Here To Log Out" onPress={this.wardanLogoutFunction} color="#2196F3" />
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