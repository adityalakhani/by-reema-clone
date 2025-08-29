import { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Placeholder images - in a real app these would be actual photos
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
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl font-bold text-piano-dark mb-6">Gallery</h1>
          <p className="text-xl text-piano-dark/70 max-w-3xl mx-auto">
            Explore our beautiful learning environment and see our students in action
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-piano-gold/0 group-hover:bg-piano-gold/20 transition-colors duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-piano-dark/80 to-transparent p-4">
                    <h3 className="text-piano-cream font-serif text-lg font-semibold">
                      {image.title}
                    </h3>
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
          className="fixed inset-0 bg-piano-dark/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-full rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-piano-cream hover:text-piano-gold text-2xl"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-piano-dark text-piano-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">
            Ready to Create Your Own Musical Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our community of passionate musicians and discover your potential
          </p>
        </div>
      </section>
    </div>
  );
};

export default Gallery;