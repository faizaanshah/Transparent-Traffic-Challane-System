import React from 'react';
import { AppRegistry, 
StyleSheet, 
Text, 
View } from 'react-native';

export default class Intro extends React.Component {
  render() {
    return (
      <View style={{flex: 1,flexDirection: 'column',alignItems: 'center', justifyContent: 'center', backgroundColor: 'powderblue'}}>	
        <Text style={[styles.bigblue, styles.red]}>Transparent Traffic</Text>
        <Text style={[styles.bigblue, styles.red]}>System</Text>
		<Text>By: Faizan Shah</Text>
        <Text style={[styles.red, styles.bigblue]}>DBMS project</Text>
		<Text>Submitted to: Miss Sumayya Salauddin</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});