import styles from "./About.module.css"

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.divText}>
        <h1>Projeto de E-Commerce</h1>
        <p>A FullBox é um projeto que fornece as funcionalidades básicas de um E-Commerce </p>
        <p>O projeto possui FrontEnd em react js e um backEnd completo em .net 8.0 </p>
      </div>
      <div className={styles.divContatos}>
        <a href="https://github.com/Regulus01">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="" />
        </a>
        <a href="https://www.linkedin.com/in/jos%C3%A9cssj/">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="" />
        </a>
      </div>
    </div>
  )
}

export default About