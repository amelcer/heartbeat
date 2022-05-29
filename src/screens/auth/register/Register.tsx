import { yupResolver } from '@hookform/resolvers/yup'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, View } from 'react-native'
import { Button, Divider, Text } from 'react-native-paper'
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
    margin-bottom: 20px;
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

    const onSubmit = (data: RegisterForm) => {
        console.log(data)
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
                        <Title>Register now</Title>
                        <Form control={control} formState={formState} />
                        <Terms>
                            By registering you agree to the <TermsLink>terms and conditions</TermsLink>
                        </Terms>
                        <Button mode="contained" disabled={isDirty && !isValid} onPress={handleSubmit(onSubmit)}>
                            <ButtonText>Sign Up</ButtonText>
                        </Button>
                        <StyledDivider />
                        <SocialButton mode="contained" disabled icon="google">
                            <ButtonText>Sign Up with google</ButtonText>
                        </SocialButton>
                        <SocialButton mode="contained" disabled icon="facebook">
                            <ButtonText>Sign Up with google</ButtonText>
                        </SocialButton>
                        <HaveAccountText>
                            Already have account?{' '}
                            <Text style={{ color: theme.colors.primary }} onPress={handleNavigateToSignIn}>
                                Sign in
                            </Text>
                        </HaveAccountText>
                    </Container>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}
