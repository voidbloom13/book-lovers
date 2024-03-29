import * as React from 'react';
import { View, Text } from 'react-native';
import { AppContext } from '../../Context';
import { StylesLight, StylesDark } from '../../public/Styles';

// Create navstack with top tabs for My Reads and My Readlist

const MyBooks = () => {
  const isDarkTheme = AppContext().isDarkTheme;
  const Styles = isDarkTheme ? StylesDark : StylesLight;

  return (
    <View style={Styles.screenContainer}>
      <Text style={[Styles.secondaryLargeText, {alignSelf: 'center'}]}>My Books</Text>
    </View>
  )
}

export default MyBooks;