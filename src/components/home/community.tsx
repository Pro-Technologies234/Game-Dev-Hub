import { Gamepad2, UserPlus2, UserRoundSearch } from "lucide-react";
import { Wrapper } from "../shared/wrapper";

export function Community() {
  return (
    <Wrapper className="gap-8">
      {/* Main heading */}
      <div className="w-full flex flex-col justify-center items-center gap-2">
        <h2 className="text-5xl font-semibold font-geist max-w-2xl text-center">
          <span className="bg-clip-text app-color text-transparent">Find</span> teammates.{" "}
          <span className="bg-clip-text app-color text-transparent">Give</span> feedback.{" "}
          <span className="bg-clip-text app-color text-transparent">Level</span> up.
        </h2>
        <p className="text-sm font-light max-w-lg font-geist text-muted-foreground text-center">
          Arcade Studios is a hub for game makers: share work-in-progress builds, get feedback, recruit collaborators for jams, and join skill-focused groups.
        </p>
      </div>

      {/* Feature cards */}
      {/* <div className="grid grid-cols-3 grid-rows-2 h-[45rem] mt-4 gap-4 max-w-6xl mx-auto w-full">
        <div className="bg-muted rounded-4xl flex flex-col justify-end p-6">
          <span className="text-xl font-semibold font-geist">Collaborate on Projects</span>
          <p className="text-sm font-light leading-tight text-muted-foreground">
            Find fellow developers, artists, and designers to co-create your next game or side project.
          </p>
        </div>
        <div className="bg-muted rounded-4xl flex flex-col justify-end p-6">
          <span className="text-xl font-semibold font-geist">Receive Feedback</span>
          <p className="text-sm font-light leading-tight text-muted-foreground">
            Share builds and screenshots to get constructive, timestamped feedback from the community.
          </p>
        </div>
        <div className="bg-muted rounded-4xl flex flex-col justify-end p-6">
          <span className="text-xl font-semibold font-geist">Showcase Your Work</span>
          <p className="text-sm font-light leading-tight text-muted-foreground">
            Highlight your projects to the community and attract collaborators or potential players.
          </p>
        </div>
        <div className="bg-muted col-span-2 rounded-4xl flex flex-col justify-end p-6">
          <span className="text-xl font-semibold font-geist">Participate in Jams</span>
          <p className="text-sm font-light leading-tight text-muted-foreground">
            Join weekly or monthly game jams to test your skills, meet new teammates, and create under time constraints.
          </p>
        </div>
        <div className="bg-muted rounded-4xl flex flex-col justify-end p-6">
          <span className="text-xl font-semibold font-geist">Learn and Grow</span>
          <p className="text-sm font-light leading-tight text-muted-foreground">
            Access tips, resources, and mentorship from experienced creators to level up your game development skills.
          </p>
        </div>
      </div> */}

      {/* How it works / process section */}
      <section className="max-w-7xl selection:bg-rose-600/50 flex flex-col gap-2 items-center w-full m-auto">
        <div className="flex gap-8 items-center my-12">
          <div className="flex gap-2 items-center">
            <UserRoundSearch size={64} strokeWidth={1} className="stroke-rose-600" />
            <div className="flex flex-col">
              <span className="text-sm font-bold app-color bg-clip-text text-transparent">
                Find collaborators
              </span>
              <p className="text-xs font-light">
                Browse creator profiles by role, skill, and interests to form your ideal team.
              </p>
            </div>
          </div>

          <div className="w-1 h-24 bg-gradient-to-b from-red-600 to-rose-500"></div>

          <div className="flex gap-2 items-center">
            <Gamepad2 size={64} strokeWidth={1} className="stroke-rose-600" />
            <div className="flex flex-col">
              <span className="text-sm font-bold app-color bg-clip-text text-transparent">
                Host a playtest
              </span>
              <p className="text-xs font-light">
                Invite community members to playtest your game and collect detailed, time-stamped feedback.
              </p>
            </div>
          </div>

          <div className="w-1 h-24 bg-gradient-to-b from-red-600 to-rose-500"></div>

          <div className="flex gap-2 items-center">
            <UserPlus2 size={64} strokeWidth={1} className="stroke-rose-600" />
            <div className="flex flex-col">
              <span className="text-sm font-bold app-color bg-clip-text text-transparent">
                Join a jam
              </span>
              <p className="text-xs font-light">
                Team up with other creators for weekly or monthly game jams to build, learn, and compete.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
