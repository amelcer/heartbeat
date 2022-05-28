import React from 'react'
import { View } from 'react-native'
import { Button, Text } from 'react-native-paper'

export default function SignIn() {
    return (
        <View>
            <Text>Default</Text>
            <Text style={{ fontFamily: 'Epilogue-Bold' }}>Bold</Text>
            <Text style={{ fontFamily: 'Epilogue-Medium' }}>Medium</Text>
            <Text style={{ fontFamily: 'Epilogue-Regular' }}>Regular</Text>
            <Text style={{ fontFamily: 'Epilogue-Light' }}>Light</Text>
            <Button mode="contained">
                <Text style={{ color: '#fff' }}>Click</Text>
            </Button>
        </View>
    )
}
