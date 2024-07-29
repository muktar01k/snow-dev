
import Tastimonials from '../assets/tastimonials.png'
import Wall from '../assets/Wallpapper.png'
import Html from '../assets/html.png'
import Css from '../assets/Css.png'
import React from '../assets/React.png'
import Tailwind from '../assets/Taailwind.png'
import Java from '../assets/Java.png'

import { Afcons, Oranges } from '../Shared/Data'
import { Africa, Reachout } from '../Shared/Global'

const Downpart = () => {

  return (
    <div>

      {
        Afcons.map((Afcon) => (<Africa {...Afcon} />))
      }

      {/* <div className="">
        <h6 className='text-center mt-[1rem] text-3xl  font-bold'>I'm a global professional with experience working across Africa</h6>
        <div className="flex sm:flex sm:flex-col">
          <p className='w-[40rem] sm:w-[24.1rem] sm:ml-[1rem] ml-[5rem] mt-[5.8rem] sm:mt-[3rem] sm:text-[grey]  text-xl font-semibold sm:font-medium' >I'm a professional with a home base in Africa, but my work takes me all over the continent. I love exploring different cultures and collaborating with people from all walks of life. Whether I'm working in a bustling city or a remote village, I'm always inspired by the people I meet and the ideas we create together.</p>
          <img className='ml-[5rem] sm:ml-[0rem] mt-[4rem] w-[23rem]' src={Africa} alt="" />
        </div>
      </div> */}
      <div className="">
        <div className="text-center font-bold text-2xl xr:mr-[2.5rem] xr:pt-[3rem] pro:ml-[3rem] x:mr-[0.5rem] x:pt-[3rem] sam:w-[360px] mt-[1rem]">
          <p>Happy Client Feedback</p>
        </div>
        <div className="">
          <div className="xr:w-[18rem] xr:mt-[2rem] xr:ml-[4rem] x:w-[18rem] x:mt-[2rem] x:ml-[3rem] sam:w-[17rem] sam:ml-[2rem] sam:mt-[1rem]">
            <img className='' src={Tastimonials} alt="" />
          </div>
          <div className="">
            <p className='xr:w-[414px] font-bold text-3xl text-center xr:mt-[2rem] pro:w-[428px] x:w-[375px] x:mt-[2rem]'>Task Completed by me</p>
            <p className='xr:w-[414px] x:w-[375px] text-center x:text-xl font-semibold xr:text-xl pro:w-[428px] sam:w-[360px] text-[grey] mt-[0.5rem]'>"Snowdev provide Top notch of websites with a different ideas out of the box..."<span className='text-[blue]'>myRideApp</span>,<span className='text-[blue]'>shelter</span></p>
            <a href="" className='xr:ml-[9rem] text-[blue] x:ml-[7rem] sam:ml-[7rem]'>Made2clean.com.ng</a>
          </div>
        </div>
      </div>

      <div className="pt-[3rem] ">
        <div className="font-bold text-center text-4xl x:text-center">
          <p>My Skills</p>
        </div>
        <div className="xr:w-[400px] x:w-[360px] flex flex-col gap-[1rem] pt-[2rem] x:pl-[1rem]  xr:pl-[1rem] pro:w-[420px] sam:w-[357px]">
          <div className="bg-gray-200 shadow-lg xr:h-[6rem] x:h-[6rem] flex x:gap-[9rem] justify-center rounded-[2rem] gap-[10rem] justify-center sam:h-[6rem]">
            <p className='text-[black] md:text-3xl xr:mt-[2rem] font-bold text-2xl x:mt-[2rem] sam:mt-[2rem]'>HTML</p>
            <img className='xr:w-[5rem] h-[4rem] xr:mt-[1rem] x:w-[4rem] x:mt-[1.2rem] sam:mt-[1.2rem] sam:w-[4.5rem]' src={Html} alt="" />
          </div>
          <div className="bg-gray-200 shadow-lg h-[6rem] rounded-[2rem] flex gap-[10rem] justify-center">
            <p className='text-[black] font-bold text-2xl xr:mt-[2rem] x:mt-[2rem] sam:mt-[2rem]'>CSS</p>
            <img className='xr:w-[6rem] h-[4rem] xr:mt-[1rem] x:w-[6rem] x:mt-[1.2rem] sam:w-[6.7rem] sam:mt-[1.2rem]' src={Css} alt="" />
          </div>
          <div className="bg-gray-200 shadow-lg h-[6rem] rounded-[2rem] flex gap-[10rem] justify-center">
            <p className='text-[black] font-bold text-2xl xr:mt-[2rem] x:mt-[2rem] sam:mt-[2rem]'>REACT</p>
            <img className='xr:w-[6rem] h-[4rem] xr:mt-[1rem] x:w-[6rem] x:mt-[1.2rem] sam:w-[5rem] sam:mt-[1.2rem]' src={React} alt="" />
          </div>
          <div className="bg-gray-200 shadow-lg h-[6rem] rounded-[2rem] flex gap-[7rem] justify-center">
            <p className='text-[black] font-bold text-2xl xr:mt-[2rem] x:mt-[2rem] sam:mt-[2rem]'>TAILWINDS</p>
            <img className='xr:w-[6rem] h-[4rem] xr:mt-[1rem] x:w-[6rem] x:mt-[1.2rem] sam:w-[5rem] sam:mt-[1.2rem]' src={Tailwind} alt="" />
          </div>
          <div className="bg-gray-200 shadow-lg h-[6rem] rounded-[2rem] flex gap-[7rem] justify-center">
            <p className='text-[black] font-bold text-2xl xr:mt-[2rem] x:mt-[2rem] sam:mt-[2rem]'>JAVASCRIPT</p>
            <img className='xr:w-[6rem] h-[4rem] xr:mt-[1rem] x:w-[6rem] x:mt-[1.2rem] sam:w-[4rem] sam:mt-[1.2rem]' src={Java} alt="" />
          </div>
        </div>
      </div>

      <p className='text-center xr:text-4xl font-bold xr:mt-[3rem] xr:mr-[1.5rem] x:text-4xl font-bold x:mt-[3rem] x:mr-[rem]'>Reach Out To Us</p>
      <div className="xr:mt-[2rem] x:mt-[2rem] smm:ml-[0.7rem]">

        {
          Oranges.map((Orange) => (<Reachout {...Orange} />))
        }


        {/* <div className="bg-[orange] md:w-[39rem] md:h-[13rem] flex rounded-[3rem] sm:w-[20rem] sm:h-[30rem] sm:rounded-[28px] sm:mr-[1rem] md:pl-[2rem] md:pt-[1rem] smxx:ml-[1rem]">
          <div className='sm:flex sm:flex-col md:flex md:gap-[4rem]'>
            <div className=' sm:mt-[1rem] sm:w-[20rem] md:w-[8rem]'>
              <img className='sm:w-[4rem] sm:ml-[8rem] md:w-[5rem]' src={Address} alt="" />
              <p className='text-xl font-semibold sm:ml-[8rem]'>Address:</p>
              <p className='text-xl sm:mr-[5rem] sm:ml-[4rem]'>Lagos state, Nigeria</p>
            </div>
            <div className=' sm:mt-[1rem] md:w-[10rem]'>
              <img className='sm:w-[4rem] sm:ml-[8rem] md:w-[5rem]' src={Email} alt="" />
              <p className='text-xl font-semibold sm:ml-[8rem]'>Email:</p>
              <p className='text-xl sm:mr-[5rem] sm:ml-[4rem]'>snowdev@gmail.com</p>
            </div>
            <div className=' sm:mt-[1rem] md:w-[10rem]'>
              <img className='sm:w-[4rem] sm:ml-[8rem] md:w-[5rem]' src={Call} alt="" />
              <p className='text-xl font-semibold sm:ml-[8rem]'>Contact:</p>
              <p className='text-xl sm:mr-[5rem] sm:ml-[5rem]'>+2349132630151</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Downpart
