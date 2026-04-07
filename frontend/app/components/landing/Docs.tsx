'use client'

import React from 'react'
import { PencilLine, FileSignature, Zap } from 'lucide-react' 

const docs = [
  { title: 'Prompt writing guides', icon: PencilLine }, 
  { title: 'Before vs after examples', icon: FileSignature }, 
  { title: 'Best practices', icon: Zap },
]

export default function Docs() {
  return (
    /* The overall background of the screen */
    <section id='docs' className='w-full py-4 px-6 md:px-12'>
      <div className='max-w-5xl mx-auto bg-[#EBEEF0] rounded-3xl p-10 md:p-16'>
        {/* Header Section - Explicitly Center Aligned per reference image */}
        <div className='mb-16 md:mb-20 text-center'>
          <h2 className='text-4xl md:text-5xl font-[1000] text-[#111111] tracking-tight mb-3'>
            Docs
          </h2>
          <p className='text-[#111111]/70 font-medium text-lg md:text-xl'>
            Learn Prompt Engineering
          </p>
        </div>

        {/* Icons Grid - Items are centered within their grid cells */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-center'>
          {docs.map((doc, idx) => (
            <div
              key={idx}
              className='flex flex-col items-center group cursor-pointer'
            >
              {/* The Blue Circle - Matched to image scale and colors */}
              <div
                className='w-28 h-28 md:w-32 md:h-32 bg-[#C2DBF6] rounded-full flex items-center justify-center mb-8 
                           transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-1
                           shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),_0_10px_30px_-5px_rgba(0,0,0,0.06)]'
              >
                {/* Icons - Scaled up for clarity, using stroke-1 to match image weight */}
                <doc.icon className='w-12 h-12 text-[#111111] stroke-[1]' />
              </div>

              {/* Title - Title case and standard tracking (not uppercase) per image */}
              <span className='text-lg md:text-xl font-medium text-[#111111] text-center leading-tight max-w-[200px]'>
                {doc.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
