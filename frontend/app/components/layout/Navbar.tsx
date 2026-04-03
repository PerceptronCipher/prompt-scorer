// 'use client'

// import React, { useState } from 'react'
// import { Menu, X } from 'lucide-react'

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false)

//   const navLinks = [
//     { name: 'Features', href: '#features' },
//     { name: 'How it works', href: '#how-it-works' },
//     { name: 'Docs', href: '#docs' },
//   ]

//   return (
//     <nav className='fixed top-0 z-[100] w-full bg-[#1A1A1A]'>
//       {/* Container limits the massive width, creating the clean side gutters */}
//       <div className='max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 h-24 flex items-center justify-between'>
//         {/* 1. LEFT: Logo */}
//         <div className='flex-1 flex justify-start'>
//           <a
//             href='/'
//             className='font-bold text-2xl tracking-tight text-white hover:opacity-80 transition-opacity'
//           >
//             PromptScore
//           </a>
//         </div>

//         {/* 2. CENTER: Nav Links (Perfectly centered using flex-1) */}
//         <div className='hidden md:flex flex-1 justify-center gap-12 lg:gap-16'>
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className='text-[15px] font-normal text-white/90 hover:text-white transition-colors duration-200'
//             >
//               {link.name}
//             </a>
//           ))}
//         </div>

//         {/* 3. RIGHT: Try Now Button */}
//         <div className='hidden md:flex flex-1 justify-end shrink-0'>
//           <button
//             onClick={() =>
//               document
//                 .getElementById('try-now')
//                 ?.scrollIntoView({ behavior: 'smooth' })
//             }
//             /* px-20: Creates the massive horizontal stretch inside the button
//               py-3.5: Keeps the height elegant
//               rounded-full: Creates the pill shape seen in the image
//             */
//             className='bg-[#AE61FF] hover:bg-[#9b4df0] active:scale-95 text-white text-[15px] font-medium px-20 py-3.5 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(174,97,255,0.15)]'
//           >
//             Try Now
//           </button>
//         </div>

//         {/* Mobile Hamburger Icon */}
//         <div className='md:hidden flex justify-end'>
//           <button
//             className='text-white hover:text-[#AE61FF] transition-colors p-2'
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className='md:hidden absolute top-24 left-0 w-full bg-[#1A1A1A] border-b border-white/5 py-12 flex flex-col items-center justify-center gap-8 shadow-2xl animate-in fade-in slide-in-from-top-5 duration-300'>
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               onClick={() => setMenuOpen(false)}
//               className='text-lg font-normal text-white/90 hover:text-white'
//             >
//               {link.name}
//             </a>
//           ))}
//           <button
//             onClick={() => {
//               setMenuOpen(false)
//               document
//                 .getElementById('try-now')
//                 ?.scrollIntoView({ behavior: 'smooth' })
//             }}
//             className='bg-[#AE61FF] text-white text-[15px] font-medium py-4 px-20 rounded-full mt-2 w-max'
//           >
//             Try Now
//           </button>
//         </div>
//       )}
//     </nav>
//   )
// }

'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How it works', href: '#how-it-works' },
    { name: 'Docs', href: '#docs' },
  ]

  const handleScrollToTry = () => {
    setMenuOpen(false)
    const element = document.getElementById('try-now')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className='fixed top-0 z-[100] w-full bg-[#1A1A1A] h-20 md:h-24'>
      {/* Increased side margins: 
        px-8 for mobile, px-16 for tablet, and px-32 (128px) for desktop 
        to ensure elements aren't touching the screen edges.
      */}
      <div className='max-w-[1920px] mx-auto h-full px-8 md:px-16 lg:px-32 flex items-center justify-between'>
        {/* LEFT: Logo */}
        <div className='flex-1 flex justify-start'>
          <a
            href='/'
            className='font-bold text-2xl tracking-tight text-white shrink-0 hover:opacity-80 transition-opacity'
          >
            PromptScore
          </a>
        </div>

        {/* CENTER: Navigation Links */}
        <div className='hidden lg:flex flex-1 justify-center gap-12'>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className='text-[15px] text-white/70 hover:text-white transition-colors duration-200'
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* RIGHT: Reduced "Try Now" Button */}
        <div className='hidden lg:flex flex-1 justify-end'>
          <button
            onClick={handleScrollToTry}
            className='premium-pill-button relative flex items-center justify-center transition-all active:scale-95 hover:brightness-110'
            style={{
              width: '180px', // Reduced further for elegance
              height: '48px', // Reduced further
              backgroundColor: '#AE61FF',
              borderRadius: '32px',
            }}
          >
            <span className='text-white text-[14px] font-semibold'>
              Try Now
            </span>
          </button>
        </div>

        {/* HAMBURGER: Improved fit and alignment */}
        <div className='lg:hidden flex justify-end flex-1'>
          <button
            className='text-white p-2 hover:bg-white/5 rounded-lg transition-colors'
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label='Toggle Menu'
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu Overlay */}
      {menuOpen && (
        <div className='lg:hidden fixed inset-0 w-full h-screen bg-[#1A1A1A] flex flex-col items-center justify-center gap-10 animate-in fade-in duration-300 z-[101]'>
          <button
            className='absolute top-8 right-8 text-white p-2 hover:bg-white/5 rounded-full'
            onClick={() => setMenuOpen(false)}
          >
            <X size={30} />
          </button>

          <div className='flex flex-col items-center gap-8'>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className='text-2xl font-medium text-white/70 hover:text-white transition-colors'
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            className='premium-pill-button text-white text-lg font-semibold'
            style={{
              width: '220px',
              height: '54px',
              backgroundColor: '#AE61FF',
              borderRadius: '32px',
            }}
            onClick={handleScrollToTry}
          >
            Try Now
          </button>
        </div>
      )}
    </nav>
  )
}