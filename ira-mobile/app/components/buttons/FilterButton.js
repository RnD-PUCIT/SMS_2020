import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import AppText from "../AppText";

function FilterButton({ color = colors.primary }) {
  return (
    <TouchableOpacity>
      <View style={[styles.container, { borderColor: color }]}>
        <MaterialCommunityIcons name="filter-outline" color={color} size={18} />
        <AppText style={[styles.text, { color: color }]}>Filter</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  text: {
    marginLeft: 5,
    fontSize: 16,
  },
});

export default FilterButton;
