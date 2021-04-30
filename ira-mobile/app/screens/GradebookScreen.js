import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../components/AppText";

function GradebookScreen(props) {
  return (
    <View style={styles.container}>
      <AppText>Gradebook</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default GradebookScreen;
