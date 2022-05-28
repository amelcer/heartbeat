import { Image, StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: 15,
    },
})

function AuthHeader() {
    return (
        <View style={styles.container}>
            <Image source={require('assets/logo.png')} />
        </View>
    )
}

export default AuthHeader
