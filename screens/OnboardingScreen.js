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
                        title: 'Aumentar a Produtividade',
                        subtitle: 'Inscreva-se neste canal para aumentar seu nível de produtividade',
                    },
                    {
                        backgroundColor: '#fff',
                        image: (
                            <View>
                                <Text>Hello world</Text>
                            </View>
                        ),
                        title: 'Trabalhar Perfeitamente',
                        subtitle: 'Faça seu trabalho perfeitamente sem interrupção',
                    },
                    {
                        backgroundColor: '#fff',
                        image: (
                            <View>
                                <Text>Hello world</Text>
                            </View>
                        ),
                        title: 'Atingir metas mais altas',
                        subtitle: 'Ao aumentar sua produtividade, ajudamos você a atingir metas mais altas',
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