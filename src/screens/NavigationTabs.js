import * as React from 'react';
import { StyleSheet } from 'react-native';

// Navigation Imports
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

// Screen Imports
import Home from './Home';
import MyBooks from './MyBooks';
import NewItem from './NewItem';
import Browse from './Browse';
import Settings from './Settings';

// Added temporary components to display navigation tabs, will be replaced as progress is made.

// TODO: Add Context to imports and change NavTab color theme based on isDarkTheme state
// TODO: Implement Google Books API on the Search screen.
// TODO: Add NavTabs to MyBooks.js, (MyReads.js, MyWishlist.js). Start work on Backend to save books to either list.
// TODO: Add authentication for users and finish Settings.js
// TODO: Work on Home.js and anything else that needs polishing

const Tab = createBottomTabNavigator();

const NavigationTabs = ({onPress}) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size}) => {
            let iconName;
            let iconSize = 24;
            let iconColor;

            if (route.name === 'Home') {
              iconName = focused ? 'home-sharp' : 'home-outline';
              iconColor = '#5050ff';
            } else if (route.name === 'My Books') {
              iconName = focused ? 'star' : 'star-outline';
              iconColor = '#f0f700';
            } else if (route.name === 'New Item') {
              iconName = focused ? 'add-circle-sharp' : 'add-circle-outline';
              iconSize = 40;
              iconColor = '#40cf5f';
            } else if (route.name === 'Browse') {
              iconName = focused ? 'search-sharp' : 'search-outline';
              iconColor = '#ff0000';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings-sharp' : 'settings-outline';
              iconColor = '#c0c0cf';
            }

            return <Ionicons name={iconName} size={iconSize} color={iconColor} />
          },
          tabBarActiveBackgroundColor: '#000000',
          tabBarInactiveBackgroundColor: '#000000',
          tabBarActiveTintColor: '#c5c5c5',
          tabBarLabelStyle: {
            fontSize: 12
          }
        })}
      >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='My Books' component={MyBooks} />
        <Tab.Screen name='New Item' component={NewItem} />
        <Tab.Screen name='Browse' component={Browse} />
        <Tab.Screen name='Settings' component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  pageView: {
    flex: 1,
    justifyContent: 'center'
  },
  pageText: {
    alignSelf: 'center',
    fontSize: 30
  }
})

export default NavigationTabs;