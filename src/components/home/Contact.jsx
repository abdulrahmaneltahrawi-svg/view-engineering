function Contact() {
  return (
    <section
      className="cta-section relative flex items-center justify-center text-center text-white"
      style={{
        height: '70vh',
        minHeight: '400px',
        backgroundImage: "url('/assets/imgae/View-Picsart-AiImageEnhancer.png')",
      }}
      id="details"
    >
      <div className="relative z-10 px-5">
        <h1 className="font-cairo text-4xl md:text-5xl font-bold mb-4">لنعمل سوياً</h1>
        <p className="text-lg md:text-xl mb-6 text-gray-200">أخبرنا بما تبحث عنه، وسنرى كيف يمكننا مساعدتك.</p>
        <a
          href="https://wa.me/966505888280"
          className="inline-block px-8 py-4 border-2 border-white text-white text-lg hover:bg-black/60 hover:border-white/50 hover:scale-110 transition-all duration-300"
        >
          اتصل بنا
        </a>
      </div>
    </section>
  )
}

export default Contact