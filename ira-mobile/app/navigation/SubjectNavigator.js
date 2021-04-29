import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SubjectDashboardScreen from "../screens/SubjectDashboardScreen";
import SubjectListScreen from "../screens/SubjectListScreen";

const Stack = createStackNavigator();

const SubjectNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SubjectList" component={SubjectListScreen} />
      <Stack.Screen
        name="SubjectDashboard"
        component={SubjectDashboardScreen}
      />
    </Stack.Navigator>
  );
};

export default SubjectNavigator;
