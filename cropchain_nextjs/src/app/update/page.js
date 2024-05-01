"use client";

import ContractFunc from "@/components/contractFunc";
import React, { useState } from "react";

const page = () => {
  const [farmerName, setFarmerName] = useState("");
  const [landSize, setLandSize] = useState(0);
  const [cropChoice, setCropChoice] = useState("");
  const { modifyCrop } = ContractFunc();
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1>Namaste!!</h1>
        <h2>Please, Enter your details to continue</h2>
      </div>
      <div className="flex flex-col w-[1/2] gap-10 text-black">
        <input
          type="text"
          placeholder="Enter your name"
          className="p-1 "
          value={farmerName}
          onChange={(e) => {
            setFarmerName(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Enter your Land Size (in Acres)"
          className="p-1"
          value={landSize}
          onChange={(e) => {
            setLandSize(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter your Crop choice"
          className="p-1"
          value={cropChoice}
          onChange={(e) => {
            setCropChoice(e.target.value);
          }}
        />
      </div>
      <button
        className="bg-blue-900 py-1 px-4"
        onClick={() => {
          modifyCrop(farmerName, landSize, cropChoice);
        }}
      >
        Update
      </button>
    </div>
  );
};

export default page;
