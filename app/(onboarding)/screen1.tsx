import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";
import Ionicon from '@expo/vector-icons/Ionicons';
import { use, useEffect } from "react";

export default function Screen1() {
  useEffect(()=>{
   setTimeout(()=>{
    router.replace("/screen2")
   },3000)
  },[]);

  return (
    <View style={styles.container}>

      {/* Skip Button */}
      <TouchableOpacity 
        style={styles.skipButton}
        onPress={() => router.replace("/auth/login")}
      >
        <Text style={styles.skipText}>Skip</Text>
        <Ionicon name="arrow-forward" size={16} color="#fff" />
      </TouchableOpacity>

      {/* Top Image */}
      <Image 
        source={require("../../assets/images/board1.png")} 
        style={styles.heroImage}
        resizeMode="contain"
      />

      {/* Bottom Card */}
      <View style={styles.cardContainer}>

        {/* Pagination Dots */}
        <View style={styles.dotRow}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <Text style={styles.title}>Buy Groceries Easily with Us</Text>
        <Text style={styles.subtitle}>
          It is a long established fact that a reader will be distracted by the readable.
        </Text>

        {/* Next Button */}
        <TouchableOpacity 
          style={styles.nextButton}
          onPress={() => router.replace("/(onboarding)/screen2")}
        >
          <Ionicon name="arrow-forward" style={styles.nextArrow} />
        </TouchableOpacity>

      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d9f7d9", // Light green background
    paddingTop: 60,
  },

  skipButton: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    top: 50,
    right: 20,
    backgroundColor: "#44bb4cff",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    zIndex: 10,
  },

  skipText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
  },

  heroImage: {
    width: "100%",
    height: 330,
    marginTop: 80,
  },

  cardContainer: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    borderRadius: 25,
    paddingVertical: 25,
    paddingHorizontal: 20,
    marginTop: -40,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },

  dotRow: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 15,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },

  activeDot: {
    backgroundColor: "#00A651",
    width: 10,
    height: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 5,
  },

  subtitle: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
    marginTop: 8,
    paddingHorizontal: 15,
  },

  nextButton: {
    backgroundColor: "#00A651",
    width: 55,
    height: 55,
    borderRadius: 30,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },

  nextArrow: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
});
