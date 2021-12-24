import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default ({route, navigation}) => {
    // console.warn(Object.keys(props))
    // console.warn(Object.keys(props.route))
    // console.warn(Object.keys(props.route.params))

    const [user, setUser] = useState(route.params ? route.params : {})

    return (
        <View style={style.form}>
            <Text>Nome</Text>
            <TextInput
                style={style.input}
                onChangeText={name => setUser({...user, name})}
                placeholder='Informe o Nome'
                value={user.name}
            />

            <Text>Email</Text>
            <TextInput
                style={style.input}
                onChangeText={email => setUser({...user, email})}
                placeholder='Informe o E-mail'
                value={user.email}
            />

            <Text>URL do Avatar</Text>
            <TextInput
                style={style.input}
                onChangeText={avatarURL => setUser({...user, avatarURL})}
                placeholder='Informe a URL do Avatar'
                value={user.avatarURL}
            />
        </View>
    )
}

const style = StyleSheet.create({
    form: {
        padding: 15
    },
    input: {
        height: 40,
        borderColor: '#CCC',
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 5,
    }
})