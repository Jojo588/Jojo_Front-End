import React, { useState, useRef } from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaCopy, FaCheck } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [copiedField, setCopiedField] = useState('');
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const form = useRef();

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(''), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;

    setSending(true);
    setSent(false);

    try {
      await emailjs.sendForm(
        'service_cjrzzgp',
        'template_6x78doc',
        form.current,
        'MwY8UNX2zZgB4D5K_'
      );
      setSent(true);
      form.current.reset();
    } catch (error) {
      console.error('Email send error:', error);
      alert('Failed to send message. Check console for details.');
    } finally {
      setSending(false);
    }
  };

  const contactInfo = {
    phone: '+233 024 899 3067',
    email: 'benafful53@gmail.com',
    linkedin: 'https://www.linkedin.com/in/benedict-jojo-afful-b72844276',
    github: 'https://github.com/Jojo588',
  };

  return (
    <section className="min-h-fit px-6 py-12 md:px-20 bg-[#1A1A2E] text-[#EAEAEA]">
      <h1 className="text-center text-4xl font-semibold capitalize mb-10 text-[#FCA311]">Contact</h1>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-6 text-lg">
          <div className="flex items-center gap-4">
            <FaPhone className="text-[#FCA311] text-xl" />
            <span className="font-medium">{contactInfo.phone}</span>
            <button onClick={() => handleCopy(contactInfo.phone, 'phone')} className="text-[#FCA311]">
              {copiedField === 'phone' ? <FaCheck /> : <FaCopy />}
            </button>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-[#FCA311] text-xl" />
            <span className="font-medium">{contactInfo.email}</span>
            <button onClick={() => handleCopy(contactInfo.email, 'email')} className="text-[#FCA311]">
              {copiedField === 'email' ? <FaCheck /> : <FaCopy />}
            </button>
          </div>

          <div className="flex items-center gap-4">
            <FaLinkedin className="text-[#FCA311] text-xl" />
            <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" className="hover:underline text-[#C5C5C5]">
              linkedin.com/in/benedict-jojo-afful
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaGithub className="text-[#FCA311] text-xl" />
            <a href={contactInfo.github} target="_blank" rel="noreferrer" className="hover:underline text-[#C5C5C5]">
              github.com/Jojo588
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-[#16213E] border border-[#FCA311] placeholder:text-[#C5C5C5] text-white focus:ring-2 focus:ring-[#FCA311]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-[#16213E] border border-[#FCA311] placeholder:text-[#C5C5C5] text-white focus:ring-2 focus:ring-[#FCA311]"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-lg bg-[#16213E] border border-[#FCA311] placeholder:text-[#C5C5C5] text-white focus:ring-2 focus:ring-[#FCA311]"
          ></textarea>
          <button
            type="submit"
            className={`px-6 py-3 rounded-lg transition text-white ${
              sending
                ? 'bg-gray-500 cursor-not-allowed'
                : 'bg-[#FCA311] hover:bg-[#ffbb33]'
            }`}
            disabled={sending}
          >
            {sending ? 'Sending...' : 'Send Message'}
          </button>
          {sent && (
            <p className="text-[#00ff9f] font-medium">
              Your message has been sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
