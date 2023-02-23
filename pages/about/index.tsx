import styles from "../../styles/pages/About.module.css";
import { CardContext } from "@/store/CardContext";
import { FunctionComponent, useContext, useEffect } from "react";

interface AboutPageProps {}

const tech = [
  "react",
  "javascript",
  "html",
  "css",
  "nextjs",
  "git",
  "scrum",
  "jira",
  "expo",
  "typescript",
  "react-native",
  "react-query",
];

const AboutPage: FunctionComponent<AboutPageProps> = () => {
  const { cardState } = useContext(CardContext);
  const intro = (
    <div className={styles["introduction"]}>
      <h1>Hi, my name is Aleks.</h1>
      <p>I'm a react and react native frontend developer</p>
    </div>
  );
  const techList = (
    <div className={styles["technology"]}>
      <h2>Main tools i use:</h2>
      <div className={styles["technology-list"]}>
        <ul>
          {tech.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
  const techInfo = (
    <div className={styles["technology-info"]}>
      <h2>About my work:</h2>
      <p>
        I have proffesional experinece in developing,maintaining and testing
        frontend of mobile applications.
      </p>
      <p>Using REST Api in cooperation with backend developers</p>
      <p>Programming aplications frontend based on UI designs.</p>
      <p>
        Programming frontend of App's introductory website, using NextJS,
        bootstrap and Styled Components.
      </p>
    </div>
  );
  const hobbyInfo = (
    <div className={styles["hobby"]}>
      <h2>My other interests:</h2>

      <ul>
        <li>chess</li>
        <li>biking</li>
        <li>food & diet</li>
        <li>skiing</li>
      </ul>
    </div>
  );

  return (
    <div
      className={`${styles["container"]} ${
        cardState ? styles["card-hidden"] : styles["card-visible"]
      }`}
    >
      {intro}
      {techInfo}
      {techList}
      {hobbyInfo}
    </div>
  );
};

export default AboutPage;
