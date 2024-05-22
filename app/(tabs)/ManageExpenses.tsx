import { View, Text, FlatList, StyleSheet } from "react-native";
import NewItem from "../(components)/NewItem";

function ManageExpenses() {
  return (
    <View style={styles.expenseItem}>
      <NewItem />
    </View>
  );
}

export default ManageExpenses;

const styles = StyleSheet.create({
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 8,
    backgroundColor: "#7fffd4",
    justifyContent: "space-between",
    borderRadius: 6,
    shadowColor: "#8a2be2",
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
});
