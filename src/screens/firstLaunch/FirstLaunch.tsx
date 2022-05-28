import { Link } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Image, StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import theme from 'src/library/theme/theme'
import routes from '../auth/routes'
import { AuthStackParamList } from '../auth/types'

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: 50,
    },
    mainContent: {
        paddingTop: 35,
        flex: 1,
    },
    title: {
        fontSize: 35,
    },
    button: {
        marginTop: 25,
    },
    buttonText: {
        color: '#fff',
        textTransform: 'none',
        fontFamily: theme.fonts.regular.fontFamily,
    },
    haveAccount: {
        textAlign: 'center',
        fontFamily: theme.fonts.light.fontFamily,
    },
    signIn: {
        color: theme.colors.primary,
    },
})

export default function FirstLaunch({ navigation }: NativeStackScreenProps<AuthStackParamList, 'Register'>) {
    const handleNavigateToRegister = () => {
        navigation.navigate('Register')
    }

    return (
        <View style={styles.container}>
            <View>
                <Image source={require('assets/firstLaunchImg.png')} />
            </View>
            <View style={styles.mainContent}>
                <Text style={styles.title}>
                    Always{'\n'}keep{'\n'}in{'\n'}mind{'\n'}your{'\n'}medicines
                </Text>
                <Button mode="contained" style={styles.button} onPress={handleNavigateToRegister}>
                    <Text style={styles.buttonText}>Register Now</Text>
                </Button>
            </View>
            <View>
                <Text style={styles.haveAccount}>
                    Already have account?{' '}
                    <Link to={{ screen: routes.SIGN_IN, params: {} }} style={styles.signIn}>
                        Sign in
                    </Link>
                </Text>
            </View>
        </View>
    )
}
