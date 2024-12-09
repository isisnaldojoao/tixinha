export default function Group() {
    return (
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
    );
}