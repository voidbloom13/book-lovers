import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Navigation Imports
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

// Screen Imports
import MyBooks from './MyBooks';
import Settings from './Settings';

// Added temporary components to display navigation tabs, will be replaced as progress is made.

// TODO: Add conditional logic to App.js to determine if user is logged in and render either Login component or 
// LoggedIn screen with Tab Navigation. Move Tab Navigation to LoggedIn Screen. Make New Item tab open a modal to
// add a new book to your collection or read list.

const Page1 = () => {
  return (
    <View style={styles.pageView}>
      <Text style={styles.pageText}>Page1</Text>
    </View>
  )
}

const NewItem = () => {
  return (
    <View style={styles.pageView}>
      <Text style={styles.pageText}>New Item</Text>
    </View>
  )
}

const Page3 = () => {
  return (
    <View style={styles.pageView}>
      <Text style={styles.pageText}>Page3</Text>
    </View>
  )
}

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
        <Tab.Screen name='Home' component={Page1} />
        <Tab.Screen name='My Books' component={MyBooks} />
        <Tab.Screen name='New Item' component={NewItem} />
        <Tab.Screen name='Browse' component={Page3} />
        <Tab.Screen name='Settings' children={() => <Settings onPress={onPress} />} />
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