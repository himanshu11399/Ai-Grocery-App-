import { StyleSheet, Text, View, Image, Animated } from 'react-native'
import SplashIcon from '../assets/images/splashicon.svg';
import React, { useEffect } from 'react'
import { useRef } from 'react';


const SplashScreen = () => {

    const fadeAnim = useRef(new Animated.Value(0)).current;  // opacity
    const scaleAnim = useRef(new Animated.Value(0.8)).current; //scale

    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true,
            }),
            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true,
            })
        ]).start();
    }, []);

    return (
        <View style={styles.container}>

            {/* Animate Logo */}

            <View style={styles.logoContainer}>
                <Animated.View
                    style={{
                        opacity: fadeAnim,
                        transform: [{ scale: scaleAnim }],
                    }}
                >
                    <SplashIcon width={160} height={160} />
                </Animated.View>



            </View>

            {/* Bottom Vegetables Image */}
            <Image
                source={require('../assets/images/splashbottom.jpg')}
                style={styles.bottomImage}
                resizeMode="cover"
            />
        </View>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },

    logoContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    bottomImage: {
        width: "100%",
        height: 300,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
    }

})
