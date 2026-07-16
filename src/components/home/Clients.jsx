function Clients() {
  const clients = [
    { img: '/assets/alhiat/AMANA.webp', alt: 'AMANA' },
    { img: '/assets/alhiat/Balady.webp', alt: 'Balady' },
    { img: '/assets/alhiat/Water.webp', alt: 'Water' },
    { img: '/assets/alhiat/KHEBER.webp', alt: 'KHEBER' },
    { img: '/assets/alhiat/Saudi.webp', alt: 'Saudi' },
  ]

  // مدة كل حركة (صعود + نزول) بالثواني
  const cycleDuration = 1.2
  // فرق التوقيت بين كل شعار واللي بعده
  const staggerGap = 0.4

  return (
    <section className="py-16 text-center" id="clients">
      <h2 className="section-heading font-cairo text-4xl font-bold text-maroon mb-16 inline-block">
        الهيئات المعتمدة
      </h2>

      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-wrap justify-center gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="client-bounce w-44 h-44 rounded-full bg-white shadow flex items-center justify-center mx-auto border-2 border-gray-100 hover:-translate-y-1 transition-transform"
              style={{
                animationDelay: `${index * staggerGap}s`,
                animationDuration: `${clients.length * staggerGap + cycleDuration}s`,
              }}
            >
              <img
                src={client.img}
                loading="lazy"
                alt={client.alt}
                width="80"
                height="80"
                className="max-h-20 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes clientBounce {
          0% { transform: translateY(0); }
          5% { transform: translateY(-24px); }
          10% { transform: translateY(0); }
          100% { transform: translateY(0); }
        }
        .client-bounce {
          animation-name: clientBounce;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
      `}</style>
    </section>
  )
}

export default Clients