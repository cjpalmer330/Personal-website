import React from "react";
import SocialBar from '../Components/Social-bar';
import ContactBar from "../Components/Contact-bar";
import SoloCard from "../Components/Solo-Card";

export default function FlightPlanner(){
  return (
    <div className="h-screen">
      <SocialBar />
      <div className="overflow-hidden h-screen bg-gray-900 text-white font-mono justify-items-center ">
        <SoloCard Title="Airline Routes Finder" blurb="&emsp; During my first semester here at UTD, one of  the classes I took was Data Structures and Algorithms. Which although was harolled as being one of   the hardest classes in the degree program, actually ended up being my favorite. I loved my professor  and found the idea of learning how these graphs and Algorithms worked to be very fascinating. For  our final project we were given the task of finding the three shortest paths sorted by cost and by   time for the flight path graph we are given. It has to be able to take in any graph, and within   reasonable time complexity output the three fastest results. At first this project stumped me quite   a bit, I had fully implemented Dijkstra's algorithm but found getting the second and third fastest  flights was a hastle to ensure no repeating.
        &emsp; This at first was very stressfull for me but ended up being amazing because on my wato class   everyday I spent time thinking about the problem. I talked with a classmate askiwhat I was doing  wrong and in the process of rubber ducking to him I realized I was comparithe city nodes by the  wrong value and I could solve this with a DFS based solution. Althouon an industry scale DFS isn't   the most impressive thing I am really proud I came up with tbest solution by myself without   referrencing other completed materials. I ended up getting 100 on this project, as well as an A in  Data Structures so I think it all worked out well."/>
      </div>
      
      <ContactBar />
    </div>
  );
}