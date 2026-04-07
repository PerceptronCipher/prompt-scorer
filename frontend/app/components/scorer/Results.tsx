// export default function Results({ score, metrics, improved }: any) {
//   return (
//     <div className='bg-[#888888] rounded-3xl p-8 text-white'>
//       <div className='flex justify-between items-end mb-8 border-b border-white/20 pb-4'>
//         <div>
//           <p className='text-xs uppercase font-bold tracking-widest opacity-80'>
//             Prompt Score
//           </p>
//           <h2 className='text-4xl font-black'>{score}/100</h2>
//         </div>
//       </div>

//       <div className='space-y-6'>
//         <MetricBar
//           label='Clarity'
//           val={metrics.clarity.score}
//           color='bg-brand-blue'
//         />
//         <MetricBar
//           label='Structure'
//           val={metrics.structure.score}
//           color='bg-brand-coral'
//         />
//         <MetricBar label='Creativity' val={39} color='bg-brand-purple' />
//       </div>

//       <div className='mt-10 pt-8 border-t border-white/10'>
//         <h4 className='text-xs uppercase font-bold mb-3 tracking-widest'>
//           Improved Version:
//         </h4>
//         <div className='bg-white/10 p-4 rounded-xl text-sm leading-relaxed italic'>
//           "{improved}"
//         </div>
//       </div>
//     </div>
//   )
// }

// function MetricBar({
//   label,
//   val,
//   color,
// }: {
//   label: string
//   val: number
//   color: string
// }) {
//   return (
//     <div className='flex items-center gap-4'>
//       <span className='w-24 text-sm font-bold'>{label}</span>
//       <div className='flex-grow h-4 bg-white/20 rounded-full overflow-hidden'>
//         <div
//           className={`h-full ${color} transition-all duration-1000`}
//           style={{ width: `${val}%` }}
//         />
//       </div>
//       <span className='w-10 text-right text-sm font-bold'>{val}%</span>
//     </div>
//   )
// }


// 1. The main Results component
export default function Results({ score = 0, metrics, improved = "" }: any) {
  return (
    <div className='bg-[#888888] rounded-3xl p-8 text-white'>
      <div className='flex justify-between items-end mb-8 border-b border-white/20 pb-4'>
        <div>
          <p className='text-xs uppercase font-bold tracking-widest opacity-80'>
            Prompt Score
          </p>
          <h2 className='text-4xl font-black'>{score}/100</h2>
        </div>
      </div>

      <div className='space-y-6'>
        <MetricBar
          label='Clarity'
          val={metrics?.clarity?.score ?? 0}
          color='bg-brand-blue'
        />
        <MetricBar
          label='Structure'
          val={metrics?.structure?.score ?? 0}
          color='bg-brand-coral'
        />
        <MetricBar 
          label='Creativity' 
          val={metrics?.creativity?.score ?? 0} 
          color='bg-brand-purple' 
        />
      </div>

      {improved && (
        <div className='mt-10 pt-8 border-t border-white/10'>
          <h4 className='text-xs uppercase font-bold mb-3 tracking-widest'>
            Improved Version:
          </h4>
          <div className='bg-white/10 p-4 rounded-xl text-sm leading-relaxed italic'>
            "{improved}"
          </div>
        </div>
      )}
    </div>
  )
}

// 2. Define MetricBar OUTSIDE the Results function
function MetricBar({
  label,
  val,
  color,
}: {
  label: string
  val: number
  color: string
}) {
  return (
    <div className='flex items-center gap-4'>
      <span className='w-24 text-sm font-bold'>{label}</span>
      <div className='flex-grow h-4 bg-white/20 rounded-full overflow-hidden'>
        <div
          className={`h-full ${color} transition-all duration-1000`}
          style={{ width: `${val}%` }}
        />
      </div>
      <span className='w-10 text-right text-sm font-bold'>{val}%</span>
    </div>
  )
}