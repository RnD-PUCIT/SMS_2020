import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import AppHeading from "../components/AppHeading";
import ListItem from "../components/ListItem";
import ListItemSeperator from "../components/ListItemSeperator";

function AnnoucementsScreen() {
  const [allAnnoucements, setAllAnnouncements] = useState([]);

  useEffect(() => {
    const all = [
      ...announcementsConst.ins,
      ...announcementsConst.classs,
      ...announcementsConst.stdnt,
    ];
    setAllAnnouncements(all);
    console.log(all);
  }, []);

  return (
    <Screen style={styles.container}>
      <AppHeading title="Annoucnements" />

      <FlatList
        data={allAnnoucements}
        keyExtractor={(item) => item.guid}
        renderItem={({ item }) => <ListItem />}
        ItemSeparatorComponent={ListItemSeperator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingVertical: 20,
  },
});

export default AnnoucementsScreen;

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