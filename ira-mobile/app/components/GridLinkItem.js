import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";

function GridLinkItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ width: "100%" }} onPress={onPress}>
        <View
          style={[
            styles.iconContainer,
            { backgroundColor: item.backgroundColor },
          ]}
        >
          <MaterialCommunityIcons name={item.icon} size={40} color="white" />
        </View>
        <AppText style={styles.title}>{item.title}</AppText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "33.3%",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  iconContainer: {
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    elevation: 3,
  },
  title: {
    fontSize: 14,
    marginTop: 8,
    textAlign: "center",
  },
});

export default GridLinkItem;
