import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { BUTTONCOLOR, BUTTONDARKCOLOR } from "../constant/Colors";

export default function Button({ title, pressHandler,mode }) {
  return (
    <TouchableOpacity onPress={pressHandler} style={[styles.Button, mode==="Dark"&&{backgroundColor:BUTTONDARKCOLOR}]}>
      <Text style={[{ color: "white", fontSize: 20 },mode==="Dark" && {color:"black"}]}>{title}</Text>
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
