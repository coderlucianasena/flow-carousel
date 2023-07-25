import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import Lottie from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window'); // Responsividade

export default function OnboardingScreen() {
    const navigation = useNavigation();

    const handleDone = ()=>{
        navigation.navigate('Home');
        setItem('onboarded', '1');
    }

    const doneButton = ({...props})=>{
        return (
            <TouchableOpacity style={styles.doneButton} {...props}>
                <Text> Done </Text>
            </TouchableOpacity >
        )
    }

    return (
        <View style={styles.container}>
            <Onboarding
                onDone={handleDone}
                onSkip={handleDone}
                bottomBarHighlight={false}
                DoneButtonComponent={doneButton}
                containerStyles={{ paddingHorizontal: 15 }}
                pages={[
                    {
                        backgroundColor: '#a7f3d0',
                        image: (
                            <View style={styles.lottie}>
                                <Lottie source={require('../assets/animations/boost.json')} autoPlay loop />
                            </View>
                        ),
                        title: 'Aumentar a Produtividade',
                        subtitle: 'Inscreva-se neste canal para aumentar seu nível de produtividade',
                    },
                    {
                        backgroundColor: '#fef3c7',
                        image: (
                            <View style={styles.lottie}>
                                <Lottie source={require('../assets/animations/work.json')} autoPlay loop />
                            </View>
                        ),
                        title: 'Trabalhar Perfeitamente',
                        subtitle: 'Faça seu trabalho perfeitamente sem interrupção',
                    },
                    {
                        backgroundColor: '#a78bfa',
                        image: (
                            <View style={styles.lottie}>
                                <Lottie source={require('../assets/animations/achieve.json')} autoPlay loop />
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
        width: width * 0.9, // Responsividade
        height: width
    },
    doneButton: {
        padding: 20,
        // backgroundColor: 'white',
        // borderTopLeftRadius: '100%',
        // borderBottomLeftRadius: '100%'
    }
})