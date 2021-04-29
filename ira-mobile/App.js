import React from "react";

import Screen from "./app/components/Screen";
import StudentPicker from "./app/components/StudentPicker";

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

export default function App() {
  return (
    <Screen>
      <StudentPicker items={students} selectedItem={students[0]} />
    </Screen>
  );
}
