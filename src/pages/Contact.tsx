import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ContactPopup } from "@/components/ui/contactpopup";
import bg_one from "@/assets/100.jpg";
import { useEffect, useState } from "react";
const Contact = () => {

  const [animate, setAnimate] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="min-h-screen ">
      <ContactPopup
        open={isPopupOpen}
        onOpenChange={setIsPopupOpen}
        whatsappMessage={popupMessage}
      />
      {/* Hero Section */}
      <section className="relative bg-cover bg-top sm:bg-center h-[500px] sm:h-[600px] w-full"
        style={{ backgroundImage: `url(${bg_one})` }}
      >
        {/* Overlay for darkening effect */}
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Adjust opacity as needed */}

        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center relative z-10">
          <h1
            className={`font-serif text-5xl md:text-6xl text-[#ff6363] mb-6 tracking-[6px] transition-all duration-1000 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            style={{ transitionDelay: "100ms" }}
          >
            Contact Us
          </h1>
          <p
            className={`text-xl md:text-xl text-white max-w-2xl font-light leading-relaxed tracking-[6px] transition-all duration-1000 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            style={{ transitionDelay: "300ms" }}
          >
            Ready to begin your musical journey? Get in touch with us today!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-3xl  text-piano-dark mb-8">
                Send us a Message
              </h2>
              <Card className="p-6">
                <CardContent className="p-0">
                  <form className="space-y-6">
                    <div>
                      <label className="block text-[15px] font-normal text-piano-dark mb-2">
                        Full Name
                      </label>
                      <Input
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-[15px] font-normal text-piano-dark mb-2">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-[15px] font-normal text-piano-dark mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        placeholder="Enter your phone number"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-[15px] font-normal text-piano-dark mb-2">
                        Message
                      </label>
                      <Textarea
                        placeholder="Tell us about your musical goals and any questions you have..."
                        rows={5}
                        className="w-full"
                      />
                    </div>
                    <Button variant="gold" size="lg" className="
                    relative overflow-hidden text-white bg-[#ab8a62]
                    px-[22px] py-[13px] text-[15px] tracking-[3px]
                    transition-all duration-700 ease-in-out transform
                    hover:bg-white hover:text-[#ab8a62] hover:scale-110

                    before:content-[''] before:absolute before:inset-0
                    before:bg-white before:origin-left before:scale-x-0
                    before:transition-transform before:duration-700
                    hover:before:scale-x-100 before:opacity-20
                    "
                      onClick={(e) => {
                        e.preventDefault(); // Stop the form from trying to submit
                        setPopupMessage("Hi, I have a question from your website contact form.");
                        setIsPopupOpen(true);
                      }}>
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-3xl  text-piano-dark mb-8">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-piano-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-piano-gold" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-semibold text-piano-dark mb-2">
                          Phone
                        </h3>
                        <p className="text-piano-dark/70 mb-2">Call us for immediate assistance</p>
                        <a
                          href="tel:+917827444093"
                          className="text-piano-gold hover:text-piano-warm transition-colors font-normal"
                        >
                          +91 7827444093
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-piano-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-piano-gold" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-semibold text-piano-dark mb-2">
                          Email
                        </h3>
                        <p className="text-piano-dark/70 mb-2">Send us your questions anytime</p>
                        <a
                          href="mailto:raamamusic2025@gmail.com"
                          className="text-piano-gold hover:text-piano-warm transition-colors font-normal"
                        >
                          raamamusic2025@gmail.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 hover:shadow-2xl transition-shadow">
                  <CardContent className="p-0">
                    <a
                      href="https://maps.app.goo.gl/2uKEHSW9kqQgFPBZA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start space-x-4 group"
                    >
                      <div className="w-12 h-12 bg-piano-gold/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-piano-gold/20 transition-colors">
                        <MapPin className="w-6 h-6 text-piano-gold group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-semibold text-piano-dark mb-2 group-hover:text-piano-gold transition-colors">
                          Location
                        </h3>
                        <p className="text-piano-dark/70 mb-2">Visit our beautiful studio</p>
                        <p className="text-piano-gold font-normal flex items-center gap-1">
                          Delhi, India
                          {/* <ExternalLink className="w-4 h-4" /> */}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-piano-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-piano-gold" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-semibold text-piano-dark mb-2">
                          Hours
                        </h3>
                        <p className="text-piano-dark/70 mb-2">We're here to help</p>
                        <div className="text-piano-gold font-normal">
                          <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                          <p>Sunday: 10:00 AM - 6:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-piano-dark mb-4">
              Find Our Studio
            </h2>
            <p className="text-piano-dark/70">
              Located in the heart of Delhi, our studio provides the perfect environment for learning
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-2xl">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.7398897339453!2d77.11848327524969!3d28.667505982492084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03ebe39b9d4b%3A0x83bff3eec20a4b05!2sRaama%20Music%20School!5e0!3m2!1sen!2sin!4v1762706415139!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Raama Music School Location"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;