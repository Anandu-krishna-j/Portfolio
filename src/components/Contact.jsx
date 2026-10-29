import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  MailIcon, 
  PhoneIcon, 
  MapPinIcon, 
  LinkedInIcon, 
  GitHubIcon, 
  CopyIcon, 
  CheckIcon, 
  ExternalLinkIcon,
  SparklesIcon 
} from './Icons';

const Contact = () => {
  const [copiedType, setCopiedType] = useState(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    const endpoint = personalInfo.formEndpoint || `https://formsubmit.co/ajax/${personalInfo.email}`;

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          subject: formState.subject || `Inquiry from ${formState.name}`,
          message: formState.message,
          _subject: `New Portfolio Message: ${formState.subject || formState.name}`,
          _captcha: 'false',
          _template: 'table'
        })
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true || response.status === 200)) {
        setFormStatus('success');
        setFormState({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      console.warn('Direct delivery unavailable, falling back to mail client:', err);
      // Fallback: Open pre-filled email client so user never loses their drafted text
      const mailtoSubject = encodeURIComponent(formState.subject || `Inquiry from ${formState.name}`);
      const mailtoBody = encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
      );
      window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
      setFormStatus('fallback');
    }
  };

  return (
    <section id="contact" className="section-modern-container" aria-label="Contact AnanduKrishna J">
      {/* Section Header */}
      <div className="section-intro text-center">
        <div className="section-pill-tag">
          <MailIcon className="w-3.5 h-3.5 text-indigo mr-1.5" />
          <span>Get in Touch</span>
        </div>
        <h2 className="section-heading">
          Let's Build Something <span className="text-gradient-radiant">Exceptional</span>
        </h2>
        <p className="section-subheading">
          Have an open role, engineering challenge, or project in mind? Reach out directly.
        </p>
      </div>

      <div className="modern-contact-grid">
        {/* Left: Contact Channels */}
        <div className="contact-card-channels reveal-from-left">
          <h3 className="contact-card-title">
            Direct Communication Channels
          </h3>
          <p className="contact-card-subtitle">
            Always open to conversations regarding frontend architecture, React contracts, or full-time opportunities.
          </p>

          <div className="contact-channels-stack">
            {/* Email */}
            <div className="modern-channel-item">
              <div className="channel-icon-avatar">
                <MailIcon className="w-5 h-5 text-indigo" />
              </div>
              <div className="channel-details">
                <span className="channel-label">Email</span>
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="channel-value-link"
                >
                  {personalInfo.email}
                </a>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(personalInfo.email, 'email')}
                className="channel-copy-button"
                title="Copy email address"
                aria-label="Copy email address"
              >
                {copiedType === 'email' ? (
                  <CheckIcon className="w-4 h-4 text-emerald" />
                ) : (
                  <CopyIcon className="w-4 h-4 text-secondary" />
                )}
              </button>
            </div>

            {/* Phone */}
            <div className="modern-channel-item">
              <div className="channel-icon-avatar">
                <PhoneIcon className="w-5 h-5 text-indigo" />
              </div>
              <div className="channel-details">
                <span className="channel-label">Phone</span>
                <a 
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} 
                  className="channel-value-link"
                >
                  {personalInfo.phone}
                </a>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(personalInfo.phone, 'phone')}
                className="channel-copy-button"
                title="Copy phone number"
                aria-label="Copy phone number"
              >
                {copiedType === 'phone' ? (
                  <CheckIcon className="w-4 h-4 text-emerald" />
                ) : (
                  <CopyIcon className="w-4 h-4 text-secondary" />
                )}
              </button>
            </div>

            {/* Location */}
            <div className="modern-channel-item">
              <div className="channel-icon-avatar">
                <MapPinIcon className="w-5 h-5 text-violet" />
              </div>
              <div className="channel-details">
                <span className="channel-label">Location</span>
                <span className="channel-value-text">{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="contact-social-section">
            <span className="social-section-title">Verified Profiles</span>
            <div className="social-buttons-row">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="modern-social-pill"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4 text-indigo" />
                <span>LinkedIn</span>
                <ExternalLinkIcon className="w-3.5 h-3.5 ml-auto text-secondary" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="modern-social-pill"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-4 h-4 text-violet" />
                <span>GitHub</span>
                <ExternalLinkIcon className="w-3.5 h-3.5 ml-auto text-secondary" />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Message Form */}
        <div className="contact-card-form reveal-from-right">
          <h3 className="contact-card-title">
            Send a Direct Note
          </h3>
          <p className="contact-card-subtitle">
            Drop a message below and I will get back to you promptly.
          </p>

          <form onSubmit={handleFormSubmit} className="modern-form">
            <div className="form-duo-row">
              <div className="modern-field-group">
                <label htmlFor="contact-name" className="field-label">
                  Your Name <span className="text-indigo">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="modern-input"
                />
              </div>

              <div className="modern-field-group">
                <label htmlFor="contact-email" className="field-label">
                  Your Email <span className="text-indigo">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="e.g. alex@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="modern-input"
                />
              </div>
            </div>

            <div className="modern-field-group">
              <label htmlFor="contact-subject" className="field-label">
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                placeholder="e.g. React Frontend Engineer Role"
                value={formState.subject}
                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                className="modern-input"
              />
            </div>

            <div className="modern-field-group">
              <label htmlFor="contact-message" className="field-label">
                Message <span className="text-indigo">*</span>
              </label>
              <textarea
                id="contact-message"
                required
                rows="5"
                placeholder="Tell me about your team, tech stack, or project..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="modern-textarea"
              />
            </div>

            <button
              type="submit"
              disabled={formStatus === 'submitting'}
              className="btn-modern-primary full-width"
            >
              {formStatus === 'submitting' ? (
                <>
                  <span className="loading-spinner" aria-hidden="true"></span>
                  <span>Sending Message...</span>
                </>
              ) : (
                <span>Send Note Directly</span>
              )}
            </button>

            {formStatus === 'success' && (
              <div className="form-toast-success" role="alert">
                <CheckIcon className="w-5 h-5 text-emerald inline mr-2 flex-shrink-0" />
                <div className="toast-content-box">
                  <strong>Message Delivered Successfully!</strong>
                  <p className="toast-subtext">
                    Your note has been submitted directly to {personalInfo.email}. If this is your first submission, please check your inbox (or Spam folder) for a one-time "Activate Form" confirmation email from FormSubmit to approve deliveries.
                  </p>
                </div>
              </div>
            )}

            {formStatus === 'fallback' && (
              <div className="form-toast-fallback" role="alert">
                <MailIcon className="w-5 h-5 text-indigo inline mr-2 flex-shrink-0" />
                <div className="toast-content-box">
                  <strong>Drafted in Email Client</strong>
                  <p className="toast-subtext">
                    Direct server delivery was unavailable. Your note was pre-filled in your mail client addressed to {personalInfo.email} so you can hit send.
                  </p>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
