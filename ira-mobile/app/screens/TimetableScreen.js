import React from "react";
import { StyleSheet, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import { useState } from "react/cjs/react.development";

import AppHeading from "../components/AppHeading";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import colors from "../config/colors";

function TimetableScreen() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Screen style={styles.container}>
      <AppHeading title="Time Table" />
      <View style={styles.carouselContainer}>
        <Carousel
          layout="default"
          data={timetable.timeTableInfo}
          sliderWidth={350}
          itemWidth={300}
          onSnapToItem={(index) => setActiveIndex(index)}
          renderItem={({ item }) => {
            return <Table data={item} />;
          }}
        />
      </View>
    </Screen>
  );
}

const Table = ({ data }) => {
  return (
    <View style={styles.tableContainer}>
      <AppText style={styles.dayTitle}>{data.dayName}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
  tableContainer: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 20,
    elevation: 5,
    height: "92%",
    marginTop: 5,
  },
  dayTitle: {
    color: colors.white,
  },
});

export default TimetableScreen;

const test = [
  {
    title: "asd",
  },
  {
    title: "123",
  },
  {
    title: "xyz",
  },
];

const timetable = {
  classInfo: { name: "8th", section: "Blue" },
  timeTableInfo: [
    {
      dayName: "Monday",
      schedule: [
        {
          subjectName: "Physics",
          teacherName: "Nadeem Abbas",
          timeSlot: "8:00 - 8:30",
        },
        {
          subjectName: "Math",
          teacherName: "Shahvez Ali",
          timeSlot: "8:30 - 9:00",
        },
        {
          subjectName: "English",
          teacherName: "Shakeel Zafar",
          timeSlot: "9:00 - 10:00",
        },
      ],
    },
    {
      dayName: "Tuesday",
      schedule: [
        {
          subjectName: "Physics",
          teacherName: "Nadeem Abbas",
          timeSlot: "8:00 - 8:30",
        },
        {
          subjectName: "Math",
          teacherName: "Shahvez Ali",
          timeSlot: "8:30 - 9:00",
        },
        {
          subjectName: "English",
          teacherName: "Shakeel Zafar",
          timeSlot: "9:00 - 10:00",
        },
      ],
    },
    { dayName: "Wednesday", schedule: [] },
    { dayName: "Thursday", schedule: [] },
    { dayName: "Friday", schedule: [] },
    { dayName: "Saturday", schedule: [] },
    { dayName: "Sunday", schedule: [] },
  ],
};
