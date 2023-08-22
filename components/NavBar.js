import styles from "../styles/Nav.module.css";
import Link from "next/link";
import Image from "next/image";
import profilePic from "../public/avatar.jpg";
import logo from "../public/sktext.jpg";
import { useEffect, useState } from "react";

function NavBar() {
  const [navToggled, setNavToggled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [bgColor, setBgColor] = useState("#1e1e1e");
  const [bgSubColor, setBgSubColor] = useState("#313131");
  const [textColor, setTextColor] = useState("#ffffff");
  const [introCardColor, setIntroCardColor] = useState("#313131");

  const toggleTheme = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
      setBgColor("#1e1e1e");
      setBgSubColor("#313131");
      setTextColor("#ffffff");
      setIntroCardColor("#313131");
    } else {
      setIsDarkMode(true);
      setBgColor("#efefef");
      setBgSubColor("#F9F9F9");
      setTextColor("#171717");
      setIntroCardColor("#F3F0D7");
    }
  };
  const pofileClick = () => {
    if (navToggled) {
      setNavToggled(false);
    } else {
      setNavToggled(true);
    }
  };

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--backgroundBlackMain",
      bgColor
    );
    document.documentElement.style.setProperty(
      "--backgroundBlackSub",
      bgSubColor
    );
    document.documentElement.style.setProperty("--theWhite", textColor);
    document.documentElement.style.setProperty(
      "--introCardColor",
      introCardColor
    );
  }, [isDarkMode]);

  return (
    <div className={`${styles.navContainer} ${"navContainer"}`}>
      <div className={styles.navLeft}>
        <Image
          priority={true}
          className={styles.logo}
          src={logo}
          alt="site logo"
        />
      </div>
      <div className={styles.navRight}>
        <div
          className={
            navToggled
              ? `${
                  styles.navRightInnerContainerMobile
                } ${"navRightInnerContainerMobile"}`
              : styles.navRightInnerContainer
          }
        >
          <div className={navToggled ? styles.linksMobile : styles.links}>
            <Link className={styles.link} href="/">
              <div>Home</div>
            </Link>
            <Link href="/about">
              <div>About</div>
            </Link>
            <Link href="/">
              <div>Works</div>
            </Link>
            <Link href="/">
              <div>Contact</div>
            </Link>
          </div>
          <div className={styles.themeSwitch}>
            <input
              className={styles.navInput}
              type="checkbox"
              id="switch"
              onChange={toggleTheme}
            />
            <label className={styles.navLabel} htmlFor="switch">
              Toggle
            </label>
          </div>
        </div>
        <div className={styles.avatar} onClick={pofileClick}>
          <Image
            className={styles.profilePic}
            src={profilePic}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
