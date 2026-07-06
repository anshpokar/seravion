import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import OurWork from "@/components/work/OurWork";
import Contact from "@/components/contact/contact";

export const metadata = {
  title: "Our Work | Seravion Technologies",
  description: "Explore our portfolio of projects — web apps, mobile apps, and websites built by Seravion.",
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <OurWork />
      <Contact />
      <Footer />
    </>
  );
}
