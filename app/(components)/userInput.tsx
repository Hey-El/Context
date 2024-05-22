import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

function UserInput({
  label,
  value,
  keyboardType = "default",
  onChangeText,
  placeholder = "",
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  );
}

export default UserInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center", // Center align items vertically
    paddingBottom: 10,
  },
  label: {
    fontSize: 18,
  },
  input: {
    backgroundColor: "#fff8dc",
    fontSize: 18,
    borderRadius: 6,
    padding: 6,
    flex: 1,
    marginLeft: 8,
  },
});
