import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Contact from "@/components/contact/contact";
import OurBlogs from "@/components/blogs/OurBlogs";

export const metadata = {
  title: "Blogs | Seravion Technologies",
  description:
    "Expert articles on design, development, AI, SaaS, and digital experience from the Seravion team.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <OurBlogs />
      <Contact />
      <Footer />
    </>
  );
}
