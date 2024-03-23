import React from "react";
import axios from "axios";

export default function RegisterPage() {
  const handleSubmit = async (event) => {
    event.preventDefault(); // 폼 제출 기본 동작 방지

    // 폼 데이터 수집
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    try {
      // POST 요청 보내기
      const response = await axios
        .create({
          baseURL: "http://ec2-3-234-216-153.compute-1.amazonaws.com:5000/api",
          withCredentials: true,
        })
        .post("/register", data);
      console.log("회원가입 성공:", response.data);
      // 회원가입 후 어떤 동작을 수행하고 싶다면 여기에 추가
    } catch (error) {
      console.error("회원가입 오류:", error);
    }
  };

  const handleSNSRegister = (provider) => {
    // 각 SNS 제공자에 따른 회원가입 동작을 수행
    console.log(provider, "회원가입");
    // 추가적인 작업을 수행하고 싶다면 여기에 추가
  };

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
              <h1 className="font-bold mb-0 text-2xl">회원가입</h1>
            </div>

            <div className="modal-body p-5 pt-0">
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="이름"
                    required
                    className="form-control rounded-md"
                  />
                  <label htmlFor="이름">이름</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    name="username"
                    placeholder="ID"
                    required
                    className="form-control rounded-md"
                  />
                  <label htmlFor="ID">ID</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    className="form-control rounded-md"
                  />
                  <label htmlFor="Password">Password</label>
                </div>
                <button className="w-full mb-2 btn btn-lg rounded-md btn-primary" type="submit">
                  회원 가입
                </button>
                <hr className="my-4" />
                <h2 className="text-lg font-bold mb-3">SNS 로그인</h2>
                <button
                  className="w-full py-2 mb-2 btn btn-outline-success rounded-md"
                  onClick={() => handleSNSRegister("네이버")}
                >
                  네이버 회원가입
                </button>
                <button
                  className="w-full py-2 mb-2 btn btn-outline-primary rounded-md"
                  onClick={() => handleSNSRegister("구글")}
                >
                  구글 회원가입
                </button>
                <button
                  className="w-full py-2 mb-2 btn btn-outline-secondary rounded-md"
                  onClick={() => handleSNSRegister("깃허브")}
                >
                  깃허브 회원가입
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
