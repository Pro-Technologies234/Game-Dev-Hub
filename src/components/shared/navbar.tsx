import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "./mode-toggle";
import Image from "next/image";
import { Wrapper } from "./wrapper";
import { cn } from "@/lib/utils";

type Props = {
    isLight?: boolean
}
export function Navbar({isLight}:Props) {
    const navigations = [
        {name: "Home", href: "/"},
        {name: "Games", href: "/"},
        {name: "Devlogs", href: "/"},
        {name: "Asset Libary", href: "/"},
        {name: "Community", href: "/"},
        {name: "Support", href: "/"},
    ]
    return (
        <Wrapper>
            <div className="w-full font-extralight flex items-center justify-between py-2" >
                <div>
                    <Image src="/logo_64.svg" alt="Game Dev Hub Logo" width={40} height={40} className="h-10 w-auto" />
                </div>
                <nav className={cn("md:flex gap-4 lg:gap-8 text-xs lg:text-sm hidden",isLight && "text-white")} >
                    {
                        navigations.map((n,i)=>(
                            <Link key={i} href={n.href}>
                                {n.name}
                            </Link>
                        ))
                    }
                </nav>
                <div className="flex gap-2 md:gap-4 text-xs md:text-md font-geist" > 
                    <ModeToggle/>
                    <Button className={cn(" cursor-pointer", isLight && "bg-white dark:bg-white hover:bg-white dark:hover:bg-white text-black dark:text-black")} >
                        Sign in
                    </Button>
                    <Button className=" cursor-pointer app-color text-white" >
                        Create account
                    </Button>
                </div>
            </div>
        </Wrapper>
    )
}