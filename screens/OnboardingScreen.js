import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';

export default function OnboardingScreen() {
    return (
        <View style={styles.container}>
            <Onboarding
                pages={[
                    {
                        backgroundColor: '#fff',
                        image: (
                            <View>
                                <Text>Hello world</Text>
                            </View>
                        ),
                        title: 'Onboarding',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                ]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
})