import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { ImageScreen } from "./screens/image/Image";
import { StyleScreen } from "./screens/style/Style";
import { TextScreen } from "./screens/text/Text";
import { ScrollViewScreen } from "./screens/view/ScrollView";
import { ViewScreen } from "./screens/view/View";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <StyleScreen />
    </>
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
