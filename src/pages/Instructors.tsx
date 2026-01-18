import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Music, BookOpen, GraduationCap } from "lucide-react";
import { ContactPopup } from "@/components/ui/contactpopup";
import bg_one from "@/assets/69.jpg";
import { useEffect, useState } from "react";

// Import placeholder - you'll replace these with actual images
import ReemaGupta from "@/assets/ReemaGupta2.jpg";
// Add this image manually: AdityaLakhani.jpg
import AdityaLakhani from "@/assets/AdityaLakhani.jpg";

const Instructors = () => {
  const [animate, setAnimate] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const instructors = [
    {
      name: "Reema Gupta",
      instrument: "Piano",
      image: ReemaGupta,
      experience: "10+ years",
      specializations: [
        "Classical Piano Techniques",
        "Trinity & ABRSM Exam Preparation",
        "Music Theory & Composition",
        "Performance Coaching",
      ],
      description:
        "Reema Gupta, Founder of Raama Music School, is a passionate musician and pianist who has been teaching piano for over 10 years. Her vision is to create a music course where each individual can discover their musical personality and enhance it with her guidance. She offers students the opportunity to sit for international exams like Trinity and ABRSM, providing a clear vision of their musical journey upon completion of the grades.",
      achievements: [
        "10+ years of teaching experience",
        "Certified Trinity & ABRSM examiner",
        "Hundreds of successful students",
        "Specialized in personalized teaching methodology",
      ],
    },
    {
      name: "Aditya Lakhani",
      instrument: "Guitar",
      image: AdityaLakhani,
      experience: "5+ years",
      specializations: [
        "Acoustic & Electric Guitar",
        "Contemporary Music Styles",
        "Fingerstyle Techniques",
        "Performing Arts",
      ],
      description:
        "Aditya Lakhani is an accomplished guitarist with over 5 years of teaching experience. His dynamic approach to guitar instruction blends traditional techniques with modern styles, making learning accessible and enjoyable for students of all levels. Aditya specializes in helping students develop their unique musical voice while building a strong technical foundation.",
      achievements: [
        "5+ years of professional teaching experience",
        "Expertise in multiple guitar styles (Rock, Pop, Blues, Jazz)",
        "Proficient in western and classical fingerstlye",
        "Successfully guided students to various performance opportunities",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <ContactPopup
        open={isPopupOpen}
        onOpenChange={setIsPopupOpen}
        whatsappMessage={popupMessage}
      />

      {/* Hero Section */}
      <section
        className="relative h-[500px] w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg_one})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center relative z-10">
          <h1
            className={`font-serif text-5xl md:text-6xl text-piano-gold mb-6 tracking-[6px] transition-all duration-1000 ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Meet Our Instructors
          </h1>
          <p
            className={`text-xl md:text-xl text-white max-w-2xl font-light leading-relaxed tracking-[6px] transition-all duration-1000 ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            Learn from experienced and passionate music educators
          </p>
        </div>
      </section>

      {/* Instructors Section - Vertically Scrollable */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-piano-dark mb-4">
              Our Expert Team
            </h2>
            <p className="text-piano-dark/70 max-w-2xl mx-auto">
              Meet the talented instructors who will guide you on your musical journey
            </p>
          </div>

          {/* Vertically Stacked Instructor Cards */}
          <div className="max-w-5xl mx-auto space-y-8">
            {instructors.map((instructor, index) => (
              <Card
                key={index}
                className="border-2 border-piano-gold/20 shadow-elegant hover:shadow-2xl transition-all duration-500 overflow-hidden stagger-animation"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-12 gap-0">
                    {/* Left Side - Image */}
                    <div className="md:col-span-4 relative">
                      <div className="h-full min-h-[280px] md:min-h-[320px]">
                        <img
                          src={instructor.image}
                          alt={instructor.name}
                          className="w-full h-full object-cover object-top"
                          loading="lazy"
                        />
                        <div className="absolute top-4 left-4 bg-piano-dark text-piano-gold px-4 py-2.5 rounded-lg shadow-lg border-2 border-piano-gold">
                          <p className="font-serif text-base font-semibold">{instructor.instrument}</p>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="md:col-span-8 p-5 md:p-6">
                      <div className="mb-3">
                        <h3 className="font-serif text-2xl text-piano-dark mb-1">
                          {instructor.name}
                        </h3>
                        <div className="flex items-center gap-2 text-piano-gold">
                          <Award className="w-4 h-4" />
                          <span className="font-semibold text-sm">{instructor.experience}</span>
                        </div>
                      </div>

                      <p className="text-piano-dark/80 leading-relaxed mb-4 text-justify text-sm">
                        {instructor.description}
                      </p>

                      {/* Specializations */}
                      <div className="mb-4">
                        <h4 className="font-serif text-base text-piano-dark mb-2 flex items-center gap-2">
                          <Music className="w-4 h-4 text-piano-gold" />
                          Specializations
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          {instructor.specializations.map((spec, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 text-piano-dark/70 text-xs"
                            >
                              <div className="w-1.5 h-1.5 bg-piano-gold rounded-full"></div>
                              <span>{spec}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="font-serif text-base text-piano-dark mb-2 flex items-center gap-2">
                          <GraduationCap className="w-4 h-4 text-piano-gold" />
                          Achievements
                        </h4>
                        <ul className="space-y-1.5">
                          {instructor.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-piano-dark/70 text-xs"
                            >
                              <BookOpen className="w-3 h-3 text-piano-gold mt-0.5 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Button */}
                      <Button
                        variant="gold"
                        className="w-full sm:w-auto"
                        onClick={() => {
                          setPopupMessage(
                            `Hi, I'd like to learn ${instructor.instrument} with ${instructor.name}.`
                          );
                          setIsPopupOpen(true);
                        }}
                      >
                        Book a Lesson with {instructor.name.split(" ")[0]}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Instructors Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl text-piano-dark mb-8">
              Why Learn With Us?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-piano-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-piano-gold" />
                  </div>
                  <h3 className="font-serif text-xl text-piano-dark mb-2">
                    Experienced Professionals
                  </h3>
                  <p className="text-piano-dark/70">
                    Learn from instructors with years of teaching experience and proven track
                    records
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-piano-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Music className="w-8 h-8 text-piano-gold" />
                  </div>
                  <h3 className="font-serif text-xl text-piano-dark mb-2">
                    Personalized Approach
                  </h3>
                  <p className="text-piano-dark/70">
                    Tailored lessons designed to match your learning style and musical goals
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-piano-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-8 h-8 text-piano-gold" />
                  </div>
                  <h3 className="font-serif text-xl text-piano-dark mb-2">
                    Comprehensive Training
                  </h3>
                  <p className="text-piano-dark/70">
                    From basics to advanced techniques, get complete musical education
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-piano-dark text-piano-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl mb-6">Ready to Start Learning?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our music school and experience the difference that passionate, experienced
            instructors can make in your musical journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="gold"
              size="xl"
              onClick={() => {
                setPopupMessage("Hi, I'd like to book a free trial lesson.");
                setIsPopupOpen(true);
              }}
            >
              Book Free Trial Lesson
            </Button>
            <Button variant="hero" size="xl" asChild>
              <a href="tel:+917827444093">Call Now: +91 7827444093</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Instructors;