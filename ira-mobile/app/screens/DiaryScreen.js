import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../components/AppText";

function DiaryScreen(props) {
  return (
    <View style={styles.container}>
      <AppText>Diary</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default DiaryScreen;
