import { Button } from "../ui/button";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
    return (
        <div className="w-full font-extralight  h-16 flex items-center justify-between px-4 md:px-10 py-2" >
            <div>
                <img src="/logo_64.svg" alt="Game Dev Hub Logo" className="h-10" />
            </div>
            <nav className="sm:flex gap-8 text-xs hidden  " >
                <a href="">
                    Home
                </a>
                <a href="">
                    Games
                </a>
                <a href="">
                    Devlogs
                </a>
                <a href="">
                    Asset Libary
                </a>
                <a href="">
                    Community
                </a>
                <a href="">
                    Support
                </a>
            </nav>
            <div className="flex gap-2 md:gap-4 text-xs md:text-md" > 
                <ModeToggle/>
                <Button className=" cursor-pointer dark:bg-white" >
                    Sign in
                </Button>
                <Button className=" cursor-pointer bg-red-500 dark:text-white hover:bg-red-600" >
                    Create account
                </Button>
            </div>
        </div>
    )
}