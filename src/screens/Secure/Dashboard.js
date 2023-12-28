import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Button from "../../components/Button";
import { SYSTEMCOLOR, SYSTEMDARKCOLOR } from "../../constant/Colors";
import {
  getData,
  mergeData,
  removeData
} from "../../services/Storage";

export default function Dashboard() {
  const navigate = useNavigation();
  const [mode, setMode] = useState("Dark");

  const handleMode = () => {
    const newMode = mode === "Dark" ? "Light" : "Dark";
    setMode(newMode);
    handleData(newMode);
  };
  const handleData = async (newMode) => {
    const data = await getData("USER");
    await mergeData(`user_${data.email}`, { mode: newMode });
    await mergeData("USER", { mode: newMode });
    console.log(await getData("USER"));
    console.log("local", await getData(`user_${data.email}`));
  };

  const handleLogout = async () => {
    await removeData("USER");
    navigate.navigate("Login");
  };

  useEffect(() => {
    const getMode = async () => {
      let data = await getData("USER");
      if (data) {
        setMode(data.mode);
      }
    };
    getMode();
  }, []);

  return (
    <View
      style={[
        styles.container,
        mode === "Dark" && { backgroundColor: SYSTEMDARKCOLOR },
      ]}
    >
      <View
        style={{
          flex: 0.1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={[
            { fontSize: 16, fontWeight: 700 },
            mode === "Dark" && { color: "white" },
          ]}
        >
          Dashboard
        </Text>
        <TouchableOpacity onPress={handleMode}>
          <Text
            style={[
              { fontSize: 16, fontWeight: 700 },
              mode === "Dark" && { color: "white" },
            ]}
          >
            {mode}
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 0.9,
          gap: 9,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Button
          title="Open Chat"
          pressHandler={() => {
            navigate.navigate("Chat");
          }}
          mode={mode}
        />
        <Button
          title="Books"
          pressHandler={() => {
            navigate.navigate("Book");
          }}
          mode={mode}
        />
        <Button
          title="Lab Final"
          pressHandler={() => {
            navigate.navigate("FlatView");
          }}
          mode={mode}
        />
        <Button title="Logout" pressHandler={handleLogout} mode={mode} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SYSTEMCOLOR,
    gap: 10,
  },
});
