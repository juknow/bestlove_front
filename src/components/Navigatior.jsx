import { Link } from "react-router-dom";

export default function CommunityNavigator() {
  return (
    <>
      <div className="navbarcustom"></div>
      <nav>
        <Link to="/" type="button" className="btn btn-custom">
          Home
        </Link>
        <Link to="/register" type="button" className="btn btn-custom">
          회원가입
        </Link>
        <Link to="/login" type="button" className="btn btn-custom">
          로그인
        </Link>
        <Link to="/mypage" type="button" className="btn btn-custom">
          마이페이지
        </Link>
        <Link to="/community" type="button" className="btn btn-custom">
          커뮤니티
        </Link>
        <Link to="/post" type="button" className="btn btn-custom">
          글 작성하기
        </Link>
        <Link to="/setcouple" type="button" className="btn btn-custom">
          연인 등록
        </Link>
        <Link to="/band" type="button" className="btn btn-custom">
          밴드
        </Link>
        <Link to="/createband" type="button" className="btn btn-custom">
          밴드 생성
        </Link>
      </nav>
      <div className="navbarcustom"></div>
    </>
  );
}
