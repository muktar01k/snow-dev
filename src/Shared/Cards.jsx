import Programmer from '../assets/programmer.jpg'
import Codeset from '../assets/codeset.jpg'
import Macset from '../assets/macset.jpg'

export const Details = ({ text }) => {
    return (
        <div className='xr:pt-[0.6rem]'>
            <a href="">{text}</a>
        </div>
    )
}

export const WelcomeText = ({ text2, text3, text4 }) => {
    return (
        <div className=" text-center lg:mt-[5rem] xr:pt-[2rem]  xr:h-[37rem] static xr:mt-[3rem] x:mt-[3rem] xr:w-[414px] pro:w-[428px] sam:w-[360px] sam:mt-[3rem]">
            <div className="">
                <h2 className='lg:text-[20rem] font-Josefin Sans xr:font-semibold x:font-semibold xr:text-center x:text-center xr:text-3xl x:text-3xl xr:ml-[2rem] x:ml-[0.5rem] pad:text-5xl sam:text-3xl sam:font-semibold'>{text2}</h2>
                <h1 className='lg:text-8xl font-bold lg:mt-[1rem] xr:ml-[1rem] x:ml-[1rem] xr:font-bold x:font-bold xr:text-[4rem] x:text-[4rem] pro:text-[4rem] sam:text-[3.5rem]'>{text3}</h1>
            </div>

            <p className='xr:w-[410px] pro:w-[428px] pro:font-semibold pro:ml-[0.01rem] font-Josefin Sans xr:font-semibold x:font-semibold xr:ml-[0.2rem] x:w-[375px] pad:w-[768px] pad:text-2xl sam'>{text4}</p>

            <div className="justify-center mt-[1rem] x:mt-[2rem]">
                <img className=' rounded-r-3xl rounded-b-3xl rounded-t-3xl border-[0.5rem] border-indigo-500 lg:w-[20rem] h-[13rem]  xr:mt-[2rem] xr:ml-[2rem] x:ml-[0.5rem] smm:ml-[1rem]' src={Programmer} alt="ImagePcture1" />
                <img className=' md:rounded-r-3xl rounded-r-3xl rounded-b-3xl rounded-t-3xl border-[0.5rem] border-indigo-500 xr:hidden x:hidden' src={Codeset} alt="ImagePcture1" />
                <img className=' w-[25rem] h-[15rem] rounded-r-3xl rounded-b-3xl rounded-t-3xl border-[0.5rem] border-indigo-500 xr:hidden x:hidden' src={Macset} alt="ImagePcture1" />
            </div>
        </div>
    )
}

