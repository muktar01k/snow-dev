
import MapGlobal from '../assets/africa.svg'
import Address from '../assets/address.png'
import Email from '../assets/email.png'
import Call from '../assets/call.png'

export const Africa = ({ head1, head2 }) => {
  return (
    <div className="pt-[1rem] xr:w-[414px] pro:w-[428px] x:w-[375px] sam:w-[360px]">
      <h6 className='text-center text-3xl xr:w-[414px] font-bold pro:w-[428px] x:w-[375px]  sam:w-[360px] '>{head1}</h6>
      <div className="">
        <p className='xr:w-[414px] x:w-[375px] x:mt-[1.5rem] x:mr-[2rem] xr:mt-[1.5rem] font-semibold text-center text-xl text-[grey] pt-[1rem] x:text-xl pro:w-[428px] sam:w-[360px]'>{head2}</p>
        <img className='sam:mt-[2rem] w-[23rem] pro:w-[428px] xr:w-[375px]' src={MapGlobal} alt="" />
      </div>
    </div>
  )
}


export const Reachout = ({ Address1, Address2, Address3, Address4, Address5, Address6 }) => {
  return (
    <div className="">
      <div className="bg-gray-200 shadow-lg rounded-2xl xr:w-[360px] sam:w-[320px] xr:ml-[1.8rem] sam:ml-[1.4rem] xr:pt-[1rem] pro:h-[35rem] x:w-[350px] x:ml-[0.7rem] sam:mt-[2rem]">
        <div className='sam:pt-[1rem]'>
          <div className='items-center text-center'>
            <img className='xr:w-[6rem] xr:ml-[9rem] x:w-[6rem] x:ml-[8rem] sam:w-[7rem] sam:ml-[7rem]' src={Address} alt="" />
            <p className='text-xl font-semibold xr:text-center'>{Address1}</p>
            <p className='text-xl  xr:ml-[6rem]'>{Address2}</p>
          </div>
          <div className='items-center xr:mt-[1.5rem] sam:mt-[1rem] text-center'>
            <img className='xr:w-[6rem] xr:ml-[9rem]  x:w-[6rem] x:ml-[8rem] sam:ml-[7rem] sam:w-[7rem]' src={Email} alt="" />
            <p className='text-xl font-semibold xr:text-center'>{Address3}</p>
            <p className='text-xl  xr:ml-[6rem]'>{Address4}</p>
          </div>
          <div className='items-center xr:mt-[1.5rem] sam:mt-[1rem] text-center'>
            <img className='xr:w-[6rem] xr:ml-[9rem]  x:w-[6rem] x:ml-[8rem] sam:ml-[7rem] sam:w-[7rem]' src={Call} alt="" />
            <p className='text-xl font-semibold xr:text-center'>{Address5}</p>
            <p className='text-xl  xr:ml-[6rem]'>{Address6}</p>
          </div>
        </div>
      </div>
    </div>
  )
}