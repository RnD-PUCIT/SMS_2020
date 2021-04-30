import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import AppHeading from "../components/AppHeading";
import ColorCard from "../components/cards/ColorCard";
import Screen from "../components/Screen";

function GradebookScreen(props) {
  return (
    <Screen style={styles.container}>
      <ScrollView>
        <AppHeading title="Gradebook" />
        {gradeTypeList.map((gradeType, index) => (
          <ColorCard
            key={index}
            title={gradeType.gradeTypeName}
            onPress={() => alert(`${gradeType.gradeTypeName} pressed`)}
          />
        ))}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingBottom: 10,
  },
});

export default GradebookScreen;

const gradeTypeList = [
  {
    id: 1,
    gradeTypeName: "Assignments",
  },
  {
    id: 2,
    gradeTypeName: "Quizes",
  },
  {
    id: 3,
    gradeTypeName: "Projects",
  },
];
