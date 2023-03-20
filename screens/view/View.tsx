import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const numbers = Array.from(Array(25).keys());

export const ViewScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {numbers.map((number) => (
        <View key={number} style={styles.box} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: colors.primaryDark,
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
  },
});
