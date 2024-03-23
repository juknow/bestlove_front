import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AutoContext";

export default function Navigator() {
  const navigate = useNavigate();
  const auth = useAuth(); // Use auth directly without destructuring

  /*const handleMyPageClick = (event) => {
    if (!auth || !auth.isLoggedIn) {
      // Check auth and isLoggedIn
      event.preventDefault(); // Prevent link navigation
      alert("로그인이 필요한 페이지입니다. 로그인 페이지로 이동합니다.");
      navigate("/login"); // Redirect to login page programmatically
    }
  };*/

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
        <Link to="/mypage" type="button" className="btn btn-custom" onClick={handleMyPageClick}>
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
