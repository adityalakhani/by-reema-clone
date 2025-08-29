import { Card, CardContent } from "@/components/ui/card";
import { Award, Music, Users, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl font-bold text-piano-dark mb-6">About Us</h1>
          <p className="text-xl text-piano-dark/70 max-w-3xl mx-auto">
            Transform your musical dreams into reality with our innovative and inspiring music education.
          </p>
        </div>
      </section>

      {/* About SaaaReeeSUR Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl font-bold text-piano-dark mb-8 text-center">
              About SaaaReeeSUR
            </h2>
            <div className="text-lg text-piano-dark/80 leading-relaxed space-y-6">
              <p>
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
              <p>
                Whether you're starting your musical journey or looking to refine your skills, SaaaReeeSUR 
                provides a supportive and inspiring environment to nurture your talent and passion for piano.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Reema Gupta Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold text-piano-dark mb-8">
              Meet Reema Gupta
            </h2>
            <Card className="p-8 bg-piano-cream/50">
              <CardContent className="p-0">
                <div className="w-24 h-24 bg-piano-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <Music className="w-12 h-12 text-piano-dark" />
                </div>
                <p className="text-lg text-piano-dark leading-relaxed">
                  Reema Gupta is a musician & pianist who has been teaching piano for over 10 years. Her 
                  vision is to create a music course where each individual can discover their musical 
                  personality and enhance it with her guidance. She offers students the opportunity to sit for 
                  international exams like Trinity and ABRSM, providing a clear vision of their musical 
                  journey upon completion of the grades.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-piano-dark mb-16 text-center">
            Our Approach
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-piano-gold/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-piano-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-piano-dark mb-3">
                  Personalized Teaching
                </h3>
                <p className="text-piano-dark/70">
                  Each lesson is tailored to the individual student's needs, learning style, and musical goals.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-piano-gold/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-piano-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-piano-dark mb-3">
                  International Standards
                </h3>
                <p className="text-piano-dark/70">
                  Preparation for Trinity and ABRSM examinations with proven track record of success.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-piano-gold/10 rounded-full flex items-center justify-center mb-4">
                  <Music className="w-8 h-8 text-piano-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-piano-dark mb-3">
                  Balanced Curriculum
                </h3>
                <p className="text-piano-dark/70">
                  Combining classical techniques with modern approaches for comprehensive musical education.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-piano-gold/10 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-piano-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-piano-dark mb-3">
                  Passionate Environment
                </h3>
                <p className="text-piano-dark/70">
                  Creating a supportive and inspiring atmosphere where musical passion can flourish.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;