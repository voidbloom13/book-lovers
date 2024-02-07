import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Create navstack with top tabs for My Reads and My Readlist

const MyBooks = () => {
  return (
    <View style={styles.containerStyle}>
      <Text style={{alignSelf: 'center', fontSize: 30}}>My Books</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  }
})

export default MyBooks;