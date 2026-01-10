import { useState, useEffect } from 'react'
import { dummyTrailers } from '../assets/assets'
import BlurCircle from './BlurCircle'
import { PlayCircleIcon } from 'lucide-react'

const TrailerPlayer = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  // Helper to extract ID: 'https://www.youtube.com/watch?v=WpW36ldAqnM' -> 'WpW36ldAqnM'
  const getYouTubeID = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  useEffect(() => {
    if (dummyTrailers.length > 0) {
      setActiveVideo(dummyTrailers[0]);
    }
  }, []);

  if (!activeVideo) return <div className="h-96 bg-black" />;

  const videoId = getYouTubeID(activeVideo.videoUrl);

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 bg-[#0a0a0a] min-h-screen text-white">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-2xl font-semibold mb-8 border-l-4 border-red-600 pl-4">
          Featured Trailers
        </h2>

        {/* MAIN VIDEO CONTAINER */}
        <div className="relative group shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <BlurCircle top="-50px" left="-50px" />
          
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/5 bg-black">
            <iframe
              key={videoId} // Forces fresh load when ID changes
              width="100%"
              height="100%"
              muted={false}
              src={`https://www.youtube.com/embed/${videoId}?autoplay=0&mute=0&rel=0&modestbranding=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* THUMBNAIL SELECTION STRATEGY */}
        <div className="mt-10">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-4">Up Next</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {dummyTrailers.map((trailer, index) => {
              const isSelected = activeVideo.videoUrl === trailer.videoUrl;
              return (
                <button
                  key={index}
                  onClick={() => {
                    setActiveVideo(trailer);
                    // window.scrollTo({ top:200 , behavior: 'smooth' });
                  }}
                  className={`group relative rounded-xl overflow-hidden transition-all duration-500 
                    ${isSelected ? 'ring-2 ring-red-600 scale-95' : 'hover:scale-105 opacity-50 hover:opacity-100'}`}
                >
                  <img 
                    src={trailer.image} 
                    alt="Thumbnail" 
                    className="w-full h-28 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay for inactive videos */}
                  {!isSelected && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <PlayCircleIcon className="w-10 h-10 text-white/80" />
                    </div>
                  )}

                  {/* Playing Indicator */}
                  {isSelected && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600 animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default TrailerPlayer;