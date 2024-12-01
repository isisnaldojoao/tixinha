import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  

  return (
    <>
      <main className='w-max-full md:h-full flex flex-col items-center bg-blue-500'>
        <header 
        data-aos="fade-up"
        data-aos-delay="700"
        className='animate-bounce-slow'>
          <img src='https://i.imgur.com/Qu1DGOS.png'/>
        </header>
        <div className='flex flex-col justify-center items-center'>
          <div 
          data-aos="fade-up"
          className='w-[200px] md:w-[800px] bg-blue-400 rounded-lg w-[800px]'>
            <h1 className=' text-2xl font-bold text-white p-2 select-none'>GRUPO A</h1>
          </div>

          <div className='flex flex-col md:flex-row mt-2 gap-2'>
          <div 
          data-aos="fade-right"
          data-aos-delay="300"
          className='w-[200px] md:w-auto bg-blue-900 gap-2 p-5 rounded-lg text-white cursor-pointer transition-transform hover:scale-110'>
              <h1 className='text-gray-400' >09/12/2024</h1>
              <h1>17H00</h1>
              <div className='font-bold'>
                <div>KRUU</div>
                <div>SHINDEN</div>
              </div>
            </div>

            <div data-aos="fade-right"
                data-aos-delay="400"
                className='bg-blue-900 gap-2 p-5 rounded-lg text-white cursor-pointer transition-transform hover:scale-110'>
              <h1 className='text-gray-400' >09/12/2024</h1>
              <h1>20H00</h1>
              <div className='font-bold'>
                <div>FURIA</div>
                <div>1º VCB</div>
              </div>
            </div>

            <div data-aos="fade-right"
                data-aos-delay="500"
                className='bg-blue-900 gap-2 p-5 rounded-lg text-white cursor-pointer transition-transform hover:scale-110'>
              <h1 className='text-gray-400' >10/12/2024</h1>
              <h1>17H00</h1>
              <div className='font-bold'>
                <div>KRU </div>
                <div>1º VCB</div>
              </div>
            </div>


            <div data-aos="fade-right"
                data-aos-delay="600"
                className='bg-blue-900 gap-2 p-5 rounded-lg text-white cursor-pointer transition-transform hover:scale-110'>
              <h1 className='text-gray-400' >10/12/2024</h1>
              <h1>20H00</h1>
              <div className='font-bold'>
                <div>FURIA </div>
                <div>SHINDEN</div>
              </div>
            </div>

            <div data-aos="fade-right"
                data-aos-delay="700"
                className='bg-blue-900 gap-2 p-5 rounded-lg text-white cursor-pointer transition-transform hover:scale-110'>
              <h1 className='text-gray-400' >11/12/2024</h1>
              <h1>17H00</h1>
              <div className='font-bold'>
                <div>KRU </div>
                <div>FURIA</div>
              </div>
            </div>

            <div data-aos="fade-right"
                data-aos-delay="800"
                className='bg-blue-900 gap-2 p-5 rounded-lg text-white cursor-pointer transition-transform hover:scale-110'>
              <h1 className='text-gray-400' >11/12/2024</h1>
              <h1>20H00</h1>
              <div className='font-bold'>
                <div>1ºVCB </div>
                <div>SHINDEN</div>
              </div>
            </div>

          </div>

        </div>

        <div data-aos="fade-up"
        
        className='w-[200px] md:w-[800px] my-2 p-3 bg-yellow-400 text-blue-900 flex items-center justify-center text-center rounded-lg'>
          <h1 className='text-2xl font-bold select-none'>TABELA</h1>
        </div>

        <article className='w-[300px] md:w-[750px]  bg-blue-800 my-2 rounded-lg p-2 shadow-lg transition-transform scale-105'> 
          <div className='flex flex-col'>
            <table
              data-aos="fade-left"
              data-aos-delay="300"
              className="w-full ">
              <thead className='text-white font-bold text-lg'>
                <tr>
                  <th className="text-left">CLASSIFICAÇÃO</th>
                  <th className="text-left">POSIÇÃO</th>
                </tr>
              </thead>
              <tbody className='text-white'>
                <tr>
                  <td>LOUD</td>
                  <td className='font-bold text-yellow-400 '>1</td>
                </tr>
                <tr>
                  <td>MIBR</td>
                  <td className='font-bold text-yellow-400'>2</td>
                </tr>
                <tr>
                  <td>KRU</td>
                  <td className='font-bold text-yellow-400'>3</td>
                </tr>
                <tr>
                  <td>FURIA</td>
                  <td className='font-bold text-yellow-400'>4</td>
                </tr>
                <tr>
                  <td>2º GAME</td>
                  <td className='font-bold text-yellow-400'>5</td>
                </tr>
                <tr>
                  <td>SHINDEN</td>
                  <td className='font-bold text-yellow-400'>6</td>
                </tr>
                <tr>
                  <td>1º VCB</td>
                  <td className='font-bold text-yellow-400'>7</td>
                </tr>
                <tr>
                  <td>2º VCB</td>
                  <td className='font-bold text-yellow-400'>8</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
        <footer className='w-full text-white mt-[90px] bg-blue-800 text-center font-bold uppercase '>
          Created by <a href='https://dev-portifolio-gold.vercel.app/'>John</a>
        </footer>
      </main>
    </>
  )
}

export default App
