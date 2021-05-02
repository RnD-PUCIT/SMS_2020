import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../AppText";

function LinkButton({
  title,
  onPress,
  color = "dodgerblue",
  width = "100%",
  icon,
  style,
}) {
  return (
    <TouchableOpacity
      style={[styles.container, { width: width }, style]}
      onPress={onPress}
    >
      <View style={styles.button}>
        <AppText style={[styles.text, { color: color }]}>{title}</AppText>
        {icon && <MaterialCommunityIcons name={icon} size={16} color={color} />}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    alignItems: "center",
    textAlign: "center",
    fontSize: 20,
    marginRight: 5,
  },
});

export default LinkButton;
