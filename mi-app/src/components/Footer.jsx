import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6"

const links = [
  "FAQ", "Centro de ayuda", "Cuenta", "Centro multimedia",
  "Relaciones con inversionistas", "Empleos", "Formas de ver", "Términos de uso",
  "Privacidad", "Preferencias de cookies", "Información corporativa", "Contáctanos",
  "Prueba de velocidad", "Avisos legales", "Solo en Netflix",
]

const socials = [FaFacebookF, FaInstagram, FaXTwitter, FaYoutube]

const Footer = () => {
  return (
    <footer className="bg-[#141414] text-gray text-sm px-10 py-12 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">

        {/* Redes sociales */}
        <div className="flex gap-6 text-white">
          {socials.map((Icon, i) => (
            <a key={i} href="#" className="hover:text-gray transition-colors">
              <Icon size={20} />
            </a>
          ))}
        </div>

       
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {links.map((link) => (
            <li key={link}>
              <a href="#" className="hover:underline cursor-pointer">{link}</a>
            </li>
          ))}
        </ul>

       
        <button className="w-fit border border-gray px-4 py-1 rounded text-white cursor-pointer hover:bg-white/10 transition-colors">
          🌐 Español
        </button>

        <p>Netflix República Dominicana</p>
      </div>
    </footer>
  )
}

export default Footer
