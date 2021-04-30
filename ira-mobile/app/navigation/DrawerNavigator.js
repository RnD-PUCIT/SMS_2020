import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import AppNavigator from "./AppNavigator";
import SubjectListScreen from "../screens/SubjectListScreen";

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
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
