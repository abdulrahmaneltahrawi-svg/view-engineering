import { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-maroon text-white fixed top-0 inset-x-0 z-50 shadow-md w-full">
      <div className="bg-black/20 border-b border-white/10 text-sm hidden md:block">
        <div className="max-w-350 mx-auto px-5 py-2 flex justify-between items-center">
          <div className="flex gap-5">
            <a href="mailto:info@engveiw.com" className="flex items-center gap-2 text-white hover:text-maroon-dark transition-colors">
              <i className="fas fa-envelope"></i> info@engveiw.com
            </a>
            <a href="tel:+966505888280" className="flex items-center gap-2 text-white hover:text-maroon-dark transition-colors">
              <i className="fas fa-phone"></i> +966 50 588 8280
            </a>
          </div>
          <div className="flex gap-5">
            <a href="#" className="text-white hover:text-maroon-dark transition-colors"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-white hover:text-maroon-dark transition-colors"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-white hover:text-maroon-dark transition-colors"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      <div className="max-w-325 mx-auto px-5 md:px-8 flex justify-between items-center py-3 flex-row-reverse md:flex-row-reverse">
        <div>
          <img src="/assets/imgae/logo-Picsart-AiImageEnhancer.webp" alt="Logo" className="h-15 md:h-18.75 w-auto" />
        </div>

        <button
          id="hamburger-menu"
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>

        <nav id="nav-menu" className={`${menuOpen ? 'flex' : 'hidden'} md:flex`}>
          <ul className="flex flex-col md:flex-row md:items-center gap-4 md:gap-0 text-white font-cairo font-bold text-lg">
            <li className="md:mx-4">
              <a href="#home" className="nav-link hover:no-underline">الرئيسية</a>
            </li>
            <li className="relative group md:mx-4">
              <a href="#about" className="nav-link flex items-center gap-1 hover:no-underline">
                الشركة <img src="/assets/icon/down-arrow (1).webp" className="w-5 h-5 brightness-0 invert" alt="" />
              </a>
              <ul className="hidden group-hover:flex flex-col absolute top-full right-0 bg-maroon-mid min-w-45 rounded-lg shadow-lg overflow-hidden z-50 py-2">
                <li className="px-4 py-2 hover:bg-black/40 transition-colors">
                  <a href="#about" className="text-white text-base flex items-center gap-2">من نحن</a>
                </li>
              </ul>
            </li>
            <li className="md:mx-4">
              <a href="#services" className="nav-link hover:no-underline">خدماتنا</a>
            </li>
            <li className="md:mx-4">
              <a href="#projects" className="nav-link hover:no-underline">مشاريعنا</a>
            </li>
            <li className="md:mx-4">
              <a href="#clients" className="nav-link hover:no-underline">العملاء</a>
            </li>
            <li className="relative group md:mx-4">
              <a href="#contact" className="nav-link flex items-center gap-1 hover:no-underline">
                تواصل معنا <img src="/assets/icon/down-arrow (1).webp" className="w-5 h-5 brightness-0 invert" alt="" />
              </a>
              <ul className="hidden group-hover:flex flex-col absolute top-full right-0 bg-maroon-mid min-w-50 rounded-lg shadow-lg overflow-hidden z-50 py-2">
                <li className="px-4 py-2 hover:bg-black/40 transition-colors">
                  <a href="tel:+966505888280" className="text-white text-base flex items-center gap-2">
                    <img src="/assets/icon/call.webp" className="w-5 h-5 brightness-0 invert" alt="Phone" />+966 50 588 8280
                  </a>
                </li>
                <li className="px-4 py-2 hover:bg-black/40 transition-colors">
                  <a href="tel:+966542399681" className="text-white text-base flex items-center gap-2">
                    <img src="/assets/icon/call.webp" className="w-5 h-5 brightness-0 invert" alt="Phone" />+966 54 239 9681
                  </a>
                </li>
                <li className="px-4 py-2 hover:bg-black/40 transition-colors">
                  <a href="mailto:info@engveiw.com" className="text-white text-base flex items-center gap-2">
                    <img src="/assets/icon/email.webp" className="w-5 h-5 brightness-0 invert" alt="Email" />info@engveiw.com
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header