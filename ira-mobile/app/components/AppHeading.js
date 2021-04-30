import React from "react";
import { StyleSheet, View } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

function AppHeading({ title }) {
  return (
    <View style={styles.container}>
      <AppText style={styles.heading}>{title}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    marginBottom: 10,
  },
  heading: {
    color: colors.primary,
    fontSize: 24,
    paddingBottom: 10,
  },
});

export default AppHeading;
