import { useState } from "react";
import { login } from "../../api/authApi";
import { useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";

export default function LoginForm() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const { data } = await login(email, password);
      sessionStorage.setItem("token", data.accessToken);
      nav("/board");
    } catch {
      alert("Неверный email или пароль");
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="Пароль"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Войти</button>
    </form>
  );
}
