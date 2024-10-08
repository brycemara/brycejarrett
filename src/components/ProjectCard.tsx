interface Props {
  id: number;
  Icon?: any; //TODO: type this better
  emoji?: string;
  name: string;
  description: string;
  tech: string;
}

export const ProjectCard = ({ id, Icon, name, description, tech }: Props) => {
  return (
    <div className="w-full bg-black text-white">
      <div
        className="relative flex flex-col items-center p-2 w-full"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-anchor="[data-aos-id-blocks]"
      >
        <div className="w-16 h-16 mt-4">
          <Icon size={40} />
        </div>
        <div className=" w-full md:w-4/5 flex flex-col justify-between text-center items-center h-full text-[#FF]">
          <h2 className="text-lg font-semibold mb-2">{name}</h2>
          <p className="text-base text-light-beige font-medium text-center pb-4">
            {description}
          </p>
          <p className="mt-auto text-base text-light-beige text-center">
            {tech}
          </p>
        </div>
      </div>
    </div>
  );
};
