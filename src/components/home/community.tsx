import { Gamepad2, UserPlus2, UserRoundSearch } from "lucide-react";
import { Wrapper } from "../shared/wrapper";

export function Community() {
  return (
    <Wrapper className="gap-8">
      {/* Main heading */}
      <div className="w-full flex justify-between items-center capitalize gap-2">
        <h2 className="text-4xl font-semibold font-geist max-w-md  tracking-tighter">
          Find teammates. Give feedback.{" "}
          <span className="bg-clip-text app-color text-transparent">
            Level up.
          </span>{" "}
        </h2>
        <p className="text-sm leading-tight max-w-md font-geist text-muted-foreground ">
          Arcade Studios is a hub for game makers: share work-in-progress
          builds, get feedback, recruit collaborators for jams, and join
          skill-focused groups.
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
      <section className=" selection:bg-rose-600/50 flex gap-2 items-center w-full m-auto">
        {com.map((_) => (
          <CommunityCard {..._} />
        ))}
      </section>
    </Wrapper>
  );
}

const com = [
  {
    title: "Find collaborators",
    desc: "Browse creator profiles by role, skill, and interests to form your ideal team.",
  },
  {
    title: "Host a playtest",
    desc: "Invite community members to playtest your game and collect detailed, time-stamped feedback.",
  },
  {
    title: "Join a jam",
    desc: "Team up with other creators for weekly or monthly game jams to build, learn, and compete.",
  },
];

export function CommunityCard({
  title,
  desc,
}: {
  title: string;
  desc?: string;
}) {
  return (
    <div className="p-1 bg-linear-to-t from-transparent via-transparent to-primary/30 rounded-3xl flex-1">
      <div className="flex flex-col gap-2 items-center bg-linear-to-t from-background  via-red-600 to-rose-600 rounded-3xl overflow-hidden p-0.5">
        <div className="w-full flex justify-center items-center p-1 pb-0.5">
          <span className="text-md font-semibold ">{title}</span>
        </div>
        <div className="flex flex-col p-8  gap-2 items-center bg-linear-to-b from-background to-card rounded-3xl overflow-hidden">
          <UserRoundSearch className="stroke-rose-600 size-8 font-geist" />
          <p className="text-sm font-medium  max-sm text-center">{desc}</p>
        </div>
      </div>
    </div>
  );
}
