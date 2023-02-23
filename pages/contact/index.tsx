import { FunctionComponent } from "react";
import styles from "../../styles/pages/Contact.module.css";
import github from "../../public/assets/images/github.png";
import linkedin from "../../public/assets/images/linkedin.png";
import mail from "../../public/assets/images/mail.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ContactPageProps {}

type ContactInfo = { label: string; href: string; icon: StaticImageData };

const contactInfo: ContactInfo[] = [
  {
    label: "Get in contact",
    href: "www.linkedin.com",
    icon: linkedin,
  },
  { label: "Checkout my github", href: "www.github.com", icon: github },

  {
    label: "Send me an mail",
    href: "aleksander.slawek1@gmail.com",
    icon: mail,
  },
];

const ContactPage: FunctionComponent<ContactPageProps> = () => {
  const contact = contactInfo.map((item: ContactInfo, index) => {
    return (
      <Link
        key={index}
        href={item.href}
        className={`${styles["contact-item"]} ${styles["contact-link"]}`}
      >
        <div className={styles["contact-label"]}>{item.label}</div>
        <div className={styles["contact-icon"]}>
          <Image fill src={item.icon} alt={item.label} />
        </div>{" "}
      </Link>
    );
  });

  return (
    <div className={styles["page-container"]}>
      <div className={styles["contact-container"]}>{contact}</div>
    </div>
  );
};

export default ContactPage;
