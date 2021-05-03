import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../config/colors";
import colorPalette from "../constants/colorPalette";
import AppText from "./AppText";

function TextIcon({ character }) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            colorPalette[Math.floor(Math.random() * colorPalette.length)],
        },
      ]}
    >
      <AppText style={styles.textIcon}>{character}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 25,
    justifyContent: "center",
    height: 50,
    width: 50,
  },
  textIcon: {
    color: colors.white,
    fontSize: 20,
  },
});

export default TextIcon;
