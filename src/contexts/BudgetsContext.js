import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const BudgetsContext = React.createContext();

export function useBudgets() {
  return useContext(BudgetsContext);
}

// {
//   id:
//   name:
//   max
// }

// {
//   id:
//   budgetId:
//   amount:
//   description:
// }

export const BudgetsProvider = ({ children }) => {
  const [budgets, setBudgets] = useState([]);
  const [expenses, setExpenses] = useState([]);

  function getBudgetExpenses(budgetId) {
    return expenses.filter((expense) => expense.budgetId === budgetId);
  }

  function addExpense() {}

  function addBudget({ name, max }) {
    setBudgets((prevBudgets) => {
      if (prevBudgets.find((budget) => budget.name === name)) {
        return prevBudgets;
      }
      return [...prevBudgets, { id: uuidv4(), name, max }];
    });
  }

  function deleteBudgets() {}

  function deleteExpense() {}

  return (
    <BudgetsContext.Provider
      value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addExpense,
        addBudget,
        deleteBudgets,
        deleteExpense,
      }}
    >
      {children}
    </BudgetsContext.Provider>
  );
};
