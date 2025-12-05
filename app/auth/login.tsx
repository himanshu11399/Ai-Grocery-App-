import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { useRef, useEffect } from "react";
import { Animated } from "react-native";

export default function Login() {
  const [phone, setPhone] = useState("");

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

      {/* Login Illustration */}
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }],
        }}
      >
        <Image
          source={require("../../assets/images/loginimg.jpeg")}
          style={styles.image}
          resizeMode="contain"
        />
      </Animated.View>

      {/* Title */}
      <Text style={styles.title}>Enter Your Phone Number</Text>
      <Text style={styles.subtitle}>
        We will send you a verification code to continue.
      </Text>

      {/* Phone Input Card */}
      <View style={styles.inputContainer}>
        <Text style={styles.countryCode}>+91</Text>

        <TextInput
          style={styles.input}
          placeholder="Your phone number"
          placeholderTextColor="#999"
          keyboardType="phone-pad"
          maxLength={10}
          value={phone}
          onChangeText={setPhone}
        />
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        style={[styles.button, { opacity: phone.length === 10 ? 1 : 0.5 }]}
        disabled={phone.length !== 10}
        onPress={() => {
          console.log("Proceed to OTP with:", phone);
        }}
      >
        <Ionicons name="arrow-forward" size={24} color="#fff" />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: "center",
    backgroundColor: "#fcfaef",
  },

  image: {
    width: "100%",
    height: 400,
    alignSelf: "center",
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "#666",
    marginBottom: 30,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  countryCode: {
    fontSize: 18,
    fontWeight: "600",
    marginRight: 10,
  },

  input: {
    flex: 1,
    fontSize: 18,
  },

  button: {
    marginTop: 30,
    backgroundColor: "#00A651",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    elevation: 3,
  },
});
