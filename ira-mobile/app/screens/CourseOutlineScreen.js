import React from "react";
import { StyleSheet, View } from "react-native";

import Accordion from "../components/Accordion";

import AppHeading from "../components/AppHeading";
import Screen from "../components/Screen";

function CourseOutlineScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppHeading title="Course Outline" />

      <Accordion />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
});

export default CourseOutlineScreen;
