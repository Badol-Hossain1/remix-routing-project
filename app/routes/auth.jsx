import React from "react";
import authStyles from "~/styles/auth.css";
import AuthForm from "../components/auth/AuthForm";

export default function AuthPage() {
  return (
    <div>
      <AuthForm />
    </div>
  );
}
export function links() {
  return [{ rel: "stylesheet", href: authStyles }];
}
