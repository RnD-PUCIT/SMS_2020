import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import AppHeading from "../components/AppHeading";

import AppText from "../components/AppText";
import Screen from "../components/Screen";
import TimelineColored from "../components/TimelineColored";

function DiaryScreen(props) {
  return (
    <Screen style={styles.container}>
      <ScrollView>
        <AppHeading title="Diary" />
        {diaryList.map((diary, index) => (
          <TimelineColored
            key={index}
            title={diary.diaryTitle}
            subtitle={diary.diaryContent}
            footer={diary.diaryDate}
          />
        ))}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
});

export default DiaryScreen;

const diaryList = [
  {
    diaryTitle: "Data Mining Reading",
    diaryContent: "Read Chapter 3 and 4 and 5 and 6",
    diaryDate: "2020-10-20",
  },
  {
    diaryTitle: "Regular Expression",
    diaryContent: "Practice Regular Expression",
    diaryDate: "2020-10-21",
  },
  {
    diaryTitle: "Good vs Bad Websites",
    diaryContent:
      "Write features and drawbacks and improvements for good and bad websites",
    diaryDate: "2020-09-16",
  },
  {
    diaryTitle: "Data Mining Reading",
    diaryContent: "Read Chapter 3 and 4 and 5 and 6",
    diaryDate: "2020-10-20",
  },
  {
    diaryTitle: "Regular Expression",
    diaryContent: "Practice Regular Expression",
    diaryDate: "2020-10-21",
  },
  {
    diaryTitle: "Good vs Bad Websites",
    diaryContent:
      "Write features and drawbacks and improvements for good and bad websites",
    diaryDate: "2020-09-16",
  },
];
