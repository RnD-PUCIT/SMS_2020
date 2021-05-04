import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import { useState } from "react/cjs/react.development";

import AppHeading from "../components/AppHeading";
import AppText from "../components/AppText";
import ListItemSeperator from "../components/ListItemSeperator";
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
            return (
              <Table
                data={item}
                classInfo={`${timetable.classInfo.name} - ${timetable.classInfo.section}`}
              />
            );
          }}
        />
      </View>
    </Screen>
  );
}

const Table = ({ classInfo, data }) => {
  return (
    <View style={styles.tableContainer}>
      <AppText style={styles.classInfo}>{classInfo}</AppText>
      <AppText style={styles.dayTitle}>{data.dayName}</AppText>
      <FlatList
        style={{ width: "100%" }}
        data={data.schedule}
        keyExtractor={(item) => item.timeSlot}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <AppText style={styles.itemSubTitle}>{item.timeSlot}</AppText>
            <AppText style={styles.itemTite}>
              {item.subjectName + " Lecture"}
            </AppText>
          </View>
        )}
        ItemSeparatorComponent={ListItemSeperator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingVertical: 20,
  },
  classInfo: {
    color: colors.white,
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 20,
    marginTop: 5,
    width: "100%",
  },
  dayTitle: {
    borderRadius: 5,
    color: colors.medium,
    marginBottom: 10,
    backgroundColor: "#ecedff",
    padding: 10,
    width: "100%",
    textAlign: "center",
  },
  itemContainer: {
    paddingVertical: 10,
    width: "100%",
  },
  itemSubTitle: {
    alignSelf: "center",
    borderRadius: 10,
    color: colors.light,
    fontSize: 12,
    paddingHorizontal: 10,
    textAlign: "center",
  },
  itemTite: {
    color: colors.white,
    textAlign: "center",
  },
  tableContainer: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 20,
    elevation: 5,
    height: "93%",
    padding: 10,
    marginTop: 5,
  },
});

export default TimetableScreen;

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
