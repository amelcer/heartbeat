import { Fonts } from 'react-native-paper/lib/typescript/types'

interface FontConfig {
    ios?: Fonts | undefined
    android?: Fonts | undefined
    macos?: Fonts | undefined
    windows?: Fonts | undefined
    web?: Fonts | undefined
    native?: Fonts | undefined
    default?: Fonts | undefined
}

const fontConfig: FontConfig = {
    ios: {
        regular: {
            fontFamily: 'Epilogue-Bold',
            fontWeight: 'normal',
        },
        medium: {
            fontFamily: 'Epilogue-Medium',
            fontWeight: 'normal',
        },
        light: {
            fontFamily: 'Epilogue-Regular',
            fontWeight: 'normal',
        },
        thin: {
            fontFamily: 'Epilogue-Light',
            fontWeight: 'normal',
        },
    },
    android: {
        regular: {
            fontFamily: 'Epilogue-Bold',
            fontWeight: 'normal',
        },
        medium: {
            fontFamily: 'Epilogue-Medium',
            fontWeight: 'normal',
        },
        light: {
            fontFamily: 'Epilogue-Regular',
            fontWeight: 'normal',
        },
        thin: {
            fontFamily: 'Epilogue-Light',
            fontWeight: 'normal',
        },
    },
}

export default fontConfig
