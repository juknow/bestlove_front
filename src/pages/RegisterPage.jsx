export default function RegisterPage() {
  return (
    <>
      <h2>회원 가입</h2>
      <form action="#" method="post">
        <input type="text" name="name" placeholder="이름" required />
        <input type="text" name="username" placeholder="ID" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">가입</button>
      </form>
    </>
  );
}
