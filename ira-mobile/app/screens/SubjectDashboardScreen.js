import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../components/AppText";

function SubjectDashboardScreen({ route }) {
  return (
    <View style={styles.container}>
      <AppText>Subject Dashboard</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default SubjectDashboardScreen;
