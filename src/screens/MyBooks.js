import React from 'react';
import {View, Text } from 'react-native';
import { useTheme } from '../ThemeContext';
import { StylesLight, StylesDark } from '../../public/Styles';

// Create navstack with top tabs for My Reads and My Readlist

const MyBooks = () => {
  const darkMode = useTheme();
  const Styles = darkMode ? StylesDark : StylesLight;

  return (
    <View style={Styles.screenContainer}>
      <Text style={[Styles.lightText, {alignSelf: 'center'}]}>My Books</Text>
    </View>
  )
}

export default MyBooks;