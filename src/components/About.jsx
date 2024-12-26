const AboutMe = () => {
    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h1>About Me</h1>
            <p>{`
                Hi,  [Your Name]! I'm a [Your Profession] with a passion for [Your Interests or Hobbies].
                When I'm not [Professional Activity], you can find me enjoying [Hobby or Interest].`}
            </p>
            <p>
                {`I believe in [Your Belief or Philosophy] and strive to [Your Goal or Mission].
                I'm always excited to connect with others and collaborate on meaningful projects.`}
            </p>
            <p>
                Feel free to reach out or follow me on [Your Social Media/Contact Info] to learn more!
            </p>
        </div>
    );
};

export default AboutMe;
