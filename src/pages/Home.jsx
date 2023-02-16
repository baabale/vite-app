import React from "react";
import { FaInfo } from "react-icons/fa";

function Home() {
  return (
    <>
      <header className="bg-blue-900 h-16 flex justify-center items-center">
        <h1 className="text-2xl font-bold text-slate-100 text-center">
          Note App
        </h1>
        <div className="absolute right-5 border p-1 rounded-2xl  hover:bg-white cursor-pointer">
          <FaInfo className="text-white hover:text-black" />
        </div>
      </header>
      <main className="container m-auto mt-4 md:first:">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="bg-gray-300 p-2 rounded-2xl cursor-pointer">
            <img
              className="rounded-2xl"
              src="https://cdn.pixabay.com/photo/2023/01/27/06/17/pheasant-7747830_960_720.jpg"
            />
            <div className="my-3 mx-1">
              <div className="text-lg font-semibold mx-1 overflow-hidden text-ellipsis whitespace-nowrap">
                Lorem ipsum dolor adf asdf sadf asdf
              </div>
              <div className=" mx-1 mt-1 overflow-ellipsis line-clamp-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus, deserunt dolorem? Laboriosam at laudantium quod
                tenetur eius iste eligendi neque ipsa quos obcaecati? Autem
                mollitia omnis explicabo laborum, dolorum et!
              </div>
            </div>
          </div>
          <div className="bg-gray-300 p-2 rounded-md">Item 2</div>
          <div className="bg-gray-300 p-2 rounded-md">Item 3</div>
        </div>
        {/* <div class="absolute bottom-0 right-0 h-16 w-16 ...">09</div> */}
        <div className="absolute bottom-6 right-6 border p-1 rounded-2xl cursor-pointer">
          <FaInfo className="text-black" />
        </div>
      </main>
    </>
  );
}

export default Home;
