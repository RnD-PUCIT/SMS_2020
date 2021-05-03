import React, { useState, useEffect } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import Modal from "react-native-modal";

import Screen from "../components/Screen";
import AppHeading from "../components/AppHeading";
import SwipeableListItem from "../components/SwipeableListItem";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import calendar from "../constants/calendar";
import TextIcon from "../components/TextIcon";
import FilterButton from "../components/buttons/FilterButton";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ItemIcons from "../components/ItemIcons";

function AnnoucementsScreen() {
  const [allAnnoucements, setAllAnnouncements] = useState([]);
  const [filterType, setFilterType] = useState("");
  const [filteredAnnouncement, setFilteredAnnouncements] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const all = [
      ...announcementsConst.ins,
      ...announcementsConst.classs,
      ...announcementsConst.stdnt,
    ];
    setAllAnnouncements(all);
  }, []);

  return (
    <React.Fragment>
      <Screen style={styles.container}>
        <AppHeading title="Annoucnements" />
        <View style={styles.buttonContainer}>
          <FilterButton
            onPress={() => setVisible(true)}
            title={filterType ? filterType : "Filter"}
          />
        </View>
        <FlatList
          data={filteredAnnouncement ? filteredAnnouncement : allAnnoucements}
          keyExtractor={(item) => item.guid}
          renderItem={({ item }) => {
            const date = new Date(item.date);
            return (
              <SwipeableListItem
                date={`${date.getDate()} ${
                  calendar.monthLetters[date.getMonth()]
                }`}
                IconComponent={<TextIcon character={item.title.charAt(0)} />}
                renderRightActions={() => (
                  <ListItemDeleteAction onPress={() => alert("Deleted")} />
                )}
                subTitle={item.announcment}
                title={item.title}
              />
            );
          }}
          ItemSeparatorComponent={ListItemSeperator}
        />
      </Screen>
      <Modal
        isVisible={visible}
        swipeDirection="down"
        onSwipeComplete={() => setVisible(false)}
        style={{
          justifyContent: "flex-end",
          margin: 0,
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.line} />
          <AppText style={styles.modalTitle}>
            Select Announcement to filter
          </AppText>
          <FlatList
            data={filterList}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <ItemIcons
                backgroundColor={item.backgroundColor}
                icon={item.icon}
                title={item.title}
                onPress={() => {
                  setVisible(false);
                  setFilterType(item.title);
                  setFilteredAnnouncements(announcementsConst[item.name]);
                }}
              />
            )}
            numColumns={3}
          />
          <Button
            title="Clear Filters"
            onPress={() => {
              setVisible(false);
              setFilterType("");
              setFilteredAnnouncements(null);
            }}
          />
        </View>
      </Modal>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "flex-end",
    marginVertical: 10,
  },
  container: {
    paddingHorizontal: 5,
    paddingVertical: 20,
  },

  rightActionContainer: {
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 60,
  },
  line: {
    alignSelf: "center",
    backgroundColor: colors.primary,
    borderRadius: 10,
    height: 5,
    marginBottom: 15,
    width: "40%",
  },
  modalContainer: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 30,
    height: "70%",
  },
  modalTitle: {
    alignSelf: "center",
    color: colors.medium,
    fontSize: 16,
    marginBottom: 15,
  },
});

export default AnnoucementsScreen;

const filterList = [
  {
    title: "Institute Level",
    icon: "school",
    backgroundColor: "#4b7bec",
    name: "ins",
  },
  {
    title: "Class Level",
    icon: "google-classroom",
    backgroundColor: "#2bcbba",
    name: "classs",
  },
  {
    title: "Student Level",
    icon: "account",
    backgroundColor: "#a55eea",
    name: "stdnt",
  },
];

const announcementsConst = {
  ins: [
    {
      guid: "0a26ed2e-e014-4437-b301-be77f1e20c54",
      title: "Winter Vocations",
      announcment:
        "Annual winter holidays have been announced for the institue. The institue will remain close from Deceember 25,2020 till january 10,2020. Online Classes will be resumed from January 11,2020. Make your vocations productive. Good Luck. ",
      date: "2020-12-22T13:48:19.323",
      read: true,
      sessionId: 1,
    },
  ],
  classs: [
    {
      guid: "0acf10ab-74ca-4bb8-877f-f420e4819eeb",
      title: "Maths Class Timing Changed",
      announcment:
        "Now Your Maths lecture is scheduled from 11:30 AM to 12:20PM .",
      date: "2020-12-22T13:48:19.323",
      read: true,
      sessionId: 1,
    },
  ],
  stdnt: [
    {
      guid: "74531975-986a-4fd6-8d2a-d8a436643b57",
      title: "Fee Submission",
      announcment:
        "Its your second reminder to kindly submit your fee before the Due Date.   ",
      date: "2020-12-22T13:48:19.32",
      read: false,
      sessionId: 1,
    },
  ],
};
