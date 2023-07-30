import React from "react";
import Chart from "~/components/expenses/Chart";
import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";
const DUMMY_EXPENSES = [
  {
    id: "1",
    title: "kljdslfkjdls",
    amount: 11,
    date: new Date().toISOString(),
  },
];
export default function ExpensesAnalysis() {
  return (
    <div>
      <Chart expenses={DUMMY_EXPENSES} />
      <ExpenseStatistics expenses={DUMMY_EXPENSES} />
    </div>
  );
}
