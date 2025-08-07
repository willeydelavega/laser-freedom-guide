import { Button } from "@/components/ui/enhanced-button";
import { CheckCircle, Clock, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-therapy.jpg";

const HeroSection = () => {
  const scrollToAppointment = () => {
    const element = document.getElementById('appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-muted to-secondary/20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Arrêtez de fumer
                <span className="block text-primary">en une séance</span>
                <span className="block text-accent">avec la thérapie laser</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Une méthode révolutionnaire, sans douleur et naturelle pour vous libérer 
                définitivement du tabac et de l'alcool. Résultats immédiats garantis.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="xl"
                onClick={scrollToAppointment}
                className="shadow-glow"
              >
                Prendre rendez-vous
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                En savoir plus
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle className="h-8 w-8 text-success" />
                </div>
                <p className="text-2xl font-bold text-foreground">98%</p>
                <p className="text-sm text-muted-foreground">Taux de réussite</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="h-8 w-8 text-accent" />
                </div>
                <p className="text-2xl font-bold text-foreground">1h</p>
                <p className="text-sm text-muted-foreground">Durée séance</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <p className="text-2xl font-bold text-foreground">5000+</p>
                <p className="text-sm text-muted-foreground">Patients traités</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-8 w-8 text-success" />
                </div>
                <p className="text-2xl font-bold text-foreground">15</p>
                <p className="text-sm text-muted-foreground">Ans d'expérience</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img 
                src={heroImage} 
                alt="Thérapie laser anti-tabac" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-soft border border-border">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Méthode 100% naturelle</p>
                  <p className="text-sm text-muted-foreground">Sans effets secondaires</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;