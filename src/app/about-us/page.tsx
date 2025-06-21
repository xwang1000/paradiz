import { PageHeading, PageSubtitle, SectionHeading, BodyText } from '@/components/Typography';

export default function AboutUs() {
  return (
    <div className="space-y-16">
      {/* Welcome Section */}
      <section className="bg-teal text-creme py-20 text-center">
        <PageHeading className="text-creme">About Us</PageHeading>
        <PageSubtitle className="text-creme">A modern haven for hookah and tea lovers</PageSubtitle>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <SectionHeading>Our Story</SectionHeading>
        <BodyText className="mb-6">
          Paradiz Teahouse &amp; Hookah Lounge is a contemporary retreat where tradition meets modern comfort. We offer a unique blend of authentic hookah experiences and premium tea selections in a luxurious setting.
        </BodyText>
        <BodyText className="mb-6">
          Our mission is to create a welcoming space where guests can relax, socialize, and enjoy the finest flavors in an elegant atmosphere.
        </BodyText>
      </section>
    </div>
  );
} 