import { useState, useEffect } from "react";
import pianoHero from "@/assets/piano-hero.jpg";

// Import your new local gallery images
import galleryImg1 from "@/assets/gallery/1.jpg";
import galleryImg3 from "@/assets/gallery/3.jpg";
import galleryImg9 from "@/assets/gallery/9.jpg";
import galleryImg11 from "@/assets/gallery/11.jpg";
import galleryImg9897 from "@/assets/gallery/IMG_9897.jpg";
import galleryImg9905 from "@/assets/gallery/IMG_9905.jpg";
import galleryImg9910 from "@/assets/gallery/IMG_9910.jpg";
import galleryImg9913 from "@/assets/gallery/IMG_9913.jpg";
import galleryImg9919 from "@/assets/gallery/IMG_9919.jpg";

// Import video thumbnails
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

    const galleryImages = [
        { id: 1, src: galleryImg1, alt: "Student playing piano" },
        { id: 2, src: galleryImg3, alt: "Piano keys close-up" },
        { id: 3, src: galleryImg9, alt: "Music lesson" },
        { id: 4, src: galleryImg11, alt: "Music recital" },
        { id: 5, src: galleryImg9897, alt: "Student with teacher" },
        { id: 6, src: galleryImg9905, alt: "Piano performance" },
        { id: 7, src: galleryImg9910, alt: "Young student learning" },
        { id: 8, src: galleryImg9913, alt: "Music class in session" },
        { id: 9, src: galleryImg9919, alt: "Piano details" },
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
                <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center relative z-10">
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
            <section className="py-16 bg-[#EFE4D2]">
                <div className="container mx-auto px-4">
                    <div className="mb-12">
                        <h2 className="font-serif text-4xl text-[#954C2E] mb-2">
                            Image Gallery
                        </h2>
                        <div className="w-16 h-1 bg-[#ab8a62]"></div>
                    </div>

                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
                        {galleryImages.map((image, index) => (
                            <div
                                key={image.id}
                                className="group cursor-pointer overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-500 mb-4 break-inside-avoid"
                                style={{ animationDelay: `${index * 50}ms` }}
                                onClick={() => setSelectedImage(image.src)}
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full group-hover:scale-110 transition-transform duration-700 ease-out"
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
            <section className="py-16 bg-[#1b1b1b]">
                <div className="container mx-auto px-4">
                    <div className="mb-12">
                        <h2 className="font-serif text-4xl text-[#954C2E] mb-2">
                            Video Gallery
                        </h2>
                        <div className="w-16 h-1 bg-[#ab8a62]"></div>
                    </div>
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
                            className="absolute -top-4 -right-4 w-12 h-12 bg-white text-[#954C2E] rounded-full flex items-center justify-center text-2xl font-bold hover:scale-110 hover:rotate-90 transition-all duration-300 shadow-lg"
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
                    <div className="relative w-full max-w-md animate-scale-in" onClick={(e) => e.stopPropagation()}>
                        <video
                            src={selectedVideo}
                            controls
                            autoPlay
                            className="w-full max-h-[80vh] shadow-2xl"
                        />
                        <button
                            onClick={() => setSelectedVideo(null)}
                            className="absolute -top-4 -right-4 w-12 h-12 bg-white text-[#954C2E] rounded-full flex items-center justify-center text-2xl font-bold hover:scale-110 hover:rotate-90 transition-all duration-300 shadow-lg"
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