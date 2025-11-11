import { useState } from "react";
import { registerUser } from "../../api/authApi";
import { useNavigate } from "react-router-dom";
import styles from "./RegisterForm.module.css";

export default function RegisterForm() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const { data } = await registerUser(email, password);
      sessionStorage.setItem("token", data.accessToken);
      nav("/board");
    } catch {
      alert("Ошибка регистрации");
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
      <button>Создать аккаунт</button>
    </form>
  );
}
