import React from "react";
import { ScrollView, View, StyleSheet, SafeAreaView } from "react-native";
import { colors } from "../../constants/colors";

const numbers = Array.from(Array(5000).keys());

export const ScrollViewScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {numbers.map((number) => (
          <View key={number} style={styles.box} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryDark,
  },
  scroll: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
  },
});
