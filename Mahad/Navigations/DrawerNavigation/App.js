/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import React from "react";
import DrawerNavigation from "./DrawerNavigation";

const AppNavigator = createStackNavigator(
  {
    Drawer: {
      screen: DrawerNavigation,
      navigationOptions: {
        headerShown: false
      }
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false
      }
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
