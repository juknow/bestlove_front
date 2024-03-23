export default function CreateBand() {
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
              <h1 className="font-bold mb-0 text-2xl">밴드 생성</h1>
            </div>

            <div className="modal-body p-5 pt-0">
              <form>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="이름"
                    required
                    className="form-control rounded-md"
                  />
                  <label htmlFor="이름">밴드 이름</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    name="information"
                    placeholder="information"
                    required
                    className="form-control rounded-md"
                    style={{ height: "200px" }} // 텍스트 영역의 높이를 증가시킵니다.
                  ></textarea>
                  <label htmlFor="information">밴드 정보</label>
                </div>

                <button className="w-full btn btn-lg rounded-md btn-primary" type="submit">
                  생성
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
