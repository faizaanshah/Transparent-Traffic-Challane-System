/**
* Created by Faizan Shah 7th July, 2018.
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

export default class nSecondScreen extends React.Component{
	static navigationOptions = {
		tabBarLabel: 'Admin',
		title: 'Wardan Registration Form',
	}
	state = {
		wardanID: '',
		wardanName: '',
		wardanEmail: '',
		wardanPhoneNumber: '',
		wardanPassword:'',
	};
	
	handleChange = event => {
		this.setState({name:event.target.value});
		
	}
	
	handleSubmit = event => {
		event.preventDefault();
		
		const wardan = {
			wardanID:this.state.wardanID,
			wardanName: this.state.wardanName,
			wardanEmail: this.state.wardanEmail,
			wardanPhoneNumber: this.state.wardanPhoneNumber,
			wardanPassword: this.state.wardanPassword
		}
		axios.post('http://ttraffic.byethost11.com/user_registration.php', {wardan})
		.then)(res =>){
			console.log(res);
			console.log(res.data);
		}
	}
	
	render(){
		return (	
 
			<View style={styles.MainContainer}>
 
				<form onSubmit={this.handleSubmit}>
					<label>
						WardanID:
						<input type="text" name="wardanID" onChange={this.handleChange}/>
					</label>
					<label>
						WardanName:
						<input type="text" name="wardanName" onChange={this.handleChange}/>
					</label>
					<label>
						WardanEmail:
						<input type="text" name="wardanEmail" onChange={this.handleChange}/>
					</label>
					<label>
						WardanPhoneNumber:
						<input type="text" name="wardanPhoneNumber" onChange={this.handleChange}/>
					</label>
					<label>
						WardanPassword:
						<input type="text" name="wardanPassword" onChange={this.handleChange}/>
					</label>
					<button type="submit" onPress={this.InsertDataToServer} color="#2196F3">Add</button>
				</form>
				
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