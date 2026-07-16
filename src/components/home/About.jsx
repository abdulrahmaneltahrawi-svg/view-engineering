function About() {
  return (
    <section className="bg-[#1a1a1a] text-white" id="about">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 md:px-16 py-16 gap-12 max-w-6xl mx-auto">
        <div className="font-cairo text-lg md:text-2xl flex-1">
          <h3 className="text-gold font-semibold text-xl mb-1">من نحن</h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">تعرف علينا</h2>
          <p className="text-gray-300 text-base leading-relaxed mb-8">
            خبرة تمتد لأكثر من 10 سنوات، عملنا في أرقى المشاريع...
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3 bg-maroon text-white rounded-full font-bold hover:bg-maroon-dark transition-colors duration-300"
          >
            المزيد <i className="fas fa-arrow-left text-sm"></i>
          </a>
        </div>

        <div className="relative flex-1 max-w-md w-full">
          <div className="absolute -top-8 -left-8 z-10 p-5 rounded-lg shadow-xl overflow-hidden bg-black">
            <div className=" p-3 rounded text-center text-white font-bold">
              <span className="block text-3xl">10</span>
              <p className="text-sm mt-1">سنوات من الخبرة</p>
            </div>
          </div>
          <img
            src="/assets/imgae/Card.webp"
            loading="lazy"
            alt="About us"
            width="500"
            height="500"
            className="w-full rounded-lg relative z-2 shadow-2xl"
          />
          <div className="dots-pattern absolute -bottom-5 -right-5 w-24 h-24 z-1 opacity-40"></div>
        </div>
      </div>
    </section>
  )
}

export default About