import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import BgCard from "../components/cards/BgCard";

import Screen from "../components/Screen";

const handleSubjectSelection = (subject) => {
  console.log(subject);
};

function SubjectListScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <ScrollView>
        {subjectList.map((subject, index) => (
          <BgCard
            key={index}
            title={subject.subjectName}
            subTitle={subject.teacherName}
            onPress={() => {
              navigation.navigate("SubjectDashboard", subject);
            }}
          />
        ))}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 5,
  },
});

export default SubjectListScreen;

const subjectList = [
  {
    id: 1,
    subjectName: "Software Quality Assurance",
    teacherName: "Muhammad Umair",
    image: "",
  },
  {
    id: 2,
    subjectName: "Information Systems",
    teacherName: "Mubashara Manzoor",
    image: "",
  },
  {
    id: 3,
    subjectName: "Professional Ethics",
    teacherName: "Madiha Saleem",
    image: "",
  },
];
