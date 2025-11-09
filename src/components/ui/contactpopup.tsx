import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

// A simple React component for the WhatsApp icon
const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="M21 11.08a10 10 0 0 1-10 10c-5.52 0-10-4.48-10-10a10 10 0 0 1 10-10c.77 0 1.53.09 2.25.26" />
    <path d="M12 18a6 6 0 0 1-6-6c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6zM12 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
    <path d="M16.24 7.76A5.99 5.99 0 0 1 12 6v6l4.24 4.24" />
    <path d="m16.14 12.3-1-4.3-1.6.6 1 4.3 1.6-.6zM10.03 16.4l-1.6-.6-1 4.3 1.6.6 1-4.3z" />
  </svg>
);

interface ContactPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  whatsappMessage: string;
}

// Contact details (from Footer.tsx and Header.tsx)
const phoneNumber = "+917827444093";
const whatsappNumber = "917827444093"; // Number without '+' for WhatsApp link
const mapLink = "https://maps.app.goo.gl/2uKEHSW9kqQgFPBZA";

export const ContactPopup = ({
  open,
  onOpenChange,
  whatsappMessage,
}: ContactPopupProps) => {
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-piano-cream">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-piano-dark">
            Get in Touch
          </DialogTitle>
          <DialogDescription className="text-piano-dark/80">
            How would you like to contact us?
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {/* Call Button */}
          <Button
            asChild
            variant="gold"
            size="lg"
            className="w-full justify-start gap-3"
          >
            <a href={`tel:${phoneNumber}`}>
              <Phone className="w-5 h-5" />
              Call (+91 7827444093)
            </a>
          </Button>

          {/* WhatsApp Button */}
          <Button
            asChild
            variant="gold"
            size="lg"
            className="w-full justify-start gap-3"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              Chat on WhatsApp
            </a>
          </Button>

          {/* Google Maps Button */}
          <Button
            asChild
            variant="gold"
            size="lg"
            className="w-full justify-start gap-3"
          >
            <a href={mapLink} target="_blank" rel="noopener noreferrer">
              <MapPin className="w-5 h-5" />
              Visit Our Studio
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};