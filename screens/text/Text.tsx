import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const TextScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Frontend <Text style={styles.bold}>Crowd</Text>
      </Text>
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
  text: {
    color: colors.secondary,
  },
  bold: {
    fontWeight: "bold",
  },
});
