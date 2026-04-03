// 'use client'

// import React from 'react'

// export default function HeroSection() {
//   const handleScrollToTry = () => {
//     const element = document.getElementById('try-now')
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' })
//     }
//   }

//   return (
//     <section className='w-full bg-white pt-48 pb-32 px-8 md:px-16 lg:px-32'>
//       {/* Container limits the width on massive screens while keeping the content centered */}
//       <div className='max-w-[1920px] mx-auto flex flex-col md:flex-row items-center justify-between gap-16 lg:gap-28'>
//         {/* Left: Text Content - Refined for a cleaner, modern look */}
//         <div className='flex-1 max-w-2xl'>
//           <h1 className='text-4xl md:text-5xl lg:text-4xl font-extrabold text-[#111111] leading-[1.1] tracking-tight'>
//             Score Your Prompts.
//             <br />
//             Improve Your AI Results.
//           </h1>
//           <p className='mt-8 text-lg md:text-sm text-[#111111]/60 leading-relaxed max-w-[540px]'>
//             Instantly analyze your prompts for clarity, structure, and
//             effectiveness. Get actionable suggestions to make every AI
//             interaction better.
//           </p>

//           {/* Buttons: Refined to be more elegant and less "bulky" */}
//           <div className='mt-12 flex items-center gap-6 flex-wrap'>
//             {/* Primary Action - Purple Pill */}
//             <button className='bg-[#AE61FF] hover:brightness-110 active:scale-95 text-white text-[15px] font-semibold px-12 py-4 transition-all duration-300 shadow-xl shadow-[#AE61FF]/20'>
//               Analyse prompt
//             </button>

//             {/* Secondary Action - Dark Pill matching the Navbar tone */}
//             <button
//               onClick={handleScrollToTry}
//               className='bg-[#1A1A1A] hover:bg-black active:scale-95 text-white text-[15px] font-semibold px-12 py-4 transition-all duration-300'
//             >
//               Try Now
//             </button>
//           </div>
//         </div>

//         {/* Right: Graphic Elements - Pulled from the UI Layout */}
//         <div className='flex-1 flex items-center justify-center md:justify-end shrink-0'>
//           <div className='relative w-72 h-72 md:w-[450px] md:h-[450px]'>
//             {/* Soft blob background */}
//             <div className='absolute inset-0 bg-[#F2F4F7] rounded-[60%_40%_70%_30%/50%_60%_40%_50%] opacity-80' />

//             {/* Floating PROMPT badge graphic */}
//             <div className='absolute inset-0 flex items-center justify-center transform -rotate-6'>
//               <div className='bg-white border-[0.5px] border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl px-10 py-6 transform rotate-3'>
//                 <span className='font-black text-4xl md:text-5xl tracking-widest text-[#111111] select-none'>
//                   PROMPT
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'

import React from 'react'

export default function HeroSection() {
  const handleScrollToTry = () => {
    const element = document.getElementById('try-now')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    /* Margins matched to Navbar; reduced padding-top for a tighter fit */
    <section className='w-full bg-white pt-24 lg:pt-32 pb-4 px-8 md:px-16 lg:px-32 overflow-hidden'>
      <div className='max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16'>
        {/* Left: Text Content - Scaled down for LG screens */}
        <div className='flex-1 z-10'>
          <h1 className='text-4xl md:text-4xl lg:text-4xl font-[900] text-[#111111] leading-[1.1] tracking-tighter'>
            Score Your Prompts.
            <br />
            <span className='text-[#111111]'>Improve Your AI Results.</span>
          </h1>

          <p className='mt-6 text-[15px] md:text-[16px] text-[#111111]/60 leading-relaxed max-w-[440px] font-medium'>
            Instantly analyze your prompts for clarity, structure, and
            effectiveness. Get actionable suggestions to make every AI
            interaction better.
          </p>

          {/* Buttons: Rectangular & Professional Scale */}
          <div className='mt-10 flex items-center gap-4 flex-wrap'>
            <button className='bg-[#AE61FF] hover:brightness-110 active:scale-[0.98] text-white text-[12px] font-bold uppercase tracking-[0.15em] px-10 py-4 rounded-[4px] transition-all duration-300 shadow-xl shadow-[#AE61FF]/20'>
              Analyse prompt
            </button>

            <button
              onClick={handleScrollToTry}
              className='bg-[#1A1A1A] hover:bg-black active:scale-[0.98] text-white text-[12px] font-bold uppercase tracking-[0.15em] px-10 py-4 rounded-[4px] transition-all duration-300'
            >
              Try Now
            </button>
          </div>
        </div>

        {/* Right: Scaled Graphic Elements */}
        <div className='flex-1 flex items-center justify-center md:justify-end shrink-0 relative'>
          {/* Reduced from 500px to 400px for better fit */}
          <div className='relative w-72 h-72 lg:w-[400px] lg:h-[400px] flex items-center justify-center'>
            {/* Background Blob */}
            <div className='absolute inset-0 bg-[#F2F4F7] rounded-[60%_40%_70%_30%/50%_60%_40%_50%] transform scale-105 opacity-70' />

            {/* Diagonalized "PROMPT" Badge */}
            <div className='relative transform -rotate-[10deg] hover:rotate-[-5deg] transition-transform duration-700 ease-out'>
              {/* Outer Frame */}
              <div className='bg-white/40 backdrop-blur-sm border border-white/20 p-1.5 rounded-2xl shadow-xl'>
                {/* Main White Badge - Scaled font and padding */}
                <div className='bg-white border-[1px] border-slate-100 shadow-[15px_30px_60px_rgba(0,0,0,0.06)] rounded-xl px-10 py-6 flex items-center justify-center'>
                  <span className='font-[1000] text-3xl md:text-4xl lg:text-5xl tracking-[0.12em] text-[#111111] uppercase select-none'>
                    PROMPT
                  </span>
                </div>
              </div>

              {/* Subtle 3D Glow */}
              <div className='absolute -bottom-2 -right-2 w-20 h-20 bg-[#AE61FF]/10 rounded-full blur-2xl' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}