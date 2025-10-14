/*
 * PATH: src/pages/FAQ.tsx
 */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import bg_one from "@/assets/69.jpg";
import { useEffect, useState } from "react";

const FAQ = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const faqData = [
    {
      question: "What is the ideal age to start learning piano?",
      answer: "The ideal age to start learning piano is typically around 6-7 years old, as children have developed better focus and finger dexterity by then. However, we welcome students of all ages, from young children to adults."
    },
    {
      question: "How long are the piano lessons?",
      answer: "Standard lessons are 45 to 60 minutes long, once a week. The duration can be customized based on the student's age, level, and concentration span."
    },
    {
      question: "Do I need to own a piano to start lessons?",
      answer: "Yes, having a piano or a full-sized keyboard at home is essential for regular practice. Consistent practice between lessons is crucial for progress."
    },
    {
      question: "How often should I practice?",
      answer: "We recommend practicing at least 3-4 days a week. For beginners, 20-30 minutes per session is a good start, while more advanced students may need longer."
    },
    {
      question: "Do you prepare students for examinations?",
      answer: "Yes, we prepare students for internationally recognized examinations such as those from Trinity College London and the Associated Board of the Royal Schools of Music (ABRSM)."
    },
    {
      question: "What is your teaching methodology?",
      answer: "Our teaching methodology is a blend of traditional and modern techniques. We focus on building a strong foundation in music theory and technique while keeping the lessons engaging, fun, and tailored to each student's individual goals and learning style."
    },
    {
      question: "Can adults learn to play the piano?",
      answer: "Absolutely! It's never too late to learn. We have many adult students who are successfully learning to play the piano for the first time or returning to it after many years."
    },
    {
      question: "What are your fees and payment options?",
      answer: "Please contact us directly for the most current information on our fees and payment options. We offer various packages to suit different needs."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[500px] w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg_one})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        <div className="container mx-auto px-40 h-full flex flex-col justify-center items-start text-left relative z-10 space-y-4">
          <h1 className={`font-serif text-5xl md:text-6xl text-piano-gold mb-6 transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
            Frequently Asked Questions
          </h1>
          <p className={`text-xl text-white/90 max-w-2xl transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
            Find answers to common questions about our piano lessons and policies.
          </p>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-center font-serif text-4xl md:text-5xl text-piano-dark mb-12 animate-fade-in-up">
            Your Questions Answered
          </h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="stagger-animation" style={{ animationDelay: `${index * 100}ms` }}>
                <AccordionItem value={`item-${index}`} className="border-b border-piano-light last:border-b-0 bg-piano-cream/30 rounded-lg px-6">
                  <AccordionTrigger className="text-lg text-left font-serif text-piano-dark hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-piano-dark/80 leading-relaxed pt-2">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default FAQ;