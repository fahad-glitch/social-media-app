import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Login from "./screens/Auth/Login";
import SignUp from "./screens/Auth/SignUp";
import Book from "./screens/Secure/Book";
import { Chat } from "./screens/Secure/Chat";
import Dashboard from "./screens/Secure/Dashboard";
import SingleChat from "./screens/Secure/SingleChat";
import { getData } from "./services/Storage";
import TabularView from "./screens/Secure/TabularView";
import FlatView from "./screens/Secure/FlatView";

export const CustomStatusBar = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        height: insets.top,
        backgroundColor: "#fff",
      }}
    />
  );
};
const Stack = createNativeStackNavigator();

const Router = () => {
  const [initialRouteName, setInitialRouteName] = useState("Login");
  const getProfile = async () => {
    let data = await getData("USER");
    if (data) {
      setInitialRouteName("Dashboard");
    }
  };
  useEffect(() => {
    getProfile();
  }, []);

  return (
    <SafeAreaProvider>
      <CustomStatusBar />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={initialRouteName}
          screenOptions={{
            headerShown: false,
          }}
        >
          {/* <Stack.Screen name="Login" component={Login} /> */}
          {/* <Stack.Screen name="SignUp" component={SignUp} /> */}
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="Book" component={Book} />
          <Stack.Screen name="SingleChat" component={SingleChat} />
          <Stack.Screen name="Tabular" component={TabularView} />
          <Stack.Screen name="FlatView" component={FlatView} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Router;
