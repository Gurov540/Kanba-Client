import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div style={{ textAlign: "center", padding: 50 }}>
      <h1>Добро пожаловать в Kanban App 🚀</h1>
      <p>Создавайте свои доски, задачи и управляйте процессом как в Trello</p>
      <Link to="/auth">
        <button>Войти / Регистрация</button>
      </Link>
    </div>
  );
}
