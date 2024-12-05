import profilePicture from '../pictures/profile.jpg';
import SocialBar from '../Components/Social-bar';
import ContactBar from '../Components/Contact-bar';
export default function Home(){
  return(
    <div className="h-screen">
      <SocialBar />
      <div className="overflow-hidden bg-gray-900 text-white font-mono">
        <div className="lg:p-36 md:p-24 sm:p-8 xs:p-4 grid xl:grid-rows-2 xl:grid-cols-2 gap-24">
          <div className='flex justify-center items-center xl:h-96'>
            {/* Profile Picture*/}
            <img alt="Profile" className="shadow-2xl shadow-gray-200/40 rounded-3xl align-middle justify-center h-96 object-contain" src={profilePicture}/>
          </div>
          <div className="shadow-2xl shadow-blue-500 rounded-xl p-12 bg-gray-700 border border-blue-400 border-1 min-w-[350px]">
            <h3 className='font-mono text-blue-300 font-bold text-center text-2xl'> Welcome to my Website!</h3>
            <h3 className="text-xl text-blue-200">
            In an effort to better extend my reachability, and extend my chances of having a job lined up after I graduate, I have decided to make this website. You can find a little bit about me, some of my projects, and hopefully an impression of my work. You can also click the links to my LinkedIn, Github, and CodeWars accounts if you are interested above. 
            </h3>
          </div>
          <div className='font-mono text-white font-bold text-xl flex justify-center'>
            Email me below for a copy of my resume
          </div>
          <div className="shadow-2xl shadow-blue-500 bg-gray-700 border border-blue-400 border-1 rounded-xl p-12 min-w-[450px]">
            <h3 className='font-mono text-blue-300 font-bold text-center text-2xl '>
              Career Information
            </h3>
            <h3 className="text-xl text-blue-200">
              Currently a senior at the University of Texas at Dallas, graduating in Computer Science, I couldn't be more excited to enter the work force and do some real work. I am looking for an internship or full-time position in the software development field.
            </h3>
          </div>
        </div>
      </div>
      <ContactBar />
    </div>
  )
}