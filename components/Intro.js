import styles from "../styles/Intro.module.css";
import Link from "next/link";
import Image from "next/image";
import gmailIco from "../public/gmailIco.png";
import memo from "../public/memo.svg";
function Intro() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.introText}>
          <h3>Hello, Welcome to my page.</h3>
          <h4 className={styles.introSubText}>
            {/* I am a software developer student learning and growing my skills in
            order to design and build innovative software solutions. I am
            passionate about using my technical skills to make a positive impact
            and am constantly seeking out new learning opportunities. In my free
            time, I enjoy tinkering with new technologies and working on
            personal projects. */}
            Scroll along to see the latest and interesting activities that I'm
            in to.{" "}
          </h4>
        </div>
      </div>
      <div className={styles.right}>
        <div className={`${styles.connectCard} ${"connectCard"}`}>
          <div className={styles.mainCard}>
            <div className={`${styles.cardLeft} ${"cardLeft"}`}>
              <p>______________</p>
              <p>Get my CV</p>
              <div className={styles.cvButton}>
                <Image
                  priority={true}
                  className={styles.cvImg}
                  src={memo}
                  alt="gmail icon"
                />
              </div>
            </div>
            <div className={styles.cardRight}>
              <Link href="/">
                <div className={styles.gmailButton}>
                  <Image
                    priority={true}
                    className={styles.gmailImage}
                    src={gmailIco}
                    alt="gmail icon"
                  />
                </div>
              </Link>
            </div>
            <div className={styles.twoLinks}>
              <Link href="/">
                <div className={styles.githubButton}>GITHUB</div>
              </Link>
              <Link href="/">
                <div className={styles.linkedinButton}>LINKEDIN</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
