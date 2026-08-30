import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Search, 
  MapPin, 
  Filter, 
  Stethoscope, 
  Pill, 
  Building2,
  Clock,
  Star,
  Phone
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import AnimatedSection from './AnimatedSection'

const SearchSection = () => {
  const [activeTab, setActiveTab] = useState('medecins')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')

  const tabs = [
    { id: 'medecins', label: 'Médecins', icon: Stethoscope },
    { id: 'pharmacies', label: 'Pharmacies', icon: Pill },
    { id: 'etablissements', label: 'Établissements', icon: Building2 }
  ]

  const mockResults = {
    medecins: [
      {
        name: "Dr. Marie Dubois",
        specialty: "Médecin généraliste",
        location: "Fort-de-France",
        rating: 4.8,
        phone: "0596 XX XX XX",
        available: true,
        distance: "2.3 km"
      },
      {
        name: "Dr. Jean-Pierre Martin",
        specialty: "Cardiologue",
        location: "Schoelcher",
        rating: 4.9,
        phone: "0596 XX XX XX",
        available: false,
        distance: "5.1 km"
      },
      {
        name: "Dr. Sophie Leroy",
        specialty: "Pédiatre",
        location: "Le Lamentin",
        rating: 4.7,
        phone: "0596 XX XX XX",
        available: true,
        distance: "8.2 km"
      }
    ],
    pharmacies: [
      {
        name: "Pharmacie du Centre",
        location: "Fort-de-France",
        rating: 4.6,
        phone: "0596 XX XX XX",
        available: true,
        distance: "1.2 km",
        garde: false
      },
      {
        name: "Pharmacie de Garde Bellevue",
        location: "Fort-de-France",
        rating: 4.5,
        phone: "0596 XX XX XX",
        available: true,
        distance: "3.4 km",
        garde: true
      }
    ],
    etablissements: [
      {
        name: "CHU de Martinique",
        type: "Hôpital public",
        location: "Fort-de-France",
        rating: 4.3,
        phone: "0596 XX XX XX",
        available: true,
        distance: "4.1 km"
      },
      {
        name: "Clinique Sainte-Marie",
        type: "Clinique privée",
        location: "Fort-de-France",
        rating: 4.7,
        phone: "0596 XX XX XX",
        available: true,
        distance: "2.8 km"
      }
    ]
  }

  const handleSearch = () => {
    // Logique de recherche
    console.log('Recherche:', { query: searchQuery, location: selectedLocation, type: activeTab })
  }

  return (
    <section id="annuaire" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Trouvez votre professionnel de santé
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recherchez parmi plus de 500 professionnels de santé en Martinique
          </p>
        </AnimatedSection>

        {/* Onglets de recherche */}
        <AnimatedSection delay={0.2} className="mb-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {tabs.map((tab) => {
              const IconComponent = tab.icon
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-caribbean-blue text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{tab.label}</span>
                </motion.button>
              )
            })}
          </div>
        </AnimatedSection>

        {/* Barre de recherche avancée */}
        <AnimatedSection delay={0.4} className="mb-12">
          <Card className="max-w-4xl mx-auto shadow-xl border-0">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-1">
                  <Input
                    type="text"
                    placeholder={`Rechercher ${activeTab === 'medecins' ? 'un médecin' : activeTab === 'pharmacies' ? 'une pharmacie' : 'un établissement'}...`}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="text-lg border-gray-300 focus:border-caribbean-blue"
                  />
                </div>
                <div className="md:col-span-1">
                  <Input
                    type="text"
                    placeholder="Ville ou quartier..."
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="text-lg border-gray-300 focus:border-caribbean-blue"
                  />
                </div>
                <div className="md:col-span-1 flex gap-2">
                  <Button 
                    onClick={handleSearch}
                    className="flex-1 bg-caribbean-blue hover:bg-blue-700 text-white text-lg py-3"
                  >
                    <Search className="w-5 h-5 mr-2" />
                    Rechercher
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-caribbean-blue text-caribbean-blue hover:bg-caribbean-blue hover:text-white"
                  >
                    <Filter className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Résultats de recherche */}
        <AnimatedSection delay={0.6}>
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Résultats de recherche
            </h3>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {mockResults[activeTab]?.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-lg font-bold text-gray-800">
                            {result.name}
                          </CardTitle>
                          {result.garde && (
                            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-medium">
                              DE GARDE
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600">
                          {result.specialty || result.type}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center text-gray-600">
                            <MapPin className="w-4 h-4 mr-2 text-caribbean-blue" />
                            <span className="text-sm">{result.location} • {result.distance}</span>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-400 mr-1" />
                              <span className="text-sm font-medium">{result.rating}</span>
                            </div>
                            <div className={`flex items-center text-sm ${result.available ? 'text-green-600' : 'text-red-600'}`}>
                              <Clock className="w-4 h-4 mr-1" />
                              {result.available ? 'Ouvert' : 'Fermé'}
                            </div>
                          </div>
                          
                          <div className="flex gap-2 pt-2">
                            <Button 
                              size="sm" 
                              className="flex-1 bg-caribbean-blue hover:bg-blue-700 text-white"
                            >
                              <Phone className="w-4 h-4 mr-1" />
                              Appeler
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="flex-1 border-caribbean-blue text-caribbean-blue hover:bg-caribbean-blue hover:text-white"
                            >
                              <MapPin className="w-4 h-4 mr-1" />
                              Itinéraire
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default SearchSection

