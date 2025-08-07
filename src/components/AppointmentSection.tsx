import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/enhanced-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, MapPin, Phone, Mail, CheckCircle } from "lucide-react";

const AppointmentSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi d'email
    try {
      // Ici vous pourriez intégrer avec un service d'email comme EmailJS ou une API
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Rendez-vous demandé avec succès !",
        description: "Nous vous contacterons dans les 24h pour confirmer votre rendez-vous.",
      });

      // Réinitialiser le formulaire
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        preferredDate: "",
        preferredTime: "",
        message: ""
      });

    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer ou nous appeler directement.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="appointment" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Prenez rendez-vous dès maintenant
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Libérez-vous de vos addictions en une séance. Notre équipe vous accompagne 
            vers une nouvelle vie sans dépendance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulaire de rendez-vous */}
          <Card className="shadow-glow border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Demande de rendez-vous</CardTitle>
              <CardDescription>
                Remplissez ce formulaire et nous vous contacterons dans les 24h pour confirmer.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Type de thérapie *</Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez votre thérapie" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tabac">Arrêt du tabac</SelectItem>
                      <SelectItem value="alcool">Arrêt de l'alcool</SelectItem>
                      <SelectItem value="both">Tabac + Alcool</SelectItem>
                      <SelectItem value="other">Autre addiction</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="preferredDate">Date souhaitée</Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preferredTime">Heure souhaitée</Label>
                    <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange("preferredTime", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez une heure" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="09:00">09h00</SelectItem>
                        <SelectItem value="10:00">10h00</SelectItem>
                        <SelectItem value="11:00">11h00</SelectItem>
                        <SelectItem value="14:00">14h00</SelectItem>
                        <SelectItem value="15:00">15h00</SelectItem>
                        <SelectItem value="16:00">16h00</SelectItem>
                        <SelectItem value="17:00">17h00</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message (optionnel)</Label>
                  <Textarea
                    id="message"
                    placeholder="Parlez-nous de votre situation, vos questions..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Envoi en cours..." : "Demander un rendez-vous"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Informations pratiques */}
          <div className="space-y-6">
            <Card className="shadow-soft border-border">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Informations pratiques</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Adresse</p>
                    <p className="text-muted-foreground">123 Avenue de la Santé<br />75014 Paris</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Téléphone</p>
                    <p className="text-muted-foreground">01 23 45 67 89</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">contact@laserview.fr</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Horaires</p>
                    <p className="text-muted-foreground">
                      Lun - Ven : 9h00 - 18h00<br />
                      Sam : 9h00 - 16h00<br />
                      Dim : Fermé
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-border bg-gradient-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-success" />
                  <h3 className="text-lg font-semibold text-foreground">Garantie de résultat</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Nous sommes si confiants dans notre méthode que nous offrons une garantie 
                  de satisfaction ou une seconde séance gratuite.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                    <span>Première consultation gratuite</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                    <span>Suivi post-traitement inclus</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                    <span>Paiement sécurisé</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;