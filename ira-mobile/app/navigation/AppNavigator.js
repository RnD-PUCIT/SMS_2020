import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ParentDashboard from "../screens/ParentDashboardScreen";
import SubjectListScreen from "../screens/SubjectListScreen";
import SubjectNavigator from "./SubjectNavigator";
import AttendanceScreen from "../screens/AttendanceScreen";

const Stack = createStackNavigator();

const DashboardNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={ParentDashboard} />
      <Stack.Screen
        name="SubjectList"
        component={SubjectListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SubjectDashboard"
        component={SubjectNavigator}
        options={({ route }) => ({ title: route.params.subjectName })}
      />
      <Stack.Screen
        name="Attendance"
        component={AttendanceScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default DashboardNavigator;
