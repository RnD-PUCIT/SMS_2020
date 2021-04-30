import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Gradebook from "../screens/GradebookScreen";
import DiaryScreen from "../screens/DiaryScreen";
import CourseOutlineScreen from "../screens/CourseOutlineScreen";

const Tabs = createBottomTabNavigator();

const SubjectNavigator = () => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        style: { height: 55 },
        labelStyle: { paddingBottom: 5 },
      }}
    >
      <Tabs.Screen
        name="Gradebook"
        component={Gradebook}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="clipboard-check-multiple"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Diary"
        component={DiaryScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="clipboard-list"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="CourseOutline"
        component={CourseOutlineScreen}
        options={{
          title: "Course Outline",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="format-list-text"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default SubjectNavigator;
