"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";

const services = [
  "Site for Scratch",
  "UX/UI Design",
  "Full Stack Development",
  "Product Development",
  "Mobile Development",
  "Branding",
  "No-Code Design",
];

const budgets = [
  "₹ 3L–5L",
  "₹ 5L–15L",
  "₹ 15L–30L",
  "₹ 30L–50L",
  "> ₹ 50L",
];

export default function ContactForm() {
  const [selectedService, setSelectedService] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedService || !selectedBudget) {
      alert("Please select both a service you are interested in and your project budget.");
      return;
    }

    const subject = encodeURIComponent(`New Enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nInterested in: ${selectedService}\nProject Budget: ${selectedBudget}\n\nProject Details:\n${details}`
    );
    
    const mailtoLink = document.createElement('a');
    mailtoLink.href = `mailto:sales@seraviontechnologies.com?subject=${subject}&body=${body}`;
    mailtoLink.target = "_blank";
    mailtoLink.click();
  };

  return (
    <section className="bg-white py-24">
      <Container>
        {/* Label */}
        <p className="text-sm text-[#4A90FF] mb-4">— Enquiry Form</p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-[#3E3E3E] mb-8">
          Let's Talk
        </h2>

        {/* Interested In */}
        <p className="text-[#666] mb-5">I'm interested in... <span className="text-red-500"></span></p>

        <div className="flex flex-wrap gap-3 mb-16">
          {services.map((service) => (
            <button suppressHydrationWarning
              key={service}
              type="button"
              onClick={() => setSelectedService(service)}
              className={`px-5 py-2.5 rounded-full border text-[15px] transition-all ${
                selectedService === service
                  ? "bg-[#2B95FF] text-white border-[#2B95FF]"
                  : "border-gray-200 text-[#444] hover:border-[#2B95FF]"
              }`}
            >
              {service}
            </button>
          ))}
        </div>

        {/* Form */}
        <form className="max-w-[760px]" onSubmit={handleSubmit}>
          <div className="space-y-10">
            <input suppressHydrationWarning
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name "
              className="w-full border-b border-gray-200 pb-4 outline-none text-[#171717] bg-transparent placeholder:text-gray-400"
            />

            <input suppressHydrationWarning
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email "
              className="w-full border-b border-gray-200 pb-4 outline-none text-[#171717] bg-transparent placeholder:text-gray-400"
            />

            <input suppressHydrationWarning
              type="tel"
              required
              pattern="[0-9]{10}"
              title="Please enter exactly 10 digits"
              maxLength={10}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number "
              className="w-full border-b border-gray-200 pb-4 outline-none text-[#171717] bg-transparent placeholder:text-gray-400"
            />

            <textarea
              rows={1}
              required
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Tell us about your project "
              className="w-full resize-none border-b border-gray-200 pb-4 outline-none text-[#171717] bg-transparent placeholder:text-gray-400"
            />
          </div>

          {/* Budget */}
          <div className="mt-14">
            <p className="font-medium text-[#444] mb-5">
              Project Budget <span className="text-red-500"></span>
            </p>

            <div className="flex flex-wrap gap-3">
              {budgets.map((budget) => (
                <button suppressHydrationWarning
                  key={budget}
                  type="button"
                  onClick={() => setSelectedBudget(budget)}
                  className={`px-5 py-2.5 rounded-full border text-[15px] transition-all ${
                    selectedBudget === budget
                      ? "bg-[#2B95FF] text-white border-[#2B95FF]"
                      : "border-gray-200 text-[#444] hover:border-[#2B95FF]"
                  }`}
                >
                  {budget}
                </button>
              ))}
            </div>
          </div>

          {/* Submit */}
          <button suppressHydrationWarning
            type="submit"
            className="mt-12 bg-[#2B95FF] hover:bg-[#1D83E8] text-white font-medium px-10 py-4 rounded-md transition-colors"
          >
            Send Request
          </button>
        </form>
      </Container>
    </section>
  );
}