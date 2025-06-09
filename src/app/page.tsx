import Navbar from "@/components/shared/navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, Gamepad2 } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar/>
      <main className="h-screen font-sora grid grid-rows-2" >
        <div className="absolute -z-100 rounded-lg overflow-hidden h-screen max-w-scrren w-full flex justify-center">
            <div className="absolute inset-0">
              <div className="absolute inset-0"
                style={{
                background: "radial-gradient(circle at 20% 30%, rgba(0,0,0,1) 0%, transparent 70%)",
                position: "absolute",
                inset: 0,
                zIndex: 1,
                }}
              />
                <video
                  className="-z-10  shadow-lg object-cover w-full h-full "
                  autoPlay
                  loop
                  muted
                  src="/videos/fox.mp4"
                >
                  Your browser does not support the video tag.
                </video>
              <div className="absolute bg-black/30 inset-0 z-0" />
            </div>
        </div>
        <div className="h-full mt-20">
          <h1 className="px-5 text-white text-3xl md:text-5xl lg:text-6xl font-bold text-center md:leading-tight lg:leading-normal" >
            <span className="text-red-500 " >Show</span> your work. <span className="text-red-500 " >Share</span> your process. <span className="text-red-500 " >Connect</span> with devs like you.
          </h1>
          <div className="m-auto w-full flex gap-4 justify-center mt-4 " >
            <Button className="text-xs  md:text-md md:hover:shadow-xl/30 shadow-xl/30 hover:-translate-y-3 hover:rotate-2 md:shadow-none  shadow-rose-500 bg-gradient-to-r from-red-600 hover:via-rose-500 via-red-600 to-rose-500 cursor-pointer  transition-color duration-500 text-white " >
              Join the Adventure
            </Button>
            <Button className="text-xs  md:text-md hover:-translate-y-3 hover:-rotate-2 cursor-pointer bg-white hover:bg-white text-black transition-color duration-500 ">
              Join our Community
            </Button>
          </div>
          <div className="absolute gap-5 px-10 bottom-40 md:bottom-10 left-0 right-0 flex items-center justify-center" >
            <div className="bg-white/10 text-white backdrop-blur-xs p-2 rounded-2xl w-100" >
              <span className="text-sm font-semibold" >
                Start Your GameDev Journey
              </span>
              <p className="text-xs font-light " >
                Share your games. Write your devlogs. Inspire others.
                 Join a growing community of creators.
              </p>
              <Button size={"sm"} className="cursor-pointer text-xs mt-2 dark:bg-stone-950 bg-white text-rose-500">
                <Gamepad2  />
                Browse Games
              </Button>
            </div>
          </div>
        </div>
      </main>
        <section className="text-white flex md:gap-10 md:grid w-full  overflow-auto grid-cols-3 gap-5 px-4 md:px-10  " >
          <div className="overflow-hidden rounded-lg shrink-0 w-70 md:w-auto  relative h-80 md:h-auto " >
            <Image src="/images/showcases/AAA_char.png" alt=""  className="object-cover w-full h-full" width={400} height={320}/>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" >

            </div>
            <Button className="absolute top-2 left-2 " >
              <ChevronLeft/>
              Discover
            </Button>
            <div className="absolute bottom-0 left-0 p-4  grid grid-rows-3 gap-2 " >
              <span className="font-bold white/30 inline rounded-2xl backdrop-blur-xs py-1 px-4 " >
                Bladeborn: Emberfall
              </span>
              <p className="text-xs row-span-2 font-light" >
                A pixel-art roguelike RPG where you wield elemental swords and uncover the secrets of a fallen fire kingdom.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg shrink-0 w-70 md:w-auto relative h-80 md:h-auto " >
            <Image src="/images/showcases/fighting_scene.png" alt=""  className="object-cover w-full h-full" width={400} height={320}/>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" >

            </div>
            <Button className="absolute top-2 left-2 " >
              <ChevronLeft/>
              Discover
            </Button>
            <div className="absolute bottom-0 left-0 p-4  grid grid-rows-3 gap-2 " >
              <span className="font-bold white/30 inline rounded-2xl backdrop-blur-xs py-1 px-4 " >
                ChronoBound
              </span>
              <p className="text-xs row-span-2 font-light" >
                A turn-based tactical RPG where players manipulate time to outsmart alien invaders.
              </p>
            </div>

          </div>
          <div className="overflow-hidden rounded-lg shrink-0 w-70 md:w-auto relative h-80 md:h-auto " >
            <Image src="/images/showcases/castle.png" alt=""  className="object-cover w-full h-full" width={400} height={320}/>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" >

            </div>
            <Button className="absolute top-2 left-2 " >
              <ChevronLeft/>
              Discover
            </Button>
            <div className="absolute bottom-0 left-0 p-4  grid grid-rows-3 gap-2 " >
              <span className="font-bold white/30 inline rounded-2xl backdrop-blur-xs py-1 px-4 " >
                Cloud Crafters
              </span>
              <p className="text-xs row-span-2 font-light" >
                A co-op builder-sim where players sculpt floating sky worlds using elemental tools and flying machines.
              </p>
            </div>
          </div>
        </section>
        <section className="px-4 md:px-10 grid md:inline md:grid-rows-1 grid-rows-3 gap-10 mt-10" >
          <div className="w-full md:h-80 md:mt-20 md:px-10 grid grid-rows-3 gap-5 md:gap-20 md:grid-rows-1 md:grid-cols-2" >
              <div className=" flex flex-col gap-2 " >
                <h3  className="font-bold text-rose-500 text-2xl" >Echo Drift</h3>
                <p className=" italic text-xs" >&quot;Time is your weapon. Drift through dimensions to rewrite fate.&quot;</p>
                <p className="text-xs font-light text-stone-800 dark:text-stone-300" >
                  About the Game:
                  Echo Drift is a fast-paced action-puzzle game where players manipulate time fragments to solve challenges and battle 
                  enemies across shifting realities. As Kael, a lost traveler caught between dimensions,
                  you must master the Echo Drive — a mysterious device that lets you freeze, rewind, 
                  and clone actions — to survive collapsing timelines.
                </p>
              </div>
              <div className="relative row-span-2 md:row-span-1 rounded-2xl overflow-hidden " >
                <Image src="/images/showcases/echo_drift.png" alt=""  className="object-cover w-full h-full" width={600} height={320}/>
                <Button className="group overflow-hidden absolute bottom-4 right-4 bg-rose-500 hover:bg-rose-600 cursor-pointer text-white " >  
                  <ArrowRight className="-translate-x-10 group-hover:translate-x-0 transition-transform duration-500  " /><span className="-translate-x-5 group-hover:translate-x-0 transition-transform duration-200 " >Learn more</span> <ArrowRight className="-translate-x-5 group-hover:translate-x-10  transition-transform duration-300" />
                </Button>
              </div>
          </div>
          <div className="md:-scale-x-100 w-full md:h-80  md:mt-20 revers md:px-10 grid grid-rows-3 gap-5 md:gap-20 md:grid-rows-1  md:grid-cols-2" >
              <div className="md:-scale-x-100 flex flex-col gap-2 " >
                <h3  className="font-bold text-rose-500 text-2xl" >Mythlight: Trials of Orin</h3>
                <p className=" italic text-xs" >&quot;Wield ancient light against creeping shadows in a world reborn from myth.&quot;</p>
                <p className="text-xs font-light text-stone-800 dark:text-stone-300" >
                  About the Game:
                  In Mythlight, you play as Orin, a reluctant hero chosen by an ancient relic to restore balance to a fractured realm. 
                  This action-RPG blends fast-paced melee combat with light-based magic, allowing you to burn away corruption,
                  illuminate hidden paths, and battle creatures born of forgotten legends.
                </p>
              </div>
              <div className="md:-scale-x-100 relative row-span-2 md:row-span-1 rounded-2xl overflow-hidden " >
                <Image src="/images/showcases/mythlight.png" alt=""  className="object-cover w-full h-full" width={600} height={320}/>
                <Button className="group overflow-hidden absolute bottom-4 right-4 bg-rose-500 hover:bg-rose-600 cursor-pointer text-white " >  
                  <ArrowRight className="-translate-x-10 group-hover:translate-x-0 transition-transform duration-500  " /><span className="-translate-x-5 group-hover:translate-x-0 transition-transform duration-200 " >Learn more</span> <ArrowRight className="-translate-x-5 group-hover:translate-x-10  transition-transform duration-300" />
                </Button>
              </div>
          </div>
          <div className="w-full md:h-80  md:mt-20 md:px-10 grid grid-rows-3 gap-5 md:gap-20 md:grid-rows-1 md:grid-cols-2" >
              <div className=" flex flex-col gap-2 " >
                <h3  className="font-bold text-rose-500 text-2xl" >ByteRunner</h3>
                <p className=" italic text-xs" >&quot;Glitch the grid. Hack the system. Race for your digital life.&quot;</p>
                <p className="text-xs font-light text-stone-800 dark:text-stone-300" >
                  About the Game:
                  ByteRunner is a neon-drenched endless runner set in a corrupted metaverse. As a rogue AI fighting deletion, you’ll dash, dodge,
                  and hack through procedurally 
                  generated levels filled with firewalls, data mines, and malicious bots. Every run is unique — but only the fastest survive.
                </p>
              </div>
              <div className=" relative row-span-2 md:row-span-1 rounded-2xl overflow-hidden " >
                <Image src="/images/showcases/byterunner.png" alt=""  className="object-cover w-full h-full" width={600} height={320}/>
                <Button className="group overflow-hidden absolute bottom-4 right-4 bg-rose-500 hover:bg-rose-600 cursor-pointer text-white " >  
                  <ArrowRight className="-translate-x-10 group-hover:translate-x-0 transition-transform duration-500  " /><span className="-translate-x-5 group-hover:translate-x-0 transition-transform duration-200 " >Learn more</span> <ArrowRight className="-translate-x-5 group-hover:translate-x-10  transition-transform duration-300" />
                </Button>
              </div>
          </div>
        </section>
    </>
  );
}
