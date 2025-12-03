import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import { Wrapper } from "../shared/wrapper";

export function Invite() {
    return(
        <Wrapper  >
            <h2 className="text-3xl md:text-6xl font-geist font-bold text-black dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-tr dark:from-zinc-400 dark:to-white" >Invite Creators</h2>
            <p  className="max-w-xl text-justify w-full text-xs md:text-sm font-light mb-2 md:mb-4 dark:text-white font-geist" >Arcade makes collaboration effortless: create invite links, set role permissions, and give each member the tools they need to contribute — from uploading builds to writing devlogs and leaving timed feedback.</p>
            <Button className="cursor-pointer w-fit app-color text-white drop-shadow-red-600/40 transition-all ease-in-out duration-700  hover:drop-shadow-red-600  drop-shadow-2xl" >
            + Invite Your Team
            </Button>
            <section className="overflow-hidden selection:bg-rose-600/50 selection:text-white  rounded-3xl h-[28rem] w-full relative mt-4" >
                    <video
                        className="-z-10  shadow-lg object-cover w-full h-full "
                        autoPlay
                        loop
                        muted
                        src="/videos/car.mp4"
                    >
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-radial  to-black flex flex-col items-center justify-center " >
                    </div>
                    <div className='absolute left-0 p-4 md:p-8 bottom-0 flex justify-center items-center' >
                        <div className="max-w-md p-4 relative rounded-2xl bg-gradient-to-t from-white/10 to-white/1 backdrop-brightness-255 backdrop-blur-xs" >
                        <span className="text-sm font-semibold text-white" >
                            Create Invite Link
                        </span>
                        <p className="text-xs font-geist font-light text-white" >
                            Bring teammates, artists, composers, and playtesters into your Arcade Studio. Share builds, assign roles, and start collaborating — instantly.
                        </p>
                        <Button variant={'secondary'} size={'icon'} className="h-8 w-8 absolute top-2 right-2" >
                            <ArrowUpRight/>
                        </Button>
                        </div>
                    </div>
            </section>
        </Wrapper>
    )
}