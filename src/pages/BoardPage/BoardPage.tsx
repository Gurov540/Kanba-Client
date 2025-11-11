export default function Board() {
  const token = sessionStorage.getItem("token");
  if (!token) return <h2>Нет доступа. Перейдите на страницу авторизации.</h2>;

  return <h1>Ваши доски появятся здесь ✅</h1>;
}
