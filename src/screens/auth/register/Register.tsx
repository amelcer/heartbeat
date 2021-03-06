import { yupResolver } from '@hookform/resolvers/yup'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, View } from 'react-native'
import { Button, Divider, Text } from 'react-native-paper'
import { auth } from 'src/library/firebaseConfig'
import i18n from 'src/library/localization/i18n'
import theme from 'src/library/theme/theme'
import styled from 'styled-components'
import { AuthStackParamList } from '../types'
import Form from './Form'
import { registerSchema } from './registerSchema'
import { RegisterForm } from './types'

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

const Terms = styled(Text)`
    font-family: ${theme.fonts.light.fontFamily};
    font-size: 12px;
    padding-bottom: 20px;
`

const TermsLink = styled(Terms)`
    color: #4e4eff;
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

export default function Register({ navigation }: NativeStackScreenProps<AuthStackParamList>) {
    const [errorMessage, setErrorMessage] = useState('')
    const { control, handleSubmit, formState } = useForm<RegisterForm>({
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
        mode: 'onChange',
        resolver: yupResolver(registerSchema()),
    })

    const { isDirty, isValid } = formState

    const handleNavigateToSignIn = () => {
        navigation.navigate('SignIn')
    }

    const onSubmit = async (data: RegisterForm) => {
        if (!isValid) setErrorMessage(i18n.t('errors.formNotValid'))

        setErrorMessage('')

        try {
            const userCredentials = await createUserWithEmailAndPassword(auth, data.email, data.password)
            await sendEmailVerification(userCredentials.user)
        } catch (e: any) {
            setErrorMessage(e?.message || i18n.t('errors.cantRegister'))
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
                        <Title>{i18n.t('register.registerNow')}</Title>
                        <Form control={control} formState={formState} />
                        <Terms>
                            {i18n.t('register.terms')} <TermsLink>{i18n.t('register.termsLink')}</TermsLink>
                        </Terms>
                        <ErrorText>{errorMessage.length > 0 ? errorMessage : ''}</ErrorText>
                        <Button mode="contained" disabled={isDirty && !isValid} onPress={handleSubmit(onSubmit)}>
                            <ButtonText>{i18n.t('register.signUp')}</ButtonText>
                        </Button>
                        <StyledDivider />
                        <SocialButton mode="contained" disabled icon="google">
                            <ButtonText>{i18n.t('register.signUpWithGoogle')}</ButtonText>
                        </SocialButton>
                        <SocialButton mode="contained" disabled icon="facebook">
                            <ButtonText>{i18n.t('register.signUpWithGoogle')}</ButtonText>
                        </SocialButton>
                        <HaveAccountText>
                            {i18n.t('register.haveAccount')}{' '}
                            <Text style={{ color: theme.colors.primary }} onPress={handleNavigateToSignIn}>
                                {i18n.t('login.signIn')}
                            </Text>
                        </HaveAccountText>
                    </Container>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}
