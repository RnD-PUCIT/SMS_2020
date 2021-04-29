import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../components/AppText";
import colors from "../config/colors";

function StudentPicker({ imageSrc }) {
  return (
    <React.Fragment>
      <View style={styles.container}>
        {!imageSrc && (
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="account" />
          </View>
        )}
        <AppText>Sohaib Salman</AppText>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flexDirection: "row",
  },
  iconContainer: {
    alignItems: "center",
    backgroundColor: colors.light,
    justifyContent: "center",
  },
});

export default StudentPicker;
