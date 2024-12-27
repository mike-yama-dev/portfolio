import { useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';
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

    const resetForm = () => {
        setFormData({ name: '', email: '', message: '' });
      };
    

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.send(
          'default_service',
          'template_wzhwc2b',
          formData,
          'hGRGNO1TEkDp6chA-'
        )
          .then(() => {
            setStatusMessage("Thank you for reaching out! I'll reply within the next business day!"); // Show thank-you message
            resetForm(); // Reset form fields
          })
          .catch(error => alert('There was an error: ' + error.text));
      };
    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h1>Contact</h1>

            {statusMessage && <p>{statusMessage}</p>}
            <form onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
                <button type="submit" className={styles.button}>
                    Send
                </button>
            </form>
            
        </div>
    );
};

export default Contact;
