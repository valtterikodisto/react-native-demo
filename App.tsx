import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { ImageScreen } from "./screens/image/Image";
import { StyleScreen } from "./screens/style/Style";
import { TextScreen } from "./screens/text/Text";
import { ScrollViewScreen } from "./screens/view/ScrollView";
import { ViewScreen } from "./screens/view/View";
import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ViewStackScreen } from "./screens/view/ViewStackScreen";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const getTabBarIcon = (
  opts: {
    focused: boolean;
    color: string;
    size: number;
  },
  route: RouteProp<ParamListBase, string>
) => {
  const name = (() => {
    if (route.name === "View") return "eye-outline";
    if (route.name === "Text") return "text-outline";
    if (route.name === "Image") return "image-outline";
    if (route.name === "Style") return "color-palette-outline";
    return "ios-home";
  })();
  return <Ionicons name={name} size={opts.size} color={opts.color} />;
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: (opts) => getTabBarIcon(opts, route),
          headerShown: false,
        })}
      >
        <Tab.Screen name="View" component={ViewStackScreen} />
        <Tab.Screen name="Text" component={TextScreen} />
        <Tab.Screen name="Image" component={ImageScreen} />
        <Tab.Screen name="Style" component={StyleScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
