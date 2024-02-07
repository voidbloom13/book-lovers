import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Login = ({onPress}) => {
  return (
    <View style={styles.screenContainer}>
      <TouchableOpacity style={styles.loginButton} onPress={() => {onPress()}}>
        <Text style={styles.loginText}>Login to view the App!</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  },
  loginText: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center'
  },
  loginButton: {
    alignSelf: 'center',
    backgroundColor: 'blue',
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 8,
    width: '75%',
    padding: 8
  }
})

export default Login;