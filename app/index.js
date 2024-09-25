import { StyleSheet, Text, View } from "react-native";

import Customprop from "../components/customprop";
import Greetingcustom from "../components/greetingcustom";
import Anotheprops from "../components/anotheprops";
import Custonbuttonva from "../components/custonbuttonva";
import Objectprops from "../components/objectprops";

export default function Page() {
  return (
    <View style={{ flex: 1 }}>
      <Objectprops />
      {/* <Customprop title="clickme" onPress={() => alert("hello")}></Customprop> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
