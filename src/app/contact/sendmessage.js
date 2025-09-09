'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [validationErrors, setValidationErrors] = useState({});
  const namePattern = /^[A-Za-zÀ-ÿ]+\s+[A-Za-zÀ-ÿ]+$/;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  function validateForm(formData) {
        const errors = {};
        const name = formData.get('name')?.toString().trim();
        const email = formData.get('email')?.toString().trim();
        const message = formData.get('message')?.toString().trim();

        if (!name) {
          errors.name = 'Le nom est requis';
        } else if (!namePattern.test(name)) {
          errors.name = 'Le nom doit être au format "Prénom Nom" (ex: Jean Dupont)';
        }

        if (!email) {
          errors.email = 'L\'email est requis';
        } else if (!emailPattern.test(email)) {
          errors.email = 'Veuillez entrer un email valide (ex: nom@domaine.com)';
        }

        if (!message) {
          errors.message = 'Le message est requis';
        } else if (message.length < 10) {
          errors.message = 'Le message doit contenir au moins 10 caractères';
        }

        return errors;
  }
    async function handleSubmit(e) {
      e.preventDefault();
      setIsSubmitting(true);
      setError('');

      const form = e.target;
      const formData = new FormData(form);



      const validationErrors = validateForm(formData);
      if (Object.keys(validationErrors).length > 0) {
        setValidationErrors(validationErrors);
        setIsSubmitting(false);
        return;
      }

      setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mnnbwvaa', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      setError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleBlur(e) {
    const { name, value } = e.target;
    const tempFormData = new FormData();
    tempFormData.set(name, value);
    
    const errors = validateForm(tempFormData);
    setValidationErrors(prev => ({
      ...prev,
      [name]: errors[name] || ''
    }));
  }

  if (submitted) {
    return (
      <div className="max-w-md mx-auto text-center p-6 bg-green-50 rounded-lg border border-green-200">
        <div className="text-green-600 mb-2">
          <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-green-800 mb-2">Message envoyé!</h3>
        <p className="text-green-600 mb-4">Merci pour votre message. Je vous répondrai bientôt.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-8">
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6" noValidate>
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
        Nom complet * <span className="text-gray-500 font-normal">(Prénom Nom)</span>
      </label>
      <input
        type="text"
        name="name"
        id="name"
        required
        pattern="^[A-Za-zÀ-ÿ]+\s+[A-Za-zÀ-ÿ]+$"
        onBlur={handleBlur}
        className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 placeholder-gray-500 ${
          validationErrors.name 
            ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
            : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
        }`}
        placeholder="Jean Dupont"
      />
      {validationErrors.name && (
        <p className="mt-1 text-sm text-red-600">{validationErrors.name}</p>
      )}
    </div>

    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
        Email *
      </label>
      <input
        type="email"
        name="email"
        id="email"
        required
        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        onBlur={handleBlur}
        className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 placeholder-gray-500 ${
          validationErrors.email 
            ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
            : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
        }`}
        placeholder="jean.dupont@example.com"
      />
      {validationErrors.email && (
        <p className="mt-1 text-sm text-red-600">{validationErrors.email}</p>
      )}
    </div>

    <div>
      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
        Sujet
      </label>
      <input
        type="text"
        name="subject"
        id="subject"
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
        placeholder="Sujet de votre message"
      />
    </div>

    <div>
      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
        Message * <span className="text-gray-500 font-normal">(min. 10 caractères)</span>
      </label>
      <textarea
        name="message"
        id="message"
        rows={5}
        required
        minLength={10}
        onBlur={handleBlur}
        className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 resize-vertical placeholder-gray-500 ${
          validationErrors.message 
            ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
            : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
        }`}
        placeholder="Écrivez votre message ici... (minimum 10 caractères)"
      />
      {validationErrors.message && (
        <p className="mt-1 text-sm text-red-600">{validationErrors.message}</p>
      )}
    </div>

    {/* Display general error */}
    {error && (
      <div className="text-red-600 text-sm bg-red-50 p-3 rounded-md border border-red-200">
        {error}
      </div>
    )}

    <button
      type="submit"
      disabled={isSubmitting || Object.keys(validationErrors).some(key => validationErrors[key])}
      className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
    >
      {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
    </button>

    <p className="text-xs text-gray-500 text-center">
      * Champs obligatoires
    </p>
  </form>
  </div>
);
}