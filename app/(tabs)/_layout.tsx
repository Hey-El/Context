import { View, Text } from "react-native";
import { useState } from "react";
import { Tabs, Link } from "expo-router";
import Icons from "../(components)/icons";
import IconButton from "../(utils)/iconButton";
import ExpenseProvider from "../(components)/context";

const Tabslayout = () => {
  return (
    <ExpenseProvider>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            headerRight: () => (
              <IconButton icon="add" size={24} color={"black"} />
            ),
            headerTitle: "All Expenses",
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <Icons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="RecentExpenses"
          options={{
            headerTitle: "Recent Expenses",
            title: "Recent",
            tabBarIcon: ({ color, size }) => (
              <Icons name="calendar" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="ManageExpenses"
          options={{
            headerTitle: "Add Expenses",
            title: "Add",
            tabBarIcon: ({ color, size }) => (
              <Icons name="bag-add-outline" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </ExpenseProvider>
  );
};

export default Tabslayout;
