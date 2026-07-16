function Whatsapp() {
  return (
    <a
      href="https://wa.me/966542399681"
      target="_blank"
      className="fixed bottom-5 right-5 w-15 h-15 bg-[#25d366] rounded-full flex items-center justify-center z-50 hover:bg-maroon transition-colors duration-300 shadow-lg"
    >
      <img
        src="/assets/icon/whatsapp.webp"
        loading="lazy"
        alt="WhatsApp"
        width="55"
        height="55"
        className="w-13.75 h-13.75 brightness-0 invert"
      />
    </a>
  )
}

export default Whatsapp