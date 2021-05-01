import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import colors from "../config/colors";

function Accordion(props) {
  const [expanded, setExpanded] = useState(false);

  const handleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleExpanded}>
        <View style={styles.header}>
          <AppText style={styles.headerText}>First Term</AppText>
          <MaterialCommunityIcons
            color={colors.medium}
            name={expanded ? "chevron-up" : "chevron-down"}
            size={20}
          />
        </View>
      </TouchableOpacity>
      {expanded && (
        <View style={styles.body}>
          <AppText>
            This is the data of the accordion. It will be a dynamic component
          </AppText>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  body: {
    backgroundColor: colors.light,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  header: {
    backgroundColor: colors.light,
    borderRadius: 10,
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  headerText: {
    flex: 1,
  },
});

export default Accordion;
