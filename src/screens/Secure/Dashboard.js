import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SYSTEMCOLOR } from "../../constant/Colors";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

export default function Dashboard() {
  const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
      <Button title="Open Chat" pressHandler={() => {navigate.navigate("Chat")}} />
      <Button title="Books" pressHandler={() => {navigate.navigate("Book")}} />
      <Button title="Logout" pressHandler={() => {navigate.navigate("Login")}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: SYSTEMCOLOR,
    gap:10
  },
});
