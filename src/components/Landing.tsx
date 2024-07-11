import headshot from "../public/headshots.jpeg";
import Image from "next/image";
import { me } from "@/public/constants";

const Landing = () => {
  return (
    <section>
      <div className="flex flex-row max-w-6xl mx-auto p-4 sm:px-6 relative">
        {/* Illustration behind hero content */}
        <div
          className="hidden lg:block pointer-events-none"
          aria-hidden="true"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <Image src={headshot} width={600} height={600} alt="headshot" />
        </div>

        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          {/* Section header */}
          <div className="text-xl max-w-3xl mx-auto text-center color-primary-text pb-12 md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-down">
              Hi, I'm Bryce
            </h1>
            <p
              className="text-l color-primary-text mb-8"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              Software Engineer based in Brooklyn NY. I've been coding in the
              real world for about 3 years now. I am passionate about solving
              problems, leaving things better than I found them, and growing
              from every experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
