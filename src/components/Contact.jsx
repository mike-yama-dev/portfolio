import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'your_service_id', // Replace with your EmailJS Service ID
            'your_template_id', // Replace with your EmailJS Template ID
            formData,
            'your_user_id' // Replace with your EmailJS User ID
        )
        .then(() => {
            setStatusMessage('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        })
        .catch(() => {
            setStatusMessage('Failed to send the message. Please try again later.');
        });
    };

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h1>Contact</h1>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{ padding: '10px', fontSize: '16px' }}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{ padding: '10px', fontSize: '16px' }}
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{ padding: '10px', fontSize: '16px', minHeight: '100px' }}
                />
                <button type="submit" style={{ padding: '10px', fontSize: '16px', cursor: 'pointer' }}>
                    Send
                </button>
            </form>
            {statusMessage && <p>{statusMessage}</p>}
        </div>
    );
};

export default Contact;
