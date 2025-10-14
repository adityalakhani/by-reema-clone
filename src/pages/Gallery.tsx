/*
 * PATH: src/pages/Gallery.tsx
 */
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import pianoHero from "@/assets/piano-hero.jpg";
import collage_one from '@/assets/IMG_9740.jpg';
import collage_two from '@/assets/IMG_9944.jpg';
import collage_three from '@/assets/67.jpg';

// Custom SVG Play Icon to match the inspiration
const PlayIcon = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
    className="w-20 h-20 drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
  >
    {/* White circle with border */}
    <circle cx="40" cy="40" r="38.5" fill="white" stroke="currentColor" strokeWidth="1" className="text-piano-gold" />

    {/* Transparent triangle with gold stroke */}
    <path
      d="M53 40L33.5 51.2583V28.7417L53 40Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      className="text-piano-gold"
    />
  </svg>
);

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const galleryImages = [
    { id: 1, src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop", alt: "Piano lesson in progress", title: "Individual Piano Lesson" },
    { id: 2, src: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&h=400&fit=crop", alt: "Piano recital performance", title: "Student Recital Performance" },
    { id: 3, src: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=600&h=400&fit=crop", alt: "Piano practice room", title: "Practice Room" },
    { id: 4, src: "https://images.unsplash.com/photo-1571974599782-87624638275c?w=600&h=400&fit=crop", alt: "Music theory lesson", title: "Music Theory Session" },
    { id: 5, src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop", alt: "Group piano class", title: "Group Piano Class" },
    { id: 6, src: "https://images.unsplash.com/photo-1460036521480-ff49c08c2781?w=600&h=400&fit=crop", alt: "Piano examination", title: "International Exam Preparation" }
  ];

  const videoData = [
    { id: 1, src: "https://firebasestorage.googleapis.com/v0/b/reema-music-school.appspot.com/o/video-reviews%2F10.mp4?alt=media", title: "Student Testimonial 1", thumbnail: collage_one },
    { id: 2, src: "https://firebasestorage.googleapis.com/v0/b/reema-music-school.appspot.com/o/video-reviews%2F2.mp4?alt=media", title: "Student Testimonial 2", thumbnail: collage_two },
    { id: 3, src: "https://firebasestorage.googleapis.com/v0/b/reema-music-school.appspot.com/o/video-reviews%2F9.mp4?alt=media", title: "Student Testimonial 3", thumbnail: collage_three },
    { id: 4, src: "https://firebasestorage.googleapis.com/v0/b/reema-music-school.appspot.com/o/video-reviews%2F7.mp4?alt=media", title: "Student Performance", thumbnail: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&h=400&fit=crop" },
    { id: 5, src: "https://firebasestorage.googleapis.com/v0/b/reema-music-school.appspot.com/o/video-reviews%2F1.mp4?alt=media", title: "Learning Environment", thumbnail: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=600&h=400&fit=crop" },
    { id: 6, src: "https://firebasestorage.googleapis.com/v0/b/reema-music-school.appspot.com/o/video-reviews%2F8.mp4?alt=media", title: "Student Testimonial 4", thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=400&fit=crop" },
    { id: 7, src: "https://firebasestorage.googleapis.com/v0/b/reema-music-school.appspot.com/o/video-reviews%2F3.mp4?alt=media", title: "Advanced Techniques", thumbnail: "https://images.unsplash.com/photo-1460036521480-ff49c08c2781?w=600&h=400&fit=crop" },
    { id: 8, src: "https://firebasestorage.googleapis.com/v0/b/reema-music-school.appspot.com/o/video-reviews%2F5.mp4?alt=media", title: "Recital Highlights", thumbnail: "https://images.unsplash.com/photo-1571974599782-87624638275c?w=600&h=400&fit=crop" },
    { id: 9, src: "https://firebasestorage.googleapis.com/v0/b/reema-music-school.appspot.com/o/video-reviews%2F6.mp4?alt=media", title: "Student Testimonial 5", thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop" }
  ];

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${pianoHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-piano-dark/90 via-piano-dark/70 to-piano-dark/50"></div>
        <div className="container mx-auto px-40 h-full flex flex-col justify-center items-start text-left relative z-10 space-y-4">
          <h1
            className={`font-serif text-5xl md:text-6xl text-[#ff6363] mb-6 tracking-[6px] transition-all duration-1000 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            style={{ transitionDelay: "100ms" }}
          >
            Gallery
          </h1>
          <p
            className={`text-xl md:text-xl text-white max-w-2xl font-light leading-relaxed tracking-[6px] transition-all duration-1000 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            style={{ transitionDelay: "300ms" }}
          >
            Explore our beautiful learning environment and see our students in action
          </p>
        </div>
      </section>

      {/* Photo Gallery Grid */}
      <section className="py-24 bg-[#FFFFFF80]">
        <div className="container mx-auto px-4">
          <h2 className="text-[#954C2E] font-serif text-5xl md:text-5xl mb-5">Image Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={`group cursor-pointer overflow-hidden rounded-lg shadow-soft hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 stagger-animation`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative overflow-hidden">
                  <img src={image.src} alt={image.alt} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
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

      {/* Video Gallery Grid */}
      <section className="py-24 bg-[#1b1b1b]">
        <div className="container mx-auto px-4">
          <h2 className="text-[#954C2E] font-serif text-5xl md:text-5xl mb-5">Video Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoData.map((video, index) => (
              <div
                key={video.id}
                className={`group cursor-pointer overflow-hidden shadow-soft hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 stagger-animation`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setSelectedVideo(video.src)}
              >
                <div className="relative">
                  <video
                    src={video.src}
                    className="w-full h-[36rem] object-cover object-center"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                    <PlayIcon />
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
          className="fixed inset-0 bg-piano-dark/95 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Enlarged view" className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 w-12 h-12 bg-piano-gold text-piano-dark rounded-full flex items-center justify-center text-2xl font-bold hover:scale-110 hover:rotate-90 transition-all duration-300 shadow-lg"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Modal for video player */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-piano-dark/95 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative w-full max-w-md animate-scale-in">
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full max-h-[80vh] rounded-lg shadow-2xl"
            />

            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-4 -right-4 w-12 h-12 bg-piano-gold text-piano-dark rounded-full flex items-center justify-center text-2xl font-bold hover:scale-110 hover:rotate-90 transition-all duration-300 shadow-lg"
            >
              &times;
            </button>
          </div>
        </div>
      )}


      {/* Call to Action */}
      {/* <section className="py-24 bg-gradient-to-br from-piano-dark via-piano-dark to-black text-piano-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,215,0,0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
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
      </section> */}
    </div>
  );
};

export default Gallery;