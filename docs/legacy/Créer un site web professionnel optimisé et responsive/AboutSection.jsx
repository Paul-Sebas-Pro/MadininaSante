import { motion } from 'framer-motion'
import { 
  Heart, 
  Users, 
  Shield, 
  Award,
  MapPin,
  Clock,
  CheckCircle
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import AnimatedSection from './AnimatedSection'
import doctorImage from '../assets/doctor-consultation.jpg'
import pharmacistImage from '../assets/pharmacist-professional.jpg'
import martiniqueBg from '../assets/martinique-nature.webp'

const AboutSection = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Professionnels de santé", color: "text-caribbean-blue" },
    { icon: MapPin, number: "50+", label: "Pharmacies partenaires", color: "text-tropical-green" },
    { icon: Clock, number: "24/7", label: "Service disponible", color: "text-orange-500" },
    { icon: Heart, number: "10K+", label: "Utilisateurs satisfaits", color: "text-red-500" }
  ]

  const features = [
    {
      icon: Shield,
      title: "Données vérifiées",
      description: "Toutes nos informations sont vérifiées et mises à jour quotidiennement par notre équipe."
    },
    {
      icon: Heart,
      title: "Service gratuit",
      description: "Madinina Santé est entièrement gratuit pour tous les habitants et visiteurs de la Martinique."
    },
    {
      icon: Award,
      title: "Qualité certifiée",
      description: "Nous travaillons uniquement avec des professionnels de santé agréés et reconnus."
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="a-propos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            À propos de Madinina Santé
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Votre plateforme de confiance pour accéder aux soins de santé en Martinique. 
            Nous connectons les patients aux professionnels de santé avec simplicité et efficacité.
          </p>
        </AnimatedSection>

        {/* Statistiques */}
        <AnimatedSection delay={0.2} className="mb-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center"
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-6">
                      <div className={`w-16 h-16 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-4`}>
                        <IconComponent className={`w-8 h-8 ${stat.color}`} />
                      </div>
                      <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                        {stat.number}
                      </div>
                      <div className="text-gray-600 font-medium">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatedSection>

        {/* Section principale avec images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Contenu texte */}
          <AnimatedSection direction="left" className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Notre mission
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Madinina Santé a été créé pour répondre aux défis spécifiques de l'accès aux soins 
                en Martinique. Notre plateforme centralise toutes les informations nécessaires pour 
                trouver rapidement un professionnel de santé, une pharmacie de garde ou un service 
                médical d'urgence.
              </p>
              <div className="space-y-4">
                {[
                  "Faciliter l'accès aux soins pour tous",
                  "Centraliser les informations de santé",
                  "Connecter patients et professionnels",
                  "Améliorer la qualité des soins"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-tropical-green" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Images */}
          <AnimatedSection direction="right" className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-2xl shadow-lg"
              >
                <img 
                  src={doctorImage} 
                  alt="Consultation médicale" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Consultations</p>
                  <p className="text-sm opacity-90">Professionnels qualifiés</p>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-2xl shadow-lg mt-8"
              >
                <img 
                  src={pharmacistImage} 
                  alt="Pharmacie professionnelle" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Pharmacies</p>
                  <p className="text-sm opacity-90">Service de garde 24/7</p>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>

        {/* Caractéristiques */}
        <AnimatedSection delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 mx-auto rounded-full bg-caribbean-blue/10 flex items-center justify-center mb-6">
                        <IconComponent className="w-8 h-8 text-caribbean-blue" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-800 mb-4">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </AnimatedSection>

        {/* Section avec background Martinique */}
        <AnimatedSection delay={0.6} className="mt-20">
          <div 
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 119, 182, 0.9), rgba(46, 204, 113, 0.9)), url(${martiniqueBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="px-8 py-16 text-center text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Fait avec ❤️ en Martinique
              </h3>
              <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
                Notre équipe locale connaît les spécificités de la santé en Martinique 
                et s'engage à vous offrir le meilleur service possible.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default AboutSection

