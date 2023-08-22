import styles from "../styles/About.module.css";
function about() {
  return (
    <div className="container">
      <div>
        <div className={styles.container}>
          <p className={styles.text}>
            I'm <strong> Shaheer</strong>, A Software Engineering student, I am
            constantly learning and growing my skillset in order to design and
            build innovative and efficient software solutions. Whether it's
            creating custom web applications or working on mobile app
            development, I am constantly challenged and motivated to find the
            best possible solutions for my projects.
          </p>
          <p className={styles.text}>
            I am passionate about using my technical skills to make a positive
            impact in the world, whether it's through building applications that
            help businesses run more smoothly or developing tools that help
            solve complex problems. I am constantly seeking out new
            opportunities to learn and grow as a developer, and I am excited to
            bring my expertise and dedication to any project I work on.{" "}
          </p>
          <p className={styles.text}>
            In my free time, you can often find me tinkering with new
            technologies or working on personal projects to further develop my
            skills.
          </p>
          <p className={styles.text}>
            I am always eager to take on new challenges and learn as much as I
            can about the ever-evolving world of software development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default about;
