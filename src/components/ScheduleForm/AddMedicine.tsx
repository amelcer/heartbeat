import { Controller, useFormContext } from 'react-hook-form'
import { Image, View } from 'react-native'
import { HelperText, TextInput } from 'react-native-paper'
import i18n from 'src/library/localization/i18n'
import theme from 'src/library/theme/theme'
import { AddScheduleForm } from 'src/screens/AddSchedule/types'
import styled from 'styled-components'

const Container = styled(View)`
    align-items: center;
`

const StyledInput = styled(TextInput)`
    background-color: transparent;
    font-family: ${theme.fonts.regular.fontFamily};
    color: rgba(0, 0, 0, 0.6);
    width: 100%;
`

const Description = styled(StyledInput)`
    height: 200px;
`

export default function AddMedicine() {
    const {
        control,
        formState: { errors },
    } = useFormContext<AddScheduleForm>()
    return (
        <Container>
            <Image source={require('assets/default-pill.png')} />
            <Controller
                control={control}
                name="medicine.name"
                render={({ field: { onChange, onBlur, value } }) => (
                    <>
                        <StyledInput
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            error={!!errors.medicine?.name}
                            mode="flat"
                            placeholder={i18n.t('common.medicineName')}
                        />
                        <HelperText type="error" visible={!!errors.medicine?.name}>
                            {errors.medicine?.name?.message}
                        </HelperText>
                    </>
                )}
            />
            <Controller
                control={control}
                name="medicine.description"
                render={({ field: { onChange, onBlur, value } }) => (
                    <>
                        <Description
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            error={!!errors.medicine?.description}
                            mode="flat"
                            placeholder={`${i18n.t('common.description')} (${i18n.t('common.optional').toLowerCase()})`}
                        />
                        <HelperText type="error" visible={!!errors.medicine?.description}>
                            {errors.medicine?.description?.message}
                        </HelperText>
                    </>
                )}
            />
        </Container>
    )
}
