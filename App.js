import React from "react";

//Navigation...
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";

//Fonts...
import { useFonts } from "expo-font";

//Build Themes...
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const App = () => {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
  });

  if (!loaded) return null;

  return (
    <NavigationContainer theme={theme}>
      <StackNavigator></StackNavigator>
    </NavigationContainer>
  );
};

export default App;
