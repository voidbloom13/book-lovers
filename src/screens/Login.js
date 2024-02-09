import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../ThemeContext';
import { StylesLight, StylesDark } from '../../public/Styles';

const Login = ({onPress}) => {
  const darkMode = useTheme();
  const Styles = darkMode ? StylesDark : StylesLight;

  return (
    <View style={Styles.screenContainer}>
      <TouchableOpacity style={Styles.primaryButton} onPress={() => {onPress()}}>
        <Text style={Styles.primaryButtonText}>Login to view the App!</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login;