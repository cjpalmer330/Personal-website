import { Link } from "react-router-dom";

export default function ProjectCard({ Title, blurb, link }){
  return(
    <Link
    to={link}
    >
      <div className="rounded-3xl bg-gray-700 hover:scale-105 border border-blue-500 hover:to-blue-500/50 hover:shadow-blue-600 shadow-xl shadow-blue-600 p-4 transition-all duration-300 grid grid-rows-5 min-w-[550px] max-h-[750px] min-h-[200px] font-sans">
        <h1 className="m-2 font-Hanuman font-bold text-3xl text-center text-blue-300">{Title}</h1>
        <h2 className="ml-6 mr-6 font-Hanuman text-lg text-left row-start-2 row-span-4 text-blue-200 font-bold">{blurb}</h2>
      </div>
    </Link>
    
  )
}