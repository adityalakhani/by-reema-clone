import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import bg_one from "@/assets/IMG_9613.jpg";
import { useEffect, useState } from "react";
import {
  Users,
  Clock,
  Award,
  Music,
  BookOpen,
  Star,
  CheckCircle
} from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "Beginner Piano Course",
      duration: "3 months",
      level: "Beginner",
      description: "Perfect for those starting their musical journey. Learn basic techniques, note reading, and simple melodies.",
      features: [
        "Basic piano techniques",
        "Note reading and music theory",
        "Simple melodies and songs",
        "Proper posture and hand positioning",
        "Weekly progress assessments"
      ],
      icon: Music
    },
    {
      title: "Intermediate Piano Course",
      duration: "6 months",
      level: "Intermediate",
      description: "Build upon your foundation with more complex pieces, advanced techniques, and music theory.",
      features: [
        "Advanced playing techniques",
        "Complex musical pieces",
        "Rhythm and timing mastery",
        "Music composition basics",
        "Performance preparation"
      ],
      icon: BookOpen
    },
    {
      title: "Advanced Piano Course",
      duration: "12 months",
      level: "Advanced",
      description: "Master advanced repertoire, develop your musical personality, and prepare for professional performance.",
      features: [
        "Advanced classical repertoire",
        "Personal style development",
        "Performance techniques",
        "Teaching methodology basics",
        "Concert preparation"
      ],
      icon: Award
    },
    {
      title: "Trinity/ABRSM/LSME Exam Preparation",
      duration: "Flexible",
      level: "All Levels",
      description: "Specialized preparation for international piano examinations with proven success rates.",
      features: [
        "Grade-specific syllabus",
        "Technical exercises",
        "Sight-reading practice",
        "Aural skills development",
        "Mock examinations"
      ],
      icon: Star
    }
  ];

  const benefits = [
    "Individual attention for every student",
    "Flexible scheduling options",
    "Modern teaching methodology",
    "Performance opportunities",
    "International exam preparation",
    "Lifetime musical foundation"
  ];

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section
        className="py-20 bg-gradient-warm h-[600px] w-full"
        style={{ backgroundImage: `url(${bg_one})` }}
      >
        <div className="container mx-auto px-40 h-full flex flex-col justify-center items-start text-left relative z-10 space-y-4">
          {/* Animation trigger on mount */}
          {(() => {
            const [showHero, setShowHero] = useState(false);

            useEffect(() => {
              const timer = setTimeout(() => setShowHero(true), 100);
              return () => clearTimeout(timer);
            }, []);

            return (
              <>
                <h1
                  className={`
              font-serif text-5xl md:text-6xl text-[#ff6363] mb-6 tracking-[6px]
              transition-all duration-1000
              ${showHero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
                  style={{ transitionDelay: "100ms" }}
                >
                  Our Courses
                </h1>

                <p
                  className={`
              text-xl md:text-xl text-white max-w-2xl font-light leading-relaxed tracking-[6px]
              transition-all duration-1000
              ${showHero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
                  style={{ transitionDelay: "300ms" }}
                >
                  Unlock your musical potential with Raama Music School's comprehensive piano courses designed for all skill levels
                </p>
              </>
            );
          })()}
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {courses.map((course, index) => (
              <Card key={index} className="p-6 hover:shadow-elegant transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 bg-piano-gold/10 rounded-full flex items-center justify-center">
                      <course.icon className="w-8 h-8 text-piano-gold" />
                    </div>
                    <Badge variant="secondary" className="bg-piano-gold/10 text-piano-dark">
                      {course.level}
                    </Badge>
                  </div>

                  <h3 className="font-serif text-2xl  text-piano-dark mb-3">
                    {course.title}
                  </h3>

                  <p className="text-piano-dark/70 mb-4">
                    {course.description}
                  </p>

                  <div className="flex items-center gap-4 mb-4 text-[15px] text-piano-dark/60">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      Individual Lessons
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-piano-dark mb-3">What you'll learn:</h4>
                    <ul className="space-y-2">
                      {course.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-piano-dark/70">
                          <CheckCircle className="w-4 h-4 text-piano-gold flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <Button variant="gold">
                      Enroll Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl  text-piano-dark mb-8">
              Why Choose Raama Music School?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 text-left">
                  <CheckCircle className="w-6 h-6 text-piano-gold flex-shrink-0" />
                  <span className="text-piano-dark">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* International Exams Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl  text-piano-dark mb-8">
              International Exam Preparation
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardContent className="p-0 text-center">
                  <div className="w-20 h-20 bg-piano-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-10 h-10 text-piano-gold" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-piano-dark mb-3">
                    Trinity College London
                  </h3>
                  <p className="text-piano-dark/70">
                    Comprehensive preparation for Trinity piano examinations with personalized coaching and practice materials.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0 text-center">
                  <div className="w-20 h-20 bg-piano-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-10 h-10 text-piano-gold" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-piano-dark mb-3">
                    ABRSM
                  </h3>
                  <p className="text-piano-dark/70">
                    Expert guidance for Associated Board examinations with proven track record of student success.
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
          <h2 className="font-serif text-4xl  mb-6">
            Ready to Start Your Musical Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of satisfied students who have discovered their musical potential with Reema Gupta's expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="xl">
              Book Free Trial Lesson
            </Button>
            <Button variant="hero" size="xl">
              Call Now: +91 7827444093
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;