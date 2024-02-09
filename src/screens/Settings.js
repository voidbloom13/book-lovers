import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme, useThemeUpdate } from '../ThemeContext';
import { StylesLight, StylesDark } from '../../public/Styles';

// This adds a temporary Log Out button. Still need to add the following:

// Dark Mode Toggle => Updating state for button but not updating Styles.js
// Change First Name
// Change Last Name
// Change Username
// Change Email Address
// Change Password
// Change Profile Pic

const Settings = ({onPress}) => {
  const toggleTheme = useThemeUpdate();
  const darkMode = useTheme();
  const Styles = darkMode ? StylesDark : StylesLight;

  return (
    <View style={Styles.screenContainer}>
      <TouchableOpacity style={Styles.primaryButton} onPress={toggleTheme}>
        <Text style={Styles.primaryButtonText}>{darkMode ? 'Light Mode' : 'Dark Mode'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={Styles.primaryButton} onPress={onPress}>
        <Text style={Styles.primaryButtonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Settings;