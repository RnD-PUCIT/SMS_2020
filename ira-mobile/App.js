import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./app/navigation/DrawerNavigator";
import appTheme from "./app/navigation/navigationTheme";
import CourseOutlineScreen from "./app/screens/CourseOutlineScreen";

export default function App() {
  return (
    // <NavigationContainer theme={appTheme}>
    //   <DrawerNavigator />
    // </NavigationContainer>
    <CourseOutlineScreen />
  );
}
