import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

// This adds a temporary Log Out button. Still need to add the following:

// Dark Mode Toggle
// Change First Name
// Change Last Name
// Change Username
// Change Email Address
// Change Password
// Change Profile Pic

const Settings = ({onPress}) => {
  return (
    <View style={styles.containerStyle}>
      <TouchableOpacity style={styles.logoutButton} onPress={onPress}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  },
  logoutText: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center'
  },
  logoutButton: {
    alignSelf: 'center',
    backgroundColor: 'blue',
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 8,
    width: '75%',
    padding: 8
  }
})

export default Settings;