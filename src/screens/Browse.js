import * as React from 'react';
import { View, Text } from 'react-native';
import { AppContext } from '../../Context';
import { StylesLight, StylesDark } from '../../public/Styles';

const Browse = () => {
  const isDarkTheme = AppContext().isDarkTheme;
  const Styles = isDarkTheme ? StylesDark : StylesLight;

  return (
    <View style={Styles.screenContainer}>
      <Text style={[Styles.secondaryLargeText, {alignSelf: 'center'}]}>Browse</Text>
    </View>
  )
}

export default Browse;