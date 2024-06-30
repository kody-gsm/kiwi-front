'use client'

<<<<<<< HEAD
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
=======
import React from 'react';
import Login from './pages/login';

const HomePage: React.FC = () => {
  return <Login />;
};

export default HomePage;
>>>>>>> cfa775a241a74c46fd8c12ec8fd564ef30e2b7a2
