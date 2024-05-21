"use client";

import React, { useState } from "react";
import Image from "next/image";

import appLogo from "../../../public/appLogo.svg";
import arrowIcon from "../../../public/arrowIcon.svg";

export interface RegisterProps {
  FirstName: string;
  LastName: string;
  UserName: string;
  Email: string;
  Password: string;
}

export default function Register() {
  const [formData, setFormData] = useState<RegisterProps>({
    FirstName: "",
    LastName: "",
    UserName: "",
    Email: "",
    Password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = () => {
    console.log(formData);
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
          <div className="mb-4 text-white text-3xl">Welcome!</div>
          <div className="mb-4 text-subTitle text-lg">
            A social media that cares about you
          </div>
          <div className="flex flex-row text-subTitle space-x-9 w-full">
            <input
              className="mb-4 rounded-md bg-inputField-background p-3 border border-inputField-outline"
              type="text"
              placeholder="First Name"
              name="FirstName"
              value={formData.FirstName}
              onChange={handleChange}
            />
            <input
              className="mb-4 rounded-md  bg-inputField-background p-3 border border-inputField-outline"
              type="text"
              placeholder="Last Name"
              name="LastName"
              value={formData.LastName}
              onChange={handleChange}
            />
          </div>
          <input
            className="mb-4 rounded-md bg-inputField-background text-subTitle p-3 w-full border border-inputField-outline"
            type="text"
            placeholder="Username"
            name="UserName"
            value={formData.UserName}
            onChange={handleChange}
          />
          <input
            className="mb-4 rounded-md  bg-inputField-background p-3 text-subTitle w-full border border-inputField-outline"
            type="email"
            placeholder="Email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
          />
          <input
            className="mb-8 rounded-md bg-inputField-background text-subTitle p-3 w-full border border-inputField-outline"
            type="password"
            placeholder="Password"
            name="Password"
            value={formData.Password}
            onChange={handleChange}
          />
          <button
            className="mb-8 rounded-md w-full p-3 text-subTitle bg-inputField-background border border-inputField-outline rounded-md"
            onClick={onSubmit}
          >
            Sign In
          </button>
          <div className="flex flex-row space-x-2">
            <div className="text-subTitle">Already have an account?</div>
            <button className="flex flex-row text-subtileText items-center">
              <div>Sign In</div>
              <Image alt="arrowIcon" src={arrowIcon} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
