import { notFound } from "next/navigation";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Contact from "@/components/contact/contact";
import ServiceDetail from "@/components/services/ServiceDetail";
import { getServiceBySlug, servicesData } from "@/lib/serviceData";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found | Seravion" };
  return {
    title: `${service.title} | Seravion Technologies`,
    description: service.subtitle,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <Navbar />
      <ServiceDetail service={service} />
      <Contact />
      <Footer />
    </>
  );
}
