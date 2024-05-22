import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Icons = ({ name, size = 24, color = "black" }) => {
  return (
    <View>
      <Ionicons name={name} size={size} color={color} />
    </View>
  );
};

export default Icons;
