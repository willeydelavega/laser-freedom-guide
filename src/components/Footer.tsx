import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Demain J'arrête</h3>
                <p className="text-sm text-background/70">Thérapie Laser</p>
              </div>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Centre spécialisé dans la thérapie laser pour l'arrêt du tabac et de l'alcool. 
              Une méthode révolutionnaire pour retrouver votre liberté en une séance.
            </p>
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors cursor-pointer">
                <Facebook className="h-4 w-4" />
              </div>
              <div className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors cursor-pointer">
                <Instagram className="h-4 w-4" />
              </div>
              <div className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors cursor-pointer">
                <Linkedin className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Nos services</h4>
            <ul className="space-y-2 text-background/80 text-sm">
              <li>
                <a href="#services" className="hover:text-background transition-colors">
                  Pack « Libéré, respiré »
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-background transition-colors">
                  Pack « Détox »
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-background transition-colors">
                  Pack « Soyons zen »
                </a>
              </li>
              <li>
                <a href="#appointment" className="hover:text-background transition-colors">
                  Consultation gratuite
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-3 text-background/80 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>12 Avenue de Verdun<br />93230 Romainville</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>01 48 57 63 22</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@demainjarrete.com</span>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Horaires</h4>
            <div className="space-y-2 text-background/80 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <div>
                  <p>Lun - Ven : 9h00 - 18h00</p>
                  <p>Sam : 9h00 - 16h00</p>
                  <p>Dim : Fermé</p>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <p className="text-xs text-background/60">
                Urgences sur rendez-vous<br />
                Disponible 7j/7
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © 2024 Demain J'arrête. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-background/60 text-sm">
              <a href="#" className="hover:text-background transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-background transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;