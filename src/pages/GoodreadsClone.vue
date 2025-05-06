import React from "react";
import SocialBar from '../Components/Social-bar';
import ContactBar from "../Components/Contact-bar";

export default function GoodreadsClone(){
  return (
    <div className="h-screen">
      <SocialBar />
      <div className="overflow-hidden h-screen bg-gray-900 text-white font-mono">
        <div className="p-4 border border-blue-400 bg-gray-700 shadow-2xl shadow-gray-200/40 rounded-3xl mt-36 ml-96 mr-96">
          <h1 className='text-3xl font-bold text-fuchsia-200 text-center'
          >GoodreadsClone</h1>
          <h3 className='text-xl text-white text-left'>
            Still a work in progress Project
          </h3>
        </div>
      </div>
      <ContactBar />
    </div>
  );
}