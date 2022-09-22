import React from "react";

//Screens...
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
      <Stack.Screen name="Details" component={DetailsScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default StackNavigator;
