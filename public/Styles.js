import { StyleSheet } from 'react-native';
import { darkMode } from '../src/ThemeContext';

const screenBG = darkMode ? '#152238' : '#ffffff';
const cardBG = darkMode ? '#148da6' : '#91f086';
const miscBG = darkMode ? '#263354' : '#48bf53';
const darkText = darkMode ? '#152238' : '#02231c';
const lightText = darkMode ? '#c0c0c0' : '#02231c';
const accentBG = darkMode ? '#7a2222' : '#003f20';
const accentText = darkMode ? '#c0c0c0' : '#ffa818';

const StylesLight = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    height: '100%',
    width: '100%'
  },
  darkText: {
    color: '02231c',
    fontSize: 14
  },
  lightText: {
    color: '#02231c',
    fontSize: 14
  },
  primaryButton: {
    alignSelf: 'center',
    backgroundColor: '#003f20',
    padding: 8,
    width: '66%'
  },
  primaryButtonText: {
    color: '#ffa818',
    fontSize: 28,
    textAlign: 'center'
  }
})

const StylesDark = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#152238',
    height: '100%',
    width: '100%'
  },
  darkText: {
    color: '#152238',
    fontSize: 14
  },
  lightText: {
    color: '#c0c0c0',
    fontSize: 14
  },
  primaryButton: {
    alignSelf: 'center',
    backgroundColor: '#7a2222',
    padding: 8,
    width: '66%'
  },
  primaryButtonText: {
    color: '#c0c0c0',
    fontSize: 28,
    textAlign: 'center'
  }
})

export { StylesLight, StylesDark };