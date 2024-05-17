
import Downpart from "../Downpart.jsx"
import { Futter } from "../Footer.jsx"
import Header from "../Header.jsx"
import Middle from "../Middle.jsx"



const Dashboard = () => {

    return (
        <div className="bg-[#fbe2e3]  absolute dark:bg-[#946263] xr:w-[414px] smm:w-[390px] sam:w-[360px]">
            <div className="bg-[#dbd7fb] absolute">
            <Header />
            <Middle />
            <Downpart />
            <Futter />
            </div>
        </div>
        
    )
}

export default Dashboard