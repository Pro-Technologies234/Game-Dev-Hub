import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { Wrapper } from "../shared/wrapper";
import { Badge } from "../ui/badge";
import { IconChevronRight, IconCircleDashed } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function Showcase() {
  return (
    <Wrapper>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {showcases.map((s, i) => (
          <div
            key={i}
            className="relative flex flex-col"
          >
            {/* Image */}
            <div className="relative h-64 md:h-72 lg:h-80 w-full overflow-hidden rounded-2xl">
              <Image
                src={s.img}
                alt={s.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent "></div>
              <div className="flex flex-col absolute bottom-4 left-4">
                    <Badge
                    className={cn('font-geist  rounded-sm font-light',
                        s.status === "In Development"
                        ? "text-blue-100 bg-blue-500/40 "
                        : "text-rose-100 bg-rose-600"
                    )}
                    >
                        <IconCircleDashed/>
                        {s.status}
                    </Badge>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-1 app-color text-transparent bg-clip-text">
                  {s.title}
                </h3>
                <p className="text-xs font-geist mb-4">
                  {s.tagline}
                </p>
                <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="flex flex-col absolute top-4 left-4 ">
                    <Badge className="text-sm text-white bg-background font-geist rounded-sm font-light">
                        {s.engine}
                    </Badge>
                </div>

                </div>

              </div>
              <div className="flex justify-between items-center w-full" >
                <div className="flex items-center gap-2" >
                    <Avatar className="size-10" >
                        <AvatarImage src={""} />
                        <AvatarFallback>
                            {s.creator?.[0]}
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <span className="text-sm font-medium font-geist text-gray-900 dark:text-white">
                        {s.creator}
                        </span>
                        <span className="text-xs text-muted-foreground font-geist">
                        Creator
                        </span>
                    </div>
                </div>
                <Button size={'sm'} className="float-right  font-geist bg-rose-600 hover:bg-rose-600 text-white " >  
                    Learn More <IconChevronRight/>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </Wrapper>
  );
}

const showcases = [
  {
    title: "Echo Drift",
    tagline: "Time is your weapon. Drift through dimensions to rewrite fate.",
    engine: "Unity",
    genre: ["Puzzle" , "Action" , "Sci-fi"],
    status: "In Development",
    creator: " @DimensionXDev",
    img: "/images/showcases/echo_drift.png",
    url: "",
  },
  {
    title: "Mythlight: Trials of Orin",
    tagline: "Wield ancient light against creeping shadows in a world reborn from myth.",
    engine: "Unity",
    genre: ["Puzzle" , "Action" , "Sci-fi"],
    status: "Launched",
    creator: " @DimensionXDev",
    img: "/images/showcases/mythlight.png",
    url: "",
  },
  {
    title: "ByteRunner",
    tagline: "Glitch the grid. Hack the system. Race for your digital life.",
    engine: "Unity",
    genre: ["Puzzle" , "Action" , "Sci-fi"],
    status: "In Development",
    creator: " @DimensionXDev",
    img: "/images/showcases/byterunner.png",
    url: "",
  },
];
