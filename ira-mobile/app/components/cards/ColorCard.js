import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import AppText from "../AppText";

function ColorCard({ title, subTitle, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <AppText style={styles.title}>{title}</AppText>
          {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
        </View>
        <View>
          <MaterialCommunityIcons
            color={colors.medium}
            name="chevron-right"
            size={20}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 10,
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginVertical: 5,
  },
  contentContainer: {
    flex: 1,
  },
  subTitle: {
    color: colors.medium,
    fontSize: 14,
    marginTop: 2,
  },
  title: {
    fontSize: 22,
  },
});

export default ColorCard;
