const industries = [
  {
    name: 'Healthcare',
    description:
      'Healthcare software development, telemedicine platforms, patient monitoring solutions, EHR systems, wearable health technology, and more.',
    image: '/industries/healthcare.jpg',
    accent: '#EF4444',
  },
  {
    name: 'Entertainment',
    description:
      'Streaming platform development, VR/AR solutions, social media platforms, digital entertainment applications, and more.',
    image: '/industries/entertainment.jpg',
    accent: '#DB2777',
  },
  {
    name: 'Real Estate',
    description:
      'Property management software, virtual property tours, real estate analytics, listing platforms, CRM solutions, and more.',
    image: '/industries/real-estate.jpg',
    accent: '#1863BA',
  },
  {
    name: 'E-commerce',
    description:
      'E-commerce platform development, CRM solutions, supply chain systems, payment gateway integration, and more.',
    image: '/industries/ecommerce.jpg',
    accent: '#F59E0B',
  },
  {
    name: 'Banking & Finance',
    description:
      'Fintech application development, blockchain solutions, digital banking applications, tax management software, and more.',
    image: '/industries/banking.jpg',
    accent: '#10B981',
  },
  {
    name: 'Travel & Hospitality',
    description:
      'Travel booking platforms, hotel management systems, itinerary solutions, tourism applications, and more.',
    image: '/industries/travel.jpg',
    accent: '#00B2FE',
  },
  {
    name: 'Manufacturing',
    description:
      'CAD/CAM software development, MRP solutions, manufacturing management systems, predictive maintenance, and more.',
    image: '/industries/manufacturing.jpg',
    accent: '#7C3AED',
  },
  {
    name: 'Logistics',
    description:
      'WMS and TMS solutions, fleet management systems, ERP platforms, supply chain solutions, and more.',
    image: '/industries/logistics.jpg',
    accent: '#EA580C',
  },
];

export default function IndustriesWeServe() {
  return (
    <section className="relative py-20 md:py-24" style={{ background: 'var(--background)' }}>
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-4xl font-800 md:text-5xl" style={{ color: 'var(--text-primary)' }}>
            <span className="services-title-accent">Industries</span> We Serve
          </h2>
          <p className="mt-4 text-base leading-7 md:text-lg" style={{ color: 'var(--text-secondary)' }}>
            We deliver industry-specific solutions tailored to your business needs, combining domain expertise with the right technology to support growth and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {industries.map((industry) => (
            <article
              key={industry.name}
              className="group relative h-[340px] overflow-hidden rounded-[28px] shadow-lg transition-transform duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={industry.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(180deg, rgba(11,37,69,0.05) 20%, rgba(11,37,69,0.88) 100%)',
                }}
              />
              <div
                className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
                style={{ background: industry.accent }}
              />
              <div className="absolute inset-x-0 bottom-0 translate-y-1 p-5 text-white transition-transform duration-500 ease-out group-hover:translate-y-0">
                <h3 className="text-xl font-800">{industry.name}</h3>
                <p className="mt-2 line-clamp-4 text-sm leading-6 text-white/85">{industry.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
