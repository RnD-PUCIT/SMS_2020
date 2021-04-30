import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../components/AppText";

import ColorCard from "../components/cards/ColorCard";
import Screen from "../components/Screen";

function GradebookScreen(props) {
  return (
    <Screen style={styles.container}>
      <View>
        <AppText>Gradebook</AppText>
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
    gradeTypeName: "Assignment",
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
