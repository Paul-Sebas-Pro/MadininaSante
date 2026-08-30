import { Search, MapPin, Clock, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { motion } from 'framer-motion'
import martiniqueBg from '../assets/martinique-beach.jpg'

const Hero = () => {
  return (
    <section 
      id="accueil" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 119, 182, 0.8), rgba(46, 204, 113, 0.8)), url(${martiniqueBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Votre santé en
            <span className="text-sun-yellow block">Martinique</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            Trouvez facilement des professionnels de santé, pharmacies de garde 
            et services médicaux partout en Martinique
          </p>

          {/* Barre de recherche */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto mb-12"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Rechercher un médecin, pharmacie, spécialité..."
                  className="text-gray-800 text-lg border-0 focus:ring-2 focus:ring-caribbean-blue"
                />
              </div>
              <Button className="bg-caribbean-blue hover:bg-blue-700 text-white px-8 py-3 text-lg">
                <Search className="w-5 h-5 mr-2" />
                Rechercher
              </Button>
            </div>
          </motion.div>

          {/* Statistiques */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-sun-yellow mb-2">500+</div>
              <div className="text-sm md:text-base opacity-90">Professionnels</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-sun-yellow mb-2">50+</div>
              <div className="text-sm md:text-base opacity-90">Pharmacies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-sun-yellow mb-2">24/7</div>
              <div className="text-sm md:text-base opacity-90">Disponible</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-sun-yellow mb-2">100%</div>
              <div className="text-sm md:text-base opacity-90">Gratuit</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Boutons d'action rapide */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col md:flex-row gap-4 justify-center mt-12"
        >
          <Button 
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg"
          >
            <Clock className="w-5 h-5 mr-2" />
            Pharmacies de garde
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-caribbean-blue px-8 py-4 text-lg"
          >
            <MapPin className="w-5 h-5 mr-2" />
            Trouver près de moi
          </Button>
          <Button 
            size="lg" 
            className="bg-tropical-green hover:bg-green-600 text-white px-8 py-4 text-lg"
          >
            <Users className="w-5 h-5 mr-2" />
            Annuaire médical
          </Button>
        </motion.div>
      </div>

      {/* Indicateur de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero

