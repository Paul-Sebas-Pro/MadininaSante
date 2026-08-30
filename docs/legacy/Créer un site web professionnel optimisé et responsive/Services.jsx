import { motion } from 'framer-motion'
import { 
  Stethoscope, 
  Pill, 
  MapPin, 
  Clock, 
  Phone, 
  Heart,
  Users,
  Shield,
  Search
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Annuaire médical",
      description: "Trouvez rapidement des médecins, spécialistes et professionnels de santé près de chez vous.",
      features: ["Recherche par spécialité", "Géolocalisation", "Horaires d'ouverture", "Coordonnées complètes"],
      color: "text-caribbean-blue",
      bgColor: "bg-blue-50"
    },
    {
      icon: Pill,
      title: "Pharmacies de garde",
      description: "Localisez en temps réel les pharmacies ouvertes et de garde en Martinique.",
      features: ["Temps réel", "Pharmacies de nuit", "Itinéraires", "Horaires de garde"],
      color: "text-tropical-green",
      bgColor: "bg-green-50"
    },
    {
      icon: Phone,
      title: "Urgences médicales",
      description: "Accès rapide aux numéros d'urgence et services médicaux d'urgence.",
      features: ["SAMU 15", "Pompiers 18", "SOS Médecins", "Hôpitaux d'urgence"],
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: MapPin,
      title: "Géolocalisation",
      description: "Trouvez les professionnels de santé les plus proches de votre position.",
      features: ["Localisation GPS", "Calcul d'itinéraires", "Distance en temps réel", "Navigation"],
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Heart,
      title: "Conseils santé",
      description: "Informations et conseils de santé spécifiques à la Martinique.",
      features: ["Prévention tropicale", "Conseils saisonniers", "Santé voyage", "Alertes sanitaires"],
      color: "text-pink-600",
      bgColor: "bg-pink-50"
    },
    {
      icon: Shield,
      title: "Informations fiables",
      description: "Données vérifiées et mises à jour régulièrement par nos équipes.",
      features: ["Sources officielles", "Mise à jour quotidienne", "Données vérifiées", "Informations certifiées"],
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nos services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Madinina Santé vous accompagne dans tous vos besoins de santé en Martinique 
            avec des services complets et fiables.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto rounded-full ${service.bgColor} flex items-center justify-center mb-4`}>
                      <IconComponent className={`w-8 h-8 ${service.color}`} />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className={`w-2 h-2 rounded-full ${service.color.replace('text-', 'bg-')} mr-3`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${service.color.replace('text-', 'bg-')} hover:opacity-90 text-white`}
                      variant="default"
                    >
                      <Search className="w-4 h-4 mr-2" />
                      Accéder
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Section CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Besoin d'aide pour trouver un professionnel de santé ?
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Notre équipe est là pour vous accompagner dans vos recherches
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-caribbean-blue hover:bg-blue-700 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Nous contacter
              </Button>
              <Button size="lg" variant="outline" className="border-caribbean-blue text-caribbean-blue hover:bg-caribbean-blue hover:text-white">
                <Users className="w-5 h-5 mr-2" />
                Guide d'utilisation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services

