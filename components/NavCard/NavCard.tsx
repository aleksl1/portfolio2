import { FunctionComponent, useEffect, useState } from "react";
import AboutCard from "./AboutCard";
import ContactCard from "./ContactCard";
import HomeCard from "./HomeCard";
import ProjectsCard from "./ProjectsCard";
import styles from "../../styles/Navcard.module.css";
import Navbar from "../Navbar";
import { useRouter } from "next/router";

interface NavCardProps {}

export const NavCard: FunctionComponent<NavCardProps> = () => {
  const [activePage, setActivePage] = useState<string>("/");
  const [cardHidden, setCardHidden] = useState(true);
  const [contentHidden, setContentHidden] = useState(true);
  const { pathname } = useRouter();

  useEffect(() => {
    setActivePage(pathname);
    setContentHidden(true);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => {
      setCardHidden(false);
      setContentHidden(false);
    }, 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setContentHidden(false);
    }, 1000);
  }, [activePage]);

  const content = () => {
    const className = "transition-opacity-show";
    switch (activePage) {
      case "/":
        return <HomeCard className={!contentHidden ? className : " "} />;
      case "/about":
        return <AboutCard className={!contentHidden ? className : " "} />;
      case "/projects":
        return <ProjectsCard className={!contentHidden ? className : " "} />;
      case "/contact":
        return <ContactCard className={!contentHidden ? className : " "} />;
      default:
        return;
    }
  };

  const showCard = () => setCardHidden(false);
  const hideCard = () => setCardHidden(true);

  return (
    <>
      <div
        className={`${styles.container} ${
          cardHidden && styles["container-hidden"]
        }`}
        onClick={cardHidden ? showCard : () => null}
      >
        {content()}
        <div className={styles["navbar-container"]}>
          <Navbar />
        </div>
        <div
          className={`${styles["menu-control"]} ${
            !cardHidden ? styles["burger-hidden"] : styles["burger-visible"]
          }`}
          onClick={showCard}
        >
          <div className={styles["burger-line-1"]}></div>
          <div className={styles["burger-line-2"]}></div>
          <div className={styles["burger-line-3"]}></div>
        </div>
        <div
          className={`${styles["menu-close"]} ${
            cardHidden ? styles["close-hidden"] : styles["close-visible"]
          }`}
          onClick={hideCard}
        >
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};
