import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaGitAlt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";

const icons = {
    FaHtml5: FaHtml5,
    FaCss3Alt : FaCss3Alt ,
    IoLogoJavascript : IoLogoJavascript ,
    FaBootstrap : FaBootstrap ,
    RiTailwindCssFill : RiTailwindCssFill ,
    FaReact  : FaReact  ,
    FaNodeJs  : FaNodeJs  ,
    SiMongodb  : SiMongodb  ,
    GrMysql  : GrMysql  ,
    FaGitAlt  : FaGitAlt  ,
    VscVscode  : VscVscode  ,
    SiPostman  : SiPostman  ,
    
};
const SkillChild = (props) => {
    const IconComponent = icons[props.data.icon];
    
  return (
    <>
    <div className="py-4 px-6 sm:py-8 sm:px-10 bg-slate-900/40 border border-gray-600 hover:border-amber-600 rounded-xl" data-aos="fade-in" data-aos-delay="200">
        <div className="text-6xl">{IconComponent && <IconComponent />}</div>
        <div className="text-center pt-1.5">{props.data.skill}</div>
    </div>
    </>
  )
}

export default SkillChild