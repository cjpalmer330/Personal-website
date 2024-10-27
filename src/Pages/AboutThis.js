import React from 'react';
import SocialBar from '../Social-bar';


void function handleCheckboxChange(id){
  let classBefore = document.getElementById(id).className
  if(classBefore.match("[*'line-through'*]")) { }
}

export default function AboutThis(){
  
  return (
    <div className="Project h-screen">
      <SocialBar />
      <body className="overflow-hidden h-screen bg-gradient-to-b from-red-400 to-fuchsia-900 text-white font-mono">
        <div className="p-4 border shadow-2xl shadow-slate-200/40 rounded-3xl mt-36 ml-20 mr-20">
          <h1 className='text-3xl font-bold text-fuchsia-200 text-center'
          >What is This Website?</h1>
          <h3 className='text-xl text-white text-left'>
            &emsp;&emsp;&emsp;When my Thanksgiving break week started, I was given freedom to choose how I spend my next 11 days, whether to be productive or not.
            I knew that although I have done some work with JS, HTML, and CSS before, my skills weren't where they needed to be to obtain an internship the upcoming summer.
            So I decided that I would spend my thanksgiving trying out the React-Tailwind tech stack. I wasn't planning on building a portfolio website, I just new I needed to actually try making something cohesive in order to truly understand the interplay between components. As such I dove head first into tail wind, going through the documentation and old StackOverflow posts from 7,8 years ago everytime I came across an obstacle. I proved to myself in a very short amount of time, that I am able to take steps towards learning a new technology, and do so under my own direction.
          </h3>
        </div>
      </body>
    </div>
  );
}