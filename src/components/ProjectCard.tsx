interface Props {
  id: number;
  Icon?: any; //TODO: type this better
  name: string;
  description: string;
  tech: string;
}

export const ProjectCard = ({ id, Icon, name, description, tech }: Props) => {
  return (
    <div key={id} className="w-full p-2 border rounded w-2/3">
      <Icon />
      <h3 className="text-lg">{name}</h3>
      <p className="text-sm">{description}</p>
      <p>{tech}</p>
    </div>
  );
};
