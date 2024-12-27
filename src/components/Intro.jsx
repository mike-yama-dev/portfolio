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
      style={{
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
        marginTop: '15rem',
        marginBottom: '7rem',
      }}
    >
      <img
        src="/me.jpg"
        alt="Mike Yamauchi"
        style={{ borderRadius: '50%', width: '300px', height: '300px' }}
      />
      <h1>Mike Yamauchi</h1>
      <p>Full-stack Developer</p>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px', maxWidth: '18rem', margin: '0 auto' }}>
      <button
        onClick={handleScrollToAbout} // Call the scroll handler
        className={styles.button}
      >
        Learn More About Me
      </button>

        <button
        onClick={handleScrollToProjects} // Call the scroll handler
        className={styles.button}
        >
        View My Projects
        </button>

        <button
        onClick={handleScrollToContact} // Call the scroll handler
        className={styles.button}
        >
        Contact Me
        </button>
        </div>
    </div>
  );
};

export default Intro;
