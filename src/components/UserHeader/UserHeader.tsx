import { Image, View } from 'react-native'
import { IconButton } from 'react-native-paper'
import styled from 'styled-components'
import { useState } from 'react'
import { DrawerStatus } from '@react-navigation/native'

const Container = styled(View)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding-bottom: 10px;
    padding-top: 10px;
`

export default function UserHeader() {
    const [drawerStatus, setDrawerStatus] = useState<DrawerStatus>('closed')

    const handleDrawerStatus = () => {
        const newStatus: DrawerStatus = drawerStatus === 'closed' ? 'open' : 'closed'
        setDrawerStatus(newStatus)
    }

    return (
        <Container>
            <Image source={require('assets/logo.png')} />
            <IconButton icon="menu" onPress={handleDrawerStatus} />
        </Container>
    )
}
