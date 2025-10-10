import Navbar from "@/components/shared/navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, ChevronLeft, Gamepad2,  UserPlus2,  UserRoundSearch,  Users2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar/>
      <main className="h-screen selection:bg-rose-600/50  font-sora grid grid-rows-2" >
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
          <h1 className="px-5 text-white text-3xl max-w-7xl m-auto md:text-5xl lg:text-6xl font-bold text-center md:leading-tight lg:leading-normal" >
            <span className="text-red-500 " >Show</span> your work. <span className="text-red-500 " >Share</span> your process. <span className="text-red-500 " >Connect</span> with devs like you.
          </h1>
          <div className="m-auto w-full flex gap-4 justify-center mt-4 " >
            <Button className="text-xs scale-80   sm:scale-100 sm:text-md md:hover:shadow-xl/30 shadow-xl/30 hover:-translate-y-3 hover:rotate-2 md:shadow-none  shadow-rose-500 bg-gradient-to-r from-red-600 hover:via-rose-500 via-red-600 to-rose-500 cursor-pointer  transition-color duration-500 text-white " >
              Join the Adventure
            </Button>
            <Button className="text-xs scale-80 sm:scale-100  sm:text-md hover:-translate-y-3 hover:-rotate-2 cursor-pointer bg-white hover:bg-white text-black transition-color duration-500 ">
              Join our Community
            </Button>
          </div>
          <div className="gap-5 px-4 md:px-10 mt-20 flex items-center justify-center " >
            <div className="bg-white/10 backdrop-brightness-255 text-white backdrop-blur-xs p-2 rounded-2xl max-w-sm w-full" >
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
      <section className="max-w-7xl m-auto selection:bg-rose-600/50  text-white flex md:gap-10 md:grid w-full  overflow-auto grid-cols-3 gap-5 px-4 md:px-10 mt-20 " >
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
      <section className="max-w-7xl selection:bg-rose-600/50  w-full mx-auto" >
        <div className=" w-full  m-auto px-4 md:px-10 grid md:inline md:grid-rows-1 grid-rows-3 gap-10 mt-10" >
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
                <div className='text-sm' >
                  <span>
                    Engine: <span className="font-light dark:text-white" > Unity </span>
                  </span>
                  <br />
                  <span>
                    Genre: <span className="font-light dark:text-white" >  Puzzle / Action / Sci-fi</span>
                  </span>
                  <br />
                  <span>
                    Status: <span className="font-light dark:text-white" >  In Development</span>
                  </span>
                  <br />
                  <span>
                    Creator: <span className="font-light dark:text-white" >  @DimensionXDev</span>
                  </span>
                </div>
              </div>
              <div className="relative row-span-2 md:row-span-1 rounded-2xl overflow-hidden " >
                <Image src="/images/showcases/echo_drift.png" alt=""  className="object-cover w-full h-full" width={600} height={320}/>
                <div className="absolute inset-0" >

                </div>
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
                <div className='text-sm' >
                  <span>
                    Engine: <span className="font-light dark:text-white" > Unity </span>
                  </span>
                  <br />
                  <span>
                    Genre: <span className="font-light dark:text-white" >  Puzzle / Action / Sci-fi</span>
                  </span>
                  <br />
                  <span>
                    Status: <span className="font-light dark:text-white" >  In Development</span>
                  </span>
                  <br />
                  <span>
                    Creator: <span className="font-light dark:text-white" >  @DimensionXDev</span>
                  </span>
                </div>
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
                <div className='text-sm' >
                  <span>
                    Engine: <span className="font-light dark:text-white" > Unity </span>
                  </span>
                  <br />
                  <span>
                    Genre: <span className="font-light dark:text-white" >  Puzzle / Action / Sci-fi</span>
                  </span>
                  <br />
                  <span>
                    Status: <span className="font-light dark:text-white" >  In Development</span>
                  </span>
                  <br />
                  <span>
                    Creator: <span className="font-light dark:text-white" >  @DimensionXDev</span>
                  </span>
                </div>
              </div>
              <div className=" relative row-span-2 md:row-span-1 rounded-2xl overflow-hidden " >
                <Image src="/images/showcases/byterunner.png" alt=""  className="object-cover w-full h-full" width={600} height={320}/>
                <Button className="group overflow-hidden absolute bottom-4 right-4 bg-rose-500 hover:bg-rose-600 cursor-pointer text-white " >  
                  <ArrowRight className="-translate-x-10 group-hover:translate-x-0 transition-transform duration-500  " /><span className="-translate-x-5 group-hover:translate-x-0 transition-transform duration-200 " >Learn more</span> <ArrowRight className="-translate-x-5 group-hover:translate-x-10  transition-transform duration-300" />
                </Button>
              </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden selection:bg-rose-600/50 selection:text-white  rounded-3xl aspect-video max-w-6xl m-auto w-full relative my-25" >
              <video
                className="-z-10  shadow-lg object-cover w-full h-full "
                autoPlay
                loop
                muted
                src="/videos/car.mp4"
              >
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-radial  from-black flex flex-col items-center justify-center " >
                <h2 className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-zinc-400 to-white" >Invite Creators</h2>
                <p  className="max-w-3xl text-center w-full text-sm font-light mb-4 text-white" >Arcade makes collaboration effortless: create invite links, set role permissions, and give each member the tools they need to contribute — from uploading builds to writing devlogs and leaving timed feedback.</p>
                <Button className="cursor-pointer app-color text-white transition-all ease-in-out duration-700  hover:drop-shadow-red-600  drop-shadow-2xl" >
                  + Invite Your Team
                </Button>
              </div>
              <div className='absolute bottom-4 left-0 right-0 flex justify-center items-center' >
                <div className="max-w-md p-4 relative rounded-2xl bg-gradient-to-t from-white/10 to-white/1 backdrop-brightness-255 backdrop-blur-xs" >
                  <span className="text-sm font-semibold text-white" >
                    Create Invite Link
                  </span>
                  <p className="text-xs font-light text-white" >
                    Bring teammates, artists, composers, and playtesters into your Arcade Studio. Share builds, assign roles, and start collaborating — instantly.
                  </p>
                  <div className="p-1 rounded-full text-white absolute top-2 right-2 bg-black/50 dark:border" >
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
      </section>
      <section className='max-w-7xl selection:bg-rose-600/50  flex flex-col gap-2 items-center w-full m-auto' >
        <h2 className="text-5xl font-semibold text-center" >
          <span className="bg-clip-text app-color text-transparent" >Find</span> teammates. <br /> <span className="bg-clip-text app-color text-transparent" >Give</span> feedback. <span className="bg-clip-text app-color text-transparent" >Level </span> up.
        </h2>
        <p className="text-xs font-light max-w-2xl text-center " >
          Arcade is a community for makers: post work-in-progress screenshots, ask for focused feedback, recruit teammates for jams, and join topic-based groups (art, audio, programming, QA).
        </p>
        <div className="flex gap-8 items-center my-12" >
          <div className="flex gap-2 items-center" >
            <UserRoundSearch size={64} strokeWidth={1} className="stroke-rose-600" />
            <div className="flex flex-col" >
              <span className="text-sm font-bold app-color bg-clip-text text-transparent" >
                Find collaborators
              </span>
              <p className="text-xs  font-light" >
                Browse creator profiles <br /> by role and skill.
              </p>
            </div>
          </div>
          <div className="w-1 h-24 bg-gradient-to-b from-red-600 to-rose-500" ></div>
          <div className="flex gap-2 items-center" >
            <Gamepad2 size={64} strokeWidth={1} className="stroke-rose-600" />
            <div className="flex flex-col" >
              <span className="text-sm font-bold app-color bg-clip-text text-transparent" >
                Host a playtest
              </span>
              <p className="text-xs  font-light" >
                Invite testers and gather <br /> time-stamped feedback.
              </p>
            </div>
          </div>
          <div className="w-1 h-24 bg-gradient-to-b from-red-600 to-rose-500" ></div>
          <div className="flex gap-2 items-center" >
            <UserPlus2 size={64} strokeWidth={1} className="stroke-rose-600" />
            <div className="flex flex-col" >
              <span className="text-sm font-bold app-color bg-clip-text text-transparent" >
                Join a jam
              </span>
              <p className="text-xs  font-light" >
                Team up for weekly and <br /> monthly game jams.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='max-w-7xl selection:bg-rose-600/50  w-full mx-auto aspect-16/3 rounded-4xl' >
      </section>
      <footer className="relative w-full bg-zinc-950 text-zinc-300 overflow-hidden selection:bg-rose-600/40">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-950/80 to-zinc-950 pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 flex flex-col gap-16">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            {/* Logo + Description */}
            <div className="flex items-start gap-4">
              <Image
                src="/logo_64.svg"
                alt="Arcade Studio Logo"
                width={64}
                height={64}
                className="h-16 w-auto"
              />
              <div>
                <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-400">
                  Arcade Studio
                </h2>
                <p className="text-sm text-zinc-400 max-w-xs mt-2 leading-relaxed">
                  Where creators show their work, share the process, and ship games together.
                </p>
              </div>
            </div>

            {/* Link Columns */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 w-full md:w-auto">
              <div>
                <h3 className="text-sm font-semibold text-white mb-3">Explore</h3>
                <ul className="space-y-2 text-sm text-zinc-400 hover:[&_a]:text-white transition-colors">
                  <li><Link href="/">Features</Link></li>
                  <li><Link href="/">Devlogs</Link></li>
                  <li><Link href="/">Playtests</Link></li>
                  <li><Link href="/">Pricing</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white mb-3">Community</h3>
                <ul className="space-y-2 text-sm text-zinc-400 hover:[&_a]:text-white transition-colors">
                  <li><Link href="/">Forums</Link></li>
                  <li><Link href="/">Discord</Link></li>
                  <li><Link href="/">Jams</Link></li>
                  <li><Link href="/">Contributors</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white mb-3">Resources</h3>
                <ul className="space-y-2 text-sm text-zinc-400 hover:[&_a]:text-white transition-colors">
                  <li><Link href="/">Docs</Link></li>
                  <li><Link href="/">API</Link></li>
                  <li><Link href="/">Integrations</Link></li>
                  <li><Link href="/">Blog</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500">
            <span>© 2025 Arcade. Built with love for indie creators.</span>
            <div className="flex items-center gap-4 mt-3 sm:mt-0">
              <Link href="/" className="hover:text-white transition-colors">Terms</Link>
              <Link href="/" className="hover:text-white transition-colors">Privacy</Link>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
}
