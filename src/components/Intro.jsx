import styles from './Intro.module.css';
import PropTypes from 'prop-types';

const Intro = ({ aboutRef, projectsRef, contactRef }) => {
  const handleScrollToAbout = (e) => {
    e.preventDefault();
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to About section
    }
  };

  const handleScrollToProjects = (e) => {    
    e.preventDefault();
    if (projectsRef.current) {
        projectsRef.current.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to Projects section
    }
  }

    const handleScrollToContact = (e) => {
        e.preventDefault();
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
      <a
        onClick={handleScrollToAbout} // Call the scroll handler
        className={styles.button}
      >
        About Me
      </a>

        <a
        onClick={handleScrollToProjects} // Call the scroll handler
        className={styles.button}
        >
        My Projects
        </a>

        <a
        onClick={handleScrollToContact} // Call the scroll handler
        className={styles.button}
        >
        Contact Me
        </a>
        </div>
        <div className={styles.border}>

        </div>
    </div>
  );
};
Intro.propTypes = {
  aboutRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  projectsRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  contactRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default Intro;

