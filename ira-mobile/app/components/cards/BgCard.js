import React from "react";
import {
  ImageBackground,
  StyleSheet,
  TouchableHighlight,
  View,
} from "react-native";

import AppText from "../AppText";
import colors from "../../config/colors";

function BgCard({
  imgSrc = "https://www.gstatic.com/classroom/themes/img_bookclub.jpg",
  onPress,
  title,
  subTitle,
}) {
  return (
    <ImageBackground
      source={{
        uri: imgSrc,
      }}
      style={styles.container}
    >
      <TouchableHighlight onPress={onPress} style={{ height: "100%" }}>
        <View style={styles.textContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </TouchableHighlight>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    elevation: 2,
    height: 150,
    marginVertical: 8,
    overflow: "hidden",
  },
  subTitle: {
    color: colors.white,
    marginTop: 5,
    fontSize: 14,
  },
  title: {
    fontSize: 22,
    color: colors.white,
  },
  textContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default BgCard;
