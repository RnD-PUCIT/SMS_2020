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
import ListItemSeperator from "./ListItemSeperator";

function StudentPicker({ items, onSelectItem, selectedStudent }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {!selectedStudent.profilePic && (
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="account"
                size={30}
                color={colors.primary}
              />
            </View>
          )}
          <View style={styles.textContainer}>
            <AppText>{`${selectedStudent.firstName} ${selectedStudent.lastName}`}</AppText>
            <AppText
              style={styles.subText}
            >{`${selectedStudent.className} - ${selectedStudent.section}`}</AppText>
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
          <View style={styles.closeButton}>
            <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
              <View
                style={{
                  backgroundColor: colors.light,
                  width: 30,
                  height: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 15,
                }}
              >
                <MaterialCommunityIcons
                  name="close"
                  size={20}
                  color={colors.medium}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
          <FlatList
            data={items}
            ItemSeparatorComponent={ListItemSeperator}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <StudenItem
                item={item}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
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
    marginBottom: 10,
  },
  closeButton: {
    alignItems: "flex-end",
    marginRight: 15,
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
