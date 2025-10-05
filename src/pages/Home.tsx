import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Users, Award, Heart, Music, BookOpen, Phone, Mail, MapPin } from 'lucide-react';
import carousel_one from "@/assets/IMG_9591.jpg";
import carousel_two from "@/assets/20.jpg";
import carousel_three from "@/assets/96.jpg";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const carouselSlides = [
    {
      title: "RAAMA MUSIC SCHOOL",
      subtitle: "MUSIC IS THE ULTIMATE BLISS",
      description: "Where every note tells a story and every lesson ignites your musical journey.",
      bgImage: carousel_one
    },
    {
      title: "TRANSFORM YOUR DREAMS",
      subtitle: "INNOVATIVE MUSIC EDUCATION",
      description: "Transform your musical dreams into reality with our innovative and inspiring music education.",
      bgImage: carousel_two
    },
    {
      title: "UNLOCK YOUR POTENTIAL",
      subtitle: "PASSION & EXPERTISE",
      description: "Unlock your musical potential with Raama Music School, where passion and expertise drive every lesson.",
      bgImage: carousel_three
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

  const reviews = [
    {
      name: "Raman",
      text: "Raama Music School offers top-notch piano instruction. The instructor is experienced and patient.",
      rating: 5
    },
    {
      name: "Nisha Sethi",
      text: "My child's piano skills have improved tremendously thanks to Raama Music School's excellent teaching methods.",
      rating: 5
    },
    {
      name: "Komal",
      text: "A great place for music lovers. Highly recommended for anyone looking to learn piano.",
      rating: 5
    },
    {
      name: "Priyanka",
      text: "The personalized lessons really helped me progress at my own pace. Thank you, Raama Music School!",
      rating: 5
    }
  ];

  // Handle scroll for contact panel
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, carouselSlides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Carousel Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Contact Info Sidebar - Left Side with scroll behavior */}
        <div className={`fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block transition-all duration-700 ease-in-out ${
          isScrolled ? 'opacity-0 -translate-x-full pointer-events-none' : 'opacity-100 translate-x-0'
        }`}>
          <div className="bg-piano-dark/95 backdrop-blur-sm text-piano-cream py-8 px-6 rounded-r-2xl shadow-2xl border-r-4 border-piano-gold">
            <div className="space-y-8">
              <div className="group cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Phone className="w-5 h-5 text-piano-gold group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-piano-cream/60 font-sans mb-1">
                      Call Us
                    </p>
                    <a
                      href="tel:+917827444093"
                      className="text-[15px] font-normal hover:text-piano-gold transition-colors block leading-tight"
                    >
                      +91 7827444093
                    </a>
                  </div>
                </div>
              </div>

              <div className="h-px bg-piano-gold/20"></div>

              <div className="group cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Mail className="w-5 h-5 text-piano-gold group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-piano-cream/60 font-sans mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:info@saaareesur.com"
                      className="text-[15px] font-normal hover:text-piano-gold transition-colors block leading-tight break-all"
                    >
                      info@saaareesur.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="h-px bg-piano-gold/20"></div>

              <div className="group cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <MapPin className="w-5 h-5 text-piano-gold group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-piano-cream/60 font-sans mb-1">
                      Location
                    </p>
                    <p className="text-[15px] font-normal leading-tight">
                      Delhi, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Slides */}
        <div className="relative h-full w-full">
          {carouselSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out ${
                currentSlide === index
                  ? 'opacity-100 scale-100 z-10'
                  : 'opacity-0 scale-105 z-0'
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1500ms] ease-out"
                style={{
                  backgroundImage: `url(${slide.bgImage})`,
                  backgroundPosition: 'center center',
                  backgroundSize: 'cover',
                  transform: currentSlide === index ? 'scale(1)' : 'scale(1.1)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
              </div>

              {/* Slide Content */}
              <div className="relative h-full flex items-center justify-center px-4">
                <div className="text-center text-white max-w-5xl mx-auto">
                  {/* Star Rating */}
                  <div
                    className={`flex justify-center gap-2 mb-6 transition-all duration-1000 ${
                      currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: currentSlide === index ? '300ms' : '0ms' }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 fill-piano-gold text-piano-gold"
                      />
                    ))}
                  </div>

                  {/* Subtitle */}
                  <p
                    className={`font-sans text-xs md:text-[15px] tracking-[0.3em] uppercase mb-6 text-piano-cream/90 transition-all duration-1000 ${
                      currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: currentSlide === index ? '500ms' : '0ms' }}
                  >
                    {slide.subtitle}
                  </p>

                  {/* Title */}
                  <h1
                    className={`font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 leading-[1.1] text-white transition-all duration-1000 ${
                      currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{
                      textShadow: '2px 4px 12px rgba(0,0,0,0.5)',
                      transitionDelay: currentSlide === index ? '700ms' : '0ms'
                    }}
                  >
                    {slide.title}
                  </h1>

                  {/* Description */}
                  <p
                    className={`text-lg md:text-xl lg:text-2xl mb-10 text-piano-cream/95 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ${
                      currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: currentSlide === index ? '900ms' : '0ms' }}
                  >
                    {slide.description}
                  </p>

                  {/* CTA Button */}
                  <div
                    className={`transition-all duration-1000 ${
                      currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: currentSlide === index ? '1100ms' : '0ms' }}
                  >
                    <Button
                      variant="gold"
                      size="xl"
                      className="font-sans tracking-wider shadow-2xl hover:shadow-piano-gold/50 hover:scale-105 transition-all duration-300"
                    >
                      CONNECT NOW
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Dots Navigation */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-500 rounded-full ${
                currentSlide === index
                  ? 'w-12 h-3 bg-piano-gold shadow-lg shadow-piano-gold/50'
                  : 'w-3 h-3 bg-white/50 hover:bg-white/80 hover:scale-125'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 bg-gradient-to-b from-piano-cream to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-serif text-5xl  text-piano-dark mb-8">
              What we do
            </h2>
            <div className="max-w-4xl mx-auto text-piano-dark/80 text-lg leading-relaxed space-y-6">
              <p className="text-justify md:text-center">
                At Raama Music School, we offer exceptional piano instruction for all age groups, from beginners to
                advanced students. Our team of highly skilled instructors, each with around 8 years of
                experience, is dedicated to fostering a love for music and helping students achieve their
                musical goals.
              </p>
              <p className="text-justify md:text-center">
                We provide personalized lessons tailored to individual needs and skill levels, ensuring that
                each student progresses at their own pace. Our comprehensive curriculum combines classical
                techniques with modern approaches, making learning both engaging and effective.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/80 backdrop-blur shadow-elegant border-piano-gold/20 hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-10">
                <p className="text-piano-dark text-lg leading-relaxed text-center">
                  <strong className="font-serif text-xl text-piano-gold">Reema Gupta</strong> is a musician & pianist who has been teaching piano for over 10 years. Her
                  vision is to create a music course where each individual can discover their musical
                  personality and enhance it with her guidance. She offers students the opportunity to sit for
                  international exams like <strong>Trinity</strong> and <strong>ABRSM</strong>, providing a clear vision of their musical
                  journey upon completion of the grades.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-serif text-5xl  text-piano-dark mb-4">
              Our Services
            </h2>
            <p className="text-xl text-piano-dark/70 font-sans tracking-wide">
              At RAAMA MUSIC SCHOOL
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group text-center p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 border-transparent hover:border-piano-gold/30 bg-gradient-to-br from-white to-piano-cream/30 stagger-animation"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-piano-gold/20 to-piano-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <service.icon className="w-10 h-10 text-piano-gold group-hover:text-piano-warm transition-colors" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-piano-dark mb-4 group-hover:text-piano-gold transition-colors">
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
      <section className="py-24 bg-gradient-to-b from-piano-cream to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-serif text-5xl  text-piano-dark mb-4">
              Client Reviews
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 bg-white border-l-4 border-piano-gold stagger-animation"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-0">
                  <div className="flex gap-1 mb-5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-piano-gold text-piano-gold" />
                    ))}
                  </div>
                  <p className="text-piano-dark/80 mb-6 italic text-lg leading-relaxed">
                    "{review.text}"
                  </p>
                  <p className="font-semibold text-piano-dark text-lg font-serif">
                    — {review.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-piano-dark via-piano-dark to-black text-piano-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,215,0,0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl  mb-6">
            RAAMA MUSIC SCHOOL | MUSIC IS THE ULTIMATE BLISS
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-piano-cream/90 max-w-3xl mx-auto">
            Where every note tells a story and every lesson ignites your musical journey.
          </p>
          <Button
            variant="gold"
            size="xl"
            className="font-sans tracking-wider shadow-2xl hover:shadow-piano-gold/50 hover:scale-110 transition-all duration-300"
          >
            Book Your Lesson Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;