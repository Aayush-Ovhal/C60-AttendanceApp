import React from 'react';
import { Image } from 'react-native';
import { createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Marksheet from './screens/marksheet';
import finalAttendance from './screens/finalAttendance';

export default class App extends React.Component{
  render(){
    return(
     <AppContainer/>
    )
  }
}

const BottomTabNavigator = createBottomTabNavigator({
  Marksheet: {
    screen: Marksheet,
    navigationOptions: {
      tabBarIcon: <Image source={require("./assets/immigration.png")} style={{width:20, height:20}}/>,
     tabBarLabel: "Attendance Sheet"
    }
  },
  finalAttendance: {
    screen: finalAttendance,
    navigationOptions: {
      tabBarIcon: <Image source={require("./assets/scores.png")} style={{width: 20, height: 20}}/>,
      tabBarLabel: "Final Sheet"
    }
  }
});

const AppContainer = createAppContainer(BottomTabNavigator)