import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

import AppButton from "../components/buttons/AppButton";
import colors from "../config/colors";

function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={2}
      style={styles.background}
      source={require("../assets/background.jpeg")}
    >
      <View style={styles.logoContainer}>
        <Text style={styles.tagLine}>Intelligent Remote Academia</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagLine: {
    fontSize: 40,
    fontWeight: "600",
    paddingVertical: 80,
    color: colors.white,
    textAlign: "center",
    lineHeight: 60,
    letterSpacing: 3,
  },
});

export default WelcomeScreen;
