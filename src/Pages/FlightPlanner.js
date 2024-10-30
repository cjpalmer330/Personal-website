import React from "react";
import SocialBar from '../Social-bar';
import ContactBar from "../Contact-bar";

export default function FlightPlanner(){
  return (
    <div className="Project h-screen">
      <SocialBar />
      <body className="overflow-hidden h-screen bg-gradient-to-b from-red-400 to-fuchsia-900 text-white font-mono">
        <div className="p-4 border shadow-2xl shadow-slate-200/40 rounded-3xl mt-36 ml-20 mr-20">
          <h1 className='text-3xl font-bold text-fuchsia-200 text-center'
          >Flight Planner</h1>
          <h3 className='text-xl text-white text-left'>
            &emsp; During my first semester here at UTD, one of the classes I took was Data Structures and Algorithms. Which although was harolled as being one of the hardest classes in the degree program, actually ended up being my favorite. I loved my professor and found the idea of learning how these graphs and Algorithms worked to be very fascinating. For our final project we were given the task of finding the three shortest paths sorted by cost and by time for the flight path graph we are given. It has to be able to take in any graph, and within reasonable time complexity output the three fastest results. At first this project stumped me quite a bit, I had fully implemented Dijkstra's algorithm but found getting the second and third fastest flights was a hastle to ensure no repeating.
            <br></br>
            &emsp; This at first was very stressfull for me but ended up being amazing because on my walk to class everyday I spent time thinking about the problem. I talked with a classmate asking what I was doing wrong and in the process of rubber ducking to him I realized I was comparing the city nodes by the wrong value and I could solve this with a DFS based solution. Although on an industry scale DFS isn't the most impressive thing I am really proud I came up with the best solution by myself without referrencing other completed materials. I ended up getting a 100 on this project, as well as an A in Data Structures so I think it all worked out well.
          </h3>
        </div>
      </body>
      <ContactBar />
    </div>
  );
}