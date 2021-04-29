import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ParentDashboard from "../screens/ParentDashboardScreen";
import SubjectListScreen from "../screens/SubjectListScreen";

const Stack = createStackNavigator();

const DashboardNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={ParentDashboard}></Stack.Screen>
      <Stack.Screen
        name="SubjectList"
        component={SubjectListScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default DashboardNavigator;
