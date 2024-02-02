import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Navigation Imports
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

// Added temporary components to display navigation tabs, will be replaced as progress is made.

const Page1 = () => {
  return (
    <View style={styles.pageView}>
      <Text style={styles.pageText}>Page1</Text>
    </View>
  )
}

const Page2 = () => {
  return (
    <View style={styles.pageView}>
      <Text style={styles.pageText}>Page2</Text>
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

const Page4 = () => {
  return (
    <View style={styles.pageView}>
      <Text style={styles.pageText}>Page4</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator();

const App = () => {
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
              iconColor = '#e95429';
            } else if (route.name === 'My Readlist') {
              iconName = focused ? 'book-sharp' : 'book-outline';
              iconColor = '#00a700';
            } else if (route.name === 'Browse') {
              iconName = focused ? 'search-sharp' : 'search-outline';
              iconColor = '#ff0000';
            }

            return <Ionicons name={iconName} size={iconSize} color={iconColor} />
          },
          tabBarActiveBackgroundColor: '#292930',
          tabBarInactiveBackgroundColor: '#1f1f25',
          tabBarActiveTintColor: '#c5c5c5',
          tabBarLabelStyle: {
            fontSize: 12
          }
        })}
      >
        <Tab.Screen name='Home' component={Page1} />
        <Tab.Screen name='My Books' component={Page2} />
        <Tab.Screen name='New Item' component={NewItem} />
        <Tab.Screen name='My Readlist' component={Page3} />
        <Tab.Screen name='Browse' component={Page4} />
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

export default App;