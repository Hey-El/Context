import { View, Text } from "react-native";
import React from "react";
import { useContext } from "react";
import { ExpenseContext } from "../(components)/context";
import ExpensesOutput from "../(components)/ExpensesOutput";

const RecentExpenses = () => {
  const context = useContext(ExpenseContext);

  return (
    <View>
      <ExpensesOutput expenses={context?.expenses} />
    </View>
  );
};

export default RecentExpenses;
