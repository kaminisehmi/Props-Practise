// how to pass multiple props:
import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Anotheprops = () => {
  return (
    <View style={{ flec: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Pass multiple props</Text>
      <Custonbuttonvr
        title="Clickme"
        count={5}
        onPress={() => alert("Increment!")}
      />
    </View>
  );
};

export default Anotheprops;
const Custonbuttonvr = ({ title, count, onPress }) => {
  return (
    <TouchableOpacity
      style={{ backgroundColor: "gray", padding: 10, borderRadius: 10 }}
      onPress={onPress}
    >
      <Text style={{ fontsize: 25, color: "blue" }}>
        {title}and Count is: {count}
      </Text>
    </TouchableOpacity>
  );
};
