import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Page1} />
        <Tab.Screen name='My Books' component={Page2} />
        <Tab.Screen name='New Item' component={NewItem} />
        <Tab.Screen name='My Readlist' component={Page3} />
        <Tab.Screen name='Browse New Titles' component={Page4} />
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