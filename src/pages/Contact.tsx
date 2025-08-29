import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl font-bold text-piano-dark mb-6">Contact Us</h1>
          <p className="text-xl text-piano-dark/70 max-w-3xl mx-auto">
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
              <h2 className="font-serif text-3xl font-bold text-piano-dark mb-8">
                Send us a Message
              </h2>
              <Card className="p-6">
                <CardContent className="p-0">
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-piano-dark mb-2">
                        Full Name
                      </label>
                      <Input 
                        type="text" 
                        placeholder="Enter your full name"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-piano-dark mb-2">
                        Email Address
                      </label>
                      <Input 
                        type="email" 
                        placeholder="Enter your email address"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-piano-dark mb-2">
                        Phone Number
                      </label>
                      <Input 
                        type="tel" 
                        placeholder="Enter your phone number"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-piano-dark mb-2">
                        Message
                      </label>
                      <Textarea 
                        placeholder="Tell us about your musical goals and any questions you have..."
                        rows={5}
                        className="w-full"
                      />
                    </div>
                    <Button variant="gold" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-piano-dark mb-8">
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
                          className="text-piano-gold hover:text-piano-warm transition-colors font-medium"
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
                          href="mailto:info@pianobyreema.com" 
                          className="text-piano-gold hover:text-piano-warm transition-colors font-medium"
                        >
                          info@pianobyreema.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-piano-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-piano-gold" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-semibold text-piano-dark mb-2">
                          Location
                        </h3>
                        <p className="text-piano-dark/70 mb-2">Visit our beautiful studio</p>
                        <p className="text-piano-gold font-medium">
                          Delhi, India
                        </p>
                      </div>
                    </div>
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
                        <div className="text-piano-gold font-medium">
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
            <h2 className="font-serif text-3xl font-bold text-piano-dark mb-4">
              Find Our Studio
            </h2>
            <p className="text-piano-dark/70">
              Located in the heart of Delhi, our studio provides the perfect environment for learning
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="h-64 bg-piano-light flex items-center justify-center">
                  <p className="text-piano-dark/70">Interactive Map Coming Soon</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;