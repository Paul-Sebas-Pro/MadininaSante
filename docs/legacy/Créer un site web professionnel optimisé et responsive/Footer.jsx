import { motion } from 'framer-motion'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Heart,
  Shield,
  Clock
} from 'lucide-react'
import logoMadinina from '../assets/logo_madinina_sante.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Annuaire médical", href: "#annuaire" },
        { name: "Pharmacies de garde", href: "#pharmacies-garde" },
        { name: "Urgences", href: "#urgences" },
        { name: "Conseils santé", href: "#conseils" }
      ]
    },
    {
      title: "Informations",
      links: [
        { name: "À propos", href: "#a-propos" },
        { name: "Comment ça marche", href: "#guide" },
        { name: "FAQ", href: "#faq" },
        { name: "Partenaires", href: "#partenaires" }
      ]
    },
    {
      title: "Légal",
      links: [
        { name: "Mentions légales", href: "#mentions" },
        { name: "Politique de confidentialité", href: "#confidentialite" },
        { name: "Conditions d'utilisation", href: "#conditions" },
        { name: "Cookies", href: "#cookies" }
      ]
    }
  ]

  const urgencyNumbers = [
    { name: "SAMU", number: "15", icon: Heart },
    { name: "Pompiers", number: "18", icon: Shield },
    { name: "Police", number: "17", icon: Shield },
    { name: "SOS Médecins", number: "0596 70 33 33", icon: Phone }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Section principale */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Logo et description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={logoMadinina} 
                alt="Madinina Santé" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold text-white">Madinina Santé</h3>
                <p className="text-gray-400 text-sm">Votre santé en Martinique</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Votre plateforme de référence pour trouver des professionnels de santé, 
              pharmacies de garde et services médicaux en Martinique.
            </p>
            
            {/* Réseaux sociaux */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-caribbean-blue transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-caribbean-blue transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-caribbean-blue transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-caribbean-blue transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Liens de navigation */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-caribbean-blue transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Section urgences */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-700"
        >
          <h4 className="text-xl font-semibold mb-6 text-center text-white">
            <Clock className="w-6 h-6 inline mr-2" />
            Numéros d'urgence
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {urgencyNumbers.map((emergency, index) => {
              const IconComponent = emergency.icon
              return (
                <div key={index} className="text-center">
                  <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white font-semibold">{emergency.name}</div>
                  <div className="text-red-400 font-bold text-lg">{emergency.number}</div>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-700"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-5 h-5 text-caribbean-blue" />
              <span className="text-gray-300">Martinique, Antilles françaises</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-5 h-5 text-caribbean-blue" />
              <span className="text-gray-300">+596 XX XX XX XX</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-5 h-5 text-caribbean-blue" />
              <span className="text-gray-300">contact@madinina-sante.fr</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Madinina Santé. Tous droits réservés.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Fait avec <Heart className="w-4 h-4 inline text-red-500" /> en Martinique
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

