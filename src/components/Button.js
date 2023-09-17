import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { BUTTONCOLOR } from "../constant/Colors";

export default function Button({ title, pressHandler }) {
  return (
    <TouchableOpacity onPress={pressHandler} style={styles.Button}>
      <Text style={{ color: "white", fontSize: 20 }}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Button: {
    backgroundColor: BUTTONCOLOR,
    width: "80%",
    padding: 10,
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
