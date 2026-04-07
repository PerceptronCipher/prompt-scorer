// //prompt-scorer/frontend/app/components/scorer/ScorerCard.tsx
// 'use client'
// import { useState } from 'react'
// import InputArea from '@/app/components/scorer/InputArea'
// import Results from '@/app/components/scorer/Results'

// export default function ScorerCard() {
//   const [data, setData] = useState<any>(null)
//   const [loading, setLoading] = useState(false)

//   const handleAnalyze = async (prompt: string) => {
//     setLoading(true)
//     try {
//       const res = await fetch('http://44.222.98.52:8000/docs/score', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ prompt }),
//       })
//       const result = await res.json()
//       setData(result)
//     } catch (e) {
//       console.error('API Error', e)
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div
//       id='scorer'
//       className='bg-brand-dark rounded-[2.5rem] p-8 md:p-12 max-w-4xl mx-auto shadow-2xl'
//     >
//       <InputArea onAnalyze={handleAnalyze} loading={loading} />

//       {data && (
//         <div className='mt-12 animate-in fade-in slide-in-from-bottom-4 duration-500'>
//           <Results
//             score={data.overall_score}
//             metrics={data.categories}
//             improved={data.improved_prompt}
//           />
//         </div>
//       )}
//     </div>
//   )
// }

'use client'
import { useState } from 'react'
import InputArea from '@/app/components/scorer/InputArea'
import Results from '@/app/components/scorer/Results'

// Constant for the API endpoint
const API_URL = 'http://44.222.98.52:8000/score'

export default function ScorerCard() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleAnalyze = async (prompt: string) => {
    if (!prompt.trim()) return

    setLoading(true)
    setError(null)

    try {
      // FIX: The options object now correctly contains method, headers, and body
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ prompt }),
      })

      if (!res.ok) {
        throw new Error(`Server responded with ${res.status}`)
      }

      const result = await res.json()

      // Store the result
      setData(result)
    } catch (e: any) {
      console.error('API Error:', e)
      setError(e.message || 'Failed to connect to the scoring engine.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      id='scorer'
      className='bg-brand-dark rounded-[2.5rem] p-8 md:p-12 max-w-4xl mx-auto shadow-2xl border border-white/5'
    >
      <InputArea onAnalyze={handleAnalyze} loading={loading} />

      {/* Error Message Display */}
      {error && (
        <div className='mt-6 p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-2xl text-center text-sm'>
          ⚠️ {error}
        </div>
      )}

      {/* Results Display */}
      {data && !loading && (
        <div className='mt-12 animate-in fade-in slide-in-from-bottom-6 duration-700 ease-out fill-mode-both'>
          <Results
            score={data.overall_score}
            metrics={data.categories}
            improved={data.improved_prompt}
          />
        </div>
      )}

      {/* Loading State UI */}
      {loading && (
        <div className='mt-12 h-64 flex flex-col items-center justify-center space-y-4 opacity-50'>
          <div className='w-12 h-12 border-4 border-brand-blue border-t-transparent rounded-full animate-spin' />
          <p className='text-white/60 text-sm font-medium'>
            Analyzing Prompt Architecture...
          </p>
        </div>
      )}
    </div>
  )
}