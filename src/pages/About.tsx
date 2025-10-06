import { Card, CardContent } from "@/components/ui/card";
import { Award, Music, Users, Heart } from "lucide-react";
import bg_one from "@/assets/56.jpg";
import ReemaGupta from "@/assets/ReemaGupta.jpg";

const About = () => {
  return (
    <div className="min-h-screen ">
      {/* Hero Section with Background Image */}
      <section
        className="relative h-[500px] w-full bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${bg_one})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

        {/* Content */}
        <div className="container mx-auto px-40 h-full flex flex-col justify-center items-start text-left relative z-10 space-y-4">
          <p className="text-xl md:text-xl text-white max-w-2xl font-light animate-fade-in-up delayed-animation leading-relaxed tracking-[6px]">
            THE MUSIC IS THE BLISS
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-[#ff6363] mb-6 animate-fade-in-up tracking-[6px]">
            About Us
          </h1>
        </div>
      </section>


      {/* About Raama Music School Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl  text-piano-dark mb-12 text-center animate-fade-in-up">
              About Raama Music School
            </h2>
            <div className="text-lg text-piano-dark/80 leading-relaxed space-y-6 animate-fade-in-up delayed-animation">
              <p className="text-justify md:text-left first-letter:text-5xl first-letter:font-serif first-letter:text-piano-gold first-letter:mr-2 first-letter:float-left">
                At Raama Music School, we offer exceptional piano instruction for all age groups, from beginners to
                advanced students. Our team of highly skilled instructors, each with around 8 years of
                experience, is dedicated to fostering a love for music and helping students achieve their
                musical goals.
              </p>
              <p className="text-justify md:text-left">
                We provide personalized lessons tailored to individual needs and skill levels, ensuring that
                each student progresses at their own pace. Our comprehensive curriculum combines classical
                techniques with modern approaches, making learning both engaging and effective.
              </p>
              <p className="text-justify md:text-left">
                Whether you're starting your musical journey or looking to refine your skills, Raama Music School
                provides a supportive and inspiring environment to nurture your talent and passion for piano.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Reema Gupta Section with Background */}
      <section
        className="relative py-32 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${bg_one})`,
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-piano-dark/85"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl  text-white mb-12 animate-fade-in-up">
              Meet Reema Gupta
            </h2>
            <Card className="p-8 md:p-12 bg-white/95 backdrop-blur-sm shadow-2xl border-none animate-scale-in delayed-animation">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row items-center gap-8">

                  {/* Image */}
                  <img
                    src={ReemaGupta}
                    alt="Reema Gupta"
                    className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg"
                  />

                  {/* Text */}
                  <div className="text-center md:text-left">
                    <p className="text-lg md:text-xl text-piano-dark leading-relaxed">
                      <strong className="font-serif text-2xl text-piano-gold block mb-2">Reema Gupta</strong>
                      is a musician & pianist who has been teaching piano for over 10 years. Her
                      vision is to create a music course where each individual can discover their musical
                      personality and enhance it with her guidance. She offers students the opportunity to sit for
                      international exams like <strong className="text-piano-gold">Trinity</strong> and <strong className="text-piano-gold">ABRSM</strong>, providing a clear vision of their musical
                      journey upon completion of the grades.
                    </p>
                  </div>

                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 bg-gradient-to-b from-piano-cream to-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl md:text-5xl  text-piano-dark mb-16 text-center animate-fade-in-up">
            Our Approach
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-white border-l-4 border-piano-gold stagger-animation">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-piano-gold/10 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-piano-gold" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-piano-dark mb-4">
                  Personalized Teaching
                </h3>
                <p className="text-piano-dark/70 leading-relaxed">
                  Each lesson is tailored to the individual student's needs, learning style, and musical goals, ensuring optimal progress and engagement.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-white border-l-4 border-piano-gold stagger-animation">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-piano-gold/10 rounded-full flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-piano-gold" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-piano-dark mb-4">
                  International Standards
                </h3>
                <p className="text-piano-dark/70 leading-relaxed">
                  Preparation for Trinity and ABRSM examinations with proven track record of success and comprehensive exam preparation.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-white border-l-4 border-piano-gold stagger-animation">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-piano-gold/10 rounded-full flex items-center justify-center mb-6">
                  <Music className="w-8 h-8 text-piano-gold" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-piano-dark mb-4">
                  Balanced Curriculum
                </h3>
                <p className="text-piano-dark/70 leading-relaxed">
                  Combining classical techniques with modern approaches for comprehensive musical education that keeps students engaged and inspired.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-white border-l-4 border-piano-gold stagger-animation">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-piano-gold/10 rounded-full flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-piano-gold" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-piano-dark mb-4">
                  Passionate Environment
                </h3>
                <p className="text-piano-dark/70 leading-relaxed">
                  Creating a supportive and inspiring atmosphere where musical passion can flourish and students feel encouraged to explore their creativity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl  text-piano-dark mb-12 text-center animate-fade-in-up">
              Why Choose Raama Music School
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "10+ years of expert instruction",
                "Personalized learning approach",
                "International exam preparation",
                "Flexible scheduling options",
                "Modern teaching methodology",
                "Performance opportunities",
                "All age groups welcome",
                "Comprehensive curriculum"
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-piano-cream/30 transition-all duration-300 stagger-animation"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-8 h-8 bg-piano-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-piano-gold rounded-full"></div>
                  </div>
                  <span className="text-piano-dark text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;