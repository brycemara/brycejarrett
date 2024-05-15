import Header from "@/components/Header";
import Landing from "@/components/Landing";
import { ProjectCard } from "@/components/ProjectCard";
import Timeline from "@/components/Timeline";
import { projects } from "@/public/constants";
// import { FaPiggyBank, FaRobot, FaRocket } from "react-icons/fa";
// import { FaCartShopping, FaKitMedical } from "react-icons/fa6";

export const Home = () => {
  return (
    <div>
      <Header />
      <Landing />
      <Timeline />
      <section className="text-center">
        <h2 className="text-xl">Projects</h2>
        <div className="grid grid-cols-1 p-4 gap-4 md:grid-cols-2 md:p-8">
          {projects.map((p) => {
            return (
              <ProjectCard
                id={p.id}
                Icon={p.Icon}
                name={p.name}
                description={p.description}
                tech={p.tech}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
