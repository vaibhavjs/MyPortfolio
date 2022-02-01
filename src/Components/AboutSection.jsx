import styles from "./Styles/AboutSection.module.css"
import Fade from "react-reveal/Fade"

export function AboutSection() {
  return (
    <div className={styles.rootCont} id="about">
      <Fade bottom>
        <p>About</p>
        <div className={styles.mainCont}>
          <div className={styles.profilePicCont}>
            <img
              src="/profilepicture.jpg"
              alt=""
              className={styles.profilePic}
            />
          </div>
          <div>
            <h2>
              Hello, I am <span>Vaibhav Gaikwad</span>{" "}
            </h2>
            <p>
              I am an aspiring Full Stack Web Developer. My technical skillsets are 
              primarily focused om the MERN stack and problem solving is my passion.
              I've got a curious mind and I'm a quick learner; Hence I'm always looking for newer challenges.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  )
}
