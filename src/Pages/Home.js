import profilePicture from '../pictures/profile.jpg';
import SocialBar from '../Social-bar';
import ContactBar from '../Contact-bar';
export default function Home(){
  return(
    <div class="h-screen">
      <SocialBar />
      <body className="overflow-hidden bg-slate-900 text-white font-mono">
        <div className="p-36 grid grid-rows-2 grid-cols-2 gap-24">
          <div className='flex justify-center items-center'>
            {/* Profile Picture*/}
            <img alt="Picture of Me" className="shadow-2xl shadow-slate-200/40 rounded-3xl align-middle justify-center min-w-[80px] h-[600px] w-[600px]" src={profilePicture}/>
          </div>
          <div className="shadow-2xl shadow-blue-500 rounded-xl p-12 bg-slate-700 border border-blue-400 border-1">
            <h3 className='font-mono text-blue-300 font-bold text-center text-2xl'> Welcome to my Website!</h3>
            <h3 className="text-xl">
            &lt;-- I'm this guy!<br></br>
            In an effort to better extend my reachability, and extend my chances of having a job lined up after I graduate, I have decided to make this website. You can find a little bit about me, some of my projects, and this website. You can also click the links to my LinkedIn, Github, and CodeWars accounts if you are interested. 
            </h3>
          </div>
          <div className='font-mono text-white font-bold text-xl flex justify-center'>
            Email me below for a copy of my resume
          </div>
          <div className="shadow-2xl shadow-blue-500 bg-slate-700 border border-blue-400 border-1 rounded-xl p-12">
            <h3 className='font-mono text-blue-300 font-bold text-center text-2xl'>
              Career Information
            </h3>
            <a
              href="https://www.minecraft.net/en-us"
              target="_blank"
              rel="noopener noreferrer"
            >
            <h3 className="text-xl">
              Currently a senior at the University of Texas at Dallas, graduating in Computer Science, I couldn't be more excited to enter the work force and do some real work. I am looking for an internship or full-time position in the software development field.
            </h3>
            </a>
          </div>
        </div>
      </body>
      <ContactBar />
    </div>
  )
}