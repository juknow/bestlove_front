import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyPage from "./pages/MyPage";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AddFriend from "./pages/AddFriend";
import SetCouple from "./pages/SetCouple";
import CommunityPage from "./pages/CommunityPage";
import CreatePost from "./pages/CreatePost";
import ReadPost from "./pages/ReadPost";
import Navigator from "./components/Navigatior";
import BandPage from "./pages/BandPage";
import ReadBand from "./pages/ReadBand";
import CreateBand from "./pages/CreateBand";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>내 연애를 구해줘</header>
        <Navigator />
        <div style={{ height: 8 }}></div>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/mypage/*" element={<MyPage />}></Route>
          <Route path="/login/*" element={<LoginPage />}></Route>
          <Route path="/register/*" element={<RegisterPage />}></Route>
          <Route path="/addfriend/*" element={<AddFriend />}></Route>
          <Route path="/setcouple/*" element={<SetCouple />}></Route>
          <Route path="/community/*" element={<CommunityPage />}></Route>
          <Route path="/post/*" element={<CreatePost />}></Route>
          <Route path="/read/*" element={<ReadPost />}></Route>
          <Route path="/mypage/*" element={<MyPage />}></Route>
          <Route path="/band/*" element={<BandPage />}></Route>
          <Route path="/readband/*" element={<ReadBand />}></Route>
          <Route path="/createband/*" element={<CreateBand />}></Route>
          {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
