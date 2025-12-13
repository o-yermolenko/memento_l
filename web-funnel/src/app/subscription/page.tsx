'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function SubscriptionPage() {
  return (
    <main className="min-h-screen bg-background-primary">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background-primary/80 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            <span className="font-medium">Back</span>
          </Link>
          <h1 className="flex-1 text-center font-semibold text-lg text-text-primary">Memento</h1>
          <div className="w-16" /> {/* Spacer for centering */}
        </div>
      </header>

      {/* Content */}
      <motion.div 
        className="max-w-4xl mx-auto px-4 py-8 pb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <article className="prose prose-slate max-w-none">
          <h1 className="text-3xl font-bold text-text-primary mb-8">Subscription Terms</h1>
          
          <p className="text-text-secondary mb-8">
            Welcome to Memento! These terms and conditions outline the rules and regulations for the use of our website and services.
          </p>

          {/* Section 1 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-text-primary mb-4">1. Subscription</h2>
            <p className="text-text-secondary">
              The subscription renews automatically at the end of each period (each week, month, 6 months, year, or otherwise, depending on the option selected by you at the time of purchase) until you cancel.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-text-primary mb-4">2. Payment method</h2>
            <p className="text-text-secondary">
              Payment will be charged to the payment method you submitted at the time of purchase at confirmation of purchase. You authorize us to charge the applicable fees to the payment method that you submit.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-text-primary mb-4">3. Cancellation</h2>
            <p className="text-text-secondary mb-4">
              Canceling your subscription means that the automatic renewal will be disabled, but you will still have access to all your subscription features for the remaining time of then-current period.
            </p>
            <div className="p-4 bg-background-secondary rounded-lg border border-border">
              <p className="text-text-secondary">
                <strong>If you purchased a subscription or enabled trial on our website:</strong> You can cancel a subscription by contacting our support at <a href="mailto:info@mementa.io" className="text-primary hover:underline">info@mementa.io</a>.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-text-primary mb-4">4. Changes</h2>
            <p className="text-text-secondary">
              To the maximum extent permitted by applicable laws, we may change subscription fees at any time. We will give you reasonable notice of any such pricing changes by posting the new prices on the website and/or by sending you an email notification, or in other prominent way. If you do not wish to pay the new fees, you can cancel the applicable subscription prior to the change going into effect.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-text-primary mb-4">5. Refunds</h2>
            <p className="text-text-secondary mb-4">
              To the extent permitted by applicable law, purchases made via our website are non-refundable and/or non-exchangeable, unless otherwise is stated herein or is required by applicable law.
            </p>

            {/* EEA Notice */}
            <div className="p-4 bg-background-secondary rounded-lg border border-border">
              <h3 className="font-semibold text-text-primary mb-3">NOTE FOR EEA CITIZENS:</h3>
              <div className="space-y-3 text-text-secondary text-sm">
                <p>
                  If you are an EEA-based user, you have a period of 14 days to withdraw from a contract, without giving any reason, and without incurring any costs.
                </p>
                <p>
                  Subject to above clause, to exercise the right of withdrawal, you must inform us of your decision to withdraw from this contract by an e-mail. You may use the Model withdrawal form, but it is not obligatory. To meet the withdrawal deadline, it is sufficient for you to send your communication concerning your exercise of the right of withdrawal before the withdrawal period has expired.
                </p>
                <p>
                  If you withdraw from this contract within the said 14-day window, we shall reimburse to you all payments received from you for the same period. We will make the reimbursement without undue delay and in any event not later than 14 days from the day on which we are informed about your decision to withdraw from this contract. We will carry out such reimbursement using the same means of payment as you used for the initial transaction unless you have expressly agreed otherwise; in any event, you will not incur any fees as a result of such reimbursement.
                </p>
                <p>
                  If you have been presented with and you have provided your prior express consent to begin the performance during the right of withdrawal period and acknowledgement that you will lose your right of withdrawal, then, unless the Service is defective, you will not be eligible to a refund in relation to digital content and will only be eligible to a proportional refund in relation to digital service. If this provision applies, we will provide you with a copy of the confirmation of your prior express consent and acknowledgement on a durable medium.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Us */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-text-primary mb-4">Contact Us</h2>
            <p className="text-text-secondary">
              If you have any questions in relation to the subscription terms, please contact us at <a href="mailto:info@mementa.io" className="text-primary hover:underline">info@mementa.io</a>.
            </p>
          </section>

          {/* Screenshot Notice */}
          <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-text-primary text-center">
              📸 Please take a screenshot of this information for your reference. This may help you to control your subscriptions.
            </p>
          </div>

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-border text-center text-text-tertiary text-sm">
            <p>© 2025 Memento. All rights reserved.</p>
          </footer>
        </article>
      </motion.div>
    </main>
  )
}

