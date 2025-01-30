import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export function Layout() {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text>Layout</Text>
                <View style={styles.parent}>
                    <View style={styles.child}></View>
                    <View style={styles.child}></View>
                    <View style={styles.child}></View>
                    <View style={[styles.child, { backgroundColor: "orangered", position: "absolute", top: -20, right: -20 }]}></View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginTop: StatusBar.currentHeight,
        flex: 1
    },
    parent: {
        borderColor: "gray",
        borderWidth: 1,
        marginTop: 30,
        padding: 10,
        borderRadius: 10,
        flex: 1,
        flexDirection: "row",
        // justifyContent: "center",
        // gap: 10,
        // alignItems: "center"
    },
    child: {
        backgroundColor: "green",
        padding: 30,
        borderRadius: 10,
        margin: 5,
        height: 30,
        display: "flex",
    }

});