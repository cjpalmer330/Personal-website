import profilePicture from '../pictures/profile.jpg';
import SocialBar from '../Components/Social-bar';
import ContactBar from '../Components/Contact-bar';
export default function Home(){
  return(
    <div className=" h-screen">
      <SocialBar />
      {/*Background Design*/}
      <div className="absolute w-full h-full z-0">        <svg viewBox="0 0 600 1000" transform="scale(-1, 1)" className='w-full h-full bg-gray-900 blur-sm'>
          <g fill="#ffffff">
          <path d="M0 -12.3L2.8 -3.8L11.7 -3.8L4.5 1.4L7.2 9.9L0 4.7L-7.2 9.9L-4.5 1.4L-11.7 -3.8L-2.8 -3.  8Z" transform="translate(338 349)"/>
          <path d="M0 -0.9L0.2 -0.3L0.9 -0.3L0.3 0.1L0.6 0.8L0 0.4L-0.6 0.8L-0.3 0.1L-0.9 -0.3L-0.2 -0.3Z"  transform="translate(109 503)"/>
          <path d="M0 -0.9L0.2 -0.3L0.9 -0.3L0.3 0.1L0.6 0.8L0 0.4L-0.6 0.8L-0.3 0.1L-0.9 -0.3L-0.2 -0.3Z"  transform="translate(199 503)"/>
          <path d="M0 -2.8L0.6 -0.9L2.7 -0.9L1 0.3L1.7 2.3L0 1.1L-1.7 2.3L-1 0.3L-2.7 -0.9L-0.6 -0.9Z"  transform="translate(687 527)"/>
          <path d="M0 -4.7L1.1 -1.5L4.5 -1.5L1.7 0.6L2.8 3.8L0 1.8L-2.8 3.8L-1.7 0.6L-4.5 -1.5L-1.1 -1.5Z"  transform="translate(513 519)"/>
          <path d="M0 -9.4L2.1 -2.9L9 -2.9L3.4 1.1L5.5 7.6L0 3.6L-5.5 7.6L-3.4 1.1L-9 -2.9L-2.1 -2.9Z"  transform="translate(598 387)"/>
          <path d="M0 -0.9L0.2 -0.3L0.9 -0.3L0.3 0.1L0.6 0.8L0 0.4L-0.6 0.8L-0.3 0.1L-0.9 -0.3L-0.2 -0.3Z"  transform="translate(132 467)"/>
          <path d="M0 -6.6L1.5 -2L6.3 -2L2.4 0.8L3.9 5.3L0 2.5L-3.9 5.3L-2.4 0.8L-6.3 -2L-1.5 -2Z"  transform="translate(645 331)"/>
          <path d="M0 -9.4L2.1 -2.9L9 -2.9L3.4 1.1L5.5 7.6L0 3.6L-5.5 7.6L-3.4 1.1L-9 -2.9L-2.1 -2.9Z"  transform="translate(689 383)"/>
          <path d="M0 -6.6L1.5 -2L6.3 -2L2.4 0.8L3.9 5.3L0 2.5L-3.9 5.3L-2.4 0.8L-6.3 -2L-1.5 -2Z"  transform="translate(454 259)"/>
          <path d="M0 -5.7L1.3 -1.7L5.4 -1.7L2.1 0.7L3.3 4.6L0 2.2L-3.3 4.6L-2.1 0.7L-5.4 -1.7L-1.3 -1.7Z"  transform="translate(164 57)"/>
          <path d="M0 -4.7L1.1 -1.5L4.5 -1.5L1.7 0.6L2.8 3.8L0 1.8L-2.8 3.8L-1.7 0.6L-4.5 -1.5L-1.1 -1.5Z"  transform="translate(274 487)"/>
          <path d="M0 -0.9L0.2 -0.3L0.9 -0.3L0.3 0.1L0.6 0.8L0 0.4L-0.6 0.8L-0.3 0.1L-0.9 -0.3L-0.2 -0.3Z"  transform="translate(238 480)"/>
          <path d="M0 -9.4L2.1 -2.9L9 -2.9L3.4 1.1L5.5 7.6L0 3.6L-5.5 7.6L-3.4 1.1L-9 -2.9L-2.1 -2.9Z"  transform="translate(122 42)"/>
          <path d="M0 -9.4L2.1 -2.9L9 -2.9L3.4 1.1L5.5 7.6L0 3.6L-5.5 7.6L-3.4 1.1L-9 -2.9L-2.1 -2.9Z"  transform="translate(732 219)"/>
          <path d="M0 -3.8L0.8 -1.2L3.6 -1.2L1.4 0.4L2.2 3.1L0 1.4L-2.2 3.1L-1.4 0.4L-3.6 -1.2L-0.8 -1.2Z"  transform="translate(752 102)"/>
          <path d="M0 -9.4L2.1 -2.9L9 -2.9L3.4 1.1L5.5 7.6L0 3.6L-5.5 7.6L-3.4 1.1L-9 -2.9L-2.1 -2.9Z"  transform="translate(682 84)"/>
          <path d="M0 -3.8L0.8 -1.2L3.6 -1.2L1.4 0.4L2.2 3.1L0 1.4L-2.2 3.1L-1.4 0.4L-3.6 -1.2L-0.8 -1.2Z"  transform="translate(886 7)"/>
          <path d="M0 -5.7L1.3 -1.7L5.4 -1.7L2.1 0.7L3.3 4.6L0 2.2L-3.3 4.6L-2.1 0.7L-5.4 -1.7L-1.3 -1.7Z"  transform="translate(639 116)"/>
          <path d="M0 0L0 0L0 0L0 0L0 0L0 0L0 0L0 0L0 0L0 0Z" transform="translate(921 140)"/><path d="M0   -9.4L2.1 -2.9L9 -2.9L3.4 1.1L5.5 7.6L0 3.6L-5.5 7.6L-3.4 1.1L-9 -2.9L-2.1 -2.9Z"  transform="translate(689 54)"/>
          <path d="M0 -1.9L0.4 -0.6L1.8 -0.6L0.7 0.2L1.1 1.5L0 0.7L-1.1 1.5L-0.7 0.2L-1.8 -0.6L-0.4 -0.6Z"  transform="translate(81 151)"/>
          <path d="M0 -3.8L0.8 -1.2L3.6 -1.2L1.4 0.4L2.2 3.1L0 1.4L-2.2 3.1L-1.4 0.4L-3.6 -1.2L-0.8 -1.2Z"  transform="translate(920 434)"/>
          <path d="M0 -3.8L0.8 -1.2L3.6 -1.2L1.4 0.4L2.2 3.1L0 1.4L-2.2 3.1L-1.4 0.4L-3.6 -1.2L-0.8 -1.2Z"  transform="translate(798 51)"/>
          <path d="M0 -5.7L1.3 -1.7L5.4 -1.7L2.1 0.7L3.3 4.6L0 2.2L-3.3 4.6L-2.1 0.7L-5.4 -1.7L-1.3 -1.7Z"  transform="translate(313 397)"/>
        </g>
        </svg>
      </div>
      {/* Main Content */}
      <div className="relative overflow-hidden z-10 bg-transparent text-white font-mono">
        <div className="lg:p-36 md:p-24 sm:p-8 xs:p-4 grid xl:grid-rows-2 xl:grid-cols-2 gap-24">
          <div className='flex justify-center items-center xl:h-96 z-20'>
            {/* Profile Picture*/}
            <img alt="Profile" className="shadow-2xl shadow-blue-500 rounded-3xl align-middle justify-center h-96 object-contain" src={profilePicture}/>
          </div>
          <div className="shadow-2xl shadow-blue-500 rounded-xl p-12 bg-gray-700 border border-blue-400 border-1 min-w-[350px] z-30">
            <h3 className='font-mono text-blue-300 font-bold text-center text-2xl'> Welcome to my Website!</h3>
            <h3 className="text-xl text-blue-200">
            In an effort to better extend my reachability, and extend my chances of having a job lined up after I graduate, I have decided to make this website. You can find a little bit about me, some of my projects, and hopefully an impression of my work. You can also click the links to my LinkedIn, Github, and CodeWars accounts if you are interested above. 
            </h3>
          </div>
          <div className='font-mono text-white font-bold text-xl flex justify-center'>
            Resume can be found in the footer
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
      <div className="relative z-20">
        <ContactBar />
      </div>
      
    </div>
  )
}