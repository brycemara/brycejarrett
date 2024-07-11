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
    <div className="w-full">
      <div
        className="relative flex flex-col items-center p-2 w-full"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-anchor="[data-aos-id-blocks]"
      >
        <div className="w-16 h-16 mb-4">
          <Icon size={40} />
        </div>
        <div className="w-2/3 flex flex-col justify-between h-full">
          <h2 className="h2 mb-2">{name}</h2>
          <p className="text-center">{description}</p>
          <p className="mt-auto text-center">{tech}</p>
        </div>
      </div>
    </div>
  );
};
