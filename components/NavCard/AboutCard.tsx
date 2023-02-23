import { FunctionComponent } from "react";
import styles from "../../styles/Cards.module.css";
import { RouteCardProps } from "./HomeCard";
import clipboard from "../../public/assets/images/clipboard.png";
import Image from "next/image";
interface AboutCardProps extends RouteCardProps {}

const AboutCard: FunctionComponent<AboutCardProps> = ({
  onClick,
  className,
}) => {
  return (
    <div
      className={`${styles.content} ${styles.about} ${styles["transition-opacity"]} ${styles[className]}`}
      onClick={onClick}
    >
      <div className={styles["about-logo-wrapper"]}>
        <Image fill src={clipboard} alt="clipboard" />
      </div>
      <div className={styles["about-text-container"]}>
        <p>Technologies I use:</p>
        <ul>
          <li>React & React Native</li>
          <li>Typescript</li>
          <li>HTML & CSS</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutCard;
