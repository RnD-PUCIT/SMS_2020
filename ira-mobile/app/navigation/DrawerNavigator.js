import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import AppNavigator from "./AppNavigator";
import SubjectListScreen from "../screens/SubjectListScreen";
import AttendanceScreen from "../screens/AttendanceScreen";
import AnnoucementsScreen from "../screens/AnnoucementsScreen";
import TimetableScreen from "../screens/TimetableScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={AppNavigator} />
      <Drawer.Screen
        name="SubjectList"
        component={SubjectListScreen}
        options={{ title: "Subjects" }}
      />
      <Drawer.Screen name="Attendance" component={AttendanceScreen} />
      <Drawer.Screen name="Announcements" component={AnnoucementsScreen} />
      <Drawer.Screen
        name="Timetable"
        component={TimetableScreen}
        options={{ title: "Time Table" }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
