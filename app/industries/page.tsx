import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import OurIndustries from "@/components/industries/OurIndustries";
import Contact from "@/components/contact/contact";

export const metadata = {
  title: "Industries | Seravion Technologies",
  description:
    "From SaaS and healthcare to fintech and edtech — explore the industries we design and build digital products for.",
};

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <OurIndustries />
      <Contact />
      <Footer />
    </>
  );
}
