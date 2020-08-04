import colors from 'vuetify/lib/util/colors'

let darkMode = false
if (typeof Storage !== 'undefined') {
  // eslint-disable-line
  darkMode = localStorage.getItem('luxiDarkMode') || false
}

const palette = {
  money: {
    primary: colors.green.base, // primary main
    primarylight: colors.green.lighten4, // primary light
    primarydark: colors.green.darken3, // primary dark
    secondary: colors.amber.darken2, // secondary main
    secondarylight: colors.amber.lighten4, // secondary light
    secondarydark: colors.amber.darken4, // secondary dark
    anchor: colors.green.base // link
  }
}

export const theme = {
  ...palette.money
}

export default {
  rtl: false,
  theme: {
    dark: darkMode === 'true',
    themes: {
      light: {
        ...theme
      },
      dark: {
        ...theme
      }
    },
    options: {
      customProperties: true
    }
  }
}
