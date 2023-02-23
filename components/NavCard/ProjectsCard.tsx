import Image from "next/image";
import { FunctionComponent } from "react";
import styles from "../../styles/Cards.module.css";
import { RouteCardProps } from "./HomeCard";
import presentation from "../../public/assets/images/presentation.png";
interface ProjectsCardProps extends RouteCardProps {}

const ProjectsCard: FunctionComponent<ProjectsCardProps> = ({
  className,
  onClick,
}) => {
  return (
    <div
      className={`${styles.content} ${styles.projects} ${styles["transition-opacity"]} ${styles[className]}`}
      onClick={onClick}
    >
      <div className={styles["image-container"]}>
        <Image fill src={presentation} alt="presentation" />
      </div>
      <div className={styles["text-container"]}>
        <h1>My Work</h1>
      </div>
    </div>
  );
};

export default ProjectsCard;
