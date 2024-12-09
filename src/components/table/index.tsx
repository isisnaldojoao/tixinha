export default function Table() {
    return (
        <>
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
    </>
    );
}