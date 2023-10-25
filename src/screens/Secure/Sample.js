import React, { useEffect } from "react";
import { Touchable, TouchableOpacity } from "react-native";
import { Text, View } from "react-native";

export default function Sample() {
  const FAHAD = () => {
    return (
      <TouchableOpacity
        style={{
          width: 80,
          height: 40,
          backgroundColor: "green",
          color: "white",
          alignItems: "center",
            justifyContent: "center",
          borderRadius: 10,
          marginVertical: 10,
          marginHorizontal: 10,
        }}
      >
        <Text>FAHAD</Text>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    console.log("hello");
  });
  useEffect(() => {
    console.log("hello from []");
  },[]);
  useEffect(() => {
    console.log("hello from [fahad]");
  },[FAHAD]);



  return (
    <>
      <FAHAD/>
      <FAHAD/>
      <FAHAD/>
      <FAHAD/>
      <FAHAD/>
    </>
  );
}
