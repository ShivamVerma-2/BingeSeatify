import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dummyDateTimeData, dummyShowsData } from '../assets/assets'
import { StarIcon } from 'lucide-react'
import BlurCircle from '../components/BlurCircle' // Added Import
import timeFormat from '../lib/timeFormat' // Ensure this helper exists

const MovieDetails = () => {
  const { id } = useParams()
  const [show, setShow] = useState(null)

  const getShow = async () => {
    // FIX: Convert show.id to string to match the URL param id
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
    // Optional: Scroll to top when page opens
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

        <div className="relative flex-1">
          <BlurCircle top="-50px" left="-50px" />
          
          <p className="text-primary font-medium tracking-widest uppercase text-sm">
            {show.movie.original_language === 'en' ? 'ENGLISH' : show.movie.original_language}
          </p>
          
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            {show.movie.title}
          </h1>

          {/* Rating - Fixed typo: toFixed(1) */}
          <div className='flex items-center gap-2 text-gray-300 mb-6'>
            <StarIcon className='w-5 h-5 text-primary fill-primary'/>
            <span className="font-semibold text-white">{show.movie.vote_average.toFixed(1)}</span> 
            <span className="text-gray-400">User Rating</span>
          </div>

          <p className='text-gray-300 text-lg leading-relaxed max-w-2xl mb-6'>
            {show.movie.overview}
          </p>

          <div className="flex flex-wrap items-center gap-3 text-gray-400 font-medium">
            <span>{timeFormat(show.movie.runtime)}</span>
            <span>•</span>
            <span>{show.movie.genres.map(genre => genre.name).join(", ")}</span>
            <span>•</span>
            <span>{show.movie.release_date.split("-")[0]}</span>
          </div>
          
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary"></div>
    </div>
  )
}

export default MovieDetails