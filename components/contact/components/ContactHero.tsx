import Container from "@/components/ui/Container";

export default function ContactHero() {
  return (
    <section className="bg-white pt-32 lg:pt-36">
      <Container>
        {/* Label */}
        <p className="text-[15px] text-[#555555] mb-5">
          Contact Us
        </p>

        {/* Heading */}
        <h1 className="text-[36px] md:text-[52px] lg:text-[64px] font-semibold tracking-[-0.04em] leading-[1.05] text-[#3E3E3E] max-w-[700px]">
          Hey! Tell us all the things
        </h1>
      </Container>
    </section>
  );
}