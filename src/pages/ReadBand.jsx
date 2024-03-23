import FriendCard from "../components/FriendCard";

export default function ReadBand() {
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
              <h1 className="font-bold mb-0 text-2xl">내일은 등산왕</h1>
            </div>

            <div className="modal-body p-5 pt-0">
              <p className="text-left mb-0">등산을 좋아하는 20대 커플들 밴드입니다. 함께해요.</p>
              <hr className="my-4" />
              <FriendCard />

              <button className="w-full py-2 mb-2 btn btn-outline-primary rounded-md" type="submit">
                밴드 가입
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
