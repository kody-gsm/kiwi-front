'use client'

import Image from "next/image";
import NavBar from "./navbar";
import Main from "./main";
import { useState } from "react";


export default function Home() {
  const [isLogin, setIsLogin] = useState(Boolean);// 이 값만 움직이면 nav바가 알아서 맞춰준다
  ()=>(setIsLogin(true));//임시코드
  return (
    <>
      <Main></Main>

      <NavBar login={isLogin}></NavBar>
    </>
  );
}
