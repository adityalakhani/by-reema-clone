import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Users, Award, Heart, Music, BookOpen } from "lucide-react";
import pianoHero from "@/assets/piano-hero.jpg";

const Home = () => {
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
        className="h-screen flex items-center justify-center relative bg-cover bg-center"
        style={{ backgroundImage: `url(${pianoHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="relative z-10 text-center text-piano-cream">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-piano-gold text-piano-gold" />
            ))}
          </div>
          <p className="font-sans text-sm tracking-widest mb-4 opacity-90">
            UNIQUE PLACE TO RELAX & ENJOY
          </p>
          <h1 className="font-serif text-6xl md:text-7xl font-bold mb-8 leading-tight">
            THE PERFECT BASE<br />FOR YOU
          </h1>
          <Button variant="hero" size="xl">
            CONFIRM YOUR SEAT
          </Button>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-piano-dark mb-6">What we do</h2>
            <div className="max-w-4xl mx-auto text-piano-dark/80 text-lg leading-relaxed">
              <p className="mb-6">
                At SaaaReeeSUR, we offer exceptional piano instruction for all age groups, from beginners to 
                advanced students. Our team of highly skilled instructors, each with around 8 years of 
                experience, is dedicated to fostering a love for music and helping students achieve their 
                musical goals.
              </p>
              <p>
                We provide personalized lessons tailored to individual needs and skill levels, ensuring that 
                each student progresses at their own pace. Our comprehensive curriculum combines classical 
                techniques with modern approaches, making learning both engaging and effective.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center bg-piano-cream/50 rounded-lg p-8 shadow-soft">
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
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-piano-dark mb-4">Our Services</h2>
            <p className="text-xl text-piano-dark/70">At Piano by reema</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-elegant transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-piano-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-piano-gold" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-piano-dark mb-3">
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
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-piano-dark mb-4">Client Reviews</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-piano-gold text-piano-gold" />
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
      <section className="py-20 bg-piano-dark text-piano-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Piano by reema | MUSIC IS THE ULTIMATE BLISS
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Where every note tells a story and every lesson ignites your musical journey.
          </p>
          <Button variant="gold" size="xl">
            Book Your Lesson Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;