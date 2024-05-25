"use client";

import React, { useState } from "react";
import Image from "next/image";

import appLogo from "../../../assets/appLogo.svg";
import arrowIcon from "../../../assets/arrowIcon.svg";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";

export interface LoginProps {
  Email: string;
  Password: string;
}

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
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
          <form onSubmit={handleSubmit}>
            <input
              className="mb-4 rounded-md bg-inputField-background text-subTitle p-3 w-full border border-inputField-outline"
              type="email"
              placeholder="Email"
              name="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="mb-4 rounded-md  bg-inputField-background p-3 text-subTitle w-full border border-inputField-outline"
              type="password"
              placeholder="Password"
              name="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              className="mb-8 rounded-md w-full p-3 text-subTitle bg-inputField-background border border-inputField-outline "
              type="submit"
            >
              Sign In
            </button>
          </form>
          <div className="flex flex-row space-x-2">
            <div className="text-subTitle">Don't have an account?</div>
            <Link
              href="/auth/register"
              className="flex flex-row text-subtileText items-center"
            >
              <div>Sign Up</div>
              <Image alt="arrowIcon" src={arrowIcon} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
