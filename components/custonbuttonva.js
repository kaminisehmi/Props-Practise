// passing an array as a props
import { View, Text } from "react-native";
import React from "react";
// parent component
const Custonbuttonva = () => {
  const items = ["Apples", "Oranges", "Banana", "Mangoes"];
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 40 }}>Array</Text>
      <Itemlist name={items} />
    </View>
  );
};

export default Custonbuttonva;
// child function
const Itemlist = ({ name }) => {
  return (
    <View>
      {name.map((item, index) => (
        <Text style={{ fontSize: 40 }}>
          Array is : {item}
          and Index is: {index}
        </Text>
      ))}
    </View>
  );
};
