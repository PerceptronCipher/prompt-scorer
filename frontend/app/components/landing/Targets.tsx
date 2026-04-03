// import { CheckCircle2 } from 'lucide-react'

// const targets = [
//   {
//     role: 'Content Creators',
//     benefit: 'Better prompts for content generation',
//   },
//   { role: 'Developers', benefit: 'Cleaner instructions for code generation' },
//   { role: 'Students', benefit: 'Improve research queries' },
//   { role: 'Marketers', benefit: 'Optimize copy prompts' },
//   { role: 'Designers', benefit: 'Generate clearer design briefs' },
// ]

// export default function Targets() {
//   return (
//     <section className='py-20 px-6 max-w-4xl mx-auto text-center'>
//       <h2 className='text-[#AE61FF] font-black text-xs uppercase tracking-[0.3em] mb-12'>
//         Built for Anyone Using AI
//       </h2>
//       <div className='bg-white border border-slate-100 rounded-[2rem] p-10 shadow-xl shadow-slate-100/50'>
//         <ul className='grid grid-cols-1 md:grid-cols-2 gap-6 text-left'>
//           {targets.map((item, idx) => (
//             <li key={idx} className='flex items-start gap-4 group'>
//               <CheckCircle2 className='w-5 h-5 text-[#AE61FF] mt-0.5' />
//               <p className='text-sm font-medium text-slate-600'>
//                 <span className='font-black text-[#1E1E1E]'>{item.role}</span>
//                 <span className='mx-2 opacity-30'>•</span>
//                 {item.benefit}
//               </p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   )
// }

'use client'

import React from 'react'
import { CheckCircle2 } from 'lucide-react'

const targets = [
  {
    role: 'Content Creators',
    benefit: 'Better prompts for content generation',
  },
  { role: 'Developers', benefit: 'Cleaner instructions for code generation' },
  { role: 'Students', benefit: 'Improve research queries' },
  { role: 'Marketers', benefit: 'Optimize copy prompts' },
  { role: 'Designers', benefit: 'Generate clearer design briefs' },
]

export default function Targets() {
  return (
    /* Aligned with the Navbar/Hero margins: px-8 to lg:px-16 */
    <section id='features' className='w-full bg-white py-4 px-8 md:px-16 lg:px-32'>
      <div className='max-w-[1440px] mx-auto'>
        {/* Sub-header matching the premium small-caps style */}
        <h2 className='text-[#AE61FF] font-black text-[12px] uppercase tracking-[0.3em] mb-16 text-center lg:text-left'>
          Built for Anyone Using AI
        </h2>

        {/* The Container: 
           Removed the heavy shadow for a cleaner 'Border-only' professional look 
           consistent with high-end SaaS documentation sections.
        */}
        <div className='bg-white border-[0.5px] border-slate-200 rounded-2xl overflow-hidden'>
          <ul className='flex flex-col'>
            {targets.map((item, idx) => (
              <li
                key={idx}
                className={`
                  flex items-center gap-4 p-8 transition-colors hover:bg-slate-50/50
                  ${idx !== targets.length - 1 ? 'border-b-[0.5px] border-slate-100' : ''}
                `}
              >
                <div className='bg-[#AE61FF]/10 p-2 rounded-lg shrink-0'>
                  <CheckCircle2 className='w-5 h-5 text-[#AE61FF]' />
                </div>

                <div className='flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-4'>
                  <span className='font-[900] text-[#111111] text-lg lg:text-xl tracking-tight shrink-0'>
                    {item.role}
                  </span>
                  <span className='hidden lg:block text-slate-300 font-light text-2xl'>
                    —
                  </span>
                  <span className='text-[15px] lg:text-[17px] text-slate-500 font-medium'>
                    {item.benefit}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}