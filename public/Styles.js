import { StyleSheet } from 'react-native';

// TODO: Once the app is mostly finished and all the color themes are finished, save colors,
// TODO: font sizes, etc to variables and call the variables in the style objects.

const STYLE_VALUES = {
  lightScreenBG: '#ffffff',
  lightCardBG: '#91f086',
  lightMiscBG: '#48bf53',
  lightPrimaryText: '#02231c',
  lightSecondaryText: '#02231c',
  lightAccentBG: '#003f20',
  lightAccentText: '#ffa818',
  darkScreenBG: '#152238',
  darkCardBG: '#148da6',
  darkMiscBG: '#263354',
  darkPrimaryText: '#152238',
  darkSecondaryText: '#c0c0c0',
  darkAccentBG: '#7a2222',
  darkAccentText: '#c0c0c0',
  smallFontSize: 14,
  mediumFontSize: 18,
  largeFontSize: 28
}

const StylesLight = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: STYLE_VALUES.lightScreenBG,
    height: '100%',
    width: '100%'
  },
  primarySmallText: {
    color: STYLE_VALUES.lightPrimaryText,
    fontSize: STYLE_VALUES.smallFontSize
  },
  secondarySmallText: {
    color: STYLE_VALUES.lightSecondaryText,
    fontSize: STYLE_VALUES.smallFontSize
  },
  primaryMediumText: {
    color: STYLE_VALUES.lightPrimaryText,
    fontSize: STYLE_VALUES.mediumFontSize
  },
  secondaryMediumText: {
    color: STYLE_VALUES.lightSecondaryText,
    fontSize: STYLE_VALUES.mediumFontSize
  },

  primaryLargeText: {
    color: STYLE_VALUES.lightPrimaryText,
    fontSize: STYLE_VALUES.largeFontSize
  },
  secondaryLargeText: {
    color: STYLE_VALUES.lightSecondaryText,
    fontSize: STYLE_VALUES.largeFontSize
  },
  primaryButton: {
    alignSelf: 'center',
    backgroundColor: STYLE_VALUES.lightAccentBG,
    borderRadius: 32,
    marginVertical: 8,
    padding: 8,
    width: '66%'
  },
  primaryButtonText: {
    color: STYLE_VALUES.lightAccentText,
    fontSize: STYLE_VALUES.largeFontSize,
    textAlign: 'center'
  }
})

const StylesDark = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: STYLE_VALUES.darkScreenBG,
    height: '100%',
    width: '100%'
  },
  primarySmallText: {
    color: STYLE_VALUES.darkPrimaryText,
    fontSize: STYLE_VALUES.smallFontSize
  },
  secondarySmallText: {
    color: STYLE_VALUES.darkSecondaryText,
    fontSize: STYLE_VALUES.smallFontSize
  },
  primaryMediumText: {
    color: STYLE_VALUES.darkPrimaryText,
    fontSize: STYLE_VALUES.mediumFontSize
  },
  secondaryMediumText: {
    color: STYLE_VALUES.darkSecondaryText,
    fontSize: STYLE_VALUES.mediumFontSize
  },
  primaryLargeText: {
    color: STYLE_VALUES.darkPrimaryText,
    fontSize: STYLE_VALUES.largeFontSize
  },
  secondaryLargeText: {
    color: STYLE_VALUES.darkSecondaryText,
    fontSize: STYLE_VALUES.largeFontSize
  },
  primaryButton: {
    alignSelf: 'center',
    backgroundColor: STYLE_VALUES.darkAccentBG,
    borderRadius: 32,
    marginVertical: 8,
    padding: 8,
    width: '66%'
  },
  primaryButtonText: {
    color: STYLE_VALUES.darkAccentText,
    fontSize: STYLE_VALUES.largeFontSize,
    textAlign: 'center'
  }
})

export { StylesLight, StylesDark };