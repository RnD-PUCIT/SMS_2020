import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import ParentDashboard from "../screens/ParentDashboard";
import SubjectListScreen from "../screens/SubjectListScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={ParentDashboard} />
      <Drawer.Screen name="SubjectList" component={SubjectListScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
