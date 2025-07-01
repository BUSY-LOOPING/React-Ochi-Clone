import { FaArrowRightLong } from "react-icons/fa6";

const LandingPage = () => {
    return (
        <div className="w-full h-screen bg-zinc-900 pt-1">
            <div className="textstructure mt-45 px-15">
                {['We Create', "Eye Opening", "Presentations"].map((item, index)=> (
                    <div className="masker">
                        <div className="w-fit flex">
                            {index == 1 && (<div className="w-[7.5vw] relative -top-[-0.8vw] h-[5vw] bg-red-500 rounded-md mr-[1vw]"></div>)}
                            <h1 className="text-[7.5vw] uppercase font-['Founders_Grotesk'] leading-[6vw] h-full">{item}</h1>
                        </div>
                    </div>
                    ))}
            </div>
            <div className="border-t-[1px] border-zinc-700 mt-30 flex justify-between items-center py-5 px-20">
                {['For public and private companies', 'From the first pitch to IPO'].map((item) => (
                    <p className="text-xl font-light tracking-tight leading-none">{item}</p>
                ))}
                <div className="start flex items-center gap-3">
                    <div className="px-5 py-2 border-[1px] border-zinc-500 rounded-full font-light text-xl uppercase">Start the Project</div>
                    <div className=" flex items-center justify-center w-10 h-10 rounded-full border-[1px] border-zinc-500">
                        <FaArrowRightLong className="rotate-[-45deg]"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LandingPage
