import React, { useState, useEffect } from 'react'
import { dummyTrailers } from '../assets/assets'
import ReactPlayer from 'react-player' // Specific import for YouTube
import BlurCircle from './BlurCircle'
import { PlayCircleIcon } from 'lucide-react'

const Trailers = () => {
  // Initialize with the first trailer from assets
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0])
  const [isLoaded, setIsLoaded] = useState(false)

  // Ensure component is mounted to prevent hydration errors
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isLoaded) return null

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">
      <p className="text-gray-300 font-medium text-lg max-w-[960px] mx-auto mb-6">
        Trailers
      </p>

      <div className="relative max-w-[960px] mx-auto">
        <BlurCircle top="-100px" right="-100px" />
        
        {/* Responsive Player Wrapper */}
        <div className="relative pt-[56.25%] rounded-xl overflow-hidden bg-black/50 border border-white/10">
    <ReactPlayer
  key={currentTrailer?.videoUrl} // Forces re-mount when trailer changes
  url={currentTrailer?.videoUrl}
  playing={true} 
  muted={true}      // REQUIRED: Fixes the NotAllowedError
  controls={true}   // Shows YouTube's own play/volume buttons
  width="100%"
  height="100%"
  style={{ position: 'absolute', top: 0, left: 0 }}
  config={{
    youtube: {
      playerVars: { 
        autoplay: 1,
        modestbranding: 1,
        rel: 0 
      }
    }
  }}
  onReady={() => console.log("Video is ready to play")}
  onError={(e) => console.error("YouTube Load Error:", e)}
/>
        </div>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12 max-w-[960px] mx-auto'>
        {dummyTrailers.map((trailer, index) => (
          <div 
            key={index} 
            className={`relative rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 ${currentTrailer?.videoUrl === trailer.videoUrl ? 'ring-2 ring-primary opacity-100' : 'opacity-60 hover:opacity-100'}`}
            onClick={() => {
                setCurrentTrailer(trailer);
                window.scrollTo({ top: 500, behavior: 'smooth' }); // Adjust scroll to player
            }}
          >
            <img 
              src={trailer.image} 
              alt="trailer thumbnail" 
              className='w-full h-24 md:h-32 object-cover'
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <PlayCircleIcon 
                  strokeWidth={1.5} 
                  className="w-8 h-8 md:w-10 md:h-10 text-white"
                />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trailers