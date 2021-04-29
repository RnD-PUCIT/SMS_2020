import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import colors from "../../config/colors";

import AppText from "../AppText";

function BgCard({
  imgSrc = "https://www.gstatic.com/classroom/themes/img_bookclub.jpg",
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
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    elevation: 3,
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
