import React from "react";
import { StyleSheet, View } from "react-native";

import AppHeading from "../components/AppHeading";
import ColorCard from "../components/cards/ColorCard";
import Screen from "../components/Screen";

function GradebookScreen(props) {
  return (
    <Screen style={styles.container}>
      <View>
        <AppHeading title="Gradebook" />
      </View>
      <View>
        {gradeTypeList.map((gradeType, index) => (
          <ColorCard
            key={index}
            title={gradeType.gradeTypeName}
            onPress={() => alert(`${gradeType.gradeTypeName} pressed`)}
          />
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
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
