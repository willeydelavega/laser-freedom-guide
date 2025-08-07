import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marie Dubois",
      age: "42 ans",
      addiction: "Tabac - 20 ans",
      rating: 5,
      comment: "Incroyable ! Après 20 ans de tabagisme et de nombreuses tentatives d'arrêt, j'ai réussi en une seule séance. Cela fait maintenant 8 mois et je n'ai aucune envie de reprendre.",
      result: "Arrêt définitif"
    },
    {
      name: "Pierre Martin",
      age: "38 ans", 
      addiction: "Alcool - 15 ans",
      rating: 5,
      comment: "J'étais sceptique au début, mais le résultat est là. Plus aucune envie de boire depuis ma séance il y a 6 mois. Ma vie a complètement changé.",
      result: "Abstinence totale"
    },
    {
      name: "Sophie Leroy",
      age: "29 ans",
      addiction: "Tabac - 10 ans",
      rating: 5,
      comment: "La thérapie laser a été un véritable déclic. Aucune douleur, aucun effet secondaire. Je recommande vivement cette méthode révolutionnaire.",
      result: "Non-fumeuse"
    },
    {
      name: "Jean Moreau",
      age: "55 ans",
      addiction: "Tabac + Alcool",
      rating: 5,
      comment: "Double addiction traitée en deux séances. L'équipe est professionnelle et rassurante. Merci pour m'avoir redonné ma santé et ma liberté.",
      result: "Sevrage complet"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Témoignages de nos patients
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les histoires de réussite de nos patients qui ont retrouvé leur liberté 
            grâce à la thérapie laser.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border shadow-soft hover:shadow-glow transition-all duration-300 bg-card">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Quote className="h-8 w-8 text-primary/30" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-foreground mb-6 italic">
                  "{testimonial.comment}"
                </blockquote>
                
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.age}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.addiction}</p>
                    </div>
                    <div className="text-right">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-success/10 border border-success/20">
                        <span className="text-sm font-medium text-success">{testimonial.result}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-card rounded-2xl p-8 shadow-soft">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">98%</p>
              <p className="text-sm text-muted-foreground">Taux de réussite</p>
            </div>
            <div className="w-px h-16 bg-border"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-success">5000+</p>
              <p className="text-sm text-muted-foreground">Patients satisfaits</p>
            </div>
            <div className="w-px h-16 bg-border"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">4.9/5</p>
              <p className="text-sm text-muted-foreground">Note moyenne</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;