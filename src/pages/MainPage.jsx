import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <header>베프의 연애</header>
      <div className="navbar"></div>
      <nav>
        <Link to="/register" className="navbutton">
          회원가입
        </Link>
        <Link to="/login" className="navbutton">
          로그인
        </Link>
        <Link to="/mypage" className="navbutton">
          마이페이지
        </Link>
        <Link to="/community" className="navbutton">
          커뮤니티
        </Link>
      </nav>
      <div className="navbar"></div>
      <main>메인 페이지 입니다.</main>
    </>
  );
}
