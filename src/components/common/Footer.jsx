function Footer() {
  return (
    <footer className="bg-maroon text-white py-5">
      <div className="flex flex-wrap flex-row-reverse justify-center items-center gap-6 px-5 md:flex-row">
        <div className="flex items-center gap-2 font-bold text-base font-tajawal rounded-full px-4 py-2 transition-all duration-300 hover:bg-white/10">
          <a href="tel:+966505888280" className="flex items-center gap-2 text-inherit no-underline group">
            <img
              src="/assets/icon/call.webp"
              alt="Phone"
              className="w-10 h-10 object-contain rounded-full p-1 brightness-0 invert group-hover:invert-0 group-hover:sepia group-hover:saturate-200 group-hover:hue-rotate-10 transition-all duration-300"
            />
            <span className="group-hover:text-gold transition-colors duration-300">+966 50 588 8280</span>
          </a>
        </div>

        <div className="flex items-center gap-2 font-bold text-base font-tajawal rounded-full px-4 py-2 transition-all duration-300 hover:bg-white/10">
          <a href="tel:+966542399681" className="flex items-center gap-2 text-inherit no-underline group">
            <img
              src="/assets/icon/call.webp"
              alt="Phone"
              className="w-10 h-10 object-contain rounded-full p-1 brightness-0 invert group-hover:invert-0 group-hover:sepia group-hover:saturate-200 group-hover:hue-rotate-10 transition-all duration-300"
            />
            <span className="group-hover:text-gold transition-colors duration-300">+966 54 239 9681</span>
          </a>
        </div>

        <div className="flex items-center gap-2 font-bold text-base font-tajawal rounded-full px-4 py-2 transition-all duration-300 hover:bg-white/10">
          <a href="mailto:info@engveiw.com" className="flex items-center gap-2 text-inherit no-underline group">
            <img
              src="/assets/icon/email.webp"
              alt="Email"
              className="w-10 h-10 object-contain rounded-full p-1 brightness-0 invert group-hover:invert-0 group-hover:sepia group-hover:saturate-200 group-hover:hue-rotate-10 transition-all duration-300"
            />
            <span className="group-hover:text-gold transition-colors duration-300">info@engveiw.com</span>
          </a>
        </div>

        <div className="flex items-center gap-2 font-bold text-base font-tajawal rounded-full px-4 py-2 transition-all duration-300 hover:bg-white/10">
          <a
            href="https://www.google.com/maps/place/King+Saud+Rd,+Al+Mazruiyah,+Dammam+32414"
            target="_blank"
            className="flex items-center gap-2 text-inherit no-underline group"
          >
            <img
              src="/assets/icon/location.webp"
              alt="Location"
              className="w-10 h-10 object-contain rounded-full p-1 brightness-0 invert shrink-0 group-hover:invert-0 group-hover:sepia group-hover:saturate-200 group-hover:hue-rotate-10d transition-all duration-300"
            />
            <span className="text-sm group-hover:text-gold transition-colors duration-300">
              KING SAUD RD, AL-MAZRUIYAH DIST, DAMMAM 32414, SAUDI ARABIA
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer