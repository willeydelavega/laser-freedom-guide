import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cigarette, Wine, Brain, Heart, Clock, Shield } from "lucide-react";
import laserDevice from "@/assets/laser-device.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: Cigarette,
      title: "Pack « Libéré, respiré »",
      description: "Sevrage tabac, cannabis, et cigarette électronique",
      features: ["Méthode sans douleur", "Garantie séance supplémentaire", "Résultats dès la première séance"]
    },
    {
      icon: Wine,
      title: "Pack « Détox »",
      description: "Sevrage sucre et satiété",
      features: ["Approche naturelle", "Équilibre alimentaire", "Réduction des envies"]
    },
    {
      icon: Brain,
      title: "Pack « Soyons zen »", 
      description: "Traitement de l'insomnie et gestion du stress/anxiété",
      features: ["Bien-être mental", "Nuits apaisées", "Réduction du stress quotidien"]
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
            Pourquoi Choisir Notre Méthode ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une approche révolutionnaire pour vous libérer des addictions, 
            basée sur la stimulation de points spécifiques par laser doux.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
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
              Comment ça marche ?
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2 text-lg">Consultation initiale</h4>
                <p className="text-muted-foreground">Une consultation personnalisée pour comprendre vos besoins et définir une approche adaptée à votre situation.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2 text-lg">Stimulation laser</h4>
                <p className="text-muted-foreground">À l'aide d'un laser doux et indolore, nous stimulons des points spécifiques sur votre corps pour favoriser l'équilibre.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2 text-lg">Suivi personnalisé</h4>
                <p className="text-muted-foreground">Un accompagnement avec un suivi adapté pour garantir votre succès et un changement durable.</p>
              </div>
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