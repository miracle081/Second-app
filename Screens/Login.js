import { Text, View, StyleSheet, ImageBackground, TextInput } from 'react-native';
import { useState } from 'react';

export function Login() {
    const [email, setEmail] = useState("john@io.ai");
    const [password, setPassword] = useState("1234");
    let user = "Adam";
    user = "Mark";

    // setEmail("ben@gmail.com")

    return (
        <View style={styles.container}>
            <ImageBackground source={require("../assets/bg.png")} style={styles.bg}
            >
                <Text style={styles.header}>Log In</Text>
                <Text style={{ fontSize: 20, color: "gray" }}>Welcome back, {email}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    onChangeText={(inp) => { setEmail(inp) }}
                />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
    },
    bg: {
        height: "100%",
        width: "100%",
        justifyContent: "center",
        padding: 20,
    },
    header: {
        fontSize: 40,
        fontWeight: "bold",
    },
    input: {
        backgroundColor: "#ffffffd0",
        padding: 12,
        borderWidth: 1,
        borderColor: "lightgray",
        borderRadius: 30,
        marginTop: 20
    }
})