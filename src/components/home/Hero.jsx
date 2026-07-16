function Hero() {
  const slides = [
    { id: 1, bg: '/assets/index/hero1.webp' },
    { id: 2, bg: '/assets/index/hero2.webp' },
    { id: 3, bg: '/assets/index/hero3.webp' },
    { id: 4, bg: '/assets/index/hero4.webp' },
  ]
  return (
    <section id="home" className="hero-section relative w-full h-screen overflow-hidden mt-30">
      {slides.map((slide) => (
        <div
          key={slide.id}
          className="slide"
          style={{ backgroundImage: `url('${slide.bg}')` }}
        />
      ))}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-5">
        <h1 className="font-cairo text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
          فيو للاستشارات الهندسية
        </h1>
        <p className="font-cairo text-lg md:text-2xl mb-10 max-w-2xl text-gray-200">
          خبرة تمتد لأكثر من 10 سنوات في التخطيط الهندسي والتصميم المعماري والإشراف الفني
        </p>
        <a
          href="#projects"
          className="inline-flex items-center gap-3 px-10 py-4 bg-maroon text-white rounded-full text-xl font-bold font-cairo shadow-lg hover:bg-maroon-dark hover:-translate-y-1 hover:scale-105 transition-all duration-300"
        >
          <i className="fas fa-arrow-down"></i> اكتشف أعمالنا
        </a>
      </div>
    </section>
  )

}

export default Hero