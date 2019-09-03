/**
* Created by Faizan Shah 3rd June, 2018.
*/

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import {TabNavigator} from 'react-navigation';
import FirstScreen from './App/Tabs/FirstScreen.js';
import LoginActivity from './App/Tabs/LoginActivity.js';
import SecondScreen from './App/Tabs/SecondScreen.js';
//import nSecondScreen from './App/Tabs/nSecondScreen.js';
import searchScreen from './App/Tabs/searchScreen.js';
import challanForm from './App/Tabs/challanForm.js';
import { AsyncStorage } from "react-native";
var MainScreenNavigator = TabNavigator({
	Tab1: {screen: FirstScreen},
	Tab3: {screen: SecondScreen},
	Tab4: {screen: challanForm},
	Tab5: {screen: LoginActivity},
	Tab2: {screen: searchScreen},
	
},
{
	tabBarPosition: 'top',
	header: false,
	swipeEnabled: true,
});

MainScreenNavigator.navigationOptions = {
	title: "Tab example"
};

export default MainScreenNavigator;
