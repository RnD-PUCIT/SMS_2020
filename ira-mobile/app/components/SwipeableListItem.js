import React from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";

import AppText from "./AppText";
import colors from "../config/colors";

function SwipeableListItem({ date, renderRightActions, subTitle, title }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor={colors.light}
        onPress={() => alert("presed")}
      >
        <View style={styles.container}>
          <View>
            <MaterialCommunityIcons name="home" size={40} />
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.titleContainer}>
              <AppText style={styles.title}>{title}</AppText>
              <AppText style={styles.date}>{date}</AppText>
            </View>
            <AppText numberOfLines={1} style={styles.subTitle}>
              {subTitle}
            </AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  date: {
    color: colors.medium,
    fontSize: 14,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 10,
  },
  subTitle: {
    color: colors.medium,
    fontSize: 16,
  },
  title: {
    flex: 1,
    color: colors.dark,
  },
  titleContainer: {
    flexDirection: "row",
  },
});

export default SwipeableListItem;
