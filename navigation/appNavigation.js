import React, { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen.js";
import OnboardingScreen from "../screens/OnboardingScreen.js";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {

    const [showOnboarding, setShowOnboarging] = useState(null);
    useEffect(() => {
        checkIfAlreadyOnboarded();
    }, [])

    const checkIfAlreadyOnboarded = async () => {
        let onboarded = await getItem('onboarded');
        if (onboarded == 1) {
            // hide onboarding
            setShowOnboarging(false);
        } else {
            // show onboarding
            setShowOnboarging(true);
        }
    }

    if (showOnboarding == null) {
        return null;
    }

    if (showOnboarding) {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Onboarding">
                    <Stack.Screen name="Onboarding" options={{ headerShown: false }} component={OnboardingScreen} />
                    <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    } else {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Onboarding" options={{ headerShown: false }} component={OnboardingScreen} />
                    <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }

}