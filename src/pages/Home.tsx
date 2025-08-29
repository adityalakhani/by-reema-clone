import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Users, Award, Heart, Music, BookOpen } from "lucide-react";
import pianoHero from "@/assets/piano-hero.jpg";
import { useEffect, useState } from "react";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const reviews = [
    {
      name: "Raman",
      text: "SaaaReeeSUR offers top-notch piano instruction. The instructor is experienced and patient."
    },
    {
      name: "Nisha Sethi", 
      text: "My child's piano skills have improved tremendously thanks to SaaaReeeSUR's excellent teaching methods."
    },
    {
      name: "Komal",
      text: "A great place for music lovers. Highly recommended for anyone looking to learn piano."
    },
    {
      name: "Priyanka",
      text: "The personalized lessons really helped me progress at my own pace. Thank you, SaaaReeeSUR!"
    }
  ];

  const services = [
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Our team comprises highly skilled piano instructors with 8 years of experience, dedicated to love for music & musical goals."
    },
    {
      icon: Heart,
      title: "Personalized Lessons", 
      description: "We offer tailored piano lessons that cater to individual needs and skill levels, ensuring that each student progresses at their own pace."
    },
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Our curriculum blends classical techniques with modern approaches, making learning both engaging and effective for students of all levels."
    },
    {
      icon: Music,
      title: "Supportive Environment",
      description: "At SaaReeSUR, we provide a nurturing and inspiring atmosphere that supports students in developing their talent and passion for piano."
    },
    {
      icon: Award,
      title: "Vision of Reema Gupta",
      description: "Led by Reema Gupta, a musician and pianist with over 10 years of teaching experience, our courses help individuals discover and enhance their musical personality."
    },
    {
      icon: Star,
      title: "International Exams",
      description: "We offer students the chance to sit for international exams like Trinity and ABRSM, providing a clear vision of their musical journey upon completion of the grades."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="h-screen flex items-center justify-center relative bg-cover bg-center parallax"
        style={{ backgroundImage: `url(${pianoHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className={`relative z-10 text-center text-piano-cream transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="flex justify-center mb-6 animate-slide-in-left">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-piano-gold text-piano-gold float-animation" style={{animationDelay: `${i * 0.1}s`}} />
            ))}
          </div>
          <p className="font-sans text-sm tracking-widest mb-4 opacity-90 animate-slide-in-right hero-text">
            UNIQUE PLACE TO RELAX & ENJOY
          </p>
          <h1 className="font-display text-6xl md:text-7xl font-bold mb-8 leading-tight hero-text animate-fade-in-up">
            THE PERFECT BASE<br />FOR YOU
          </h1>
          <div className="animate-scale-in delayed-animation-3">
            <Button variant="hero" size="xl" className="btn-pulse hover-lift">
              CONFIRM YOUR SEAT
            </Button>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-display text-4xl font-bold text-piano-dark mb-6">What we do</h2>
            <div className="max-w-4xl mx-auto text-piano-dark/80 text-lg leading-relaxed">
              <p className="mb-6 animate-slide-in-left delayed-animation">
                At SaaaReeeSUR, we offer exceptional piano instruction for all age groups, from beginners to 
                advanced students. Our team of highly skilled instructors, each with around 8 years of 
                experience, is dedicated to fostering a love for music and helping students achieve their 
                musical goals.
              </p>
              <p className="animate-slide-in-right delayed-animation-2">
                We provide personalized lessons tailored to individual needs and skill levels, ensuring that 
                each student progresses at their own pace. Our comprehensive curriculum combines classical 
                techniques with modern approaches, making learning both engaging and effective.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center bg-piano-cream/50 rounded-lg p-8 shadow-soft hover-glow animate-scale-in delayed-animation-3">
            <p className="text-piano-dark text-lg leading-relaxed">
              Reema Gupta is a musician & pianist who has been teaching piano for over 10 years. Her 
              vision is to create a music course where each individual can discover their musical 
              personality and enhance it with her guidance. She offers students the opportunity to sit for 
              international exams like Trinity and ABRSM, providing a clear vision of their musical 
              journey upon completion of the grades.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-display text-4xl font-bold text-piano-dark mb-4">Our Services</h2>
            <p className="text-xl text-piano-dark/70">At Piano by reema</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`service-card text-center p-6 hover:shadow-elegant transition-all animate-fade-in-up`} style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-piano-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 hover-scale">
                    <service.icon className="service-icon w-8 h-8 text-piano-gold" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-piano-dark mb-3">
                    {service.title}
                  </h3>
                  <p className="text-piano-dark/70 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-display text-4xl font-bold text-piano-dark mb-4">Client Reviews</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className={`p-6 hover-lift animate-slide-in-${index % 2 === 0 ? 'left' : 'right'}`} style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-piano-gold text-piano-gold float-animation" style={{animationDelay: `${i * 0.1}s`}} />
                    ))}
                  </div>
                  <p className="text-piano-dark/80 mb-4 italic">
                    "{review.text}"
                  </p>
                  <p className="font-semibold text-piano-dark">
                    {review.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-piano-dark text-piano-cream parallax">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <h2 className="font-display text-4xl font-bold mb-6">
            Piano by reema | MUSIC IS THE ULTIMATE BLISS
          </h2>
          <p className="text-xl mb-8 opacity-90 animate-slide-in-left delayed-animation">
            Where every note tells a story and every lesson ignites your musical journey.
          </p>
          <div className="animate-scale-in delayed-animation-2">
            <Button variant="gold" size="xl" className="hover-lift btn-pulse">
              Book Your Lesson Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;