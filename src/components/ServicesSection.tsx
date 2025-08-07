import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cigarette, Wine, Brain, Heart, Clock, Shield } from "lucide-react";
import laserDevice from "@/assets/laser-device.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: Cigarette,
      title: "Arrêt du tabac",
      description: "Libérez-vous définitivement de la dépendance au tabac en une seule séance",
      features: ["Méthode sans douleur", "Résultats immédiats", "Sans substituts nicotiniques"]
    },
    {
      icon: Wine,
      title: "Arrêt de l'alcool",
      description: "Retrouvez le contrôle et éliminez l'envie de consommer de l'alcool",
      features: ["Approche douce", "Accompagnement personnalisé", "Suivi post-traitement"]
    }
  ];

  const benefits = [
    {
      icon: Brain,
      title: "Action sur le système nerveux",
      description: "Le laser stimule la production d'endorphines naturelles"
    },
    {
      icon: Heart,
      title: "Amélioration immédiate",
      description: "Bénéfices sur la santé cardiovasculaire dès les premières heures"
    },
    {
      icon: Clock,
      title: "Rapide et efficace",
      description: "Une seule séance d'une heure pour des résultats durables"
    },
    {
      icon: Shield,
      title: "100% sécurisé",
      description: "Méthode approuvée et sans effets secondaires"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nos thérapies laser
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une approche révolutionnaire pour vous libérer des addictions, 
            basée sur la stimulation de points d'acupuncture par laser doux.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="border-border shadow-soft hover:shadow-glow transition-all duration-300 bg-gradient-card">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Comment fonctionne la thérapie laser ?
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="space-y-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <benefit.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-soft">
              <img 
                src={laserDevice} 
                alt="Dispositif de thérapie laser" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-soft">
              <p className="text-sm font-medium text-foreground">Technologie de pointe</p>
              <p className="text-xs text-muted-foreground">Laser médical certifié</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;