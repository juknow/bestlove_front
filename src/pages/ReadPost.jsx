import CommentCard from "../components/CommentCard";

const commentData = [{ id: 1, title: "첫 번째 카드", content: "첫 번째 카드 내용입니다." }];

export default function ReadPost() {
  return (
    <>
      <div
        className="modal modal-sheet position-static block bg-body-secondary p-4 py-md-5"
        tabIndex="-1"
        role="dialog"
        id="modalSignin"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-header p-5 pb-4 border-b-0">
              <h1 className="font-bold mb-0 text-2xl">2주년 선물은 뭐가 좋을까요?</h1>
            </div>

            <div className="modal-body p-5 pt-0">
              <p className="text-left mb-0">
                여자친구랑 곧 2주년인데 어떤 선물이 좋을까요? 여자친구의 취미는 서핑보드입니다.
              </p>
              <hr className="my-4" />
              {commentData.map((item) => (
                <CommentCard key={item.id} title={item.title} content={item.content} />
              ))}
              <form className="">
                <div className="form-floating mb-3">
                  <textarea
                    name="commentwrite"
                    placeholder="댓글 작성"
                    required
                    className="form-control rounded-md"
                    style={{ height: "100px" }}
                  ></textarea>
                  <label htmlFor="댓글 작성">댓글 작성</label>
                </div>
                <button
                  className="w-full py-2 mb-2 btn btn-outline-primary rounded-md"
                  type="submit"
                >
                  댓글 작성
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
