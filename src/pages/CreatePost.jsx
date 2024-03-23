export default function CreatePost() {
  return (
    <>
      <h2>게시글 작성</h2>
      <form action="#" method="post">
        <input type="text" name="title" placeholder="제목" required />
        <textarea name="content" placeholder="본문을 입력하세요" required></textarea>
        <button type="submit">게시</button>
      </form>
    </>
  );
}
