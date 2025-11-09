/*
 * PATH: src/components/ContactPopup.tsx
 * UPDATED COMPONENT
 */
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, MapPin, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png"; // Import the logo 

// A simple React component for the WhatsApp icon
const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-green-500 mb-2"
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 12c0 1.74.45 3.37 1.25 4.85L2 22l5.25-1.38c1.4.75 3 .17 4.79 1.17c5.46 0 9.91-4.45 9.91-9.91c0-5.55-4.45-9.91-9.91-9.91ZM17.2 15.6c-.18-.3-.36-.45-.6-.75s-.45-.3-.7-.3c-.27 0-.5.1-.7.3c-.24.2-.8 1-.98 1.2c-.18.2-.36.22-.66.12c-.3-.1-.13-.16-2.5-1.5c-1.84-1.04-3.04-2.18-3.55-2.58c-.1-.1-.18-.18-.18-.36s0-.27.12-.36c.1-.1.2-.12.3-.18c.1-.06.17-.12.24-.18c.08-.07.12-.12.18-.2a.6.6 0 0 0 .06-.54C10 9 9.22 7.14 9 6.7c-.2-.45-.4-.4-.54-.4c-.14 0-.3-.02-.44-.02c-.15 0-.36.06-.54.3c-.18.24-.7 1-.9 1.6c-.25.6-.4 1.2-.4 1.8c0 .6.15 1.18.3 1.7c.07.24 1.5 2.5 3.6 4.5c2.1 2 3.8 2.7 4.3 3c.5.3 1 .48 1.4.6c.4.1.75.04 1-.2c.27-.24.7-.8.9-1.1s.4-.5.3-.8c-.1-.3-.27-.4-.4-.5Z" />
  </svg>
);

// --- Contact Details ---
const phoneNumber = "+917827444093";
const whatsappNumber = "917827444093"; // Number without '+' for WhatsApp link
const mapLink = "https://maps.app.goo.gl/2uKEHSW9kqQgFPBZA";
const emailAddress = "raamamusic2025@gmail.com"; 

// --- Time Logic ---
// Your new hours: 11 AM to 9 PM (21:00), every day.
const getBusinessHoursStatus = () => {
  const now = new Date();
  const currentHour = now.getHours(); // 0-23
  const isOpen = currentHour >= 11 && currentHour < 21;
  return { isOpen };
};

interface ContactPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  whatsappMessage: string;
}

export const ContactPopup = ({
  open,
  onOpenChange,
  whatsappMessage,
}: ContactPopupProps) => {
  const [status, setStatus] = useState({ isOpen: true });

  // Recalculate the open status every time the popup is opened
  useEffect(() => {
    if (open) {
      setStatus(getBusinessHoursStatus());
    }
  }, [open]);

  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-piano-cream border-piano-gold">
        <div className="flex justify-center -mt-16">
          <img
            src={logo}
            alt="Raama Music School"
            className="w-20 h-20 rounded-full bg-white p-1.5 border-4 border-piano-gold shadow-lg"
            loading="lazy"
          />
        </div>
        <DialogHeader className="text-center pt-2">
          <DialogTitle className="font-serif text-2xl text-piano-dark">
            {status.isOpen ? "We're Here to Help!" : "We're Currently Closed"}
          </DialogTitle>
          <DialogDescription className="text-piano-dark/80">
            {status.isOpen
              ? "How would you like to contact us?"
              : "We'll get back to you as soon as we open at 11 AM."}
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-3 pt-2">
          {/* --- Card 1: Call --- */}
          <a
            href={`tel:${phoneNumber}`}
            className="group rounded-lg outline-none focus:ring-2 focus:ring-ring"
          >
            <Card
              className={cn(
                "text-center card-hover h-full transition-all duration-300 group-hover:bg-white",
                status.isOpen
                  ? "border-piano-gold bg-white"
                  : "bg-white/70"
              )}
            >
              <CardContent className="p-4 flex flex-col items-center justify-center">
                {status.isOpen && (
                  <Badge
                    variant="secondary"
                    className="mb-2 bg-green-100 text-green-800 text-xs"
                  >
                    We're Online!
                  </Badge>
                )}
                {!status.isOpen && (
                  <div className="h-5 mb-2" /> /* Spacer */
                )}
                <Phone className="w-8 h-8 text-piano-gold mb-2" />
                <h3 className="font-semibold text-piano-dark">Call Us</h3>
                <p className="text-xs text-piano-dark/70">
                  {status.isOpen ? "Speak to us directly" : "Leave a voicemail"}
                </p>
              </CardContent>
            </Card>
          </a>

          {/* --- Card 2: WhatsApp --- */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg outline-none focus:ring-2 focus:ring-ring"
          >
            <Card
              className={cn(
                "text-center card-hover h-full transition-all duration-300 group-hover:bg-white",
                !status.isOpen
                  ? "btn-pulse border-piano-gold bg-white" // 
                  : "bg-white/70"
              )}
            >
              <CardContent className="p-4 flex flex-col items-center justify-center">
                {!status.isOpen && (
                  <Badge
                    variant="secondary"
                    className="mb-2 bg-piano-gold/20 text-piano-dark text-xs"
                  >
                    Recommended
                  </Badge>
                )}
                {status.isOpen && (
                  <div className="h-5 mb-2" /> /* Spacer */
                )}
                <WhatsAppIcon />
                <h3 className="font-semibold text-piano-dark">WhatsApp</h3>
                <p className="text-xs text-piano-dark/70">
                  {status.isOpen ? "Best for quick questions" : "Message us anytime"}
                </p>
              </CardContent>
            </Card>
          </a>

          {/* --- Card 3: Visit --- */}
          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg outline-none focus:ring-2 focus:ring-ring"
          >
            <Card className="text-center card-hover h-full bg-white/70 transition-all duration-300 group-hover:bg-white">
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="h-5 mb-2" /> {/* Spacer to align with badges */}
                <MapPin className="w-8 h-8 text-piano-gold mb-2" />
                <h3 className="font-semibold text-piano-dark">Visit Studio</h3>
                <p className="text-xs text-piano-dark/70">Get directions</p>
              </CardContent>
            </Card>
          </a>

          {/* --- Card 4: Email --- */}
          <a
            href={`mailto:${emailAddress}`}
            className="group rounded-lg outline-none focus:ring-2 focus:ring-ring"
          >
            <Card className="text-center card-hover h-full bg-white/70 transition-all duration-300 group-hover:bg-white">
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="h-5 mb-2" /> {/* Spacer */}
                <Mail className="w-8 h-8 text-piano-gold mb-2" />
                <h3 className="font-semibold text-piano-dark">Email Us</h3>
                <p className="text-xs text-piano-dark/70">
                  For detailed inquiries
                </p>
              </CardContent>
            </Card>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};