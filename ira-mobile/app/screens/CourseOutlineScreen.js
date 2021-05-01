import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Accordion from "../components/Accordion";

import AppHeading from "../components/AppHeading";
import Screen from "../components/Screen";

function CourseOutlineScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppHeading title="Course Outline" />
      <ScrollView>
        <Accordion title="First Term" />
        <Accordion title="Second Term" />
        <Accordion title="Third Term" />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
});

export default CourseOutlineScreen;
