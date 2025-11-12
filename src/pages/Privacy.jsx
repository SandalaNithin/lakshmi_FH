// src/pages/PrivacyPolicy.jsx

import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-4 text-center">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8 text-center">
        Last updated: Navember 2 2025
      </p>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p>
             Welcome to <strong>Lakshmi Function Hall</strong> (“we”, “us”, “our”). We
            operate the website{" "}
            <a
                href="https://lakshmifunctionhall.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
            >
           https://lakshmifunctionhall.netlify.app/
            </a>{" "}
            (the “Website”) in connection with our function-hall services located at{" "}
            <strong>
             Ramakrishnanager, BuchiReddyPalem, Nellore, Andhra Pradesh, India
            </strong>
            . This Privacy Policy describes how we collect, use, disclose, and safeguard
                your personal information when you visit our Website or engage with us (for
                bookings, enquiries, events). By using our Website or providing information to
                 us, you agree to the terms of this Policy.
        </p>

        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">
            2. Information We Collect
          </h2>
          <p className="mb-2 font-medium">a. Personal Information you provide:</p>
          <p>
            When you contact us, make a booking or fill in our enquiry form, we
            may collect: your name, email address, phone number, event date,
            number of guests, billing/payment information, and any other
            event-related details you choose to provide.
          </p>

          <p className="mt-4 mb-2 font-medium">b. Automatically Collected Information:</p>
          <p>
            When you visit our Website, we may collect certain information
            automatically: your device IP address, browser type, pages you
            visit, time and date of visit, referral URL, and other analytics
            data.
          </p>

          <p className="mt-4 mb-2 font-medium">c. Cookies and Tracking:</p>
          <p>
            We may use cookies and similar tracking technologies to obtain data
            about your browsing behaviour. You may disable cookies via your
            browser settings, but this may affect your experience of the
            Website.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Process your booking/enquiry and communicate with you.</li>
            <li>Provide the services you request (event coordination, billing, confirmations).</li>
            <li>Improve and personalise our Website and services.</li>
            <li>Send you marketing communications (only if you have opted in).</li>
            <li>Comply with legal and regulatory obligations.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            4. Information Sharing and Disclosure
          </h2>
          <p>
            We will not sell your personal information to third parties. We may
            share your information with:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              Service providers who assist us (payment processors, event
              vendors, analytics providers);
            </li>
            <li>Legal or regulatory authorities if required by law;</li>
            <li>Other parties only with your consent.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">5. Data Security and Retention</h2>
          <p>
            We adopt appropriate organisational and technical measures to
            protect your personal information from unauthorised access,
            alteration, disclosure or destruction. We retain your personal
            information only for as long as necessary to fulfil the purposes set
            out above, or as required by law (e.g., for billing records, event
            history).
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access the personal information we hold about you.</li>
            <li>Correct or update your information.</li>
            <li>
              Request deletion of your personal information (subject to
              legal/contractual obligations).
            </li>
            <li>Withdraw consent where we rely on it for processing.</li>
          </ul>
          <p className="mt-2">
            To exercise these rights, please contact us at{" "} <br>
            </br>
            {/* <strong>[email/contact address]</strong>. */}
            <strong>Email:  Lakshmifunctionhall@gmail.com <br />
                Contact: 7981862253<br />
                Address:  Ramakrishnanager, BuchiReddyPalem, Nellore, Andhra Pradesh, India

            </strong>

          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">7. International Transfers</h2>
          <p>
            If we transfer your information outside of India (for example to
            cloud servers or service providers abroad), we will ensure that
            appropriate safeguards are in place.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">8. Children’s Privacy</h2>
          <p>
            Our Website and services are not directed to children under
            [13/16] years. We do not knowingly collect personal information from
            children without parental/guardian consent.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">9. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will post
            the updated version on our Website with a revised “Last updated”
            date. You are advised to review this Policy periodically.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or
            our data practices, you may contact us at:
          </p>
          <p className="mt-2">
            <strong>[Lakshmi Function Hall] <br />
            Address: [Ramakrishnanager, BuchiReddyPalem, Nellore, Andhra Pradesh, India
] <br />
            Email: [Lakshmifunctionhall@gmail.com] <br />
            Phone: [7981862253]
            </strong>
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
