'use client';

import { useState } from 'react';
import ContactForm from './sendmessage';
import StayConnected from './stayconnected';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Me contacter</h1>
          <p className="text-xl text-gray-600">
            Il fallait une page de contact pour transformer ce template en portfolio non ?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form Component */}
          <ContactForm />
          
          {/* Contact Information Component */}
          <StayConnected />
        </div>
      </div>
    </div>
  );
}
