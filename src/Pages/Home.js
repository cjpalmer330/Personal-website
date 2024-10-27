import profilePicture from '../pictures/profile.jpg';
import SocialBar from '../Social-bar';
export default function Home(){
  return(
    <div>
      <SocialBar />
      <body className="overflow-hidden h-auto bg-gradient-to-b from-red-400 to-fuchsia-900 text-white font-mono">
        <div className="p-36 grid grid-rows-4 grid-cols-2 gap-24">
          <div className='flex justify-center items-center'>
            {/* Profile Picture*/}
            <img alt="Picture of Me" className="shadow-2xl shadow-slate-200/40 rounded-3xl align-middle justify-center min-w-[80px] w-3/5" src={profilePicture}/>
          </div>
          <div className="shadow-2xl shadow-slate-200/40 rounded-3xl p-12">
            <h3 className='font-mono text-white font-bold text-center text-2xl'> Welcome to my Website!</h3>
            <h3 className="text-xl">
              This is some sample text to be in the bio position of my website next to my profile picture I am just rambling some shit so that I can see the spacing and how it looks next to the image and all that shit you know what I mean.
            </h3>
          </div>
          <div className='font-mono text-white font-bold text-xl flex justify-center'>
          </div>
          <div className="shadow-2xl shadow-slate-200/40 rounded-3xl p-12">
            <h3 className='font-mono text-white font-bold text-center text-2xl'>Sample Text</h3>
            <a
              href="https://www.minecraft.net/en-us"
              target="_blank"
              rel="noopener noreferrer"
            >
            <h3 className="text-xl">
              This is some sample text
            </h3>
            </a>
          </div>
          <div>
            <h2 className="text-2xl">test</h2>
          </div>
          <div>
            <h2 className="text-2xl">test</h2>
          </div>
          <div>
            <h2 className="text-2xl">test</h2>
          </div>
          <div>
            <h2 className="text-2xl">test</h2>
          </div>
        </div>
      </body>
    </div>
  )
}