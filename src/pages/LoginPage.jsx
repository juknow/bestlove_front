export default function LoginPage() {
  return (
    <>
      <h2>로그인</h2>
      <form action="#" method="post">
        <input type="text" name="username" placeholder="ID" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">로그인</button>
      </form>
    </>
  );
}
