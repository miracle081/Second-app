import { Text, View, StyleSheet, ImageBackground, TextInput, Image, Button, TouchableOpacity, Alert, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';

export function Login() {
    const [email, setEmail] = useState("john@io.ai");
    const [password, setPassword] = useState("1234");
    let user = "Adam";
    user = "Mark";

    // setEmail("ben@gmail.com")

    function displayMSG() {
        Alert.alert(
            "Alert Title",
            "The message",
            [{ text: "Noted!", onPress: () => { console.log("Instruction noted.") } }, { text: "Learn more" }]
        )
    }

    const users = [
        "John@gmail.com",
        "codebenny@codepen.io",
        "jamessmith@codeday.com"
    ]

    return (
        <View style={styles.container}>
            <ImageBackground source={require("../assets/bg.png")} style={styles.bg}
            >
                <ScrollView contentContainerStyle={{ padding: 20, justifyContent: "center", height: "100%" }}>
                    <Image source={require("../assets/logo.jpg")} style={{ width: 80, height: 80, borderRadius: 60 }} />
                    <Text style={styles.header}>Log In</Text>
                    <Text style={{ fontSize: 20, color: "gray" }}>Welcome back, {email}</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        onChangeText={(inp) => { setEmail(inp) }}
                    />
                    {/* <Button title="Submit" onPress={()=>{}} /> */}
                    <TouchableOpacity onPress={() => { displayMSG() }} style={styles.btn}>
                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>Sign In</Text>
                    </TouchableOpacity>
                    {/* <FlatList
                        data={users}
                        renderItem={({ item }) => {
                            return (
                                <Text>{item}</Text>
                            )
                        }}
                    /> */}
                </ScrollView>

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
    },
    btn: {
        backgroundColor: "#0078e9",
        padding: 10,
        borderRadius: 50,
        alignItems: "center",
        marginTop: 10
    }
})