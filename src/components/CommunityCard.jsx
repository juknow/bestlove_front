import { Link } from "react-router-dom";

export default function CommunityCard() {
  return (
    <>
      <Link to="/read" type="button" className="card w-[80%] mb-3 btn btn-light">
        <div className="card-body">
          <h5 className="card-title text-3xl text-start">2주년 선물은 뭐가 좋을까요?</h5>
          <div className="h-1"></div>
          <p className="text-start line-clamp-1 text-gray-400 w-[95%]">
            여자친구랑 곧 2주년인데 어떤 선물이 좋을까요? 여자친구의 취미는 서핑보드입니다.
          </p>
          <div className="h-4"></div>
          <p className="text-start">작성자 : 류희철</p>
        </div>
      </Link>
    </>
  );
}
