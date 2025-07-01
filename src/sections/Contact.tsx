'use client';

import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<null | 'SUCCESS' | 'ERROR'>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        'service_onxs7jg',
        'template_rn6ik4c',
        form.current,
        'PbHe6Hxnz-p31pUyB'
      )
      .then(
        () => {
          setStatus('SUCCESS');
          form.current?.reset();
          setTimeout(() => setStatus(null), 4000);
        },
        () => {
          setStatus('ERROR');
          setTimeout(() => setStatus(null), 4000);
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gradient-to-l dark:from-black dark:to-gray-800 text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-left">
        {/* Right Column - Contact Form */}
        <div className="md:col-span-2">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white dark:bg-gray-800 backdrop-blur-xl border border-white/10 shadow-md rounded-xl p-6 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-md bg-white dark:bg-transparent border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-md bg-white dark:bg-transparent border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                {t('contact.form.message')}
              </label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full px-4 py-2 rounded-md bg-white dark:bg-transparent border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-block px-6 py-2 text-white bg-primary hover:bg-primary-dark rounded-full shadow transition"
              >
                {t('contact.send')}
              </button>
              {status === 'SUCCESS' && (
                <p className="text-green-500 mt-2">✅ Message sent successfully!</p>
              )}
              {status === 'ERROR' && (
                <p className="text-red-500 mt-2">❌ Something went wrong. Please try again.</p>
              )}
            </div>
          </form>
        </div>

        {/* Left Column - Info */}
        <div className="border-l-4 border-primary pl-6 md:mt-10">
          <h2 className="text-3xl md:text-4xl bg-gradient-to-r from-gray-300 to-primary bg-clip-text text-transparent font-bold mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 mb-3">
            {t('contact.description')}
          </p>
          <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
            <div>
              <strong>{t('contact.email')}:</strong>
              <p className="mt-1">hatmi.soumayatech@gmail.com</p>
            </div>
            <div>
              <strong>{t('contact.phone')}:</strong>
              <p className="mt-1">+212 7 04 82 06 78</p>
            </div>
            <div>
              <strong>{t('contact.location')}:</strong>
              <p className="mt-1">{t('contact.address')}.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
