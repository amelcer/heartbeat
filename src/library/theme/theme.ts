import { DefaultTheme, configureFonts } from 'react-native-paper'
import { Theme } from 'react-native-paper/lib/typescript/types'
import fontConfig from './fonts'

type CustomTheme = {
    colors: {
        textGray: string
    }
} & Theme

const theme: CustomTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#EC5766',
        textGray: '#646464',
    },
    fonts: configureFonts(fontConfig),
}

export default theme
