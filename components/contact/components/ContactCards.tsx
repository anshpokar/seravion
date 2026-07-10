"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";

const cards = [
  {
    icon: Mail,
    title: "hello@seraviontechnology.com",
  },
  {
    icon: Phone,
    title: "+91 98565 55212",
  },
  {
    icon: MapPin,
    title: "300 Broadway,\nSan Francisco, CA 94133",
  },
];

export default function ContactCards() {
  return (
    <section className="bg-white pt-14 pb-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={index}
                className="bg-[#1B38D0] h-[230px] p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <Icon
                    size={42}
                    strokeWidth={2.3}
                    className="text-[#B7FF65]"
                  />
                </div>

                <p className="text-white text-[20px] font-medium leading-[1.45] whitespace-pre-line">
                  {card.title}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}