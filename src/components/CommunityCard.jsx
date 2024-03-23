export default function CommunityCard() {
  const handleClick = () => {
    // 버튼이 클릭되었을 때 실행되는 함수
    console.log("버튼이 클릭되었습니다.");
    // 여기에 필요한 로직을 추가할 수 있습니다.
  };
  return (
    <>
      <button className="card w-75 mb-3 btn btn-light" onClick={handleClick}>
        <div className="card-body">
          <h5 className="card-title text-start">여자친구가 화났어요</h5>
          <p className="text-start line-clamp-1 text-gray-400 w-[95%]">
            ssdasdsgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggdsadsafagggggggggggggggggggggggggggggggggggg
          </p>
        </div>
      </button>
    </>
  );
}
