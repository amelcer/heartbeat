import 'intl'
import * as Localization from 'expo-localization'
import { useState, useEffect, useCallback } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Platform } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Settings } from 'luxon'
import Root from './src/Root'

if (Localization.locale === 'pl-PL') {
    require('intl/locale-data/jsonp/pl')
    Settings.defaultLocale = 'pl'
} else require('intl/locale-data/jsonp/en')

const queryClient = new QueryClient()

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
    },
})

export default function App() {
    const [appLoaded, setAppLoaded] = useState(false)

    useEffect(() => {
        async function prepare() {
            try {
                await SplashScreen.preventAutoHideAsync()

                await Font.loadAsync({
                    'Epilogue-Medium': require('./assets/fonts/Epilogue-Medium.ttf'),
                    'Epilogue-Bold': require('./assets/fonts/Epilogue-Bold.ttf'),
                    'Epilogue-Light': require('./assets/fonts/Epilogue-Light.ttf'),
                    'Epilogue-Regular': require('./assets/fonts/Epilogue-Regular.ttf'),
                })

                Font.processFontFamily('Epilogue-Regular')
            } catch (e) {
                // eslint-disable-next-line no-console
                console.warn(e)
            } finally {
                setAppLoaded(true)
            }
        }

        prepare()
    }, [])

    const onLayoutRootView = useCallback(async () => {
        if (appLoaded) {
            await SplashScreen.hideAsync()
        }
    }, [appLoaded])

    if (!appLoaded) {
        return null
    }

    const barStyle = Platform.OS === 'ios' ? 'dark-content' : 'default'
    return (
        <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
            <StatusBar barStyle={barStyle} />
            <QueryClientProvider client={queryClient}>
                <Root />
            </QueryClientProvider>
        </SafeAreaView>
    )
}
