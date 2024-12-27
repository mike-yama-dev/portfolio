import styles from './Intro.module.css';

const Intro = ({ aboutRef, projectsRef, contactRef }) => {
  const handleScrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to About section
    }
  };

  const handleScrollToProjects = () => {
    if (projectsRef.current) {
        projectsRef.current.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to Projects section
    }
  }

    const handleScrollToContact = () => {
        if (contactRef.current) {
        contactRef.current.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to Contact section
        }
    }

  return (
    <div
        className={styles.container}
    >
      <img
        src="/me.jpg"
        alt="Mike Yamauchi"
        style={{ borderRadius: '50%', width: '300px', height: '300px' }}
      />
      <h1>Mike Yamauchi</h1>
      <p>Full-stack Developer</p>
      <div className={styles.buttonContainer}>
      <button
        onClick={handleScrollToAbout} // Call the scroll handler
        className={styles.button}
      >
        About Me
      </button>

        <button
        onClick={handleScrollToProjects} // Call the scroll handler
        className={styles.button}
        >
        My Projects
        </button>

        <button
        onClick={handleScrollToContact} // Call the scroll handler
        className={styles.button}
        >
        Contact Me
        </button>
        </div>
        <div className={styles.border}>

        </div>
    </div>
  );
};

export default Intro;
