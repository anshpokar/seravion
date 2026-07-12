import { notFound } from "next/navigation";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Contact from "@/components/contact/contact";
import IndustryDetail from "@/components/industries/IndustryDetail";
import { getIndustryBySlug, industriesData } from "@/lib/industryData";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industriesData.map((ind) => ({ slug: ind.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return { title: "Industry Not Found | Seravion" };
  return {
    title: `${industry.name} | Seravion Technologies`,
    description: `Explore how Seravion designs and builds digital products for the ${industry.name} industry.`,
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  return (
    <>
      <Navbar />
      <IndustryDetail industry={industry} />
      <Contact />
      <Footer />
    </>
  );
}
