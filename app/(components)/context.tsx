import { createContext, useState } from "react";
import uuid from "react-native-uuid";
import { format } from "date-fns";

export interface Expense {
  id: string;
  amount: string;
  description: string;
  date: string;
}

export interface ExpenseContextType {
  expenses: Expense[];
  addExpense: (expense: Omit<Expense, "id">) => Expense;
}

export const ExpenseContext = createContext<ExpenseContextType>({
  expenses: [],
  addExpense: () => ({
    id: "",
    amount: "",
    description: "",
    date: "",
  }),
});

function ExpenseProvider({ children }) {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const addExpense = (expense: Omit<Expense, "id">): Expense => {
    const formattedDate = format(new Date(expense.date), "yyyy-MM-dd");
    const newExpense = {
      ...expense,
      id: uuid.v4() as string,
      date: formattedDate,
    };
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
    return newExpense;
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
}

export default ExpenseProvider;
