import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import colors from "../config/colors";

function Accordion({
  bodyBg = colors.white,
  BodyComponent,
  bodyColor = colors.medium,
  headerBg = colors.light,
  headerColor = colors.white,
  title,
}) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleExpandToggle}>
        <View style={[styles.header, { backgroundColor: headerBg }]}>
          <AppText style={styles.headerText}>{title}</AppText>
          <MaterialCommunityIcons
            color={colors.medium}
            name={expanded ? "chevron-up" : "chevron-down"}
            size={20}
          />
        </View>
      </TouchableOpacity>
      {expanded && (
        <View style={[styles.body, { backgroundColor: bodyBg }]}>
          {BodyComponent}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  body: {
    borderColor: colors.light,
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginTop: 5,
  },
  header: {
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
