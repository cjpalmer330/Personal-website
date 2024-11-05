import React from "react";
import SocialBar from '../Social-bar';
import ContactBar from "../Contact-bar";

export default function GoodreadsClone(){
  return (
    <div className="Project h-screen">
      <SocialBar />
      <body className="overflow-hidden h-screen bg-slate-900 text-white font-mono">
        <div className="p-4 border shadow-2xl shadow-slate-200/40 rounded-3xl mt-36 ml-96 mr-96">
          <h1 className='text-3xl font-bold text-fuchsia-200 text-center'
          >GoodreadsClone</h1>
          <h3 className='text-xl text-white text-left'>
            Still a work in progress Project
          </h3>
        </div>
      </body>
      <ContactBar />
    </div>
  );
}