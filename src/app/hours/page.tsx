export default function Hours() {
  return (
    <div className="space-y-16">
      {/* Welcome Section */}
      <section className="bg-teal text-creme py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Hours</h1>
        <p className="text-xl text-creme">Visit us during our operating hours</p>
      </section>

      {/* Hours Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="card">
          <h2 className="text-2xl font-bold text-teal mb-6">Operating Hours</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-medium">Monday - Thursday</span>
              <span className="text-gray-600">11:00 AM - 12:00 AM</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Friday - Saturday</span>
              <span className="text-gray-600">11:00 AM - 1:00 AM</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Sunday</span>
              <span className="text-gray-600">11:00 AM - 12:00 AM</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 