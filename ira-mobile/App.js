import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./app/navigation/DrawerNavigator";
import appTheme from "./app/navigation/navigationTheme";
import TimetableScreen from "./app/screens/TimetableScreen";

export default function App() {
  return (
    // <NavigationContainer theme={appTheme}>
    //   <DrawerNavigator />
    // </NavigationContainer>
    <TimetableScreen />
  );
}
