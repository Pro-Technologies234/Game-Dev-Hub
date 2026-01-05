'use client'
import Image from "next/image";
import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";
import { Wrapper } from "../shared/wrapper";
import Link from "next/link";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react"
import { useState, useEffect } from 'react'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

export function Discover() {
  const [embla, setEmbla] = useState<CarouselApi>()
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!embla) return
    const autoplay = setInterval(() => {
      if (!embla) return
      if (embla.canScrollNext()) {
        embla.scrollNext()
      } else {
        embla.scrollTo(0)
      }
    }, 5000)
    return () => clearInterval(autoplay)
  }, [embla])
  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setCurrentIndex(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla]);
    return(
        <Wrapper>
            <section className=" selection:bg-rose-600/50  text-white  w-full gap-10 relative  rounded-2xl " >
                <Carousel opts={{
                    loop: true
                }} setApi={setEmbla} className="w-full">
                    <CarouselContent>
                        {discover.map((d,i)=>(
                            <CarouselItem key={i} className="h-[24rem] relative basis-1/2 md:basis-1/3" >
                                <div className="overflow-hidden rounded-lg size-full relative basis-1/3"  >
                                    <Image src={d.img} alt="" className="object-cover size-full" fill />
                                    <div className="absolute inset-0 " >

                                    </div>
                                    <Link href={d.url} >
                                        <Button variant={'secondary'} className="absolute top-4 left-4 " >
                                            <ChevronLeft/>
                                            Discover
                                        </Button>
                                    </Link>
                                    <div className="absolute bottom-0 left-0 p-4 flex flex-col gap-2 " >
                                        <span className="font-bold bg-black/30  text-sm md:text-base  rounded-sm backdrop-blur-xs py-1 px-4 w-fit h-fit" >
                                            {d.title}
                                        </span>
                                        <p className="text-xs row-span-2 max-w-xs font-light leading-tight font-geist line-clamp-3" >
                                            {d.des}
                                        </p>
                                    </div>
                                </div>
                            </CarouselItem>))}
                    </CarouselContent>
                </Carousel>
            <div className=" flex justify-end gap-4 absolute -bottom-15 right-0 not-md:hidden ">
                <Button
                    size={'icon'}
                    variant={'secondary'}
                    onClick={() => embla?.scrollPrev()}
                >
                    <IconChevronLeft />
                </Button>
                <Button
                    size={'icon'}
                    variant={'secondary'}
                    onClick={() => embla?.scrollNext()}
                >
                    <IconChevronRight />
                </Button>
            </div>
            </section>
        </Wrapper>
    )
}


const discover = [
    { title: 'Bladeborn: Emberfall', des: 'A pixel-art roguelike RPG where you wield elemental swords and uncover the secrets of a fallen fire kingdom.', url: '' , img: "/images/showcases/AAA_char.png"},
    { title: 'ChronoBound', des: 'A turn-based tactical RPG where players manipulate time to outsmart alien invaders.', url: '' , img: "/images/showcases/fighting_scene.png"},
    { title: 'Cloud Crafters', des: 'A co-op builder-sim where players sculpt floating sky worlds using elemental tools and flying machines.', url: '' , img: "/images/showcases/castle.png"},
]