export default function AboutUs() {
  return (
    <div className="space-y-16">
      {/* Welcome Section */}
      <section className="bg-teal text-creme py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-xl text-creme">A modern haven for hookah and tea lovers</p>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-teal mb-6">Our Story</h2>
        <p className="text-lg mb-6">
          Paradiz Teahouse &amp; Hookah Lounge is a contemporary retreat where tradition meets modern comfort. We offer a unique blend of authentic hookah experiences and premium tea selections in a luxurious setting.
        </p>
        <p className="text-lg mb-6">
          Our mission is to create a welcoming space where guests can relax, socialize, and enjoy the finest flavors in an elegant atmosphere.
        </p>
      </section>
    </div>
  );
} 