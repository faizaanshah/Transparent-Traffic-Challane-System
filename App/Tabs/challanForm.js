/**
* Created by Faizan Shah 3rd June, 2018.
*/
import React from 'react'
import {Text, 
View, 
Button, 
Image,
StyleSheet,
TextInput,
 TouchableOpacity} from 'react-native'
import {create} from 'apisauce'

export default class challanForm extends React.Component{
	static navigationOptions = {
		tabBarLabel: 'challane',
		title: 'Challane Registration Form',
	}
	constructor(props){
		super(props)
		this.state={
			carRegNo: '',
			driverID: '',
			driverName: '',
			mistakeName: '',
			Location: '',
			driverEmail: '',
			driverPhoneNumber:'',
		}
	}
	sendDataToServer = () => {
		const {carRegNo} = this.state;
		const {driverID} = this.state;
		const {driverName} = this.state;
		const {mistakeName} = this.state;
		const {Location} = this.state;
		const {driverEmail} = this.state;
		const {driverPhoneNumber} = this.state;
		const api = create({
		  baseURL: 'http://ttraffic.000webhostapp.com/',
		  headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 
			/*'Cookie': "__test=52be8066863a10c17c325c899530619e; expires=Friday, January 1, 2038 at 4:55:55 AM; path=/"*/}
		})
		let d = JSON.stringify({
				RgNo: carRegNo,
				id: driverID,
				name: driverName,
				mistake: mistakeName,
				loc: Location,
				email: driverEmail,
				PhoneNo: driverPhoneNumber
			  })
		api.post('/createChallane.php', d)
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
 
				<Text style= {{ fontSize: 20, color: "#000", textAlign: 'center', marginBottom: 15 }}>Challane Registration Form</Text>
  
				<TextInput
          
					// Adding hint in Text Input using Place holder.
					placeholder="Enter Car Reg No"
 
					onChangeText={carRegNo => this.setState({carRegNo})}
 
					// Making the Under line Transparent.
					underlineColorAndroid='transparent'
 
					style={styles.TextInputStyleClass}
				/>
				<TextInput
          
					// Adding hint in Text Input using Place holder.
					placeholder="Enter Driver's ID"
 
					onChangeText={driverID => this.setState({driverID})}
 
					// Making the Under line Transparent.
					underlineColorAndroid='transparent'
 
					style={styles.TextInputStyleClass}
				/>
				<TextInput
          
					// Adding hint in Text Input using Place holder.
					placeholder="Enter Driver's Name"
 
					onChangeText={driverName => this.setState({driverName})}
 
					// Making the Under line Transparent.
					underlineColorAndroid='transparent'
 
					style={styles.TextInputStyleClass}
				/>
				
				<TextInput
          
					// Adding hint in Text Input using Place holder.
					placeholder="Enter Mistake Comitted"
 
					onChangeText={mistakeName => this.setState({mistakeName})}
 
					// Making the Under line Transparent.
					underlineColorAndroid='transparent'
 
					style={styles.TextInputStyleClass}
				/>
				<TextInput
          
					// Adding hint in Text Input using Place holder.
					placeholder="Enter Location of the incident"
 
					onChangeText={Location => this.setState({Location})}
 
					// Making the Under line Transparent.
					underlineColorAndroid='transparent'
 
					style={styles.TextInputStyleClass}
				/>
 
				<TextInput
          
					// Adding hint in Text Input using Place holder.
					placeholder="Enter Driver Email"
 
					onChangeText={driverEmail => this.setState({driverEmail})}
 
					// Making the Under line Transparent.
					underlineColorAndroid='transparent'
 
					style={styles.TextInputStyleClass}
				/>
				<TextInput
          
					// Adding hint in Text Input using Place holder.
					placeholder="Enter Driver Phone no:"
 
					onChangeText={driverPhoneNumber => this.setState({driverPhoneNumber})}
 
					// Making the Under line Transparent.
					underlineColorAndroid='transparent'
 
					style={styles.TextInputStyleClass}
				/>
 
 
				<Button title="Click Here Challane" onPress={this.sendDataToServer} color="#2196F3" />
      
  
 
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