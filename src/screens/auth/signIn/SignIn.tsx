import { yupResolver } from '@hookform/resolvers/yup'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, View } from 'react-native'
import { Button, Divider, Text } from 'react-native-paper'
import { auth } from 'src/library/firebaseConfig'
import theme from 'src/library/theme/theme'
import { UserStackParamList } from 'src/types'
import styled from 'styled-components'
import { AuthStackParamList } from '../types'
import Form from './Form'
import { loginSchema } from './loginSchema'
import { LoginForm } from './types'

const Container = styled(View)`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    padding-bottom: 20px;
`

const Title = styled(Text)`
    font-size: 40px;
    font-family: ${theme.fonts.medium.fontFamily};
    margin-bottom: 35px;
`

const ButtonText = styled(Text)`
    color: white;
`

const ErrorText = styled(Text)`
    color: ${theme.colors.error};
    text-align: center;
`

const StyledDivider = styled(Divider)`
    margin-top: 20px;
    margin-bottom: 20px;
`

const SocialButton = styled(Button)`
    margin-bottom: 20px;
`

const HaveAccountText = styled(Text)`
    text-align: center;
    font-family: ${theme.fonts.light.fontFamily};
`

export default function SignIn({ navigation }: NativeStackScreenProps<AuthStackParamList & UserStackParamList>) {
    const [errorMessage, setErrorMessage] = useState('')
    const { control, handleSubmit, formState } = useForm<LoginForm>({
        mode: 'onChange',
        resolver: yupResolver(loginSchema()),
    })

    const { isDirty, isValid } = formState

    const handleNavigateToRegister = () => {
        navigation.navigate('Register')
    }

    const onSubmit = async (data: LoginForm) => {
        if (!isValid) setErrorMessage('Form is not valid')

        setErrorMessage('')

        try {
            await signInWithEmailAndPassword(auth, data.email, data.password)
        } catch (e: any) {
            setErrorMessage(e?.message || 'Could not login, Try again later')
        }
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end' }}
            keyboardVerticalOffset={120}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView
                    contentInsetAdjustmentBehavior="always"
                    overScrollMode="always"
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    contentContainerStyle={{
                        flexGrow: 1,
                        justifyContent: 'flex-end',
                    }}
                >
                    <Container>
                        <Title>Sign in</Title>
                        <Form control={control} formState={formState} />
                        <ErrorText>{errorMessage.length > 0 ? errorMessage : ''}</ErrorText>
                        <Button mode="contained" disabled={isDirty && !isValid} onPress={handleSubmit(onSubmit)}>
                            <ButtonText>Sign In</ButtonText>
                        </Button>
                        <StyledDivider />
                        <SocialButton mode="contained" disabled icon="google">
                            <ButtonText>Sign In with google</ButtonText>
                        </SocialButton>
                        <SocialButton mode="contained" disabled icon="facebook">
                            <ButtonText>Sign In with google</ButtonText>
                        </SocialButton>
                        <HaveAccountText>
                            Don&apos;`t have account?{' '}
                            <Text style={{ color: theme.colors.primary }} onPress={handleNavigateToRegister}>
                                Sign up
                            </Text>
                        </HaveAccountText>
                    </Container>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}
