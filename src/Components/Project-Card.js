import { Link } from "react-router-dom";

export default function ProjectCard({ Title, blurb, link, image }){
  return(
    <Link
    to={link}
    >
      <div className="rounded-3xl bg-gray-800/70 hover:scale-105 border-2 border-blue-500 hover:to-blue-500/50 hover:shadow-blue-600 shadow-xl shadow-blue-600 p-4 transition-all duration-300 grid grid-rows-5 min-w-[550px] max-h-[750px] min-h-[200px] font-sans">
        <h1 className="m-2 font-Hanuman font-bold text-3xl text-center text-blue-300">{Title}</h1>
        <div class="row-start-2 row-span-4 grid grid-cols-2 justify-items-center">
          <h2 className="ml-6 mr-6 font-Hanuman text-lg text-left  text-blue-200 font-bold">{blurb}</h2>
          <img className="rounded-2xl h-[250px] m-2" src={image}></img>
        </div>
        
      </div>
    </Link>
    
  )
}