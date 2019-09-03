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
TouchableOpacity } from 'react-native';

export default class FirstScreen extends React.Component{
	static navigationOptions = {
		tabBarLabel: 'Home',
		tabBarIcon: ({tintColor})=>(
			<Image>
				source=[require('../images/home.png')]
				style={{width:22, height:22, tintColor:'white'}},
			</Image>
		)
	}
	render(){
		return <View style={styles.homeS}>	
        		<Text style={[styles.bigblue, styles.red]}>Transparent Traffic</Text>
				<Text style={[styles.bigblue, styles.red]}>System</Text>
				<Text>By: Faizan Shah</Text>
				<Text>Shakirullah</Text>
				<Text>Bilal Muhammad</Text>
				<Text style={[styles.red, styles.bigblue]}>DBMS project</Text>
				<Text>Submitted to: Miss Sumayya Salauddin</Text>
			</View>
	}
}
const styles = StyleSheet.create({
  homeS:{
	  flex: 1,
	  flexDirection: 'column',
	  alignItems: 'center', 
	  justifyContent: 'center', 
	  backgroundColor: 'powderblue',
	},
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});