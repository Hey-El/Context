import { Link } from "expo-router";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ExpensesOutput from "../(components)/ExpensesOutput";
import { useContext } from "react";
import { ExpenseContext } from "../(components)/context";

const StartPage = () => {
  const context = useContext(ExpenseContext);

  return (
    <View>
      <ExpensesOutput expenses={context.expenses} />
    </View>
  );
};

export default StartPage;
