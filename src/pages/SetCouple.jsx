import { useState } from "react";

export default function SetCouple() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would add your logic to actually submit the form data
    setIsSubmitted(true);
  };

  return (
    <>
      <div
        className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5"
        tabIndex="-1"
        role="dialog"
        id="modalSignin"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-header p-5 pb-4 border-b-0">
              <h1 className="font-bold mb-0 text-2xl">연인 등록</h1>
            </div>

            <div className="modal-body p-5 pt-0">
              {isSubmitted ? (
                <div className="alert alert-success" role="alert">
                  연인이 등록되었습니다!
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      name="ID"
                      placeholder="ID"
                      required
                      className="form-control rounded-md"
                    />
                    <label htmlFor="ID"> 아이디</label>
                  </div>

                  <button className="w-full btn btn-lg rounded-md btn-primary" type="submit">
                    연인 등록
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
