import { FaReact } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMui } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiPostgresql } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiAzuredevops } from "react-icons/si";
import { SiMicrosoftazure } from "react-icons/si";
import { SiDataiku } from "react-icons/si";

export default function TechLine() {
  return (
    <div className="flex flex-row mx-48 justify-evenly">
      <FaReact size={40} />
      <TbBrandTypescript size={40} />
      <IoLogoJavascript size={40} />
      <FaPython size={40} />
      <TbBrandNextjs size={40} />
      <SiMui size={40} />
      <FaDocker size={40} />
      <SiFastapi size={40} />
      <GrMysql size={40} />
      <SiPostgresql size={40} />
      <FaAws size={40} />
      <SiAzuredevops size={40} />
      <SiMicrosoftazure size={40} />
      <SiDataiku size={40} />
    </div>
  );
}
