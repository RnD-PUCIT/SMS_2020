import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./app/navigation/DrawerNavigator";
import appTheme from "./app/navigation/navigationTheme";
import AttendanceScreen from "./app/screens/AttendanceScreen";

export default function App() {
  return (
    // <NavigationContainer theme={appTheme}>
    //   <DrawerNavigator />
    // </NavigationContainer>
    <AttendanceScreen />
  );
}
