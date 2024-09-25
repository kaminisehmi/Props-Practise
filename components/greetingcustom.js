import { View, Text, TextInput } from "react-native";
import React from "react";
// parent component
const Greetingcustom = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20 }}>greetingcustom</Text>
      <Message name="Rogers" status="Developer" />
      <Message name="Bell Lab" status="Mobile Company" />
      <Message name="Abc" status="Java" />
    </View>
  );
};

export default Greetingcustom;

// child component
const Message = (props) => {
  return (
    <View>
      <Text>
        Name is: {props.name} and Status is {props.status}
      </Text>
    </View>
  );
};
