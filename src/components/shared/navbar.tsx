"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "./mode-toggle";
import Image from "next/image";
import { Wrapper } from "./wrapper";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type Props = {
  isLight?: boolean;
};
export function Navbar({ isLight }: Props) {
  const pathName = usePathname();
  const navigations = [
    { name: "Home", href: "/" },
    { name: "Games", href: "/games" },
    { name: "Devlogs", href: "/devlogs" },
    { name: "Asset Libary", href: "/asset-libary" },
    { name: "Community", href: "/community" },
    { name: "Support", href: "/support" },
  ];
  return (
    <Wrapper>
      <div className="w-full font-extralight flex items-center justify-between py-2">
        <div>
          <Image
            src="/logo_64.svg"
            alt="Game Dev Hub Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
        </div>
        <nav
          className={cn(
            "md:flex gap-8  text-xs  hidden",
            isLight && "text-white",
          )}
        >
          {navigations.map((n, i) => (
            <Link
              key={i}
              href={n.href}
              className={cn(pathName == n.href && " text-primary font-medium")}
            >
              {/* <Button variant={"ghost"} size={"sm"} className=" text-xs"> */}
              {n.name}
              {/* </Button> */}
            </Link>
          ))}
        </nav>
        <div className="flex gap-2 md:gap-4 text-xs md:text-md font-geist">
          <ModeToggle />
          <Button
            size={"sm"}
            className={cn(
              "  px-5 tracking-tighter font-geist cursor-pointer",
              isLight &&
                "bg-white dark:bg-white hover:bg-white dark:hover:bg-white text-black dark:text-black",
            )}
          >
            Sign in
          </Button>
          <Button
            size={"sm"}
            className="  px-5 tracking-tighter font-geist cursor-pointer app-color text-white"
          >
            Create account
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}
