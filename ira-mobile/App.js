import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./app/navigation/DrawerNavigator";
import Screen from "./app/components/Screen";

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
