function Services() {
  const servicesList = [
    {
      icon: '/assets/icon/prototype.webp',
      title: 'التخطيط الهندسي',
      alt: 'Engineering',
    },
    {
      icon: '/assets/icon/tool-outline.webp',
      title: 'التصميم المعماري',
      alt: 'Architecture',
    },
    {
      icon: '/assets/icon/support.webp',
      title: 'الإشراف الفني',
      alt: 'Supervision',
    },
    {
      icon: '/assets/icon/interior-design.webp',
      title: 'التصميم الداخلي',
      alt: 'Interior',
    },
  ]

  return (
    <section className="py-20 px-5 text-center" id="services">
      <h2 className="section-heading font-cairo text-4xl font-bold text-maroon text-center mb-16">خدماتنا</h2>

      <div className="flex flex-wrap justify-center gap-6 px-2 pb-4 max-w-7xl mx-auto">
        {servicesList.map((service, index) => (
          <div
            key={index}
            className="flex-none w-65 md:flex-1 border border-gray-200 rounded-2xl py-12 md:py-20 px-5 min-h-87.5 md:min-h-120 text-center bg-white flex flex-col justify-center items-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border-b-4 border-b-gold"
          >
            <div className="w-24 h-24 rounded-full bg-gray-50 border-2 border-maroon flex items-center justify-center mb-5">
              <img
                src={service.icon}
                loading="lazy"
                alt={service.alt}
                width="56"
                height="56"
                className="w-14 h-14 object-contain"
              />
            </div>
            <h3 className="font-cairo font-bold text-xl mb-5 text-gray-800">{service.title}</h3>
            <a href="#details" className="text-maroon font-bold hover:text-maroon-dark transition-colors">
              تفاصيل الخدمة ←
            </a>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="#details"
          className="inline-flex items-center gap-3 px-11 py-4 bg-maroon text-white rounded-full text-xl font-bold font-cairo shadow-lg hover:bg-maroon-dark hover:-translate-y-1 hover:scale-105 transition-all duration-300"
        >
          عرض كافة الخدمات <i className="fas fa-arrow-left"></i>
        </a>
      </div>
    </section>
  )
}

export default Services