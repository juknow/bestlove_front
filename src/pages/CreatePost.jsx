export default function CreatePost() {
  return (
    <>
      <div
        className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5"
        tabIndex="-1"
        role="dialog"
        id="modalSignin"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-header p-5 pb-4 border-b-0">
              <h1 className="font-bold mb-0 text-2xl">게시글 작성</h1>
            </div>

            <div className="modal-body p-5 pt-0">
              <form>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    name="title"
                    placeholder="제목"
                    required
                    className="form-control rounded-md"
                  />
                  <label htmlFor="title">제목</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    name="paragraph"
                    placeholder="본문"
                    required
                    className="form-control rounded-md"
                    style={{ height: "200px" }} // 텍스트 영역의 높이를 증가시킵니다.
                  ></textarea>
                  <label htmlFor="paragraph">본문</label>
                </div>
                <div className="mb-3">
                  <label htmlFor="uploadImages" className="form-label">
                    이미지 첨부
                  </label>
                  <input className="form-control" type="file" id="uploadImages" multiple />
                  <div id="imageHelp" className="form-text">
                    게시글에 첨부할 이미지를 선택하세요. (선택사항)
                  </div>
                </div>
                <button className="w-full btn btn-lg rounded-md btn-primary" type="submit">
                  게시
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
