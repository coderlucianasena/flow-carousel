import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import Lottie from 'lottie-react-native';

const {width, height} = Dimensions.get('window'); // Responsividade

export default function OnboardingScreen() {
    return (
        <View style={styles.container}>
            <Onboarding
                containerStyles={{paddingHorizontal: 15}}
                pages={[
                    {
                        backgroundColor: '#fff',
                        image: (
                            <View style={styles.lottie}>
                                <Lottie source={require('../assets/animations/boost.json')} autoPlay loop />
                            </View>
                        ),
                        title: 'Aumentar a Produtividade',
                        subtitle: 'Inscreva-se neste canal para aumentar seu nível de produtividade',
                    },
                    {
                        backgroundColor: '#fff',
                        image: (
                            <View>
                                <Lottie source={require('../assets/animations/boost.json')} autoPlay loop />
                            </View>
                        ),
                        title: 'Trabalhar Perfeitamente',
                        subtitle: 'Faça seu trabalho perfeitamente sem interrupção',
                    },
                    {
                        backgroundColor: '#fff',
                        image: (
                            <View>
                                 <Lottie source={require('../assets/animations/boost.json')} autoPlay loop />
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
    },
    lottie: {
        width: width*0.9,
        height: width
    }
})