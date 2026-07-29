'use client'
import { useState, useEffect, useRef } from 'react'
import InputArea from '@/app/components/scorer/InputArea'
import Results from '@/app/components/scorer/Results'

export default function ScorerCard() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  // We use a ref to temporarily hold the prompt text while waiting for DBChores approval
  const pendingPrompt = useRef<string>('')

  // Intercept the analyze click and ask DBChores for tokens
  const handleAnalyze = (prompt: string) => {
    if (!prompt.trim()) return
    
    setErrorMessage(null)
    setLoading(true)
    pendingPrompt.current = prompt

    // Ask DBChores parent window to deduct 50 tokens
    window.parent.postMessage(
      {
        type: 'REQUEST_DEDUCTION',
        amount: 50,
        tool: 'ZkVibes Prompt Scorer',
      },
      '*'
    )
  }

  // Listen for DBChores approval, execute API, and handle History/Refund
  useEffect(() => {
    const handleMessage = async (event: MessageEvent) => {
      // S Deduction Approved -> Run the AI
      if (event.data?.type === 'DEDUCTION_APPROVED') {
        try {
          const res = await fetch('https://buildoninc.org/score', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: pendingPrompt.current }),
          })

          if (!res.ok) {
            throw new Error('AI Backend scoring failed')
          }

          const result = await res.json()
          setData(result)

          // Send the successful output back to DBChores so it saves to History
          window.parent.postMessage(
            {
              type: 'SAVE_HISTORY',
              title: `Prompt Score: ${result.overall_score}/100`,
              content: JSON.stringify({
                original_prompt: pendingPrompt.current,
                ...result
              }),
              amount: 50,
            },
            '*'
          )
        } catch (e) {
          console.error('API Error', e)
          // THE SAFETY NET. If the backend fails, refund the user!
          window.parent.postMessage(
            {
              type: 'REQUEST_REFUND',
              amount: 50,
            },
            '*'
          )
          setErrorMessage('Scoring failed. Your tokens have been fully refunded.')
        } finally {
          setLoading(false)
        }
      } 
      // Deduction Failed (Out of tokens)
      else if (event.data?.type === 'DEDUCTION_FAILED') {
        setLoading(false)
        setErrorMessage('Analysis failed: Insufficient tokens in your DBChores wallet.')
      }
    }

    // Attach the event listener
    window.addEventListener('message', handleMessage)
    
    // Cleanup listener on unmount
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <div
      id='scorer'
      className='bg-brand-dark rounded-[2.5rem] p-8 md:p-12 max-w-4xl mx-auto shadow-2xl relative'
    >
      <InputArea onAnalyze={handleAnalyze} loading={loading} />

      {/* Error Message Display */}
      {errorMessage && (
        <div className='mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-center text-sm font-medium animate-in fade-in'>
          {errorMessage}
        </div>
      )}

      {/* Results Display */}
      {data && !errorMessage && (
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
