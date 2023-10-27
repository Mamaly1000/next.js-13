"use client";
import Image from "next/image";
import React from "react";
import errorGif from "./../../../assets/icons8-error.gif";
import { ErrorProps } from "next/error";
const Error = ({ error }: { error: { message: string } }) => {
  return (
    <div className="min-w-full min-h-screen relative flex flex-col items-center justify-center gap-3">
      <Image src={errorGif} alt="error git" width={100} height={100} />
      {error.message}
    </div>
  );
};

export default Error;
