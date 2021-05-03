import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";

function ListItem() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="home" size={40} />
      <View style={styles.detailsContainer}>
        <AppText>Title</AppText>
        <AppText>Sub Title</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

export default ListItem;
