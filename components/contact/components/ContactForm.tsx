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
        <p className="text-[#666] mb-5">I'm interested in...</p>

        <div className="flex flex-wrap gap-3 mb-16">
          {services.map((service) => (
            <button
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
        <form className="max-w-[760px]">
          <div className="space-y-10">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border-b border-gray-200 pb-4 outline-none placeholder:text-gray-400"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border-b border-gray-200 pb-4 outline-none placeholder:text-gray-400"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border-b border-gray-200 pb-4 outline-none placeholder:text-gray-400"
            />

            <textarea
              rows={1}
              placeholder="Tell us about your project"
              className="w-full resize-none border-b border-gray-200 pb-4 outline-none placeholder:text-gray-400"
            />
          </div>

          {/* Budget */}
          <div className="mt-14">
            <p className="font-medium text-[#444] mb-5">
              Project Budget
            </p>

            <div className="flex flex-wrap gap-3">
              {budgets.map((budget) => (
                <button
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
          <button
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