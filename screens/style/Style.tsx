import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const StyleScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box} />
      <View style={[styles.box, styles.whiteBg]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: "white",
  },
  box: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: colors.secondary,
    // Shadow for iOS
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    // Shadow for android
    elevation: 10,
  },
  whiteBg: {
    backgroundColor: "white",
  },
});
