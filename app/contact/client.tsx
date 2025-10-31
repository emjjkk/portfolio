"use client";
import Header from "@/components/header";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent! (Not really, just demo)");
    setFormData({ name: "", email: "", topic: "", message: "" });
  };

  return (
    <div className="md:w-[70%] h-screen overflow-y-scroll p-4 md:p-6 mx-auto cs">
      <Header />

      <h1 className="text-3xl md:text-4xl mt-5 mb-2 md:w-3/4">Get in Touch</h1>
      <p className="text-md text-gray-600 md:w-2/3 mb-8">
        If you want to collaborate, ask a question, just say hi, you can reach me here.
      </p>

      <div className="">
        {/* Form: 2/3 */}
        <form
          className="md:w-2/3 flex flex-col gap-2"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <select
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Topic</option>
            <option value="collaboration">Collaboration</option>
            <option value="question">Work</option>
            <option value="feedback">I just want to say hi</option>
            <option value="feedback"></option>
            <option value="other">Other</option>
          </select>

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="flex mt-5">
        <span className="text-sm text-slate-500 block">
          Creation is a form of rebellion <br />© 2025 Emmanuel Alabi
        </span>
      </div>
    </div>
  );
}
