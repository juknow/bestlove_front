export default function LoginPage() {
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
              <h1 className="font-bold mb-0 text-2xl">로그인</h1>
            </div>

            <div className="modal-body p-5 pt-0">
              <form className="">
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
                  로그인
                </button>
                <hr className="my-4" />
                <h2 className="text-lg font-bold mb-3">SNS 로그인</h2>
                <button
                  className="w-full py-2 mb-2 btn btn-outline-success rounded-md"
                  type="submit"
                >
                  네이버 로그인
                </button>
                <button
                  className="w-full py-2 mb-2 btn btn-outline-primary rounded-md"
                  type="submit"
                >
                  구글 로그인
                </button>
                <button
                  className="w-full py-2 mb-2 btn btn-outline-secondary rounded-md"
                  type="submit"
                >
                  깃허브 로그인
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex-column d-flex align-items-center w-screen">
        <h2 className="text-3xl">로그인</h2>

        <div className="h-2"></div>

        <form action="#" method="post">
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
            로그인
          </button>
        </form>
      </div>
    </>
  );
}
