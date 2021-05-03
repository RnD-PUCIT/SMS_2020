import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import AppText from "./AppText";

function ItemIcons({ backgroundColor, icon, onPress, title }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View
        style={[styles.iconContainer, { backgroundColor: backgroundColor }]}
      >
        <MaterialCommunityIcons color={colors.white} name={icon} size={50} />
      </View>
      <AppText style={styles.text}>{title}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "33.3%",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  iconContainer: {
    alignItems: "center",
    borderRadius: 40,
    height: 80,
    justifyContent: "center",
    width: 80,
  },
  text: {
    marginTop: 10,
    textAlign: "center",
    color: colors.dark,
  },
});

export default ItemIcons;
