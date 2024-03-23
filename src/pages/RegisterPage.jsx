export default function RegisterPage() {
  return (
    <>
      <div className="container flex-column d-flex align-items-center w-screen">
        <h2 className="text-3xl">회원 가입</h2>

        <div className="h-2"></div>

        <form action="#" method="post">
          <div className="mb-3">
            <div>이름</div>
            <input type="text" name="name" placeholder="이름" required className="form-control" />
          </div>

          <div className="mb-3">
            <div>아이디</div>
            <input type="text" name="username" placeholder="ID" required className="form-control" />
          </div>

          <div className="mb-3">
            <div>비밀번호</div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-primary text-black">
            가입
          </button>
        </form>
      </div>
    </>
  );
}
