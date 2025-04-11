
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="mb-4">
            <span className="font-display text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              GLOBAL<span className="text-foreground">SUMMIT</span>
            </span>
          </div>
          <p className="text-foreground/70 mb-6">
            Bridging Faith and Future in a global convergence of innovation, spirituality, and technology.
          </p>
          <div className="flex gap-4">
            {/* Social links */}
            <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
              </svg>
            </a>
            <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="font-display text-lg font-medium mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/" className="text-foreground/70 hover:text-primary transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/events" className="text-foreground/70 hover:text-primary transition-colors">Events</Link>
            </li>
            <li>
              <Link to="/schedule" className="text-foreground/70 hover:text-primary transition-colors">Schedule</Link>
            </li>
            <li>
              <Link to="/gallery" className="text-foreground/70 hover:text-primary transition-colors">Gallery</Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-display text-lg font-medium mb-4">Resources</h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">FAQs</a>
            </li>
            <li>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">Speakers</a>
            </li>
            <li>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">Sponsors</a>
            </li>
            <li>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">Venue</a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-display text-lg font-medium mb-4">Contact</h3>
          <ul className="space-y-3">
            <li className="flex gap-2 items-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin mt-1 text-primary flex-shrink-0">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span className="text-foreground/70">Dubai World Trade Centre, UAE</span>
            </li>
            <li className="flex gap-2 items-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail mt-1 text-primary flex-shrink-0">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              <span className="text-foreground/70">info@globalsummit.com</span>
            </li>
            <li className="flex gap-2 items-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone mt-1 text-primary flex-shrink-0">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span className="text-foreground/70">+971 4 123 4567</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 mt-12 pt-8 border-t border-border/60">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60">© {new Date().getFullYear()} Global Futuristic Summit. All rights reserved.</p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
