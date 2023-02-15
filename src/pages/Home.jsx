import React from "react";
import { FaInfo } from "react-icons/fa";

function Home() {
  return (
    <>
      <header className="bg-blue-900 h-16 flex justify-center items-center">
        <h1 className="text-2xl font-bold text-slate-100 text-center">
          Note App
        </h1>
        <div className="absolute right-5 border p-1 rounded-2xl cursor-pointer hover:bg-white">
          <FaInfo className="text-white hover:text-black" />
        </div>
      </header>
      <main className="container m-auto">
        <div className="flex justify-center bg-gray-300">
          <div className="item">Item 1</div>
          <div className="item">Item 2</div>
          <div className="item">Item 3</div>
        </div>
      </main>
    </>
  );
}

export default Home;
