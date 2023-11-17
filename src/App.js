//import './App.css';
import githubLogo from './pictures/github-mark-white.svg';
import linkedInLogo from './pictures/linkedIn.svg';
import profilePicture from './pictures/profile.jpg';
import london from './pictures/london.jpg';

function App() {
  return (
    <div className="App h-screen">
      <header className="width-max text-xl bg-red-400 flex ">
        <div className="w-screen">
          <h3 className='absolute text-center font-mono font-bold p-8 whitespace-nowrap text-white text-5xl align-middle'>Christopher Palmer</h3>
        </div>
        <div alt="social Links" className="w-screen p-2 inset-0 z-10">
          <div className='float-right p-2'>
            <a
            className="float-right"
            href="https://github.com/cjpalmer330"
            target="_blank"
            rel="noopener noreferrer"
            >
              <img alt="Github Logo" className="flex-initial object-scale-down w-20 shadow-lg shadow-rose-700 rounded-full  hover:shadow-rose-600 hover:shadow-xl hover:scale-110 transition-all duration-300" src={githubLogo}/>
            </a>
          </div>
        
        <div className=' float-right p-2'>
          <a
            href="https://www.linkedin.com/in/christopher-palmer-bb48a6253/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="LinkedIn Logo" className="flex-initial flex-2 w-20 shadow-lg shadow-rose-700 rounded-xl hover:shadow-rose-600 hover:shadow-xl hover:scale-110 transition-all duration-300" src={linkedInLogo}/>
          </a>
        </div>
        
        </div>
        
      </header>
      <body className="h-auto bg-gradient-to-b from-red-400 to-fuchsia-900 text-white font-mono">
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
              href="https://www.thehotline.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
            <h3 className="text-xl">
              This woman kidnapped me on the side of the street and forced me into her home so that I couldn't escape. She locked the doors and held me at knife point for hours until I did everything that she asked.  
            </h3>
            </a>
          </div>
          <div>
            <h2 className="text-2xl">fuck</h2>
          </div>
          <div>
            <h2 className="text-2xl">fuck</h2>
          </div>
          <div>
            <h2 className="text-2xl">fuck</h2>
          </div>
          <div>
            <h2 className="text-2xl">fuck</h2>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
