import { View, Text } from "react-native";
import React from "react";
// parent functions
const Objectprops = () => {
  const user = { name: "John", age: 29, location: "new York" };
  return (
    <View>
      <Text>Userprofile</Text>
      <Userprofile user={user} />
    </View>
  );
};

export default Objectprops;
// child class
const Userprofile = ({ user }) => {
  return (
    <View>
      <Text style={{ fontSize: 20 }}>Name: {user.name}</Text>
      <Text style={{ fontSize: 20 }}>Age: {user.age}</Text>
      <Text style={{ fontSize: 20 }}>Location: {user.location}</Text>
    </View>
  );
};
