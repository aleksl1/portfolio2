import { FunctionComponent, useContext } from "react";
import styles from "../../styles/pages/Contact.module.css";
import github from "../../public/assets/images/github.png";
import linkedin from "../../public/assets/images/linkedin.png";
import mail from "../../public/assets/images/mail.png";
import chat from "../../public/assets/images/chat.png";
import Image, { StaticImageData } from "next/image";
import { CardContext } from "@/store/CardContext";

interface ContactPageProps {}

type ContactInfo = { label: string; href: string; icon: StaticImageData };

const contactInfo: ContactInfo[] = [
  {
    label: "Get in contact",
    href: "www.linkedin.com/in/aleks-s%C5%82awek-38b755254/",
    icon: linkedin,
  },
  { label: "Checkout my github", href: "github.com/aleksl1", icon: github },

  {
    label: "Send me an mail",
    href: "aleksander.slawek1@gmail.com",
    icon: mail,
  },
];

const ContactPage: FunctionComponent<ContactPageProps> = () => {
  const { cardState } = useContext(CardContext);
  const contact = contactInfo.map((item: ContactInfo, index) => {
    const href =
      item.icon === mail ? `mailto:${item.href}` : `https://${item.href}`;
    return (
      <a
        key={index}
        href={href}
        className={`${styles["contact-item"]} ${styles["contact-link"]}`}
      >
        <div className={styles["contact-label"]}>{item.label}</div>
        <div className={`${styles["contact-icon"]}`}>
          <Image fill src={item.icon} alt={item.label} />
        </div>{" "}
      </a>
    );
  });

  return (
    <div className={styles["page-container"]}>
      <div
        className={`${styles["image-container"]} ${
          !cardState ? styles["card-open"] : styles["card-closed"]
        }`}
      >
        <Image src={chat} alt="chat bubble" fill />
      </div>
      <div className={styles["contact-container"]}>{contact}</div>
    </div>
  );
};

export default ContactPage;
