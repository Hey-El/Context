import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import { format } from "date-fns";

function ExpensesOutput({ expenses }) {
  function renderExpenseItem(itemData) {
    const formattedDate = format(new Date(itemData.item.date), "dd/MM/yyyy");
    return (
      <View style={styles.expenseItem}>
        <Text>{itemData.item.description}</Text>
        <Text>£{parseFloat(itemData.item.amount).toFixed(2)} </Text>
        <Text>{formattedDate}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={expenses} // Pass the array of expenses to FlatList
      renderItem={renderExpenseItem} // Pass the renderExpenseItem function as the renderItem prop
      keyExtractor={(item) => item.id}
    />
  );
}
export default ExpensesOutput;

const styles = StyleSheet.create({
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 8,
    backgroundColor: "#e6e6fa",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    shadowColor: "#8a2be2",
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
});
