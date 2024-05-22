import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import ExpenseProvider from "./(components)/context";

const Stacklayout = () => {
  return (
    <ExpenseProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ExpenseProvider>
  );
};

export default Stacklayout;
