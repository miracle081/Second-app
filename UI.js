import { Text, View, StyleSheet } from "react-native";

export function UI() {

    return (
        <View style={styles.container}>
            <Text style={{ color: "red", marginVertical: 30, textAlign: "center", fontSize: 30 }}>Welcome to React Native Class</Text>
            <Text>What id React Native?</Text>
            <Text>
                React Native is a JavaScript framework for writing real, natively rendering mobile applications for iOS and Android.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "lightblue",
        // margin: 20,
        padding: 20,
        paddingTop: 50,
        borderWidth: 5,
        borderColor: "blue",
        borderRadius: 50,
    }
});