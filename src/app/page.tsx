import { Community } from "@/components/home/community";
import { Discover } from "@/components/home/discover";
import { Hero } from "@/components/home/hero";
import { Invite } from "@/components/home/invite";
import { Showcase } from "@/components/home/showcase";
import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";

export default function Home() {
  return (
    <div className="space-y-16" >
      <Navbar isLight />
      <Hero/>
      <Discover/>
      <Invite/>
      <Showcase/>
      <Community/>
      <Footer/>
    </div>
  );
}
