import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import SubjectListScreen from "../screens/SubjectListScreen";
import DashboardNavigator from "./DashboardNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={DashboardNavigator} />
      <Drawer.Screen
        name="SubjectList"
        component={SubjectListScreen}
        options={{ title: "Subjects" }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
