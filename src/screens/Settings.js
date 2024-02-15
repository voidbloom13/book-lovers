import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AppContext } from '../../Context';
import { StylesLight, StylesDark } from '../../public/Styles';

// This adds a temporary Log Out button. Still need to add the following:

// Dark Mode Toggle => Updating state for button but not updating Styles.js
// Change First Name
// Change Last Name
// Change Username
// Change Email Address
// Change Password
// Change Profile Pic

const Settings = () => {
  const isDarkTheme = AppContext().isDarkTheme;
  const toggleTheme = AppContext().toggleTheme;
  const toggleLogin = AppContext().toggleLogin;
  const Styles = isDarkTheme ? StylesDark : StylesLight;

  return (
    <View style={Styles.screenContainer}>
      <TouchableOpacity style={Styles.primaryButton} onPress={toggleTheme}>
        <Text style={Styles.primaryButtonText}>{isDarkTheme ? "Light Mode" : "Dark Mode"}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={Styles.primaryButton} onPress={toggleLogin}>
        <Text style={Styles.primaryButtonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Settings;