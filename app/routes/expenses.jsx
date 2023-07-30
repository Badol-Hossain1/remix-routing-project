import { Outlet } from "@remix-run/react";
import expensesStyles from "~/styles/expenses.css";

export default function expenses() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
export function links() {
  return [{ rel: "stylesheet", href: expensesStyles }];
}
