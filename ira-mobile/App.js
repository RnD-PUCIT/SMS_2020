import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./app/navigation/DrawerNavigator";
import appTheme from "./app/navigation/navigationTheme";
import DiaryScreen from "./app/screens/DiaryScreen";

export default function App() {
  return (
    // <NavigationContainer theme={appTheme}>
    //   <DrawerNavigator />
    // </NavigationContainer>
    <DiaryScreen />
  );
}
