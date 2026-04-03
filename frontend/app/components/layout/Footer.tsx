// 'use client'

// import React from 'react'
// // Using generic icons to bypass the "Missing Brand Export" errors
// import {
//   Link as LinkIcon,
//   Share2,
//   MessageSquare,
//   Mail,
//   Globe,
// } from 'lucide-react'

// export default function Footer() {
//   return (
//     <footer className='bg-[#D1E4FF] pt-20 pb-10 px-10 border-t border-black/5'>
//       <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12'>
//         {/* Brand Section */}
//         <div className='space-y-6'>
//           <h2 className='text-4xl font-black text-[#1E1E1E] tracking-tighter'>
//             ReplyAI
//           </h2>
//           <div className='flex gap-4'>
//             {/* Using standard icons: Link, Share, and MessageSquare as stand-ins */}
//             {[LinkIcon, Share2, MessageSquare].map((Icon, i) => (
//               <a
//                 key={i}
//                 href='#'
//                 className='w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1E1E1E] hover:bg-[#AE61FF] hover:text-white transition-all shadow-sm'
//               >
//                 <Icon size={18} />
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Quick Links Section */}
//         <div className='grid grid-cols-1 gap-4'>
//           <h4 className='font-black text-[#1E1E1E] uppercase text-[10px] tracking-[0.2em] opacity-50'>
//             Quick Links
//           </h4>
//           <div className='flex flex-col gap-3'>
//             {['Features', 'How It Works', 'Contact', 'Use Case'].map((link) => (
//               <a
//                 key={link}
//                 href='#'
//                 className='text-[#1E1E1E] hover:text-[#AE61FF] font-bold text-sm transition-colors'
//               >
//                 {link}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Bottom Copyright */}
//       <div className='mt-20 pt-8 border-t border-[#1E1E1E]/5 text-center'>
//         <p className='text-[10px] font-bold text-slate-500 uppercase tracking-widest'>
//           © {new Date().getFullYear()} ReplyAI Inc. All Rights Reserved.
//         </p>
//       </div>
//     </footer>
//   )
// }

'use client'

import React from 'react'
import { FaLinkedinIn, FaInstagram, FaXTwitter } from 'react-icons/fa6' // Using Font Awesome 6 for the latest X logo

export default function Footer() {
  const quickLinks = ['Features', 'How It Works', 'Contact', 'Use Case']

  return (
    <footer className='w-full bg-[#BDD6F0] pt-24 pb-12 px-8 md:px-16 lg:px-32'>
      <div className='max-w-[1440px] mx-auto flex flex-col items-center text-center'>
        {/* Main Footer Content Grid */}
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-0 items-start mb-24'>
          {/* LEFT: Brand & Socials */}
          <div className='flex flex-col items-center md:items-start space-y-8'>
            <h2 className='text-5xl md:text-6xl font-serif text-[#111111] tracking-tight'>
              ReplyAI
            </h2>

            <div className='flex gap-4'>
              {/* LinkedIn */}
              <a
                href='#'
                className='w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#0077B5] hover:scale-110 transition-transform shadow-sm'
                aria-label='LinkedIn'
              >
                <FaLinkedinIn size={20} />
              </a>

              {/* Instagram */}
              <a
                href='#'
                className='w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#E4405F] hover:scale-110 transition-transform shadow-sm'
                aria-label='Instagram'
              >
                <FaInstagram size={20} />
              </a>

              {/* X (formerly Twitter) */}
              <a
                href='#'
                className='w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#000000] hover:scale-110 transition-transform shadow-sm'
                aria-label='X (Twitter)'
              >
                <FaXTwitter size={20} />
              </a>
            </div>
          </div>

          {/* RIGHT: Quick Links */}
          <div className='flex flex-col items-center md:items-center space-y-4'>
            <h4 className='font-serif text-2xl md:text-3xl text-[#111111] mb-2'>
              Quick Links
            </h4>
            <nav className='flex flex-col space-y-3'>
              {quickLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className='text-[#444444] hover:text-black text-lg transition-colors font-medium'
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* BOTTOM: Copyright Section */}
        <div className='w-full border-t border-black/5 pt-10'>
          <p className='text-sm md:text-base text-[#444444]/70 font-serif italic'>
            @ {new Date().getFullYear()} ReplyAI Inc. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}