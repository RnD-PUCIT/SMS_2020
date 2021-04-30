import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";

function ListItemSeperator({ color = colors.light }) {
  return <View style={[styles.seperator, { backgroundColor: color }]} />;
}

export default ListItemSeperator;

const styles = StyleSheet.create({
  seperator: {
    width: "100%",
    height: 1,
  },
});
