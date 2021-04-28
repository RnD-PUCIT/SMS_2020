import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../../config/styles";

function AppTextInput({ icon, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.contaier, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          style={styles.icon}
          color={defaultStyles.colors.medium}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contaier: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    padding: 15,
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
