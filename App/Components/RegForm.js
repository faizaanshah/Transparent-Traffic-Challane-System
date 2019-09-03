import React from 'react';
import {StyleSheet,
 Text,
 View,
 TextInput,
 TouchableOpacity,
 AppRegistry
 } from 'react-native';
export default class RegForm extends React.Component{
	UserLoginFunction = () =>{
		
	}
	render(){
		return(
			<View style={styles.regForm}>
				<Text style={[styles.bigblue, styles.red]}>Transparent Traffic</Text>
				<Text style={[styles.bigblue, styles.red]}>System</Text>
				
				<Text style={styles.header}>Sign Up Page</Text>
				
				<TextInput style={styles.textInput} placeholder="Your Name"
				underLineColorAndroid={'transparent'}/>
				
				<TextInput style={styles.textInput} placeholder="Your Email"
				underLineColorAndroid={'transparent'}/>
				
				<TextInput style={styles.textInput} placeholder="Password"
				secureTextEntry={true} underLineColorAndroid={'transparent'}/>
				
				<TouchableOpacity style={styles.button}>
					<Text style={styles.btntext}>Sign Up</Text>
				</TouchableOpacity>
				
				<Button title="Already a Member" onPress={this.UserLoginFunction} color="#2196F3" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	regForm:{
		alignSelf: 'stretch',
	},
	header:{
		alignSelf: 'center',
		fontSize: 20,
		color: '#fff',
		paddingBottom: 10,
		marginBottom: 10,
		borderBottomColor: '#1390',
		borderBottomWidth: 1,
	},
	textInput:{
		alignSelf: 'stretch',
		height: 40,
		marginBottom: 10,
		color: '#fff',
		borderBottomColor:'#f8f8f8',
		borderBottomWidth: 1,
	},
	button:{
		alignSelf:'stretch',
		alignItems: 'center',
		padding: 20,
		backgroundColor: '#59cbbd',
		marginTop: 50,
	},
	btntext:{
		color: '#fff',
		fontWeight: 'bold',
	},
	bigblue: {
		alignSelf: 'center',
		color: 'blue',
		fontWeight: 'bold',
		fontSize: 28,
	},
	red: {
		color: 'red',
	},
});