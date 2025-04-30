import React from "react";
import SocialBar from '../Components/Social-bar';
import ContactBar from "../Components/Contact-bar";
import SoloCard from "../Components/Solo-Card";
import goldChart from "../pictures/Gold-medal-chart.png"

export default function WebScraper(){
  return (
    <div className="Project h-screen bg-gray-900">
      <SocialBar />
      <div className="overflow-hidden h-screen bg-gray-900 text-white font-mono justify-items-center align-middle grid grid-cols-1 grid-rows-4 md:grid-rows-2 md:grid-cols-2 gap-4">
        <img src={goldChart} alt="olympic gold medal chart" className="w-[700px] col-span-1 m-4 align-middle "/>
        <div className="rounded-3xl bg-gray-700 border border-blue-500  shadow-2xl shadow-blue-500 p-4 transition-all duration-300 lg:grid lg:grid-rows-5 m-4 text-center col-span-1 min-w-[400px] xl:m-16">In learning about python webscraping and data analytics I decided I should try extracting the gold medals from the wikipedia table and see if I could create some graphs out of it. This lead down a rabbit hole for a few days playing around with seaborn to find some charts that I would like displaying on this site.</div>
        <img />
        <div className="rounded-3xl bg-gray-700 border border-blue-500  shadow-2xl shadow-blue-500 p-4 transition-all duration-300 lg:grid lg:grid-rows-5 m-4 xl:m-16 text-center col-span-1 min-w-[400px]"> test</div>
      </div>
      
      <ContactBar />
    </div>
  );
}