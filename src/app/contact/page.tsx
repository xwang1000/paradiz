'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PageHeading, PageSubtitle, SectionHeading, Typography, typographyClasses } from '@/components/Typography';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 overflow-x-hidden pl-10 lg:pl-0 space-y-16">
      {/* Welcome Section */}
      <section className="bg-teal text-creme py-20 text-center">
        <PageHeading className="text-creme">Contact Us</PageHeading>
        <PageSubtitle className="text-creme">Get in touch with us</PageSubtitle>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <SectionHeading>Send us a Message</SectionHeading>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className={typographyClasses.formLabel}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={typographyClasses.formInput}
                />
              </div>
              <div>
                <label htmlFor="email" className={typographyClasses.formLabel}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={typographyClasses.formInput}
                />
              </div>
              <div>
                <label htmlFor="message" className={typographyClasses.formLabel}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={typographyClasses.formInput}
                ></textarea>
              </div>
              <button type="submit" className={`btn-primary w-full ${typographyClasses.button}`}>
                Send Message
              </button>
            </form>
          </div>

          <div className="card">
            <div className="space-y-4">
              <div>
                <p className={`text-gray-600 ${typographyClasses.contactInfo}`}>3058 St Johns St, Port Moody</p>
              </div>
              <div>
                <h3 className={`font-bold text-gray-900 ${typographyClasses.contactInfo}`}>Phone</h3>
                <p className={`text-gray-600 ${typographyClasses.contactInfo}`}>(604) 724-7235</p>
              </div>
              <div>
                <h3 className={`font-bold text-gray-900 ${typographyClasses.contactInfo}`}>Instagram</h3>
                <a href="https://instagram.com/paradizteahouse" target="_blank" rel="noopener noreferrer" className={`text-teal hover:text-teal-dark ${typographyClasses.contactInfo}`}>
                  @paradizteahouse
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 