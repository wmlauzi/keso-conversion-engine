const Footer = () => (
  <footer className="py-8 bg-secondary text-secondary-foreground/50 border-t border-secondary-foreground/10">
    <div className="container text-center">
      <p className="text-2xl font-heading font-extrabold text-primary mb-2">KESO</p>
      <p className="text-sm">Services Beyond Your Expectations</p>
      <p className="text-xs mt-4">© {new Date().getFullYear()} KESO Cleaners & Catering Services. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
