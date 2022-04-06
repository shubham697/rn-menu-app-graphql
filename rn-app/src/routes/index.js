import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
	createStackNavigator,
} from '@react-navigation/stack';
import RouteNames from './names';
// call
import MenuList from '../modules/menu/MenuList';
import MenuPage from '../modules/menu/MenuPage';

const GuestStack = createStackNavigator();
const MemberStack = createStackNavigator();

function GuestRoute() {
	return <NavigationContainer />
}

function MemberRoute() {
	return (
		<NavigationContainer>
			<MemberStack.Navigator
				initialRouteName={RouteNames.MenuListScreen}
			>
				<MemberStack.Screen name={RouteNames.MenuListScreen} component={MenuList} />
				<MemberStack.Screen name={RouteNames.MenuPage} component={MenuPage} />
			</MemberStack.Navigator>
		</NavigationContainer>
	);
}

const RootStack = ({ user, isLoggedIn }) => {
	// if (!isLoggedIn) {
	// 	return <GuestRoute />;
	// }
	return <MemberRoute />;
}


export default RootStack;
