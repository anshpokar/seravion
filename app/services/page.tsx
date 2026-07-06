import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import OurServices from "@/components/services/OurServices";
import Contact from "@/components/contact/contact";

export const metadata = {
  title: "Our Services | Seravion Technologies",
  description: "From idea to market, we've got you covered with AI-enhanced UX/UI design, custom development, brand identity, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <OurServices />
      <Contact />
      <Footer />
    </>
  );
}
