import React from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Accordion from "../components/Accordion";
import AppHeading from "../components/AppHeading";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ListItemSeperator from "../components/ListItemSeperator";

function CourseOutlineScreen(props) {
  const handleOutlinePress = (item) => {
    alert(item.title + " pressed");
  };

  return (
    <Screen style={styles.container}>
      <AppHeading title="Course Outline" />
      <ScrollView>
        {courseOutlineConst.outline.map((term, index) => (
          <Accordion
            key={index}
            title={term.termName}
            headerBg={colors.secondary}
            headerColor={colors.white}
            BodyComponent={
              <FlatList
                data={term.details}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => handleOutlinePress(item)}>
                    <View style={styles.outlineContainer}>
                      <MaterialCommunityIcons
                        color={item.status ? "green" : "red"}
                        name={item.status ? "check-circle" : "close-circle"}
                        size={25}
                        style={styles.outlineIcon}
                      />
                      <AppText style={styles.outlineTitle}>
                        {item.title}
                      </AppText>
                      <MaterialCommunityIcons
                        name="chevron-right"
                        size={20}
                        color={colors.medium}
                      />
                    </View>
                  </TouchableOpacity>
                )}
                ItemSeparatorComponent={ListItemSeperator}
              />
            }
          />
        ))}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    flex: 1,
  },
  outlineContainer: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  outlineIcon: {
    marginRight: 10,
  },
  outlineTitle: {
    flex: 1,
  },
});

export default CourseOutlineScreen;

const courseOutlineConst = {
  outline: [
    {
      termName: "First Term",
      details: [
        {
          title: "Chapter 1",
          description: "DMAS Rules",
          date: "01/01/2021 12:00:00 AM",
          status: 0,
          lectureContentFilesList: {
            references: "if any",
            date: "",
            extension: "",
          },
        },
        {
          title: "Chapter 2",
          description: "Multiplication And Division",
          date: "01/02/2021 12:00:00 AM",
          status: 1,
          lectureContentFilesList: {
            references: "if any",
            date: "",
            extension: "",
          },
        },
        {
          title: "Chapter 3",
          description: "Geometry Concepts",
          date: "01/03/2021 12:00:00 AM",
          status: 1,
        },
        {
          title: "Revision",
          description: "Revision of Concepts",
          date: "01/03/2021 12:00:00 AM",
          status: 1,
        },
        {
          title: "Chapter 4",
          description: "Human Rights and Laws",
          date: "01/04/2021 12:00:00 AM",
          status: 0,
        },
      ],
    },
    {
      termName: "Second Term",
      details: [
        {
          title: "Chapter 5",
          description: "Ethical Behavior and its Obligations ",
          date: "02/05/2021 12:00:00 AM",
          status: 1,
        },
        {
          title: "Chapter 6",
          description: "Sythetic Division",
          date: "02/06/2021 12:00:00 AM",
          status: 0,
        },
        {
          title: "Chapter 7",
          description: "Crammers Rule",
          date: "02/07/2021 12:00:00 AM",
          status: 0,
        },
      ],
    },
    {
      termName: "Final Term",
      details: [
        {
          title: "Chapter 9",
          description: "Full Book Revision",
          date: "03/05/2021 12:00:00 AM",
          status: 0,
        },
      ],
    },
  ],
};
