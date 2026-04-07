//prompt-scorer/frontend/app/components/scorer/InputArea.tsx
'use client'

import React from 'react'
import { Zap, RefreshCcw } from 'lucide-react'

interface InputAreaProps {
  onAnalyze: (prompt: string) => void
  loading: boolean
}

export default function InputArea({ onAnalyze, loading }: InputAreaProps) {
  const [prompt, setPrompt] = React.useState('')

  const handleSubmit = () => {
    if (prompt.trim()) {
      onAnalyze(prompt)
    }
  }

  return (
    <section className='flex flex-col'>
      <div className='relative group'>
        {/* Decorative glow effect */}
        <div className='absolute -inset-1 bg-gradient-to-r from-[#AE61FF] to-cyan-400 rounded-[2rem] blur opacity-20 group-focus-within:opacity-40 transition duration-1000'></div>

        <div className='relative bg-[#121212] border border-white/10 rounded-[1.8rem] p-6 shadow-2xl'>
          <textarea
            className='w-full h-64 bg-transparent border-none outline-none text-lg font-medium placeholder:text-slate-600 resize-none font-mono text-white leading-relaxed'
            placeholder='Paste your raw AI prompt here for neural evaluation...'
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          <div className='flex justify-between items-center mt-6 pt-6 border-t border-white/5'>
            <div className='flex items-center gap-3'>
              <div
                className={`w-2 h-2 rounded-full ${prompt.length > 0 ? 'bg-[#AE61FF] animate-pulse' : 'bg-slate-800'}`}
              />
              <span className='text-[10px] font-black text-slate-500 uppercase tracking-widest'>
                {prompt.length} Characters Detected
              </span>
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading || !prompt.trim()}
              className='bg-[#AE61FF] hover:bg-white hover:text-[#1E1E1E] disabled:bg-slate-800 disabled:text-slate-600 text-white px-8 py-3.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all flex items-center gap-2 active:scale-95 shadow-lg shadow-purple-900/20'
            >
              {loading ? (
                <RefreshCcw className='w-4 h-4 animate-spin' />
              ) : (
                <>
                  <Zap className='w-4 h-4 fill-current' />
                  Analyse Prompt
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
