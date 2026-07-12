import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Contact from "@/components/contact/contact";
import FaqPage from "@/components/faqs/FaqPage";

export const metadata = {
  title: "FAQs | Seravion Technologies",
  description:
    "Answers to the most common questions about working with Seravion — from project timelines to pricing, data security, and our process.",
};

export default function FaqsRoute() {
  return (
    <>
      <Navbar />
      <FaqPage />
      <Contact />
      <Footer />
    </>
  );
}
