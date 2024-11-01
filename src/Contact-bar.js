import React from 'react'

export default function ContactBar(){
  return(
    <div class="">
      <div class="text-white p-32 grid grid-cols-4 h-72 bg-slate-900 gap-8">
        <h1 class="border text-center rounded-2xl bg-slate-600 pt-0.5">cjpalmer330@gmail.com</h1>
        <a 
        href="https://github.com/cjpalmer330"
        target="_blank"
        class="border text-center rounded-2xl bg-slate-600 pt-0.5"
        >
          Github
        </a>
        <a 
        href="https://www.linkedin.com/in/christopher-palmer-bb48a6253/"
        target="_blank"
        class="border text-center rounded-2xl bg-slate-600 pt-0.5"
        >
          LinkedIn
        </a>
        <a href='./test.txt' download>Download Resume</a>
      </div>
    </div>
  );
};