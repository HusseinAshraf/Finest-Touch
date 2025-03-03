import React from "react";

function TermsAndConditions() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl w-full">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Terms and Conditions
          </h1>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              1. Introduction
            </h2>
            <p className="text-gray-600">
              Please read these terms and conditions carefully before using this
              website. By using this site, you agree to be bound by these terms.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              2. User Rights
            </h2>
            <p className="text-gray-600">
              We respect user rights, but we reserve the right to modify or
              suspend the service without prior notice.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              3. Website Usage
            </h2>
            <p className="text-gray-600">
              The use of this website for any illegal or unauthorized activity
              is strictly prohibited.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              4. Intellectual Property
            </h2>
            <p className="text-gray-600">
              All content and materials on this site are protected by copyright
              and trademark laws.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              5. Limitation of Liability
            </h2>
            <p className="text-gray-600">
              We are not liable for any damages that may arise from the use of
              this website.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              6. Amendments to Terms
            </h2>
            <p className="text-gray-600">
              We reserve the right to modify these terms at any time. Updates
              will be posted on this page.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              7. Contact Information
            </h2>
            <p className="text-gray-600">
              If you have any inquiries, you can contact us via email at:
              <a href="mailto:support@example.com" className="text-blue-600">
                {" "}
                support@example.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default TermsAndConditions;
