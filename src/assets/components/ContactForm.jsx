import React, { useState } from "react";
import { FaPaperPlane, FaSpinner } from 'react-icons/fa'; // Importing icons for the submit button

const fieldsConfig = [
  {
    name: "name",
    label: "Your Name", // Slightly more friendly label
    type: "text",
    placeholder: "e.g., John Doe",
    required: true,
  },
  {
    name: "email",
    label: "Your Email", // Slightly more friendly label
    type: "email",
    placeholder: "e.g., your.email@example.com",
    required: true,
  },
  {
    name: "subject",
    label: "Subject (Optional)", // Clearly state it's optional
    type: "text",
    placeholder: "e.g., Project Inquiry, Collaboration, General Query",
    required: false,
  },
  {
    name: "message",
    label: "Your Message", // Slightly more friendly label
    type: "textarea",
    placeholder: "Tell me more about your idea or question...",
    required: true,
    rows: 6, // Slightly increased rows for more typing space
  },
];

const ContactForm = () => {
  const initialState = fieldsConfig.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false); // State for submission loading
  const [submitMessage, setSubmitMessage] = useState(null); // State for success/error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Start loading state
    setSubmitMessage(null); // Clear previous messages

    try {
      // --- Replace this with your actual email-sending logic ---
      // Example using a placeholder API call:
      // const response = await fetch('/api/send-email', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      // if (!response.ok) {
      //   throw new Error('Failed to send message. Please try again.');
      // }

      // Simulate a network request
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log("Form submitted:", formData);
      setSubmitMessage({ type: 'success', text: "Thanks for reaching out! I’ll get back to you soon." });
      setFormData(initialState); // Clear form after successful submission

    } catch (error) {
      console.error("Submission error:", error);
      setSubmitMessage({ type: 'error', text: error.message || "Something went wrong. Please try again later." });
    } finally {
      setIsSubmitting(false); // End loading state
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-10 md:p-12 border border-gray-100 transform transition-transform duration-300 ease-in-out hover:scale-[1.005]"
    >
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-indigo-800 mb-8 leading-tight">
        Send Me a Message
      </h2>
      <p className="text-md text-gray-600 text-center mb-10">
        I'm excited to hear from you. Please fill out the form below.
      </p>

      {fieldsConfig.map((field) => (
        <div className="mb-6" key={field.name}>
          <label
            htmlFor={field.name}
            className="block text-gray-800 text-base font-semibold mb-2"
          >
            {field.label}
            {field.required && <span className="text-red-500 ml-1 text-lg">*</span>}
          </label>

          {field.type === "textarea" ? (
            <textarea
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required={field.required}
              rows={field.rows}
              className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-3 focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-gray-400 transition-all duration-200 resize-y"
              placeholder={field.placeholder}
            />
          ) : (
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              value={formData[field.name]}
              onChange={handleChange}
              required={field.required}
              className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-3 focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-gray-400 transition-all duration-200"
              placeholder={field.placeholder}
            />
          )}
        </div>
      ))}

      {/* Submission Message */}
      {submitMessage && (
        <div
          className={`p-4 rounded-lg mb-6 text-center text-sm font-medium ${
            submitMessage.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}
          role="alert"
        >
          {submitMessage.text}
        </div>
      )}

      <div className="text-center mt-8">
        <button
          type="submit"
          className={`inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-bold text-lg rounded-full shadow-lg
                     hover:from-indigo-700 hover:to-purple-800 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105
                     focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-opacity-75 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          disabled={isSubmitting} // Disable button while submitting
        >
          {isSubmitting ? (
            <>
              <FaSpinner className="animate-spin mr-3" /> Sending...
            </>
          ) : (
            <>
              <FaPaperPlane className="mr-3" /> Send Message
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;