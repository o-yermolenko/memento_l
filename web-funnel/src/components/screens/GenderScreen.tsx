'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { useFunnelStore, Gender } from '@/store/funnelStore'
import { ChevronRight } from 'lucide-react'
import { ROUTES } from '@/lib/routes'

export default function GenderScreen() {
  const router = useRouter()
  const { setGender } = useFunnelStore()
  
  const handleSelect = (gender: Gender) => {
    setGender(gender)
    router.push(ROUTES.age)
  }
  
  return (
    <div className="flex flex-col items-center px-4 py-8">
      {/* Headline */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: '#1F1A17' }}>
          YOUR PERSONALIZED<br />
          EMOTIONAL WELLNESS JOURNEY
        </h2>
        <p className="text-lg" style={{ color: '#6B6360' }}>
          DISCOVER YOUR PATH TO INNER STABILITY
        </p>
      </div>
      
      {/* Quiz badge */}
      <div className="mb-8">
        <span 
          className="inline-block px-4 py-2 font-semibold text-sm rounded-full"
          style={{ backgroundColor: 'rgba(217, 79, 48, 0.1)', color: '#D94F30', border: '1px solid rgba(217, 79, 48, 0.2)' }}
        >
          3-MINUTE ASSESSMENT
        </span>
      </div>
      
      {/* Gender options */}
      <div className="w-full max-w-md grid grid-cols-2 gap-4">
        {/* Male option */}
        <button
          onClick={() => handleSelect('male')}
          className="group relative overflow-hidden rounded-2xl border-2 transition-all duration-300 hover:shadow-lg"
          style={{ borderColor: '#E5DDD2', backgroundColor: '#FFFFFF' }}
        >
          <div 
            className="aspect-[3/4] relative"
            style={{ background: 'linear-gradient(to bottom, rgba(217,79,48,0.05), rgba(217,79,48,0.1))' }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="w-32 h-32 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'rgba(217, 79, 48, 0.2)' }}
              >
                <svg className="w-20 h-20" viewBox="0 0 24 24" fill="rgba(217, 79, 48, 0.6)">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="p-4 flex items-center justify-between" style={{ backgroundColor: '#D94F30' }}>
            <span className="text-white font-semibold text-lg">Male</span>
            <ChevronRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform" />
          </div>
        </button>
        
        {/* Female option */}
        <button
          onClick={() => handleSelect('female')}
          className="group relative overflow-hidden rounded-2xl border-2 transition-all duration-300 hover:shadow-lg"
          style={{ borderColor: '#E5DDD2', backgroundColor: '#FFFFFF' }}
        >
          <div 
            className="aspect-[3/4] relative"
            style={{ background: 'linear-gradient(to bottom, rgba(217,79,48,0.05), rgba(217,79,48,0.1))' }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="w-32 h-32 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'rgba(217, 79, 48, 0.2)' }}
              >
                <svg className="w-20 h-20" viewBox="0 0 24 24" fill="rgba(217, 79, 48, 0.6)">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="p-4 flex items-center justify-between" style={{ backgroundColor: '#D94F30' }}>
            <span className="text-white font-semibold text-lg">Female</span>
            <ChevronRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform" />
          </div>
        </button>
      </div>
      
      {/* Legal disclaimer */}
      <p className="mt-8 text-center text-xs max-w-md" style={{ color: '#8A8582' }}>
        By clicking "Male" or "Female" you agree with the{' '}
        <a href="#" style={{ color: '#D94F30' }} className="hover:underline">Terms of Use and Service</a>,{' '}
        <a href="#" style={{ color: '#D94F30' }} className="hover:underline">Privacy Policy</a>,{' '}
        <a href="#" style={{ color: '#D94F30' }} className="hover:underline">Subscription Policy</a> and{' '}
        <a href="#" style={{ color: '#D94F30' }} className="hover:underline">Cookie Policy</a>
      </p>
    </div>
  )
}
