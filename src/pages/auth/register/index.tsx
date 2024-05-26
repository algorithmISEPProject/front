"use client";

import React, { useState } from "react";
import Image from "next/image";

import appLogo from "../../../assets/appLogo.svg";
import arrowIcon from "../../../assets/arrowIcon.svg";
import Link from "next/link";

export interface RegisterProps {
  FirstName: string;
  LastName: string;
  UserName: string;
  Email: string;
  Password: string;
}

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          <div className="mb-4 text-white text-3xl">Welcome!</div>
          <div className="mb-4 text-subTitle text-lg">
            A social media that cares about you
          </div>
          <form className="space-y-2">
            <div className="flex flex-row text-subTitle space-x-9 w-full">
              <input
                className="mb-4 rounded-md bg-inputField-background p-3 border border-inputField-outline"
                type="text"
                placeholder="First Name"
                name="FirstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                className="mb-4 rounded-md  bg-inputField-background p-3 border border-inputField-outline"
                type="text"
                placeholder="Last Name"
                name="LastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <input
              className="mb-4 rounded-md bg-inputField-background text-subTitle p-3 w-full border border-inputField-outline"
              type="text"
              placeholder="Username"
              name="UserName"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              className="mb-4 rounded-md  bg-inputField-background p-3 text-subTitle w-full border border-inputField-outline"
              type="email"
              placeholder="Email"
              name="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="mb-8 rounded-md bg-inputField-background text-subTitle p-3 w-full border border-inputField-outline"
              type="password"
              placeholder="Password"
              name="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="px-3 py-2 w-full bg-btn-background border border-btn-outline text-subTitle hover:bg-btn-background-hover hover:text-white transition-all rounded-xl"
            >
              Register
            </button>
          </form>
          <div className="flex flex-row space-x-2">
            <div className="text-subTitle">Already have an account?</div>
            <Link
              href="/auth/login"
              className="flex flex-row text-subtileText items-center"
            >
              <div>Sign In</div>
              <Image alt="arrowIcon" src={arrowIcon} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
