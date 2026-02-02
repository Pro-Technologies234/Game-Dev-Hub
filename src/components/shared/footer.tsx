import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative w-full bg-background overflow-hidden selection:bg-rose-600/40">
      <div className="absolute rounded-full blur-2xl inset-0 bg-gradient-to-t from-rose-600/80 dark:from-muted via-background to-bacvia-background pointer-events-none"></div>
      <div className="absolute rounded-full blur-lg inset-0 bg-gradient-to-t from-background via-background to-bavia-background pointer-events-none"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 flex flex-col gap-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Logo + Description */}
          <div className="flex items-center gap-4">
            <Image
              src="/logo_64.svg"
              alt="Arcade Studio Logo"
              width={50}
              height={50}
              className="h-16 w-auto"
            />
            <div>
              <h2 className="text-3xl font-semibold font-geist">
                Arcade Studio
              </h2>
            </div>
            {/* <p className="text-xs text-muted-foreground max-w-xs mt-2 leading-relaxed">
                  Where creators show their work, share the process, and ship games together.
                </p> */}
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-16 w-full md:w-auto">
            <div>
              <h3 className="text-sm font-medium  mb-3">Explore</h3>
              <ul className="space-y-2 text-xs font-geist text-muted-foreground  transition-colors">
                <li>
                  <Link href="/">Features</Link>
                </li>
                <li>
                  <Link href="/">Devlogs</Link>
                </li>
                <li>
                  <Link href="/">Playtests</Link>
                </li>
                <li>
                  <Link href="/">Pricing</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium  mb-3">Community</h3>
              <ul className="space-y-2 text-xs font-geist text-muted-foreground  transition-colors">
                <li>
                  <Link href="/">Forums</Link>
                </li>
                <li>
                  <Link href="/">Discord</Link>
                </li>
                <li>
                  <Link href="/">Jams</Link>
                </li>
                <li>
                  <Link href="/">Contributors</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium  mb-3">Resources</h3>
              <ul className="space-y-2 text-xs font-geist text-muted-foreground transition-colors">
                <li>
                  <Link href="/">Docs</Link>
                </li>
                <li>
                  <Link href="/">API</Link>
                </li>
                <li>
                  <Link href="/">Integrations</Link>
                </li>
                <li>
                  <Link href="/">Blog</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-rose-600 to-transparent"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs ">
          <span>© 2025 Arcade. Built with love for indie creators.</span>
          <div className="flex items-center gap-4 mt-3 sm:mt-0">
            <Link href="/" className=" transition-colors">
              Terms
            </Link>
            <Link href="/" className=" transition-colors">
              Privacy
            </Link>
          </div>
        </div>
        <div className="h-[4rem] md:h-[8rem]   overflow-hidden">
          <span className="text-[12vw] xl:text-[11vw] 2xl:text-[10em] text-center font-semibold font-geist text-transparent bg-clip-text bg-linear-to-t from-transparent via-transparent via-36% to-rose-600 dark:to-rose-600 capitalize leading-none mx-auto">
            Arcade Studios
          </span>
        </div>
      </div>
    </footer>
  );
}
