import React, { useState } from "react";
import { useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Calendar } from "react-native-calendars";

import AppHeading from "../components/AppHeading";
import Screen from "../components/Screen";
import StudentPicker from "../components/StudentPicker";

function AttendanceScreen() {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [marked, setMarked] = useState();
  useEffect(() => {
    const dates = attendance.reduce(
      (c, v) =>
        Object.assign(c, {
          [new Date(v.attendanceDate).toISOString().split("T")[0]]: {
            customStyles: {
              container: {
                backgroundColor: "green",
              },
              text: {
                color: "white",
              },
            },
          },
        }),
      {}
    );
    console.log(dates);
    setMarked(dates);
  }, []);

  return (
    <Screen style={styles.container}>
      <AppHeading title="Attendance" />
      <ScrollView>
        <StudentPicker
          items={students}
          onSelectItem={(item) => setSelectedStudent(item)}
          selectedStudent={selectedStudent ? selectedStudent : students[0]}
        />
        <Calendar markingType={"custom"} markedDates={marked} />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
});

export default AttendanceScreen;

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

const attendance = [
  {
    id: "cef4ff95-3e43-431e-afd4-250ebb8c21b4",
    attendanceDate: "9/11/2020",
    status: "P",
  },
  {
    id: "7b076038-7e2a-4999-8a16-27d268089bd4",
    attendanceDate: "9/12/2020",
    status: "P",
  },
  {
    id: "1212694f-9ac6-4432-945c-80ddbc8b4f34",
    attendanceDate: "9/14/2020",
    status: "A",
  },
  {
    id: "897cefd7-4ae1-499c-9e3c-bc4f87960e0f",
    attendanceDate: "9/15/2020",
    status: "P",
  },
  {
    id: "04b8d7f8-e6fd-40f6-b068-1413d3ae4d1b",
    attendanceDate: "9/16/2020",
    status: "L",
  },
  {
    id: "dea5736d-cdde-4e3a-904e-5c7d2cfcd854",
    attendanceDate: "9/17/2020",
    status: "P",
  },
  {
    id: "351a4b8e-c81b-4e28-ba54-9e45278d0770",
    attendanceDate: "9/18/2020",
    status: "P",
  },
  {
    id: "2d492668-ab76-400f-b260-32fb88b9e3f7",
    attendanceDate: "9/19/2020",
    status: "L",
  },
  {
    id: "6ff98c79-84c5-43ba-8ca7-53b01ae57029",
    attendanceDate: "10/1/2020",
    status: "P",
  },
  {
    id: "e244851c-48e9-4f87-9a5e-88d7acc957a6",
    attendanceDate: "10/2/2020",
    status: "P",
  },
  {
    id: "641ca04c-85c0-4f4a-87d3-cb849884603c",
    attendanceDate: "10/3/2020",
    status: "A",
  },
  {
    id: "4be84b31-4003-437f-97dc-d4932e3ff731",
    attendanceDate: "10/5/2020",
    status: "L",
  },
  {
    id: "98278003-59b0-41e5-97e3-363d2f65808d",
    attendanceDate: "10/6/2020",
    status: "P",
  },
  {
    id: "c705bb1d-f7cf-4c37-a51a-827094a63249",
    attendanceDate: "10/7/2020",
    status: "P",
  },
  {
    id: "95f98e21-018c-440e-a82a-8050c5fb2002",
    attendanceDate: "10/8/2020",
    status: "A",
  },
  {
    id: "f85e8c09-d35c-4058-bcc6-6922c140dc7e",
    attendanceDate: "10/9/2020",
    status: "P",
  },
  {
    id: "3bed1351-660c-47b4-9fb7-27848634da55",
    attendanceDate: "10/10/2020",
    status: "L",
  },
  {
    id: "3bed1351-660c-47b4-9fb7-27848634da55",
    attendanceDate: "05/7/2021",
    status: "L",
  },
];
