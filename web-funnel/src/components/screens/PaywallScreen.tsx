'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useFunnelStore } from '@/store/funnelStore'
import { useSupabase } from '@/components/SupabaseProvider'
import { createPurchase } from '@/lib/supabase'
import { Check, X, Star, Shield, HelpCircle, ChevronDown, ChevronUp, Award } from 'lucide-react'

// Pricing plans
const plans = [
  {
    id: '7-day',
    name: '7-DAY PLAN',
    price: 49.99,
    perDay: 7.14,
    popular: false,
  },
  {
    id: '1-month',
    name: '1-MONTH PLAN',
    price: 49.99,
    perDay: 1.66,
    popular: true,
  },
  {
    id: '3-month',
    name: '3-MONTH PLAN',
    price: 99.99,
    perDay: 1.11,
    popular: false,
  },
]

// Pain points - life without Memento
const painPoints = [
  'Feeling overwhelmed by your emotions',
  'Reacting impulsively to stressful situations',
  'Difficulty sleeping due to racing thoughts',
  'Feeling drained and emotionally exhausted',
  'Struggling to maintain healthy relationships',
  'Lack of clarity about your emotional patterns',
  'Constant self-criticism and negative self-talk',
  'Feeling stuck in emotional loops',
]

// Benefits - what Memento helps with
const benefits = [
  'Understand and regulate your emotions',
  'Respond calmly instead of reacting',
  'Improved sleep and mental clarity',
  'Increased emotional resilience',
  'Healthier relationships and boundaries',
  'Self-awareness and personal growth',
  'Self-compassion and inner peace',
  'Break free from negative patterns',
]

// Goals
const goals = [
  'You wake up feeling emotionally balanced',
  'You no longer feel overwhelmed by stress',
  'You respond calmly to challenging situations',
  'You understand your emotional triggers',
  'Your relationships improve naturally',
  'Your self-confidence reaches new heights',
]

// FAQ
const faqs = [
  {
    question: "What if I don't have enough willpower to stick to the plan?",
    answer: "Our plan is designed to build your emotional awareness gradually, so you don't have to rely on willpower alone. We provide daily micro-practices that take just 5-10 minutes, making it easy to stay consistent.",
  },
  {
    question: "What if I feel too overwhelmed to start?",
    answer: "Starting anything new can feel daunting, but our plan is designed to meet you where you are. We start with simple awareness exercises and gradually build from there. You'll have support every step of the way.",
  },
  {
    question: "How is this different from other wellness apps?",
    answer: "Memento focuses specifically on emotional regulation and pattern recognition. Instead of generic meditation, we help you understand YOUR unique emotional patterns and give you personalized tools to transform them.",
  },
]

// Reviews
const reviews = [
  {
    title: 'It has really changed my life',
    author: 'Sarah M.',
    photo: '/images/testimonials/sarah.png',
    text: 'I have been using Memento for three months now. During this time, I have been able to understand my emotional triggers and respond differently. It has truly transformed how I handle stress.',
  },
  {
    title: 'Finally something that works',
    author: 'James L.',
    photo: '/images/testimonials/james.png',
    text: 'After trying many wellness apps, Memento actually addresses the root causes. I feel more in control of my emotions than ever before. The personalized approach makes all the difference.',
  },
  {
    title: 'Eye-opening experience',
    author: 'Michelle K.',
    photo: '/images/testimonials/michelle.png',
    text: "I'm not new to my own struggles with emotions. Memento helped me see patterns I never noticed before. Such valuable insights for understanding my inner self.",
  },
]

export default function PaywallScreen() {
  const { profile, primaryPattern } = useFunnelStore()
  const { sessionId } = useSupabase()
  const [selectedPlan, setSelectedPlan] = useState('1-month')
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  // Gender-specific transformation images
  const isFemale = profile.gender === 'female'
  const beforeImage = isFemale ? '/images/transformation/before-female.png' : '/images/transformation/before.png'
  const afterImage = isFemale ? '/images/transformation/after-female.png' : '/images/transformation/after.png'

  const handleGetPlan = async () => {
    if (isProcessing) return
    setIsProcessing(true)
    
    try {
      // Get selected plan details
      const plan = plans.find(p => p.id === selectedPlan)
      if (!plan) return
      
      // Create purchase record in Supabase
      if (profile.email) {
        await createPurchase({
          session_id: sessionId ?? undefined,
          email: profile.email,
          plan_type: plan.id,
          amount: plan.price,
          currency: 'EUR',
          status: 'pending',
        })
      }
      
      // In production, this would redirect to payment processor (Stripe, etc.)
      console.log('Plan selected:', selectedPlan)
      alert('Payment flow would start here!')
    } catch (error) {
      console.error('Failed to create purchase:', error)
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="min-h-screen bg-background-primary">
      {/* Sticky Header CTA */}
      <div className="sticky top-0 z-50 bg-background-primary border-b border-divider py-3 px-4">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <span className="text-xl font-bold"><span style={{ color: '#D94F30' }}>●</span> <span style={{ color: '#1F1A17' }}>MEMENTO</span></span>
          <button
            onClick={handleGetPlan}
            className="bg-primary text-white font-bold py-2 px-6 rounded-full text-sm"
          >
            GET MY PLAN
          </button>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        {/* Before/After Visual Transformation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-6 mb-6 shadow-sm"
        >
          <div className="grid grid-cols-[1fr,auto,1fr] gap-4 mb-6">
            {/* Now */}
            <div className="text-center">
              <span className="inline-block px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-3">
                Now
              </span>
              <div className="w-full aspect-square max-w-[140px] mx-auto mb-3 rounded-full overflow-hidden border-3 border-red-200">
                <img 
                  src={beforeImage} 
                  alt="Before" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center text-text-tertiary">
              <div className="flex flex-col items-center">
                <span className="text-2xl">»</span>
              </div>
            </div>

            {/* Your Goal */}
            <div className="text-center">
              <span className="inline-block px-3 py-1 bg-primary text-white rounded-full text-sm font-medium mb-3">
                Your Goal
              </span>
              <div className="w-full aspect-square max-w-[140px] mx-auto mb-3 rounded-full overflow-hidden border-3 border-primary">
                <img 
                  src={afterImage} 
                  alt="After" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Metrics comparison */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-text-primary">Emotional stability</p>
                <p className="text-red-500 text-sm">Low</p>
              </div>
              <div>
                <p className="font-semibold text-text-primary">Emotional stability</p>
                <p className="text-primary text-sm">High</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-text-primary">Inner peace</p>
                <p className="text-red-500 text-sm">Weak</p>
                <div className="flex gap-1 mt-1">
                  <div className="h-2 flex-1 bg-red-400 rounded" />
                  <div className="h-2 flex-1 bg-gray-200 rounded" />
                  <div className="h-2 flex-1 bg-gray-200 rounded" />
                </div>
              </div>
              <div>
                <p className="font-semibold text-text-primary">Inner peace</p>
                <p className="text-primary text-sm">Strong</p>
                <div className="flex gap-1 mt-1">
                  <div className="h-2 flex-1 bg-primary rounded" />
                  <div className="h-2 flex-1 bg-primary rounded" />
                  <div className="h-2 flex-1 bg-primary rounded" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-text-primary">Self-awareness</p>
                <p className="text-red-500 text-sm">Low</p>
                <div className="relative h-2 bg-gray-200 rounded-full mt-1">
                  <div className="absolute left-0 top-0 h-full w-1/3 bg-red-400 rounded-full" />
                  <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-red-400 rounded-full" />
                </div>
              </div>
              <div>
                <p className="font-semibold text-text-primary">Self-awareness</p>
                <p className="text-primary text-sm">High</p>
                <div className="relative h-2 bg-primary/30 rounded-full mt-1">
                  <div className="absolute left-0 top-0 h-full w-full bg-primary rounded-full" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-primary rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Plan Ready Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl font-bold text-text-primary mb-4">
            Your personalized plan is ready!
          </h2>
          <div className="flex justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-lg">🧠</span>
              </div>
              <div className="text-left">
                <p className="text-xs text-text-tertiary">Main pattern</p>
                <p className="font-semibold text-text-primary text-sm">{primaryPattern || 'Overthinker'}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-lg">🎯</span>
              </div>
              <div className="text-left">
                <p className="text-xs text-text-tertiary">Goal</p>
                <p className="font-semibold text-text-primary text-sm">Inner stability</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pricing Plans */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-3 mb-6"
        >
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`w-full rounded-xl border-2 transition-all ${
                selectedPlan === plan.id
                  ? 'border-primary bg-white'
                  : 'border-gray-200 bg-white'
              }`}
            >
              {plan.popular && (
                <div className="bg-primary text-white text-sm font-bold py-1 px-4 rounded-t-lg flex items-center justify-center gap-1">
                  <Star className="w-4 h-4 fill-current" /> MOST POPULAR
                </div>
              )}
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedPlan === plan.id ? 'border-primary bg-primary' : 'border-gray-300'
                  }`}>
                    {selectedPlan === plan.id && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-text-primary">{plan.name}</p>
                    <p className="text-text-tertiary text-sm">€{plan.price}</p>
                  </div>
                </div>
                <div className="bg-background-secondary px-3 py-2 rounded-lg text-right">
                  <span className="text-text-tertiary text-xs">€</span>
                  <span className="text-2xl font-bold text-text-primary">{Math.floor(plan.perDay)}</span>
                  <span className="text-text-primary font-bold">{(plan.perDay % 1).toFixed(2).substring(1)}</span>
                  <p className="text-xs text-text-tertiary">per day</p>
                </div>
              </div>
            </button>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          onClick={handleGetPlan}
          className="w-full bg-primary text-white font-bold py-4 px-6 rounded-full text-lg mb-4"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          GET MY PLAN
        </motion.button>

        {/* Subscription disclaimer */}
        <p className="text-xs text-text-tertiary text-center mb-4">
          By clicking "GET MY PLAN", you agree to automatic subscription renewal. First month is €49.99, then €49.99/month. Cancel via the app or email: support@memento.app. See <span className="underline">Subscription Policy</span> for details.
        </p>

        {/* Payment security */}
        <div className="flex flex-col items-center gap-3 mb-8">
          <div className="flex items-center gap-2 text-primary">
            <Shield className="w-5 h-5" />
            <span className="font-medium">Pay Safe & Secure</span>
          </div>
          <div className="flex gap-1.5 flex-wrap justify-center">
            <img src="/images/payments/paypal.svg" alt="PayPal" className="h-7" />
            <img src="/images/payments/applepay.svg" alt="Apple Pay" className="h-7" />
            <img src="/images/payments/visa.svg" alt="Visa" className="h-7" />
            <img src="/images/payments/mastercard.svg" alt="Mastercard" className="h-7" />
            <img src="/images/payments/maestro.svg" alt="Maestro" className="h-7" />
            <img src="/images/payments/discover.svg" alt="Discover" className="h-7" />
            <img src="/images/payments/amex.svg" alt="Amex" className="h-7" />
          </div>
        </div>

        {/* Goals Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl p-6 mb-6"
        >
          <h3 className="text-xl font-bold text-text-primary text-center mb-4">Our goals</h3>
          <div className="space-y-3">
            {goals.map((goal, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-text-secondary">{goal}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl p-6 mb-6 text-center"
        >
          <h3 className="text-xl font-bold text-text-primary mb-2">
            People just like you achieved great results using our
          </h3>
          <h3 className="text-xl font-bold text-primary mb-6">
            Emotional Blueprint!
          </h3>
          
          <div className="space-y-4">
            <div>
              <p className="text-3xl font-bold text-primary">83%</p>
              <p className="text-text-secondary">of users were able to <strong>improve their emotional stability</strong> after just 4 weeks</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">77%</p>
              <p className="text-text-secondary">of users started with <strong>similar emotional patterns</strong> as you</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">45%</p>
              <p className="text-text-secondary">of users suffer from <strong>the same issues</strong> as you</p>
            </div>
          </div>
        </motion.div>

        {/* Pain Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl p-6 mb-6"
        >
          <h3 className="font-bold text-text-primary mb-4">How life might be without Memento</h3>
          <div className="space-y-3">
            {painPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <X className="w-3 h-3 text-red-500" />
                </div>
                <p className="text-text-secondary text-sm">{point}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl p-6 mb-8 border-2 border-primary"
        >
          <h3 className="font-bold text-text-primary mb-4">What Memento can help you with</h3>
          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <p className="text-text-secondary text-sm">{benefit}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Award Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="flex items-center justify-center gap-3 mb-8 bg-white rounded-xl p-4"
        >
          <Award className="w-12 h-12 text-accent-gold" />
          <p className="text-text-primary">
            Memento is the <span className="text-primary font-bold">2025 Best Wellness App</span> nominee!
          </p>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-2xl p-6 mb-8"
        >
          <h3 className="text-xl font-bold text-text-primary text-center mb-4">People often ask</h3>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-divider last:border-0 pb-3 last:pb-0">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full flex items-start gap-3 text-left"
                >
                  <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-semibold text-text-primary">{faq.question}</p>
                    {expandedFaq === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="text-text-secondary text-sm mt-2"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </div>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-text-tertiary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-text-tertiary" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Reviews Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-8"
        >
          <h3 className="text-xl font-bold text-text-primary text-center mb-2">Users love our plans</h3>
          <p className="text-text-tertiary text-center mb-4">Here's what people are saying about Memento</p>
          
          <div className="space-y-4">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-xl p-4">
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-accent-gold text-accent-gold" />
                  ))}
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <img 
                    src={review.photo} 
                    alt={review.author} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-text-primary">{review.title}</h4>
                    <span className="text-text-tertiary text-sm">{review.author}</span>
                  </div>
                </div>
                <p className="text-text-secondary text-sm">{review.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Repeated Pricing Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mb-6"
        >
          <h2 className="text-xl font-bold text-text-primary text-center mb-4">
            Your personalized plan is ready!
          </h2>
          
          <div className="space-y-3 mb-6">
            {plans.map((plan) => (
              <button
                key={`repeat-${plan.id}`}
                onClick={() => setSelectedPlan(plan.id)}
                className={`w-full rounded-xl border-2 transition-all ${
                  selectedPlan === plan.id
                    ? 'border-primary bg-white'
                    : 'border-gray-200 bg-white'
                }`}
              >
                {plan.popular && (
                  <div className="bg-primary text-white text-sm font-bold py-1 px-4 rounded-t-lg flex items-center justify-center gap-1">
                    <Star className="w-4 h-4 fill-current" /> MOST POPULAR
                  </div>
                )}
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedPlan === plan.id ? 'border-primary bg-primary' : 'border-gray-300'
                    }`}>
                      {selectedPlan === plan.id && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-text-primary">{plan.name}</p>
                      <p className="text-text-tertiary text-sm">€{plan.price}</p>
                    </div>
                  </div>
                  <div className="bg-background-secondary px-3 py-2 rounded-lg text-right">
                    <span className="text-text-tertiary text-xs">€</span>
                    <span className="text-2xl font-bold text-text-primary">{Math.floor(plan.perDay)}</span>
                    <span className="text-text-primary font-bold">{(plan.perDay % 1).toFixed(2).substring(1)}</span>
                    <p className="text-xs text-text-tertiary">per day</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={handleGetPlan}
            className="w-full bg-primary text-white font-bold py-4 px-6 rounded-full text-lg mb-4"
          >
            GET MY PLAN
          </button>

          <p className="text-xs text-text-tertiary text-center mb-4">
            By clicking "GET MY PLAN", you agree to automatic subscription renewal.
          </p>

          <div className="flex flex-col items-center gap-3 mb-6">
            <div className="flex items-center gap-2 text-primary">
              <Shield className="w-5 h-5" />
              <span className="font-medium">Pay Safe & Secure</span>
            </div>
            <div className="flex gap-1.5 flex-wrap justify-center">
              <img src="/images/payments/paypal.svg" alt="PayPal" className="h-7" />
              <img src="/images/payments/applepay.svg" alt="Apple Pay" className="h-7" />
              <img src="/images/payments/visa.svg" alt="Visa" className="h-7" />
              <img src="/images/payments/mastercard.svg" alt="Mastercard" className="h-7" />
              <img src="/images/payments/maestro.svg" alt="Maestro" className="h-7" />
              <img src="/images/payments/discover.svg" alt="Discover" className="h-7" />
              <img src="/images/payments/amex.svg" alt="Amex" className="h-7" />
            </div>
          </div>
        </motion.div>

        {/* Money-back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="border-2 border-primary rounded-2xl p-6 pb-10 mb-12 bg-white relative"
        >
          <h3 className="text-xl font-bold text-text-primary text-center mb-3">
            30-day money-back guarantee
          </h3>
          <p className="text-text-secondary text-center mb-4">
            Our plan is backed by a money-back guarantee. If you reach out within 30 days of purchase, we'll give you a full refund.
          </p>
          <p className="text-primary font-medium text-center underline cursor-pointer">Learn more</p>
          
          {/* Guarantee badge with ribbon - Liven style */}
          <div className="absolute -bottom-10 right-6 flex flex-col items-center">
            {/* Badge circle */}
            <div className="relative">
              <svg viewBox="0 0 80 80" className="w-20 h-20">
                {/* Scalloped edge circle */}
                <path 
                  d="M40 5 L44 15 L55 10 L55 22 L67 22 L62 33 L73 40 L62 47 L67 58 L55 58 L55 70 L44 65 L40 75 L36 65 L25 70 L25 58 L13 58 L18 47 L7 40 L18 33 L13 22 L25 22 L25 10 L36 15 Z" 
                  fill="#D94F30"
                />
                {/* Inner white circle */}
                <circle cx="40" cy="40" r="24" fill="white"/>
                {/* Checkmark */}
                <path d="M30 40 L37 47 L52 32" fill="none" stroke="#D94F30" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            {/* Ribbon tails */}
            <svg viewBox="0 0 60 24" className="w-14 h-6 -mt-2">
              <path d="M0 0 L15 0 L20 12 L15 24 L0 24 L5 12 Z" fill="#D94F30"/>
              <path d="M60 0 L45 0 L40 12 L45 24 L60 24 L55 12 Z" fill="#D94F30"/>
              <path d="M0 0 L15 0 L20 12 L15 24 L0 24 L5 12 Z" fill="#B8412A" opacity="0.3"/>
              <path d="M60 0 L45 0 L40 12 L45 24 L60 24 L55 12 Z" fill="#B8412A" opacity="0.3"/>
            </svg>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="text-center text-xs text-text-tertiary pb-8 pt-4">
          <p>Memento Wellness Ltd.</p>
          <p>Your journey to emotional stability starts here.</p>
        </div>
      </div>
    </div>
  )
}
