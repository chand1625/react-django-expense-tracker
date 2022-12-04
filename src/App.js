import { useState, useEffect, useContext, useCallback } from "react";

import { LoadingContext } from "./store/LoadingContext";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ErrorCard from "./components/UI/ErrorCard";
import LoadingSpinner from "./components/UI/LoadingSpinner";

import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState({
    isError: false,
    message: "",
  });
  const { loading, setLoading } = useContext(LoadingContext);

  const fetchExpenses = useCallback(
    async function () {
      setLoading(true);
      try {
        const res = await fetch("/api/expenses/");

        if (!res.ok) {
          setError({
            isError: true,
            message: "Could not load expenses.",
          });
          return;
        }

        const data = await res.json();

        for (let i = 0; i < data.length; i++) {
          data[i].date = new Date(data[i].date);
        }

        setExpenses(data);
      } catch (error) {
        setError({
          isError: true,
          message: "Something went wrong while loading expenses.",
        });
      } finally {
        setLoading(false);
      }
    },
    [setLoading]
  );

  useEffect(
    function () {
      fetchExpenses();
    },
    [fetchExpenses]
  );

  const newExpenseHandler = async function (expense) {
    setLoading(true);
    try {
      const res = await fetch("/api/expenses/", {
        method: "POST",
        body: JSON.stringify(expense),
        headers: {
          "Content-type": "application/json",
        },
      });

      if (!res.ok) {
        setError({
          isError: true,
          message: "Could not add expense.",
        });
        return;
      }

      fetchExpenses();
    } catch (error) {
      setError({
        isError: true,
        message: "Something went wrong while adding expenses.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <NewExpense onAddExpense={newExpenseHandler} />
      {loading && (
        <div className="wrapper">
          <LoadingSpinner></LoadingSpinner>
        </div>
      )}
      {!loading && !error.isError && <Expenses items={expenses} />}
      {!loading && error.isError && (
        <div className="wrapper">
          <ErrorCard message={error.message} />
        </div>
      )}
    </div>
  );
}

export default App;
