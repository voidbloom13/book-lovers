import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AppContext } from '../../Context';
import { StylesLight, StylesDark } from '../../public/Styles';

const Login = () => {
  const Styles = AppContext().isDarkTheme ? StylesDark : StylesLight;
  const toggleLogin = AppContext().toggleLogin;

  return (
    <View style={Styles.screenContainer}>
      <TouchableOpacity style={Styles.primaryButton} onPress={toggleLogin}>
        <Text style={Styles.primaryButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login;