import { TiSocialFacebookCircular } from "react-icons/ti"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import Logo from "../assets/logo.png"

export const Futter = () => {

    return (
        <div className="bg-[#211e39] xr:h-[40rem] xr:w-[414px] pro:w-[428px] x:w-[375px] x:h-[30rem] mt-[2rem] sam:w-[360px] max:w-[390px]">
            <div className="xr:pt-[2rem] x:pt-[2rem]">
                {/* <div className="">  */}
                <div className="w-[10rem] xr:ml-[8rem] x:ml-[6rem] sam:ml-[6rem]">
                    <img src={Logo} alt="" />
                </div>
                <div className="xr:grid xr:grid-cols-3 xr:text-center xr:ml-[0.5rem] xr:gap-[1rem] xr:mt-[2rem] x:grid x:grid-cols-3 x:text-center x:mt-[2rem] sam:grid sam:grid-cols-3 text-center">  
                 <p className="text-[orange] hover:text-[orange]">Home</p>
                    <p className="text-[grey]">About</p>
                    <p className="text-[grey]">Contact us</p>
                    <p className="text-[grey]">Location</p>
                    <p className="text-[grey]">Portfolio</p>
                    <p className=" text-[grey]">Payment</p>
                </div>
                {/* <div className="mt-[3rem]  h-[5rem] pt-[2rem]">
                    <div className="flex gap-[3rem] justify-center bg-[blue] ">

                    </div>
                </div> */}
                <hr className="xr:ml-[3rem] xr:mt-[20rem] xr:w-[320px] x:w-[300px] x:ml-[2rem] x:mt-[10rem]" />
                <p className="text-[black] text-xl font-Josefin Sans xr:ml-[0.5rem] text-center x">Copyright 2024 snowdev All well reserved</p>
                {/* </div>  */}
            </div>
        </div>
    )
}


