import { ShieldCheck, Award, BadgeCheck, Star } from "lucide-react";

const certifications = [
  { icon: ShieldCheck, label: "Verified Business" },
  { icon: Award, label: "Quality Assured" },
  { icon: BadgeCheck, label: "Licensed & Insured" },
  { icon: Star, label: "Top Rated Service" },
];

const Footer = () => (
  <footer className="py-10 bg-secondary text-secondary-foreground/50 border-t border-secondary-foreground/10">
    <div className="container">
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-8">
        {certifications.map((c) => (
          <div key={c.label} className="flex items-center gap-2 text-secondary-foreground/70">
            <c.icon className="w-5 h-5 text-primary" />
            <span className="text-xs md:text-sm font-medium">{c.label}</span>
          </div>
        ))}
      </div>
      <div className="text-center">
        <p className="text-2xl font-heading font-extrabold text-primary mb-2">KESO</p>
        <p className="text-sm">Services Beyond Your Expectations</p>
        <p className="text-xs mt-4">© {new Date().getFullYear()} KESO Cleaners & Catering Services. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
