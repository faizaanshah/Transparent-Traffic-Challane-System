/**
* Created by Faizan Shah 3rd June, 2018.
*/
import React from 'react';
import {Text, 
View, 
Button, 
Image,
AppRegistry, 
StyleSheet,
TextInput,
 TouchableOpacity} from 'react-native';
import {create} from 'apisauce';
export default class searchScreen extends React.Component{
	static navigationOptions = {
		tabBarLabel: 'Search'
	}
	constructor(props){
		super(props)
		this.state={
			driverID: '',
		}
	}
	SearchRecordFromServer = () => {
		const {driverID} = this.state;
		const api = create({
		  baseURL: 'http://ttraffic.000webhostapp.com/',
		  headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 
			/*'Cookie': "__test=52be8066863a10c17c325c899530619e; expires=Friday, January 1, 2038 at 4:55:55 AM; path=/"*/}
		})
		let d = JSON.stringify({
				id: driverID,
			  })
		api.post('/searchDriverData.php', d)
		.then((response)=>{
			console.log(response)
			if(response.ok){
				alert(response.data);
			}
		})
	}
	render(){
		return <View style={styles.MainContainer}>
			<Text>Provide Driver ID to Check Status</Text>
			<TextInput
				placeholder="Enter ID"
				onChangeText={driverID => this.setState({driverID})}
				style={styles.TextInputStyleClass}
				underlineColorAndroid='transparent'
			/>
			<Button title="Click Here to Search" onPress={this.SearchRecordFromServer} color="#2196F3" />
		</View>
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