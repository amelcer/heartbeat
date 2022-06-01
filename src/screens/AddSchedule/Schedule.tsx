import { Button, Text } from 'react-native-paper'

export default function Schedule({ navigation }: any) {
    return (
        <Button onPress={() => navigation.navigate('AddMedicine')}>
            <Text>Prev</Text>
        </Button>
    )
}
