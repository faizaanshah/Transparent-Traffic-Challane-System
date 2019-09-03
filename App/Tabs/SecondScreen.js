/**
* Created by Faizan Shah 3rd June, 2018.
*/

import React from 'react'
import {Text, 
AppRegistry,
View, 
Button, 
Image,
StyleSheet,
TextInput,
 TouchableOpacity} from 'react-native'
import {create} from 'apisauce'

export default class SecondScreen extends React.Component{
	static navigationOptions = {
		tabBarLabel: 'Admin',
		title: 'Wardan Registration Form',
	}
	constructor(props){
		super(props)
		this.state={
			wardanID: '',
			wardanName: '',
			wardanEmail: '',
			wardanPhoneNumber: '',
			wardanPassword:'',
		}
	}
	
	InsertDataToServer = () => {
		const {wardanID} = this.state;
		const {wardanName} = this.state;
		const {wardanEmail} = this.state;
		const {wardanPhoneNumber} = this.state;
		const {wardanPassword} = this.state;
		const api = create({
		  baseURL: 'http://ttraffic.000webhostapp.com/',
		  headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 
			/*'Cookie': "__test=52be8066863a10c17c325c899530619e; expires=Friday, January 1, 2038 at 4:55:55 AM; path=/"*/}
		})
		let d = JSON.stringify({
				id: wardanID,
				name: wardanName,
				email: wardanEmail,
				phoneNumber: wardanPhoneNumber,
				pass: wardanPassword
			  })
		api.post('/user_registration.php', d)
		.then((response)=>{
			console.log(response)
			if(response.ok){
				alert(response.data)
			}
		})
	}
	
	render(){
		return (
			<View style={styles.MainContainer}>
 
				<Text style= {{ fontSize: 20, color: "#000", textAlign: 'center', marginBottom: 15 }}>Wardan Registration Form</Text>
  
				<TextInput
          
					// Adding hint in Text Input using Place holder.
					placeholder="Enter Wardan ID"
 
					onChangeText={wardanID => this.setState({wardanID})}
 
					// Making the Under line Transparent.
					underlineColorAndroid='transparent'
 
					style={styles.TextInputStyleClass}
				/>
				<TextInput
          
					// Adding hint in Text Input using Place holder.
					placeholder="Enter Wardan Name"
 
					onChangeText={wardanName => this.setState({wardanName})}
 
					// Making the Under line Transparent.
					underlineColorAndroid='transparent'
 
					style={styles.TextInputStyleClass}
				/>
 
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
					placeholder="Enter Wardan Phone Number"
 
					onChangeText={wardanPhoneNumber => this.setState({wardanPhoneNumber})}
 
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
 
				<Button title="Click Here To Register" onPress={this.InsertDataToServer} color="#2196F3" />
			</View>
    );
	}
}

const styles = StyleSheet.create({
 
MainContainer :{
 
justifyContent: 'center',
flex:1,
margin: 10
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
 
// Set border Radius.
 //borderRadius: 10 ,
}
 
});