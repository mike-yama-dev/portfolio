import styles from './About.module.css';

const AboutMe = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>About Me</h1>

            <div className={styles.content}>
            <p>
                {`Hi! My name is Mike Yamauchi, I'm an ambitious full-stack developer with a passion for creating impactful solutions, specializing in React Native and Expo. \nOutside of coding, I enjoy spending time with my partner, playing video games, and hanging out with my cat. `}
            </p>

            <p>
                {`I approach every challenge with determination and a desire to learn, constantly striving to expand my skills and deliver meaningful results. I'm excited to connect with like-minded individuals and collaborate on projects that make a difference. Let’s create something amazing together!`}
            </p>

            <p>
                Feel free to reach out to learn more!
            </p>
            </div>
        </div>
    );
};

export default AboutMe;
