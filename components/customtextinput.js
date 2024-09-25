import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React from "react";

const Customtextinput = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image1}
        source={{ uri: "https://picsum.photos/200/300?grayscale" }}
      ></Image>
      <Text style={styles.headertext}> EVERY REACT NATIVE APP</Text>

      <View style={styles.childcontainer}>
        <View style={styles.bubble}>
          <Text style={styles.innertext}>WE DID IT AGAIN</Text>
        </View>

        <View style={styles.bubble}>
          <Text style={styles.innertext}>WAIT NOT THAT MUCH</Text>
        </View>

        <View style={styles.bubble}>
          <Text style={styles.innertext}>THIS IS NOT HOW IT STARTED</Text>
        </View>

        <View style={styles.bubble}>
          <Text style={styles.innertext}>SEE...NEVER MIND</Text>
        </View>
      </View>
      <View style={{ width: "80%", marginBottom: 20 }}>
        <TextInput
          placeholder="Hello"
          style={{
            backgroundColor: "white",
            width: "30%",
            height: "auto",
            borderRadius: 40,
            paddingHorizontal: 10,
          }}
        ></TextInput>
      </View>
    </View>
  );
};

export default Customtextinput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  image1: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  headertext: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  childcontainer: {
    marginTop: 20,
    marginBottom: 30,
    alignItems: "center",
  },
  bubble: {
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    marginHorizontal: 15,
    marginVertical: 5,
    marginBottom: 5,
  },
});
