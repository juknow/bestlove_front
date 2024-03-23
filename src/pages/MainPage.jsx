import React, { useEffect, useState } from "react";
import axios from "axios";
export default function MainPage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://ec2-3-234-216-153.compute-1.amazonaws.com:5000/")
      .then((response) => {
        setMessage(response.data.redirect);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);
  return (
    <>
      <main>
        {message}
        <img src="/banner.jpg" alt="Page Banner" />
        <div style={{ marginTop: "16px" }}>
          &quot;베프의 연애&quot;는 서로의 친구들이 함께 두 사람의 연애 고민을 상담해 줄 수 있는
          플랫폼입니다.
        </div>
      </main>
    </>
  );
}
