import React from 'react';
import SocialBar from '../Social-bar';
import ContactBar from '../Contact-bar';

export default function Current(){
  return (
    <div className="Project h-screen">
      <SocialBar />
      <body className="overflow-hidden h-auto bg-gradient-to-b from-red-400 to-fuchsia-900 text-white font-mono">
        <div className="p-36 grid grid-rows-4 grid-cols-2 gap-24">
          <h3>You seem to be lost. Why don't you click one of the above pages</h3>
        </div>
      </body>
      <ContactBar />
    </div>
  );
}