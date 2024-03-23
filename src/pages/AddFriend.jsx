export default function AddFriend() {
  return (
    <>
      <h2>친구 추가</h2>
      <form action="#" method="post">
        <input type="text" name="username" placeholder="친구 ID" required />
        <div>김병현 님을 친구로 추가하였습니다.</div>
        <button type="submit">추가</button>
      </form>
    </>
  );
}
