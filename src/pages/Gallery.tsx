import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import pianoHero from "@/assets/piano-hero.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Gallery images
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      alt: "Piano lesson in progress",
      title: "Individual Piano Lesson"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&h=400&fit=crop",
      alt: "Piano recital performance",
      title: "Student Recital Performance"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=600&h=400&fit=crop",
      alt: "Piano practice room",
      title: "Practice Room"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1571974599782-87624638275c?w=600&h=400&fit=crop",
      alt: "Music theory lesson",
      title: "Music Theory Session"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      alt: "Group piano class",
      title: "Group Piano Class"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1460036521480-ff49c08c2781?w=600&h=400&fit=crop",
      alt: "Piano examination",
      title: "International Exam Preparation"
    }
  ];

  return (
    <div className="min-h-screen ">
      {/* Hero Section with Background */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${pianoHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-piano-dark/90 via-piano-dark/70 to-piano-dark/50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className={`font-serif text-5xl md:text-6xl  text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Gallery
          </h1>
          <p className={`text-xl md:text-2xl text-white/90 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Explore our beautiful learning environment and see our students in action
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={`group cursor-pointer overflow-hidden rounded-lg shadow-soft hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 stagger-animation`}
                style={{animationDelay: `${index * 150}ms`}}
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-piano-dark/90 via-piano-dark/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white font-serif text-xl font-semibold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {image.title}
                    </h3>
                    <div className="w-12 h-1 bg-piano-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-piano-dark/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full animate-scale-in">
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-full rounded-lg shadow-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 w-12 h-12 bg-piano-gold text-piano-dark rounded-full flex items-center justify-center text-2xl  hover:scale-110 hover:rotate-90 transition-all duration-300 shadow-lg"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-piano-dark via-piano-dark to-black text-piano-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,215,0,0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl  mb-6">
            Ready to Create Your Own Musical Journey?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-piano-cream/90 max-w-3xl mx-auto">
            Join our community of passionate musicians and discover your potential
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

export default Gallery;