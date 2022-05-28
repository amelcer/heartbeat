import { Provider as PaperProvider } from 'react-native-paper'
import { SafeAreaView, StatusBar, StyleSheet, Platform } from 'react-native'
import theme from './src/library/theme/theme'
import Root from './src/Root'

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
            <Root />
        </SafeAreaView>
    )
}
