import profilePicture from './pictures/profile.jpg';
import london from './pictures/london.jpg';
import SocialBar from './Social-bar';
export default function AboutMe(){
  return(
    <div>
      <SocialBar />
      <body className="overflow-hidden h-auto bg-gradient-to-b from-red-400 to-fuchsia-900 text-white font-mono">
        <h1 className="absolute left-1/4 top-[645px] text-center text-7xl">↑</h1>
        <div className="p-36 grid grid-rows-4 grid-cols-2 gap-24">
          <div className='flex justify-center items-center'>
            <img alt="Picture of Me" className="shadow-2xl shadow-slate-200/40 w-96 rounded-3xl align-middle justify-center" src={profilePicture}/>
          </div>
          <div className="shadow-2xl shadow-slate-200/40 rounded-3xl p-12">
            <h3 className='font-mono text-white font-bold text-center text-2xl'> Welcome to my Website!</h3>
            <h3 className="text-xl">
              This is some sample text to be in the bio position of my website next to my profile picture I am just rambling some shit so that I can see the spacing and how it looks next to the image and all that shit you know what I mean.
            </h3>
          </div>
          <div className='font-mono text-white font-bold text-xl flex justify-center'>
            <div className="grid-cols-1 grid-rows-3">
              <h1 className="text-center"> She took this picture</h1>
            <img alt="picture of London" className="shadow-2xl shadow-slate-200/40 w-96 rounded-3xl align-middle justify-center" src={london}/>
            </div>
          </div>
          <div className="shadow-2xl shadow-slate-200/40 rounded-3xl p-12">
            <h3 className='font-mono text-white font-bold text-center text-2xl'>Who is this woman?</h3>
            <a
              href="https://www.minecraft.net/en-us"
              target="_blank"
              rel="noopener noreferrer"
            >
            <h3 className="text-xl">
              This woman is London and she likes minecraft again just writing some text to fill the space. This paragraph should also be clickable so that you can see what she is interested in!
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