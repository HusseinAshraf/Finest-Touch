import React from "react";

function PrivacyPolicy() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl w-full">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-4">
            Your privacy is important to us. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you
            visit our website.
          </p>
          <h2 className="text-xl font-semibold text-gray-700 mt-6">
            Information We Collect
          </h2>
          <p className="text-gray-600 mb-4">
            We may collect personal information such as your name, email
            address, and usage data when you interact with our services.
          </p>
          <h2 className="text-xl font-semibold text-gray-700 mt-6">
            How We Use Your Information
          </h2>
          <p className="text-gray-600 mb-4">
            We use the collected data to provide and improve our services,
            communicate with you, and ensure a better user experience.
          </p>
          <h2 className="text-xl font-semibold text-gray-700 mt-6">
            Third-Party Sharing
          </h2>
          <p className="text-gray-600 mb-4">
            We do not sell or rent your personal information to third parties.
            We may share your data with trusted partners to enhance our
            services.
          </p>
          <h2 className="text-xl font-semibold text-gray-700 mt-6">
            Your Rights
          </h2>
          <p className="text-gray-600 mb-4">
            You have the right to access, update, or delete your personal data.
            If you have any privacy concerns, please contact us.
          </p>
          <p className="text-gray-500 text-sm mt-6">Last updated: March 2025</p>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;
