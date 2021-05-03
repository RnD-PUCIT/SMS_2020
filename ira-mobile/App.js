import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./app/navigation/DrawerNavigator";
import appTheme from "./app/navigation/navigationTheme";
import AnnoucementsScreen from "./app/screens/AnnoucementsScreen";

export default function App() {
  return (
    // <NavigationContainer theme={appTheme}>
    //   <DrawerNavigator />
    // </NavigationContainer>
    <AnnoucementsScreen />
  );
}
