import React from 'react';
import SocialBar from '../Components/Social-bar';
import ContactBar from '../Components/Contact-bar';
import SoloCard from '../Components/Solo-Card';


export default function AboutThis(){
  return (
    <div className="h-screen w-full min-w-[550px] justify-items-center">
      <SocialBar />
      <div className="overflow-hidden bg-gray-900 text-white font-mono grid-rows-2 justify-items-center w-full h-screen">
        <SoloCard Title="About Me" blurb="&emsp;&emsp;&emsp;Born in 2002, I was brought into this world at the peak of the information age. Luckily, I have a brother who is 12 years older than me, which means that when he was going off to college, I was in my prime curiosity years. Michael would come home during winter / spring break and show me what he was learning in his computer engineering degree plan. I was hooked from that start. I was fascinated that he was able to make these maze solvers, pool games, and geometry tools, all from just typing words on his cracked laptop.
        &emsp;&emsp;&emsp;From this I would start attending engineering and computer classes at the recreation center, the library, at school. Anywhere I could get my hands on technology, you could find me. After graduating high school, I still had a great interest in computers, but was losing interest the process of school. So in order to still be doing something with my time I started working full time at Wal-Mart, which is where I grew socially and cooperatively more than any other time in my life.
        &emsp;&emsp;&emsp;After a year at Wal-Mart I decided it was time to go back to school and work towards my degree. While working 30-40 hours, I went through the Associate Computer Science Program at Dallas College, graduating in August of 2023, when I transferred to UTD."/>
      </div>
      <ContactBar />
    </div>
  );
}