import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import bg_one from "@/assets/69.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-warm h-[600px] w-full"
        style={{ backgroundImage: `url(${bg_one})` }}
      >
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center relative z-10">
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6 animate-fade-in-up">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-fade-in-up delayed-animation leading-relaxed">
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
                    ">
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
                          href="mailto:raamusic2025@gmail.com"
                          className="text-piano-gold hover:text-piano-warm transition-colors font-normal"
                        >
                          raamusic2025@gmail.com
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
                        <p className="text-piano-gold font-normal">
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
            <h2 className="font-serif text-3xl  text-piano-dark mb-4">
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