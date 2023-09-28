import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
    SafeAreaProvider,
    useSafeAreaInsets,
  } from "react-native-safe-area-context";
import Login from "./screens/Auth/Login";
import { NavigationContainer } from "@react-navigation/native";
import Dashboard from "./screens/Secure/Dashboard";
import { View } from "react-native";
import { STATUSBAR } from "./constant/Colors";
import { Chat } from "./screens/Secure/Chat";
import Book from "./screens/Secure/Book";
import SingleChat from "./screens/Secure/SingleChat";


export const CustomStatusBar = ()=> {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        height: insets.top,
        backgroundColor:"#337CCF",
      }}
    />
  );
}
const Stack = createNativeStackNavigator();

const  Router= ()=> {
  
  
  
  return (
    <SafeAreaProvider>
      <CustomStatusBar />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={"Login"}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="Book" component={Book} />
          <Stack.Screen name="SingleChat" component={SingleChat} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default Router;