import React from 'react';
import SocialBar from '../Components/Social-bar';
import ContactBar from '../Components/Contact-bar';

export default function Current(){
  return (
    <div className="Project h-screen">
      <SocialBar />
      <div className="overflow-hidden h-auto bg-slate-900 text-blue-300 font-mono">
        <div className="p-36 grid grid-rows-4 grid-cols-2 gap-24">
          <h3>You seem to be lost. Why don't you click one of the above pages</h3>
        </div>
      </div>
      <ContactBar />
    </div>
  );
}