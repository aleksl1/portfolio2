/* eslint-disable react/no-unescaped-entities */
import { FunctionComponent } from "react";
import styles from "../../styles/Cards.module.css";
import homeStyles from "../../styles/HomeCard.module.css";
import headshot from "../../public/assets/images/headshot.jpg";
import Image from "next/image";

export interface RouteCardProps {
  onClick?: () => void;
  className: string;
}

interface HomeCardProps extends RouteCardProps {}

const HomeCard: FunctionComponent<HomeCardProps> = ({ onClick, className }) => {
  return (
    <div
      className={`${styles.content} ${homeStyles.home} ${styles["transition-opacity"]} ${styles[className]}`}
      onClick={onClick}
    >
      <div className={homeStyles["photo-container"]}>
        <Image fill src={headshot} alt="headshot" />
      </div>
      <div className={homeStyles["text-container"]}>
        <h1>Hi, I'm Aleks</h1>
        <strong>react frontend developer</strong>
      </div>
    </div>
  );
};

export default HomeCard;
