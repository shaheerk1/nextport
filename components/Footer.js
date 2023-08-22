import styles from "../styles/Footer.module.css";
import Image from "next/image";
import logo from "../public/sktext.jpg";
function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <p className={styles.footerText}>&copy; 2022. Sheheer</p>
        <Image
          priority={true}
          className={styles.logo}
          src={logo}
          alt="site logo"
        />
      </div>
    </div>
  );
}

export default Footer;
