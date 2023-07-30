import ExpensesForm from "~/components/expenses/ExpenseForm";
import ExpensesList from "~/components/expenses/ExpensesList";
const DUMMY_EXPENSES = [
  {
    id: "1",
    title: "kljdslfkjdls",
    amount: 11,
    date: new Date().toISOString(),
  },
];
export default function ExpensesUpdate() {
  return (
    <div>
      <ExpensesForm />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </div>
  );
}
