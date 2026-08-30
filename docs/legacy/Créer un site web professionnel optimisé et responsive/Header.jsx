import { useState } from 'react'
import { Menu, X, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import logoMadinina from '../assets/logo_madinina_sante.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menuItems = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Annuaire', href: '#annuaire' },
    { name: 'Pharmacies de garde', href: '#pharmacies-garde' },
    { name: 'Urgences', href: '#urgences' },
    { name: 'Conseils santé', href: '#conseils' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Barre d'urgence */}
      <div className="bg-red-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-center items-center text-sm">
          <Phone className="w-4 h-4 mr-2" />
          <span className="font-semibold">Urgences: SAMU 15 • Pompiers 18 • Police 17</span>
        </div>
      </div>

      {/* Navigation principale */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logoMadinina} 
              alt="Madinina Santé" 
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-caribbean-blue">Madinina Santé</h1>
              <p className="text-sm text-gray-600">Votre santé en Martinique</p>
            </div>
          </div>

          {/* Menu desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-caribbean-blue transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
            <Button className="bg-tropical-green hover:bg-green-600 text-white">
              <MapPin className="w-4 h-4 mr-2" />
              Localiser
            </Button>
          </div>

          {/* Bouton menu mobile */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-caribbean-blue transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="bg-tropical-green hover:bg-green-600 text-white w-full mt-4">
                <MapPin className="w-4 h-4 mr-2" />
                Localiser
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

