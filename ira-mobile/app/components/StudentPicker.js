import React, { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../components/AppText";
import colors from "../config/colors";
import Screen from "./Screen";

function StudentPicker({ items, selectedItem }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {!selectedItem.profilePic && (
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="account"
                size={30}
                color={colors.primary}
              />
            </View>
          )}
          <View style={styles.textContainer}>
            <AppText>{`${selectedItem.firstName} ${selectedItem.lastName}`}</AppText>
            <AppText
              style={styles.subText}
            >{`${selectedItem.className} - ${selectedItem.section}`}</AppText>
          </View>
          <View style={styles.dropDownIcon}>
            <MaterialCommunityIcons
              name="chevron-down"
              size={20}
              color={colors.medium}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <StudenItem item={item} />}
          />
        </Screen>
      </Modal>
    </React.Fragment>
  );
}

const StudenItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.pickerItemContainer}>
        {!item.profilePic && (
          <View style={[styles.iconContainer, styles.greyIcon]}>
            <MaterialCommunityIcons
              name="account"
              size={30}
              color={colors.primary}
            />
          </View>
        )}
        <View style={styles.textContainer}>
          <AppText>{`${item.firstName} ${item.lastName}`}</AppText>
          <AppText
            style={styles.subText}
          >{`${item.className} - ${item.section}`}</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 10,
    flexDirection: "row",
    padding: 10,
  },
  dropDownIcon: {
    alignSelf: "center",
  },
  greyIcon: {
    backgroundColor: colors.light,
    borderRadius: 25,
    height: 50,
    justifyContent: "center",
    width: 50,
  },
  iconContainer: {
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 30,
    height: 60,
    justifyContent: "center",
    width: 60,
  },
  pickerItemContainer: {
    flexDirection: "row",
    padding: 10,
  },
  subText: {
    fontSize: 14,
    color: colors.medium,
    marginTop: 1,
  },
  textContainer: {
    alignSelf: "center",
    flex: 1,
    marginLeft: 10,
  },
});

export default StudentPicker;
