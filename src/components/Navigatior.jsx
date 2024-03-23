import { Link } from "react-router-dom";

export default function CommunityNavigator() {
  return (
    <>
      <div className="navbarcustom"></div>
      <nav>
        <Link to="/" type="button" className="btn">
          Home
        </Link>
        <Link to="/register" type="button" className="btn">
          회원가입
        </Link>
        <Link to="/login" type="button" className="btn">
          로그인
        </Link>
        <Link to="/mypage" type="button" className="btn">
          마이페이지
        </Link>
        <Link to="/community" type="button" className="btn">
          커뮤니티
        </Link>
        <Link to="/community" type="button" className="btn">
          글 작성하기
        </Link>
        <Link to="/addfriend" type="button" className="btn">
          친구추가
        </Link>
      </nav>
      <div className="navbarcustom"></div>
    </>
  );
}
