import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import AppNavigator from "./AppNavigator";
import SubjectListScreen from "../screens/SubjectListScreen";
import AttendanceScreen from "../screens/AttendanceScreen";

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
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
