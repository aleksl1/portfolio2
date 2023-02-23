import { FunctionComponent } from "react";
import styles from "../../styles/Cards.module.css";
import { RouteCardProps } from "./HomeCard";
import contactpage from "../../public/assets/images/contactpage.png";
import Image from "next/image";

interface ContactCardProps extends RouteCardProps {}

const ContactCard: FunctionComponent<ContactCardProps> = ({
  onClick,
  className,
}) => {
  return (
    <div
      className={`${styles.content} ${styles.contact} ${styles["transition-opacity"]} ${styles[className]}`}
      onClick={onClick}
    >
      <div className={styles["text-container"]}>
        <p>If you have any questions reach out to me!</p>
      </div>
      <div className={styles["image-container"]}>
        <Image fill src={contactpage} alt={"contacts book"} />
      </div>
    </div>
  );
};

export default ContactCard;
