import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Lottie from 'lottie-react-native';

const { width, height } = Dimensions.get('window'); // Responsividade

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.lottie}>
                <Lottie source={require('../assets/animations/confetti.json')} autoPlay loop />
            </View>
            <Text style={styles.text}>Home Page</Text>
            <TouchableOpacity style={styles.resetButton}>
                <Text>Reset</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    lottie: {
        width: width * 0.9, // Responsividade
        height: width
    },
    text: {
        fontSize: width * 0.09,
        marginBottom: 20
    },
    resetButton: {
        backgroundColor: '#34d399',
        padding: 10,
        borderRadius: 10,
    }
})