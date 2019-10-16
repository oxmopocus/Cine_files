import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import Profile from '../screens/ProfileScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import { AntDesign } from '@expo/vector-icons';

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

  Favorite: {
    screen: FavoriteScreen,
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

  Profile: {
    screen: Profile,
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
