import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ParentDashboard from "../screens/ParentDashboardScreen";
import SubjectListScreen from "../screens/SubjectListScreen";
import SubjectDashboardScreen from "../screens/SubjectDashboardScreen";

const Stack = createStackNavigator();

const DashboardNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={ParentDashboard} />
      <Stack.Screen name="SubjectList" component={SubjectListScreen} />
      <Stack.Screen
        name="SubjectDashboard"
        component={SubjectDashboardScreen}
        options={({ route }) => ({ title: route.params.subjectName })}
      />
    </Stack.Navigator>
  );
};

export default DashboardNavigator;
