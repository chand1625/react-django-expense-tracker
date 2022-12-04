import { useState, useContext } from "react";

import { LoadingContext } from "../../store/LoadingContext";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);
  const { loading } = useContext(LoadingContext);

  const saveExpenseDataHandler = function (enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.trunc(Math.random() * 1000).toString(),
    };

    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = function () {
    if (loading) {
      return;
    }
    setIsEditing(true);
  };

  const stopEditingHandler = function () {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button
          onClick={startEditingHandler}
          className={loading ? "disabled" : ""}
        >
          Add new expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
