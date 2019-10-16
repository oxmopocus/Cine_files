import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

import HomeScreen from '../screens/HomeScreen';
import IntroScreen from '../screens/IntroScreen';
import addCityScreen from '../screens/addCityScreen';
import IntroFormScreen from '../screens/IntroFormScreen';
import { AntDesign } from '@expo/vector-icons';
import editScreen from '../screens/editScreen';


const TabNavigator = createBottomTabNavigator({
  
  Home: {
      screen: HomeScreen,
      navigationOptions: {
          tabBarLabel: "Home",
          tabBarIcon: ({ focused, tintColor }) => (
              <AntDesign name="home" size={22} color={focused ? '#e50913' : '#fff'} />
          ),
          tabBarOptions: {
              activeTintColor: '#e50913',
              style: {
                  backgroundColor: 'black',
              },
          }
      }
  },

  Add: {
    screen: addCityScreen,
    navigationOptions: {
        tabBarLabel: "Favorites",
        tabBarIcon: ({ focused, tintColor }) => (
            <AntDesign name="heart" size={22} color={focused ? '#e50913' : '#fff'} />
        ),
        tabBarOptions: {
            activeTintColor: '#e50913',
            style: {
                backgroundColor: 'black',
            },
        }
    }
},

  Welcome: {
    screen: IntroScreen,
    navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({ focused, tintColor }) => (
            <AntDesign name="user" size={22} color={focused ? '#e50913' : '#fff'} />
        ),
        tabBarOptions: {
            activeTintColor: '#e50913',
            style: {
                backgroundColor: 'black',
            },
        }
    }

},





});


  export default createAppContainer(createSwitchNavigator({ 
    App: TabNavigator,
 }));

// const Home = createStackNavigator({ Home: HomeScreen });
// const AuthStack = createStackNavigator({ SignIn: IntroFormScreen, Welcome: IntroScreen });


//   export default createAppContainer(createBottomTabNavigator({ 
//     Home, Login: AuthStack,
//  }));


 
//   (
//     {
//         AuthLoading: AuthLoadingScreen,
//         App: Tab,
//         Auth: AuthStack,
//     },
//     {
//         initialRouteName: 'AuthLoading',
//     }
// )));
