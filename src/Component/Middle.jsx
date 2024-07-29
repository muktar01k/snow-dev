import Service from '../assets/service-icon3.png'
import App from '../assets/app.png'
import Head from '../assets/head.png'
import Head2 from '../assets/head2.png'
import Head3 from '../assets/head3.png'
import Think from '../assets/think.png'
import Light from '../assets/light.png'
import { useState } from 'react'
import { RedCards } from '../Shared/Data'
import { DivCard } from '../Shared/Boxers'
// import Cards from '../Shared/Boxers'

// import Experts from '../Shared/Boxers'
// import { ExpertsTexts } from '../Shared/Data'



const Middle = () => {

    const [Togglemodal, setTogglemodel] = useState(false)
    const [Togglemodal2, setTogglemodel2] = useState(false)


    function ToggleWeb() {
        setTogglemodel(!Togglemodal)
    }
    function Toggleweb2() {
        setTogglemodel2(!Togglemodal2)
    }




    return (
        <div className="">
            <div id='Experties' className="text-center items-center">
                <h3 className='lg:text-4xl text-center font-Josefin Sans font-semibold pt-[2rem] xr:text-3xl x:text-3xl xr:mr-[2.5rem] x:mr-[0.5rem]  items-center pro:text-4xl pro:ml-[4rem]'>My Experties</h3>
                <p className='mt-[1rem] text-3xl text-center font-bold xr:w-[414px] text-center items-center pro:w-[428px]'>We deliver Top Notch In Any Of This Range</p>
                {/* <div className="flex divide-x-4 mt-[2rem] sm:flex-col sm:gap-[2rem] sm:justify-center gap-[4rem]">
                {
                    RedCards.map((Redcard) => (<DivCard {...Redcard} />))
                }
            </div>  */}
                {/* <div className=" flex justfy-center ml-[5rem] sm:ml-[2.3rem] mt-[rem] cursor-pointer w-[35rem] sm:w-[22rem]  sm:h-[20rem] rounded-xl  bg-[red] h-[10rem] pl-[3rem] pt-[0.5rem]  ">
                    <div className="bg-[grey] w-[7rem] pl-[2rem] h-[7rem] pt-[2rem] rounded-full mt-[1rem] sm:hidden">
                        <img className='w-[3rem]' src={Service} alt="" />
                    </div>
                    <div className="mt-[1rem]">
                        <h4 className='text-3xl font-semibold pt-[0.5rem] text-[grey] '>Web Development</h4>
                        <p className='text-2xl w-[23rem] sm:w-[20rem] sm:mr-[3rem]'></p>
                    </div>
            </div>  */}

                <div className='flex flex-col justify-center items-center xr:w-[414px] x:w-[360px] x:ml-[0.4rem] pro:w-[428px]'>
                    {RedCards.map((Redcard) => (<DivCard {...Redcard} />))}
                </div>

                {/* <div className=" ">
                    <div className="flex justfy-center ml-[5rem] sm:ml-[2.3rem] mt-[rem] cursor-pointer w-[35rem] sm:w-[22rem]  sm:h-[20rem] rounded-xl  bg-[red] h-[10rem] pl-[3rem] pt-[0.5rem]">
                        <div className="bg-[grey] w-[7rem] pl-[2rem] h-[7rem] pt-[2rem] rounded-full mt-[1rem] sm:hidden">
                            <img className='w-[3rem] ' src={App} alt="" />
                        </div>
                        <div className="mt-[1rem]">
                            <h4 className='text-3xl font-semibold pt-[0.5rem] text-[grey]'>App Management</h4>
                            <p className='text-2xl w-[23rem] sm:w-[20rem] sm:mr-[5rem]'>We have experts ready to make best mobile apps 🙃.</p>
                        </div>

                    </div>

                </div> */}

                {/* </div> */}

                <hr className='mt-[3rem]  h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700 xr:w-[315px] x:w-[315px] xr:ml-[3rem]  x:ml-[1.7rem]' />
                <div className='xr:w-[414px] pro:w-[428px] sam:w-[360px]'>
                    <h5 className="text-center text-3xl font-bold xr:w-[412px] x:w-[375px] pro:w-[428px] smm:w-[390px]">A creative thinker and problem solver, ready to help your company succeed</h5>
                    <p className='text-[grey] font-medium mt-[2rem] text-xl smr:text-center xr:w-[413px] x:w-[375px] pro:w-[427px] sam:w-[350px]'>I'm a creative thinker with a knack for solving problems. I'm passionate about helping businesses achieve their goals through innovative solutions. I'm skilled in finding new and creative ways to solve complex problems, and I love bringing ideas to life. I'm eager to work with businesses that are ready to take their company to the next level. If you're looking for someone who can help you reach your goals. <button className='bg-[black] w-[8rem] h-[3rem] rounded-2xl text-[white]'>Contact Us</button></p>
                    
                    
                    <div className="flex justify-center mt-[2rem]  xr:w-[414px] x:w-[335px] xr:pr-[2rem] pro:w-[428px] sam:w-[358px]">
                        <img className='w-[15rem] xr:hidden x:hidden sam:hidden ' src={Head} alt="" />
                        <img className='w-[15rem] xr:hidden x:hidden sam:hidden' src={Light} alt="" />
                        <img className='w-[15rem] ' src={Head3} alt="" />
                        <img className='w-[16rem] x:w-[15rem] sam:w-[15rem]' src={Think} alt="" />
                        <img className='w-[15rem] xr:hidden x:hidden sam:hidden' src={Head2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Middle

