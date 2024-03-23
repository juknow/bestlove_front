export default function BandCard() {
  const handleClick = () => {
    // 버튼이 클릭되었을 때 실행되는 함수
    console.log("버튼이 클릭되었습니다.");
    // 여기에 필요한 로직을 추가할 수 있습니다.
  };
  return (
    <>
      <button className="card w-[80%] mb-3 btn btn-light" onClick={handleClick}>
        <div className="card-body">
          <h5 className="card-title text-3xl text-start">내일은 등산왕</h5>
          <div className="h-1"></div>
          <p className="text-start line-clamp-1 text-gray-400 w-[95%]">
            등산을 좋아하는 20대 커플들 밴드입니다. 함께해요.
          </p>
          <div className="h-4"></div>
        </div>
      </button>
    </>
  );
}
