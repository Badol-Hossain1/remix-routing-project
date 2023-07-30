import { Outlet } from "@remix-run/react";
import expensesStyles from "~/styles/expenses.css";

export default function expenses() {
  return (
    <>
      <Outlet />
      <main></main>
    </>
  );
}
export function links() {
  return [{ rel: "stylesheet", href: expensesStyles }];
}
