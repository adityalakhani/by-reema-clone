/*
 * PATH: src/pages/Gallery.tsx
 */
import { useState, useEffect } from "react";
import pianoHero from "@/assets/piano-hero.jpg";
import collage_one from '@/assets/IMG_9740.jpg';
import collage_two from '@/assets/IMG_9944.jpg';
import collage_three from '@/assets/67.jpg';

// Custom SVG Play Icon
const PlayIcon = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
    className="w-20 h-20 drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
  >
    <circle cx="40" cy="40" r="38.5" fill="white" stroke="currentColor" strokeWidth="1" className="text-piano-gold" />
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
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // 12 images matching the reference website
  const galleryImages = [
    { id: 1, src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop", alt: "Piano lesson" },
    { id: 2, src: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&h=400&fit=crop", alt: "Piano recital" },
    { id: 3, src: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=600&h=400&fit=crop", alt: "Practice room" },
    { id: 4, src: "https://images.unsplash.com/photo-1571974599782-87624638275c?w=600&h=400&fit=crop", alt: "Music theory" },
    { id: 5, src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop", alt: "Group class" },
    { id: 6, src: "https://images.unsplash.com/photo-1460036521480-ff49c08c2781?w=600&h=400&fit=crop", alt: "Exam prep" },
    { id: 7, src: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=400&fit=crop", alt: "Student performance" },
    { id: 8, src: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=600&h=400&fit=crop", alt: "Piano keys" },
    { id: 9, src: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&h=400&fit=crop", alt: "Music sheets" },
    { id: 10, src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop", alt: "Piano studio" },
    { id: 11, src: "https://images.unsplash.com/photo-1571974599782-87624638275c?w=600&h=400&fit=crop", alt: "Concert hall" },
    { id: 12, src: "https://images.unsplash.com/photo-1460036521480-ff49c08c2781?w=600&h=400&fit=crop", alt: "Piano lesson" }
  ];

  const videoData = [
    { id: 1, src: "https://firebasestorage.googleapis.com/v0/b/reema-music-school.appspot.com/o/video-reviews%2F10.mp4?alt=media", thumbnail: collage_one },
    { id: 2, src: "https://firebasestorage.googleapis.com/v0/b/reema-music-school.appspot.com/o/video-reviews%2F2.mp4?alt=media", thumbnail: collage_two },
    { id: 3, src: "https://firebasestorage.googleapis.com/v0/b/reema-music-school.appspot.com/o/video-reviews%2F9.mp4?alt=media", thumbnail: collage_three },
    { id: 4, src: "https://firebasestorage.googleapis.com/v0/b/reema-music-school.appspot.com/o/video-reviews%2F7.mp4?alt=media", thumbnail: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&h=400&fit=crop" },
    { id: 5, src: "https://firebasestorage.googleapis.com/v0/b/reema-music-school.appspot.com/o/video-reviews%2F1.mp4?alt=media", thumbnail: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=600&h=400&fit=crop" },
    { id: 6, src: "https://firebasestorage.googleapis.com/v0/b/reema-music-school.appspot.com/o/video-reviews%2F8.mp4?alt=media", thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=400&fit=crop" },
    { id: 7, src: "https://firebasestorage.googleapis.com/v0/b/reema-music-school.appspot.com/o/video-reviews%2F3.mp4?alt=media", thumbnail: "https://images.unsplash.com/photo-1460036521480-ff49c08c2781?w=600&h=400&fit=crop" },
    { id: 8, src: "https://firebasestorage.googleapis.com/v0/b/reema-music-school.appspot.com/o/video-reviews%2F5.mp4?alt=media", thumbnail: "https://images.unsplash.com/photo-1571974599782-87624638275c?w=600&h=400&fit=crop" },
    { id: 9, src: "https://firebasestorage.googleapis.com/v0/b/reema-music-school.appspot.com/o/video-reviews%2F6.mp4?alt=media", thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${pianoHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-piano-dark/90 via-piano-dark/70 to-piano-dark/50"></div>
        <div className="container mx-auto px-40 h-full flex flex-col justify-center items-start text-left relative z-10 space-y-4">
          <h1
            className={`font-serif text-5xl md:text-6xl text-[#ff6363] mb-6 tracking-[6px] transition-all duration-1000 ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Gallery
          </h1>
          <p
            className={`text-xl md:text-xl text-white max-w-2xl font-light leading-relaxed tracking-[6px] transition-all duration-1000 ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            Explore our beautiful learning environment and see our students in action
          </p>
        </div>
      </section>

      {/* Photo Gallery Grid - Styled like reference website */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Title matching reference style */}
          <div className="mb-12">
            <h2 className="font-serif text-4xl text-[#2a2a2a] mb-2">
              Image Gallery
            </h2>
            <div className="w-16 h-1 bg-[#ab8a62]"></div>
          </div>

          {/* 4 columns grid matching reference */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="group cursor-pointer overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-500"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery Grid */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          {/* Title matching reference style */}
          <div className="mb-12">
            <h2 className="font-serif text-4xl text-[#2a2a2a] mb-2">
              Video Gallery
            </h2>
            <div className="w-16 h-1 bg-[#ab8a62]"></div>
          </div>

          {/* 3 columns grid for videos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoData.map((video, index) => (
              <div
                key={video.id}
                className="group cursor-pointer overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-500"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedVideo(video.src)}
              >
                <div className="relative aspect-[9/16]">
                  <video
                    src={video.src}
                    className="w-full h-full object-cover"
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
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-full animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] shadow-2xl"
              loading="lazy"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 w-12 h-12 bg-white text-[#2a2a2a] rounded-full flex items-center justify-center text-2xl font-bold hover:scale-110 hover:rotate-90 transition-all duration-300 shadow-lg"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Modal for video player */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative w-full max-w-md animate-scale-in">
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full max-h-[80vh] shadow-2xl"
            />
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-4 -right-4 w-12 h-12 bg-white text-[#2a2a2a] rounded-full flex items-center justify-center text-2xl font-bold hover:scale-110 hover:rotate-90 transition-all duration-300 shadow-lg"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;