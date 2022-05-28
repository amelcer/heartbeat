import { DefaultTheme, configureFonts } from 'react-native-paper'
import { Theme } from 'react-native-paper/lib/typescript/types'
import fontConfig from './fonts'

const theme: Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#EC5766',
    },
    fonts: configureFonts(fontConfig),
}

export default theme
