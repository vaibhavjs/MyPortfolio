import { ProjectCard } from "./ProjectCard"
import styles from "./Styles/ProjectsSection.module.css"
import { SiReact } from "react-icons/si"
import { SiJavascript } from "react-icons/si"
import { SiHtml5 } from "react-icons/si"
import { SiCss3 } from "react-icons/si"
// import { SiRedux } from "react-icons/si"
import { SiNodedotjs } from "react-icons/si"
import { SiExpress } from "react-icons/si"
import { SiMongodb } from "react-icons/si"
import Fade from "react-reveal/Fade"
const projects = [
  {
    name: "Myntra.com clone",
    img: "/myntra.png",
    link: "https://mysterious-depths-64439.herokuapp.com/",
    git: "https://github.com/vaibhavjs/MyntraFullstackClone.git",
    about:
      "Myntra is an Indian e-commerce giant specializing in fashion & apparel sector. This clone is developed primarily using NodeJs, ExpressJs, MongoDB & EJS for smooth user experience.",
    stacks: [
      <SiReact className={styles.stackIcon} />,
      <SiNodedotjs className={styles.stackIcon} />,
      <SiExpress className={styles.stackIcon} />,
      <SiMongodb className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
  {
    name: "Drawing application",
    img: "/drawingApp.png",
    link: "https://presentation-itp2.netlify.app/",
    git: "https://github.com/vaibhavjs/DrawingApp.git",
    about:
      "This simple drawing application replicates the features of a classic 'MS Paint' application. This application is developed using HTML, CSS, Javascript & P5.js library.",
    stacks: [
      <SiReact className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
]
export function ProjectsSection() {
  return (
    <div className={styles.projectsSectionCont} id="projects">
      <Fade bottom>
        <p>Projects</p>
      </Fade>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <Fade bottom>
            <ProjectCard {...project} />
          </Fade>
        ))}
      </div>
    </div>
  )
}
