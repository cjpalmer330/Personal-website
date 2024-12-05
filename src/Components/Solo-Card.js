
export default function SoloCard({ Title, blurb }){
  return(
      <div className="rounded-3xl bg-gray-700 border border-blue-500  shadow-2xl shadow-blue-500 p-4 transition-all duration-300 lg:grid lg:grid-rows-5 min-w-[700px] min-h-[200px] lg:m-36 m-8 text-center">
        <h1 className="m-2 font-Hanuman font-bold text-3xl text-center text-blue-300">{Title}</h1>
        <h2 className="ml-6 mr-6 font-Hanuman text-2xl text-left row-span-4 text-blue-200">{blurb}</h2>
      </div>
  )
}