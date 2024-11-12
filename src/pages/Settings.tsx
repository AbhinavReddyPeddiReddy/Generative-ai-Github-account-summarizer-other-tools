import React from 'react';
import ApiKeyForm from '../components/ApiKeyForm';

export default function Settings() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Settings</h1>
        <p className="text-gray-400">
          Configure your API keys and preferences here
        </p>
      </div>
      <ApiKeyForm />
    </div>
  );
}