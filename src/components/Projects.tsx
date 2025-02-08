import { projects } from "@/public/constants";
import { ProjectCard } from "./ProjectCard";

export default function Projects() {
  return (
    <div id={"projects"} className="w-full py-6 h-auto bg-black text-[#FFF]">
      <div className="mx-24 md:mx-48">
        <h2 className="underline underline-offset-4 font-semibold">PROJECTS</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((p) => {
            return <ProjectCard {...p} />;
          })}
        </div>
      </div>
    </div>
  );
}
