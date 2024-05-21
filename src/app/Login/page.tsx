"use client";

import React, { useState } from "react";
import Image from "next/image";

import appLogo from "../../../public/appLogo.svg";
import arrowIcon from "../../../public/arrowIcon.svg";

export interface LoginProps {
  Email: string;
  Password: string;
}

export default function Login() {
  const [formLoginData, setFormLoginData] = useState<LoginProps>({
    Email: "",
    Password: "",
  });

  const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormLoginData({
      ...formLoginData,
      [name]: value,
    });
  };

  const onSubmitLogin = () => {
    console.log(formLoginData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-1/3 h-full p-8 rounded-xl bg-componentBackground">
        <div className="flex flex-col w-full items-center justify-center">
          <Image
            className="mb-4 border border-btn-outline rounded-2xl "
            alt="appLogo"
            src={appLogo}
            height={70}
            width={70}
          />
          <div className="mb-4 text-white text-3xl">Welcome Back!</div>
          <div className="mb-4 text-subTitle text-lg">
            See what's new inside.
          </div>
          <input
            className="mb-4 rounded-md bg-inputField-background text-subTitle p-3 w-full border border-inputField-outline"
            type="text"
            placeholder="Email"
            name="Email"
            value={formLoginData.Email}
            onChange={handleChangeLogin}
          />
          <input
            className="mb-4 rounded-md  bg-inputField-background p-3 text-subTitle w-full border border-inputField-outline"
            type="email"
            placeholder="Password"
            name="Password"
            value={formLoginData.Password}
            onChange={handleChangeLogin}
          />
          <button
            className="mb-8 rounded-md w-full p-3 text-subTitle bg-inputField-background border border-inputField-outline rounded-md"
            onClick={onSubmitLogin}
          >
            Sign In
          </button>
          <div className="flex flex-row space-x-2">
            <div className="text-subTitle">Don't have an account?</div>
            <button className="flex flex-row text-subtileText items-center">
              <div>Sign Up</div>
              <Image alt="arrowIcon" src={arrowIcon} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
