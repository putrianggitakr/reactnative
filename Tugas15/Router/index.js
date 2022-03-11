import React from "react";
import { StyleSheet, TabBarIOS, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import AboutScreen from '../Pages/AboutScreen';
import AddScreen from '../Pages/AddScreen';
import HomeScreen from '../Pages/HomeScreen';
import LoginScreen from '../Pages/LoginScreen';
import ProjectScreen from '../Pages/ProjectScreen';
import SettingScreen from '../Pages/SettingScreen';
import SkillProjectScreen from '../Pages/SkillProjectScreen';


const Tab = createBottomTabNavigator();
const Drawwer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function Router() {
	return (
		<NavigationContainer >
			<Stack.Navigator >
				<Stack.Screen name="LoginScreen" component={LoginScreen}/>
				<Stack.Screen name="HomeScreen" component={HomeScreen}/>
				<Stack.Screen name="MainApp" component={MainApp}/>
				<Stack.Screen name="MyDrawwer" component={MyDrawwer}/>

			</Stack.Navigator>
		</NavigationContainer>
	)
}

const MainApp =()=>(
		<Tab.Navigator screenOptions={{ headerShown: false }}>
			<Tab.Screen name="AboutScreen" component={AboutScreen}/>
			<Tab.Screen name="AddScreen" component={AddScreen}/>
			<Tab.Screen name="SkillProjectScreen" component={SkillProjectScreen}/>
		</Tab.Navigator>
	
)

const MyDrawwer =()=>(
	<Drawwer.Navigator screenOptions={{ headerShown: false }}>
		<Drawwer.Screen name="App" component={MainApp}/>
		<Drawwer.Screen name="AboutScreen" component={AboutScreen}/>
	</Drawwer.Navigator>
)
