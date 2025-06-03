// src/assets/pages/ContactPage.jsx
import React from "react";
import ContactCTA from "../components/ContactCTA";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* CTA Banner */}
      <ContactCTA />

      {/* Form Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
