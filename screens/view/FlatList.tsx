import React from "react";
import { View, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { colors } from "../../constants/colors";

const numbers = Array.from(Array(5000).keys()).map((number) => ({
  id: number,
  value: number,
}));

export const FlatListScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={styles.scroll}
        data={numbers}
        renderItem={() => <View style={styles.box} />}
        keyExtractor={(item) => item.id.toString()}
      />
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
