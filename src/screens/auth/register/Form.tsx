import { useState } from 'react'
import { Control, Controller, FormState } from 'react-hook-form'
import { HelperText, TextInput } from 'react-native-paper'
import theme from 'src/library/theme/theme'
import styled from 'styled-components'
import { RegisterForm } from './types'

interface Props {
    control: Control<RegisterForm, any>
    formState: FormState<RegisterForm>
}

const StyledInput = styled(TextInput)`
    background-color: transparent;
    font-family: ${theme.fonts.light.fontFamily};
    color: rgba(0, 0, 0, 0.6);
    margin-top: -5px;
`

export default function Form({ control, formState }: Props) {
    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false)
    const { errors } = formState
    const handleShowPasswordClick = () => {
        setShowPassword(!showPassword)
    }

    const handleShowPasswordConfirmationClick = () => {
        setShowPasswordConfirmation(!showPasswordConfirmation)
    }

    const iconColor = (isTextInputFocused: boolean): string => (isTextInputFocused ? 'black' : 'rgba(0, 0, 0, 0.6)')

    return (
        <>
            <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                    <>
                        <StyledInput
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            error={!!errors.email}
                            mode="flat"
                            placeholder="Email"
                            left={<TextInput.Icon color={iconColor} name="account" />}
                        />
                        <HelperText type="error" visible={!!errors.email}>
                            {errors.email?.message}
                        </HelperText>
                    </>
                )}
            />
            <Controller
                control={control}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                    <>
                        <StyledInput
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            error={!!errors.password}
                            mode="flat"
                            placeholder="Password"
                            secureTextEntry={!showPassword}
                            right={
                                <TextInput.Icon
                                    color={iconColor}
                                    name={showPassword ? 'eye-off' : 'eye'}
                                    onPress={handleShowPasswordClick}
                                />
                            }
                            left={<TextInput.Icon color={iconColor} name="lock" />}
                        />
                        <HelperText type="error" visible={!!errors.password}>
                            {errors.password?.message}
                        </HelperText>
                    </>
                )}
            />
            <Controller
                control={control}
                name="confirmPassword"
                render={({ field: { onChange, onBlur, value } }) => (
                    <>
                        <StyledInput
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            error={!!errors.confirmPassword}
                            mode="flat"
                            placeholder="Confirm password"
                            secureTextEntry={!showPasswordConfirmation}
                            right={
                                <TextInput.Icon
                                    color={iconColor}
                                    name={showPasswordConfirmation ? 'eye-off' : 'eye'}
                                    onPress={handleShowPasswordConfirmationClick}
                                />
                            }
                            left={<TextInput.Icon color={iconColor} name="lock" />}
                        />
                        <HelperText type="error" visible={!!errors.confirmPassword}>
                            {errors.confirmPassword?.message}
                        </HelperText>
                    </>
                )}
            />
        </>
    )
}
