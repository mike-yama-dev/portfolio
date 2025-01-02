import styles from './Projects.module.css';

const Projects = () => {
    const projectData = [
        {
            name: 'Flavrite',
            description: 'Want to find a product you enjoy (coffee, tea, hot sauce, etc)? I have been working with flavrite since graduation in May 2023. I am a solo full stack developer on this project. I have done everything from transforming legacy to modernized code, implemented new features, developed algorithms, and have been a part of the business development plans.',
            appleLink: 'https://apps.apple.com/us/app/flavrite/id1640095010',
            googlePlayLink: 'https://play.google.com/store/apps/details?id=com.flavrite.app&hl=en_CA',
            technology: 'React Native, Expo, Laravel, MariaDB, AWS, Headless Shopify, Algolia, Firebase Notifications, Apple App Store, Google Play Store',
            src: '/flavrite.jpg',
            imgAlt: 'Flavrite App',
            imgPrint: 'portrait',
        },
        {
            name: 'LittleSpoon Landscape Services',
            description: 'LittleSpoon Landscape is a website I made in react for the owner of LittleSpoon. It showcases the services they offer and has a contact form for potential clients to reach out. Keeping budget in mind I used react and emailJS to create a simple front end without the need for a backend.',
            link: 'https://littlespoonlandscape.ca',
            technology: 'React, EmailJS, Vite, Vercel, CSS modules',
            src: '/littleSpoon.jpg',
            imgAlt: 'Flavrite App',
            imgPrint: 'portrait',
        },
        {
            name: 'Portfolio',
            description: 'This is the portfolio you are currently viewing. I made this portfolio in under 6 hours as a mini solo hackathon to showcase my skills, projects, and the ability to work under pressure. I used React and Vite to create a fast and responsive website. I also used emailJS to create a contact form.',
            link: 'https://github.com/mike-yama-dev/portfolio',
            technology: 'React, EmailJS, Vite, Vercel, CSS modules',
            src: '/portfolio.jpg',
            imgAlt: 'Flavrite App',
            imgPrint: 'portrait',
        },
    ];

    return (
        <div className={styles.container}>
            <h1>My Projects</h1>
            <div className={styles.projects}>
                {projectData.map((project, index) => (
                    <div
                        key={index}
                        className={styles.individualProject}
                    >   
                        {project.src && project.imgPrint == 'portrait' ? (
                            <img
                                src={project.src}
                                alt={project.name}
                                className={styles.portrait}
                                />) : 
                        <img
                            src={project.src}
                            alt={project.name}
                            className={styles.landscape}
                        />}
                        <h2 style={{ margin: '30px 0 10px 0' }}>{project.name}</h2>
                        <p style={{ margin: '0 0 20px 0', lineHeight: '1.6' }}>{project.description}</p>
                        <p style={{ margin: '0 0 20px 0', lineHeight: '1.6' }}><strong>Technology:</strong> {project.technology}</p>
                        <div
                        style={{

                        }}
                        className={styles.flavriteContainer}
                        >
                        {project.appleLink && (
                            <div style={{ position: 'relative', width: '150px', height: '50px' }}>
                            <a href={project.appleLink} target="_blank" rel="noopener noreferrer">
                                <img
                                src="/app-store.png"
                                alt="Download on the App Store"
                                className={styles.appStore}
                                />
                            </a>
                            </div>
                        )}
                        {project.googlePlayLink && (
                            <div style={{ width: '11rem', marginTop: '0.10rem' }}>
                            <a href={project.googlePlayLink} target="_blank" rel="noopener noreferrer">
                                <img
                                src="/googleplay-badge.webp"
                                alt="Download on Google Play"
                                className={styles.googlePlay}
                                />
                            </a>
                            </div>
                        )}
                        {project.link && (
                            <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.buttonContainer}
                            >
                            Visit Project
                            </a>
                        )}
                        </div>


                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
