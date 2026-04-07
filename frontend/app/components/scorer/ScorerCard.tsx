'use client'
import { useState } from 'react'
import InputArea from '@/app/components/scorer/InputArea'
import Results from '@/app/components/scorer/Results'

export default function ScorerCard() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const handleAnalyze = async (prompt: string) => {
    setLoading(true)
    try {
      const res = await fetch(
        'http://44.222.98.52:8000/score',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt }),
        },
      )
      const result = await res.json()
      setData(result)
    } catch (e) {
      console.error('API Error', e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      id='scorer'
      className='bg-brand-dark rounded-[2.5rem] p-8 md:p-12 max-w-4xl mx-auto shadow-2xl'
    >
      <InputArea onAnalyze={handleAnalyze} loading={loading} />

      {data && (
        <div className='mt-12 animate-in fade-in slide-in-from-bottom-4 duration-500'>
          <Results
            score={data.overall_score}
            metrics={data.categories}
            improved={data.improved_prompt}
          />
        </div>
      )}
    </div>
  )
}
