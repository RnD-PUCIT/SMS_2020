import React, { useState } from "react";
import {
  Button,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../components/AppText";
import colors from "../config/colors";
import Screen from "./Screen";

function StudentPicker({ imageSrc, items, selectedItem }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {!imageSrc && (
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="account"
                size={30}
                color={colors.primary}
              />
            </View>
          )}
          <View style={styles.textContainer}>
            <AppText>Sohaib Salman</AppText>
            <AppText style={styles.subText}>Class - Section</AppText>
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
        </Screen>
      </Modal>
    </React.Fragment>
  );
}

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
  iconContainer: {
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 30,
    height: 60,
    justifyContent: "center",
    width: 60,
  },
  subText: {
    fontSize: 14,
    color: colors.medium,
  },
  textContainer: {
    alignSelf: "center",
    flex: 1,
    marginLeft: 10,
  },
});

export default StudentPicker;
