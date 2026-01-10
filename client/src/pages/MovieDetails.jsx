import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dummyDateTimeData, dummyShowsData } from '../assets/assets'
import { StarIcon, Heart, PlayCircleIcon } from 'lucide-react'
import BlurCircle from '../components/BlurCircle'
import timeFormat from '../lib/timeFormat'

const MovieDetails = () => {
  const { id } = useParams()
  const [show, setShow] = useState(null)

  const getShow = async () => {
    const foundShow = dummyShowsData.find(show => show.id.toString() === id)
    if (foundShow) {
      setShow({
        movie: foundShow,
        dateTime: dummyDateTimeData
      })
    }
  }

  useEffect(() => {
    getShow()
    window.scrollTo(0, 0)
  }, [id])

  return show ? (
    <div className="px-6 md:px-16 lg:px-36 py-20 mt-20 min-h-screen">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        
        {/* Poster Image */}
        <img
          src={show.movie.poster_path}
          alt={show.movie.title}
          className="w-64 h-96 object-cover rounded-xl shadow-2xl border border-white/10"
        />

        <div className="relative flex-1 w-full">
          <BlurCircle top="-50px" left="-50px" />
          
          <p className="text-primary font-medium tracking-widest uppercase text-sm">
            {show.movie.original_language === 'en' ? 'ENGLISH' : show.movie.original_language}
          </p>
          
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            {show.movie.title}
          </h1>

          <div className='flex items-center gap-2 text-gray-300 mb-6'>
            <StarIcon className='w-5 h-5 text-primary fill-primary'/>
            <span className="font-semibold text-white">{show.movie.vote_average.toFixed(1)}</span> 
            <span className="text-gray-400">User Rating</span>
          </div>

          <p className='text-gray-300 text-lg leading-relaxed max-w-2xl mb-6'>
            {show.movie.overview}
          </p>

          {/* Runtime and Genre Section */}
          <div className="flex items-center gap-3 text-gray-400 font-medium mb-8">
            <span>{timeFormat(show.movie.runtime)}</span>
            <span>•</span>
            <span>{show.movie.genres.map(genre => genre.name).join(", ")}</span>
            <span>•</span>
            <span>{show.movie.release_date.split("-")[0]}</span>
          </div>

          {/* Action Buttons Section - Moved into its own block */}
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 px-10 py-3 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-900 transition cursor-pointer active:scale-95">
              <PlayCircleIcon className="w-5 h-5" />
              Watch Trailer
            </button>

            <a
              href="#dateselect"
              className="px-10 py-3 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-dull transition cursor-pointer active:scale-95 text-center"
            >
              Buy Tickets
            </a>

            <button className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full hover:bg-gray-900 transition cursor-pointer active:scale-95">
              <Heart className="w-5 h-5" />
            </button>
          </div>
          
        </div>
      </div>
      <p className='text-lg font-medium mt-20'>
        Your Favourite Cast
      </p>
      <div className='overflow-x-auto no-scrollbar mt-8 pb-4'>
        <div className='flex items-center gap-4 w-max px-4'>
          {show.movie.casts.slice(0,12).map((cast,index)=>(
            <div key={index} className='flex flex-col items-center text-center '>
                 <img src={cast.profile_path} alt="" className='rounded-full h-20 md:h-20 aspect-square object-cover'/>
                 <p className='font-medium text-xs mt-3'>
                  {cast.name}
                 </p>
            </div>
          ))}

        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center h-screen">
      <BlurCircle bottom='30' left='-200'/>
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary"></div>
    </div>
  )
}

export default MovieDetails