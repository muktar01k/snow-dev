// import { Link } from 'react-router-dom'
import Codeset from '../assets/codeset.jpg'
import Logo from '../assets/logo.png'
// import Macset from '../assets/macset.jpg'
// import Programmer from '../assets/programmer.jpg'
// import Wall from '../assets/Wallpapper.png'
import Ham from '../assets/hamburger.png'
import { useState } from 'react'
import Button from '../Shared/Button'
import {  WelcomeDetails, WelcomePictures } from '../Shared/Data'
import { WelcomeText } from '../Shared/Cards'
// import { WelcomeImages } from '../Shared/ImageData'

const Header = () => {
    const [toggleham, setToggleham] = useState(false)

    function Hamburger() {
        setToggleham(!toggleham)
    }

    return (

        <div className="">

            <div className=''>
                <nav className=' xr:flex xr:justify-center xr:gap-[6rem] xr:w-[414px] xr:h-[6rem] x:h-[6rem] xr:pt-[0.5rem] x:pt-[0.5rem] sam:pt-[0.5rem] pro:w-[428px] pro:gap-[7rem] x:w-[375px] x:flex x:justify-center x:gap-[6rem] sam:w-[360px] sam:flex sam:justify-center sam:gap-[3rem]'>
                    <div className='w-[7rem] xr:w-[6rem] x:w-[5rem] sam:w-[5rem]'>
                        <img className='' src={Logo} alt="" />
                    </div>
                    <div className=''>
                        <div onClick={Hamburger} className="w-[3rem] lg:h-[3rem] lg:ml-[8rem] lg:mt-[4rem] lg:p-0 xr:ml-[7rem]  xr:mt-[1.5rem] x:ml-[6rem] x:mt-[1rem] sam:ml-[8rem] sam:mt-[1rem]">
                            <img className='' src={Ham} alt="" />
                        </div>
                        {toggleham && (
                            <div className="xr:absolute x:absolute sam:absolute lg:mt-[2rem] xr:bg-[#13BCB3] x:bg-[#13BCB3]  xr:h-[18rem]  x:h-[16rem] xr:w-[11rem] x:w-[9rem] xr:rounded-[0.5rem] x:rounded-[0.5rem] sam:bg-[#13BCB3] sam:w-[11rem] sam:h-[15rem] sam:rounded-xl">
                                <div className='text-xl lg:pt-[3rem] text-lg text-[grey]  xr:pt-[0.5rem] sam:pt-[0.5rem] flex flex-col gap-[0.4rem]'>
                                    <a href="#home">Home</a>
                                    <a href="#About">About</a>
                                    <a href="#Portfolio">Portfolio</a>
                                    <a href="#skills">skills</a>
                                    <a href="#Experties">Experties</a>

                                    {/* <a href="">About</a>
                                    <a href="">Location</a>
                                    <a href="">Sevice</a>
                                    <a href="">Portfolio</a>
                                    
                                    <a href="">Payment</a> */}

                                    <a id='#Contact us' className='h-[3rem] lg:ml-[3rem]  bg-[orange] mt-[0.1rem] mb-[1rem] w-[10rem]  rounded-3xl  text-[black]'/> Contact us<a/>
                                    {/* <button className='h-[3rem] ml-[3rem]  bg-[orange] mt-[2.5rem] mb-[1rem] w-[10rem]  rounded-3xl sm:ml-[0.2rem] sm:w-[8rem]  '>Contact Us</button> */}
                                </div>
                            </div>
                        )
                        }


                    </div>

                </nav>
                {/* <div className="justify-center text-center mt-[5rem] h-[50rem] sm:static ">
                    <h2 className='text-8xl font-Josefin Sans font-semibold sm:text-3xl sm:pr-[2rem]'>Hello, Welcome To</h2>
                    <h1 className='text-8xl font-bold mt-[1rem] sm:text-6xl sm:pr-[2rem]'>SNOWDEV</h1>
                    <p className='w-[70rem] ml-[9rem] text-[grey] font-medium mt-[2rem] text-xl sm:w-[25rem] sm:ml-[0.5rem] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tenetur cum accusamus.🤪 Fuga quo aliquid dolor repudiandae assumenda reprehenderit nesciunt magni est. Non pariatur 🥰 vero perspiciatis ipsa voluptatum mollitia eligendi!
                        Culpa illo 🥰repellendus facilis vel dolorum adipisci quas ut</p>
                    <div className="flex justify-center gap-[8rem] mt-[3rem] sm:flex sm:flex-col">
                        <img className='w-[20rem] rounded-r-3xl rounded-b-3xl rounded-t-3xl border-[0.5rem] border-indigo-500 sm:w-[20rem] sm:h-[13rem] sm:ml-[3rem] sm:mt-[3rem]' src={Programmer} alt="" />
                        <img className='w-[20rem] rounded-r-3xl rounded-b-3xl rounded-t-3xl border-[0.5rem] border-indigo-500 sm:hidden' src={Codeset} alt="" />
                        <img className='w-[20rem] rounded-r-3xl rounded-b-3xl rounded-t-3xl border-[0.5rem] border-indigo-500 sm:hidden' src={Macset} alt="" />
                    </div> 000  
                </div> */}
                {
                    WelcomeDetails.map((WelcomeDetail) => (<WelcomeText {...WelcomeDetail} />))
                }
                {/* <div className="flex justify-center gap-[8rem] mt-[3rem] sm:flex sm:flex-col">
                    <img className='w-[20rem] rounded-r-3xl rounded-b-3xl rounded-t-3xl border-[0.5rem] border-indigo-500 sm:w-[20rem] sm:h-[13rem] sm:ml-[3rem] sm:mt-[3rem]' src={Programmer} alt="" />
                    <img className='w-[20rem] rounded-r-3xl rounded-b-3xl rounded-t-3xl border-[0.5rem] border-indigo-500 sm:hidden' src={Codeset} alt="" />
                    <img className='w-[20rem] rounded-r-3xl rounded-b-3xl rounded-t-3xl border-[0.5rem] border-indigo-500 sm:hidden' src={Macset} alt="" />
                </div> */}
            </div>
        </div>
    )
}

export default Header