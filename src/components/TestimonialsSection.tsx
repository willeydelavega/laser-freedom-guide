import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maroua Hamame",
      age: "Client vérifié",
      addiction: "Google Reviews",
      rating: 5,
      comment: "Personnel à l'écoute et professionnel, j'ai effectué une séance et j'ai constaté des résultats dès la première nuit vraiment incroyable je recommande fortement foncez les yeux fermés",
      result: "Résultats immédiats"
    },
    {
      name: "Aurore Gay",
      age: "Client vérifié", 
      addiction: "Google Reviews",
      rating: 5,
      comment: "Je conseille vivement, j'en suis à mon 2nd rdv et je suis ravie du résultat. Merci 🙏",
      result: "Très satisfaite"
    },
    {
      name: "Client satisfait",
      age: "Ancien fumeur",
      addiction: "Tabac - 15 ans",
      rating: 5,
      comment: "Grâce à la thérapie laser, j'ai enfin réussi à arrêter de fumer après de nombreuses tentatives. L'équipe est professionnelle et bienveillante.",
      result: "Arrêt définitif"
    },
    {
      name: "Cliente heureuse",
      age: "35 ans",
      addiction: "Stress chronique",
      rating: 5,
      comment: "Le pack 'Soyons zen' a transformé ma vie. Je dors mieux et je gère beaucoup mieux mon stress au quotidien. Une vraie renaissance !",
      result: "Bien-être retrouvé"
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
              <p className="text-3xl font-bold text-primary">5.0</p>
              <p className="text-sm text-muted-foreground">Note Google</p>
            </div>
            <div className="w-px h-16 bg-border"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-success">37</p>
              <p className="text-sm text-muted-foreground">Avis clients</p>
            </div>
            <div className="w-px h-16 bg-border"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">100%</p>
              <p className="text-sm text-muted-foreground">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;