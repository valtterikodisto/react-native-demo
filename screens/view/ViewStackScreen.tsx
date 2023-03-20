import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Platform } from "react-native";
import { colors } from "../../constants/colors";
import { FlatListScreen } from "./FlatList";
import { ScrollViewScreen } from "./ScrollView";
import { ViewScreen } from "./View";

type StackParamList = {
  ViewScreen: undefined;
  ScrollViewScreen: undefined;
  FlatListScreen: undefined;
};

type NavigationProps = NativeStackNavigationProp<StackParamList>;

const Stack = createNativeStackNavigator<{
  ViewScreen: undefined;
  ScrollViewScreen: undefined;
  FlatListScreen: undefined;
}>();

const NextButton: React.FC<{ nextScreen: keyof StackParamList }> = ({
  nextScreen,
}) => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <Button
      onPress={() => navigation.navigate(nextScreen)}
      title="Next"
      color={Platform.OS === "ios" ? colors.iosSystemBlue : "#000"}
    />
  );
};

export const ViewStackScreen: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ViewScreen"
        component={ViewScreen}
        options={{
          headerRight: () => <NextButton nextScreen="ScrollViewScreen" />,
        }}
      />
      <Stack.Screen
        name="ScrollViewScreen"
        component={ScrollViewScreen}
        options={{
          headerRight: () => <NextButton nextScreen="FlatListScreen" />,
        }}
      />
      <Stack.Screen name="FlatListScreen" component={FlatListScreen} />
    </Stack.Navigator>
  );
};
