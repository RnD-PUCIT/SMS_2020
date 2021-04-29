import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import SubjectListScreen from "../screens/SubjectListScreen";
import DashboardNavigator from "./DashboardNavigator";
import SubjectNavigator from "./SubjectNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={DashboardNavigator} />
      <Drawer.Screen
        name="SubjectList"
        component={SubjectNavigator}
        options={{ title: "Subjects" }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
