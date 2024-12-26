const Intro = () => {
    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h1>Welcome to My World</h1>
            <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                {`
                Hi there! 👋 I'm [Your Name], a [Your Profession or Role] passionate about [Your Interests or Specialties]. 
                This space is where I share my work, ideas, and a little about who I am.`}
            </p>
            <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                {`Whether you're here to collaborate, explore my portfolio, or just say hi, I'm thrilled to have you! 
                Feel free to look around and reach out if something catches your eye.`}
            </p>
            <button
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginTop: '20px',
                }}
            >
                Learn More About Me
            </button>
        </div>
    );
};

export default Intro;
