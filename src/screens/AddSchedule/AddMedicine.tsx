import { Button, Text } from 'react-native-paper'

export default function AddMedicine({ navigation }: any) {
    return (
        <Button onPress={() => navigation.navigate('Schedule')}>
            <Text>Next</Text>
        </Button>
    )
}
