import React from 'react';

interface ContactCardProps {
  firstName: string;
  lastName: string;
  status: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ firstName, lastName, status }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-5/6 md:max-w-sm md:mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Information</h2>
      <div className="space-y-3">
        <p className="text-gray-600">
          <span className="font-semibold">First Name:</span> {firstName}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Last Name:</span> {lastName}
        </p>
        <div className="flex items-center">
          <span className="font-semibold text-gray-600 mr-2">Status:</span>
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
            status === 'active' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
          }`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;