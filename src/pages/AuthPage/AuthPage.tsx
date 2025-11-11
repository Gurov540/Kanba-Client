import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import styles from "./AuthPage.module.css";

export default function Auth() {
  const [mode, setMode] = useState<"login" | "register">("login");

  return (
    <div className={styles.authWrapper}>
      <h2>{mode === "login" ? "Вход" : "Регистрация"}</h2>

      <div className={styles.authTabs}>
        <button
          onClick={() => setMode("login")}
          style={{ fontWeight: mode === "login" ? "bold" : "normal" }}
        >
          Войти
        </button>

        <button
          onClick={() => setMode("register")}
          style={{ fontWeight: mode === "register" ? "bold" : "normal" }}
        >
          Регистрация
        </button>
      </div>

      <hr />

      {mode === "login" ? <LoginForm /> : <RegisterForm />}
    </div>
  );
}
