import {
  TextInput,
  Text,
  View,
  Button,
  onPress,
  StyleSheet,
} from "react-native";
import { useState, useContext } from "react";
import { ExpenseContext } from "./context";
import { useRouter } from "expo-router";
import UserInput from "./userInput";

export default function NewItem() {
  const router = useRouter();
  const [form, setForm] = useState({ amount: "", description: "", date: "" });
  const context = useContext(ExpenseContext);

  //keep old state whilst also updating current state
  const handleChange = (name: string, value: string) => {
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleAddItem = () => {
    const updatedExpenses = context.addExpense({
      amount: form.amount,
      description: form.description,
      date: form.date,
    });
    setForm({ description: "", amount: "", date: "" });
    console.log(updatedExpenses);
    router.push("/");
  };

  return (
    <View style={styles.container}>
      <UserInput
        label="Description"
        value={form.description}
        onChangeText={(value) => handleChange("description", value)}
      />
      <UserInput
        label="Amount (£)"
        keyboardType="decimal-pad"
        value={form.amount}
        onChangeText={(value) => handleChange("amount", value)}
      />
      <UserInput
        label="Date"
        value={form.date}
        onChangeText={(value) => handleChange("date", value)}
        placeholder="YYYY-MM-DD"
      />
      <Button title="Save" onPress={handleAddItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
