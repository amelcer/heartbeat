import { initializeApp } from 'firebase/app'
import { Provider as PaperProvider } from 'react-native-paper'
import { SafeAreaView, StatusBar, StyleSheet, Platform } from 'react-native'
import theme from './src/library/theme/theme'
import config from './src/library/firebaseConfig'
import Root from './src/Root'

initializeApp(config)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default function App() {
    const barStyle = Platform.OS === 'ios' ? 'dark-content' : 'default'
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={barStyle} />
            <PaperProvider theme={theme}>
                <Root />
            </PaperProvider>
        </SafeAreaView>
    )
}
