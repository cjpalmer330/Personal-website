import React from 'react';
import SocialBar from '../Social-bar';
import ContactBar from '../Contact-bar';

export default function AboutThis(){
  return (
    <div className="Project h-screen w-full">
      <SocialBar />
      <body className="overflow-hidden h-auto bg-slate-900 text-white font-mono grid-rows-2">
        <div className="p-4 border border-blue-400 shadow-2xl shadow-slate-500 bg-slate-700 rounded-3xl mt-16 ml-40 mr-40 min-w-96 w-auto row-span-1">
          <h1 className='text-3xl font-bold text-blue-300 text-center'
          >About Me</h1>
          <h3 className='text-xl text-white text-left w-min-full'>
            &emsp;&emsp;&emsp;Born in 2002, I was brought into this world at the peak of the information age. Luckily, I have a brother who is 12 years older than me, which means that when he was going off to college, I was in my prime curiosity years. Michael would come home during winter / spring break and show me what he was learning in his computer engineering degree plan. I was hooked from that start. I was fascinated that he was able to make these maze solvers, pool games, and geometry tools, all from just typing words on his cracked laptop.
            <br />
            &emsp;&emsp;&emsp;From this I would start attending engineering and computer classes at the recreation center, the library, at school. Anywhere I could get my hands on technology, you could find me. After graduating high school, I still had a great interest in computers, but was losing interest the process of school. So in order to still be doing something with my time I started working full time at Wal-Mart, which is where I grew socially and cooperatively more than any other time in my life.
            <br/>
            &emsp;&emsp;&emsp;After a year at Wal-Mart I decided it was time to go back to school and work towards my degree. While working 30-40 hours, I went through the Associate Computer Science Program at Dallas College, graduating in August of 2023, when I transferred to UTD.
          </h3>
        </div>
        <div class="row-span-2 mt-6">
          <div
          class="ml-16 mr-16 bg-slate-700 border border-blue-400 border-2 justify-items-center items-center rounded-lg text-4xl font-sans text-white h-24 grid grid-cols-7 align-middle">
            <h1
            class="col-span-5"
            > Download my Resume!</h1>
            <a href="resume-v4.pdf" target="_blank" rel='noopener noreferrer' class="bg-blue-400 p-4 rounded-xl">Download</a>
          </div>
        </div>
      </body>
      <ContactBar />
    </div>
  );
}