import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GridLinkItem from "../components/GridLinkItem";

import Screen from "../components/Screen";
import StudentPicker from "../components/StudentPicker";

function ParentDashboard({ navigation }) {
  const [selectedStudent, setSelectedStudent] = useState(null);
  return (
    <Screen style={styles.container}>
      <StudentPicker
        items={students}
        onSelectItem={(item) => setSelectedStudent(item)}
        selectedStudent={selectedStudent ? selectedStudent : students[0]}
      />
      <View style={styles.dashboard}>
        <FlatList
          data={dashboardList}
          numColumns={3}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GridLinkItem
              item={item}
              onPress={() => navigation.navigate(item.link)}
            />
          )}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
  dashboard: {
    flexDirection: "row",
  },
});

export default ParentDashboard;

const dashboardList = [
  {
    id: 1,
    title: "Subjects",
    backgroundColor: "#fc5c65",
    icon: "book-open-outline",
    link: "SubjectList",
  },
  {
    id: 2,
    title: "Attendance",
    backgroundColor: "#fd9644",
    icon: "calendar-check-outline",
    link: "Attendance",
  },
  {
    id: 3,
    title: "Announcements",
    backgroundColor: "#fed330",
    icon: "bell-outline",
    link: "Announcements",
  },
  {
    id: 4,
    title: "Time Table",
    backgroundColor: "#2bcbba",
    icon: "table-clock",
  },
  {
    id: 4,
    title: "Fee Challan",
    backgroundColor: "#26de81",
    icon: "cash-usd-outline",
  },
];

const students = [
  {
    id: 1,
    firstName: "Sohaib",
    lastName: "Salman",
    className: "BS IT",
    section: "F17 Afternoon",
    profilePic: "",
  },
  {
    id: 2,
    firstName: "Arslan",
    lastName: "Yousaf",
    className: "BS IT",
    section: "F17 Afternoon",
    profilePic: "",
  },
  {
    id: 3,
    firstName: "Daniyal",
    lastName: "Ahmed",
    className: "BS IT",
    section: "F17 Afternoon",
    profilePic: "",
  },
  {
    id: 4,
    firstName: "Tehreem",
    lastName: "Akhter",
    className: "BS IT",
    section: "F17 Afternoon",
    profilePic: "",
  },
  {
    id: 5,
    firstName: "Zainab",
    lastName: "Zulfiqar",
    className: "BS IT",
    section: "F17 Afternoon",
    profilePic: "",
  },
];
