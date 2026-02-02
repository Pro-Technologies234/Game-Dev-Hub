import { Gamepad2 } from "lucide-react";
import { Button } from "../ui/button";

export function Hero() {
  return (
    <main className="selection:bg-rose-600/50 ">
      <div className="absolute -z-1 inset-0 md:h-[45rem]  overflow-hidden w-full flex justify-center">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 20% 30%, rgba(0,0,0,1) 0%, transparent 70%)",
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
        <div className="absolute bg-radial to-black via-transparent from-transparent to-80% via-20% inset-0 z-0" />
      </div>
      <div className="h-[75vh] md:h-[40rem] flex flex-col md:pb-50 justify-end items-center gap-8">
        <h1 className=" text-white text-3xl max-w-3xl md:text-5xl  tracking-tighter lg:text-6xl font-bold text-center  font-geist">
          <span className=" bg-clip-text app-color text-transparent ">
            Show
          </span>{" "}
          your work.{" "}
          <span className=" bg-clip-text app-color text-transparent ">
            Share
          </span>{" "}
          your process.{" "}
          <span className=" bg-clip-text app-color text-transparent ">
            Connect
          </span>{" "}
          with devs like you.
        </h1>
        <div className="w-full flex gap-4 justify-center">
          <Button
            size={"sm"}
            className="app-color text-xs font-medium  px-5 tracking-tighter"
          >
            Join the Adventure
          </Button>
          <Button
            size={"sm"}
            variant={"outline"}
            className="text-xs font-medium  px-5 tracking-tighter"
          >
            Join our Community
          </Button>
        </div>
        <div className="gap-5 flex items-center justify-center md:pt-15">
          <div className="bg-white/10 backdrop-brightness-255 text-white backdrop-blur-xs p-2 rounded-2xl max-w-sm w-full">
            <span className="text-sm font-semibold">
              Start Your GameDev Journey
            </span>
            <p className="text-xs font-light ">
              Share your games. Write your devlogs. Inspire others. Join a
              growing community of creators.
            </p>
            <Button
              size={"sm"}
              className="cursor-pointer text-xs mt-2 dark:bg-stone-950 bg-white text-rose-500"
            >
              <Gamepad2 />
              Browse Games
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
