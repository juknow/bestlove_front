import FriendCard from "../components/FriendCard";

export default function MyPage() {
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
              <h1 className="font-bold mb-0 text-2xl">마이페이지</h1>
            </div>

            <div className="modal-body p-5 pt-0">
              <form className="">
                <h3 className="text-left font-bold mb-0 text-xl">이름</h3>
                <br />
                <h5 className="text-left font-bold mb-0 ">류희철</h5>
                <br />
                <h3 className="text-left font-bold mb-0 text-xl">아이디</h3>
                <br />
                <h5 className="text-left font-bold mb-0 ">adel77</h5>
                <br />
                <hr className="my-4" />
                <h3 className="text-left font-bold mb-0 text-xl">나의 연인</h3>
                <br />
                <h5 className="text-left font-bold mb-0 ">김병현</h5>
                <br />
                <button
                  className="w-full py-2 mb-2 btn btn-outline-primary rounded-md"
                  type="submit"
                >
                  연인 등록
                </button>
              </form>
              <br />
              <hr className="my-4" />
              <div className="container">
                <h3 className="text-left font-bold mb-0 text-xl">친구 목록</h3>
                <br />
                <FriendCard />
                <br />
                <button
                  className="w-full py-2 mb-2 btn btn-outline-primary rounded-md"
                  type="submit"
                >
                  친구 추가
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
