import { Link } from "react-router-dom";

export default function BandCard() {
  return (
    <>
      <Link to="/readband" type="button" className="card w-[80%] mb-3 btn btn-light">
        <div className="card-body">
          <h5 className="card-title text-3xl text-start">내일은 등산왕</h5>
          <div className="h-1"></div>
          <p className="text-start line-clamp-1 text-gray-400 w-[95%]">
            등산을 좋아하는 20대 커플들 밴드입니다. 함께해요.
          </p>
          <div className="h-4"></div>
        </div>
      </Link>
    </>
  );
}
