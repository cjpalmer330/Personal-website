import profilePicture from '../pictures/profile.jpg';
import SocialBar from '../Social-bar';
import ContactBar from '../Contact-bar';
export default function Home(){
  return(
    <div class="h-screen">
      <SocialBar />
      <body className="overflow-hidden bg-gradient-to-b from-red-400 to-fuchsia-900 text-white font-mono">
        <div className="p-36 grid grid-rows-3 grid-cols-2 gap-24">
          <div className='flex justify-center items-center'>
            {/* Profile Picture*/}
            <img alt="Picture of Me" className="shadow-2xl shadow-slate-200/40 rounded-3xl align-middle justify-center min-w-[80px] h-96 w-96" src={profilePicture}/>
          </div>
          <div className="shadow-2xl shadow-slate-200/40 rounded-3xl p-12">
            <h3 className='font-mono text-white font-bold text-center text-2xl'> Welcome to my Website!</h3>
            <h3 className="text-xl">
            &lt;-- I'm this guy!<br></br>
            I hope you find what you're looking for here and get in touch with me!
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
        </div>
      </body>
      <ContactBar />
    </div>
  )
}