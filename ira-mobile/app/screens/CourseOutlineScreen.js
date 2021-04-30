import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../components/AppText";

function CourseOutlineScreen(props) {
  return (
    <View style={styles.container}>
      <AppText>Course Outline</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default CourseOutlineScreen;
