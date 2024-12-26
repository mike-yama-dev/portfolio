const Projects = () => {
    const projectData = [
        {
            name: 'Project One',
            description: 'A cutting-edge mobile app that revolutionizes the way you [describe functionality].',
            appleLink: 'https://apps.apple.com/your-app-id',
            googlePlayLink: 'https://play.google.com/store/apps/details?id=your-app-id',
        },
        {
            name: 'Project Two',
            description: 'A web-based solution designed to [describe functionality].',
            link: 'https://your-project-two-link.com',
        },
        {
            name: 'Project Three',
            description: 'An innovative tool that helps [describe functionality].',
            link: 'https://your-project-three-link.com',
        },
    ];

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h1>My Projects</h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
                {projectData.map((project, index) => (
                    <div
                        key={index}
                        style={{
                            border: '1px solid #ddd',
                            borderRadius: '10px',
                            padding: '20px',
                            textAlign: 'left',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <h2 style={{ margin: '0 0 10px 0' }}>{project.name}</h2>
                        <p style={{ margin: '0 0 20px 0', lineHeight: '1.6' }}>{project.description}</p>
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                            {project.appleLink && (
                                <div style={{ position: 'relative', width: '20.5%', paddingBottom: '10%' }}>
                                <img
                                    src="/app-store.png"
                                    alt="Download on the App Store"
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                    }}
                                />
                            </div>
                            )}
                            {project.googlePlayLink && (
                                <img src="/googleplay-badge.webp" alt="Download on the App Store" style={{width: '25%'}}/>
                            )}
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        padding: '10px 15px',
                                        backgroundColor: '#4CAF50',
                                        color: 'white',
                                        textDecoration: 'none',
                                        borderRadius: '5px',
                                    }}
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
