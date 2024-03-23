export default function ReadPost() {
  return (
    <>
      <h1>게시물 제목</h1>
      <p>게시물 본문 내용...</p>


      <h2>댓글</h2>
      <ul>
        <li>댓글1</li>
        <li>댓글2</li>
        <li>댓글3</li>
      </ul>

      <form>
        <label htmlFor="comment">댓글 작성:</label><br />
        <textarea id="comment" name="comment" rows="4" cols="50"></textarea><br />
        <input type="submit" value="댓글 등록" />
      </form>
    </>
  );
}
