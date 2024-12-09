import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/header';
import Group from './components/groups';
// import Table from './components/table'; vou usar a tabela em algum momento


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  

  return (
    <>
      <main className='w-max-full  md: flex flex-col items-center bg-blue-500'>
        <Header/>
        <Group/>
        <section className='flex flex-col items-center'>
          <div className='w-[200px] md:w-[800px] my-2 p-3 bg-yellow-400 text-blue-900  flex items-center justify-center text-center rounded-lg'>
            <h1 className='text-xl font-bold uppercase'>Transmissão Oficial</h1>
          </div>
          
          <div className="w-full h-96 flex justify-center items-center bg-gray-800 ">
        <iframe
          src="https://player.twitch.tv/?channel=tixinhadois&parent=localhost"
          height="380"
          width="854"
          className="rounded-lg shadow-lg"
        ></iframe>
        </div>
        </section>

        <section className='flex flex-col justify-center items-center'>
          <div className='w-[200px] md:w-[800px] my-2 p-3 bg-yellow-400 text-blue-900  flex items-center justify-center text-center rounded-lg'>
            <h1 className='text-xl font-bold uppercase'>Times classificados</h1>
          </div>

          <div className='grid grid-cols-4 gap-[50px] m-5'>
              <img className='w-[100px] bg-yellow-400 p-3 rounded-lg' src='https://i.imgur.com/H9in6ni.png'/>
              <img className='w-[100px] bg-yellow-400 p-3 rounded-lg' src='https://i.imgur.com/sM2d7lZ.png'/>
              <img className='w-[100px] bg-yellow-400 p-3 rounded-lg' src='https://i.imgur.com/EBTIIiL.png'/>
              <img className='w-[100px] bg-yellow-400 p-3 rounded-lg' src='https://i.imgur.com/4nnz1aG.png'/>
              <img className='w-[100px] bg-yellow-400 p-3 rounded-lg' src='https://i.imgur.com/9p5yOLL.png'/>
              <img className='w-[100px] h-[100px] bg-yellow-400 p-3 rounded-lg' src='https://i.imgur.com/j2wiI2g.png' />

              <img className='w-[100px] bg-yellow-400 p-3 rounded-lg' src='https://i.imgur.com/aOLAZ5X.png'/>
              <img className='w-[100px] bg-yellow-400 p-3 rounded-lg' src='https://i.imgur.com/fGbdzMx.png'/>
          </div>

        </section>
        <footer className='w-full text-white mt-auto bg-blue-800 text-center font-bold uppercase '>
          Created by <a href='https://dev-portifolio-gold.vercel.app/'>John</a>
        </footer>
      </main>
    </>
  )
}

export default App
