import { FunctionComponent, useState } from "react";
import styles from "../styles/Layout.module.css";
import {
  BiHomeHeart,
  BiGitBranch,
  BiMessageRoundedDetail,
  BiUser,
} from "react-icons/bi";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavbarProps {}

const iconsWhite = "#fff";
const iconsBlack = "#000000a3";

const Navbar: FunctionComponent<NavbarProps> = () => {
  const router = useRouter();
  const navIcons = [
    { icon: <BiHomeHeart size={"100%"} color={iconsWhite} />, href: "/" },
    { icon: <BiUser size={"100%"} color={iconsWhite} />, href: "/about" },
    {
      icon: <BiGitBranch size={"100%"} color={iconsWhite} />,
      href: "/projects",
    },
    {
      icon: <BiMessageRoundedDetail size={"100%"} color={iconsWhite} />,
      href: "/contact",
    },
  ];
  return (
    <div className={styles.container}>
      <nav className={styles.mainNav}>
        <ul>
          {navIcons.map((icon, index) => {
            const underline = router.pathname === icon.href;
            return (
              <li key={index} className={underline ? styles.active : ""}>
                <Link href={`${icon.href}`}>{icon.icon}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <nav className={`${styles.mobileNav}`}></nav>
    </div>
  );
};

export default Navbar;
