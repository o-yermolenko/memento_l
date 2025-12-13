'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function TermsPage() {
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
          <h1 className="text-3xl font-bold text-text-primary mb-8">Terms and Conditions</h1>
          
          <p className="text-text-secondary mb-8">
            Welcome to Memento! These terms and conditions outline the rules and regulations for the use of our website and services.
          </p>

          {/* Terms and Conditions of Use */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-text-primary mb-4">TERMS AND CONDITIONS OF USE</h2>
            <p className="text-text-secondary mb-4">
              The service may offer subscriptions that automatically renew. Please read these Terms and Conditions of Use carefully before starting a trial or completing a purchase for auto-renewing subscription service. To avoid being charged you must affirmatively cancel a subscription or a trial at least 24 hours before the end of the trial or the current subscription period.
            </p>
            <p className="text-text-secondary">
              If you are unsure how to cancel a subscription or a trial, please visit our Subscription Terms.
            </p>
          </section>

          {/* Section 1 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-text-primary mb-4">1. ACCEPTANCE OF TERMS</h2>
            
            <div className="space-y-4 text-text-secondary">
              <p>
                <strong>1.1.</strong> These Terms and Conditions (the "Terms") govern the relationship between you and GIVC Tech Limited, a legal entity incorporated under the laws of the Republic of Cyprus, having its registered office at Florinis 7, Greg Tower, 2nd Floor, 1065, Nicosia, Cyprus ("we" "us" "our" or the "Company") regarding your use of the Company's website and other services (the "Website" or the "Service"), including all textual, graphic, video, music, software and other content available through the Service (the "Content").
              </p>
              <p>
                <strong>1.2.</strong> Your access and use of the Service constitutes your agreement to be bound by these Terms, which establish a legally binding contractual relationship between you and the Company. For this reason, PLEASE READ THE TERMS CAREFULLY BEFORE USING THE SERVICE.
              </p>
              <p>
                <strong>1.3.</strong> Please review also our Privacy Policy. The terms of the Privacy Policy and other supplemental terms, policies or documents that may be posted on the Service from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms at any time and for any reason.
              </p>
              <p>
                <strong>1.4.</strong> Any translation from English version is provided for your convenience only. In the event of any difference in meaning or interpretation between the English language version of these Terms, and any translation, the English language version will prevail. The original English text shall be the sole legally binding version.
              </p>
              <p>
                <strong>1.5.</strong> Unless otherwise expressly provided herein, we will alert you about any changes by updating the "Last updated" date of these Terms and you waive any right to receive specific notice of each such change.
              </p>
              <p>
                <strong>1.6.</strong> THESE TERMS CONTAIN IMPORTANT DISCLAIMERS (SECTION 2), DISCLAIMERS OF WARRANTIES (SECTION 8), LIMITATION OF LIABILITY (SECTION 9), AS WELL AS PROVISIONS THAT WAIVE YOUR RIGHT TO A JURY TRIAL, RIGHT TO A COURT HEARING AND RIGHT TO PARTICIPATE IN A CLASS ACTION (ARBITRATION AND CLASS ACTION WAIVER). UNLESS YOU OPT OUT WITHIN 30 DAYS OF FIRST USE OF OUR SERVICE AS PROVIDED FOR IN SECTION 12, ARBITRATION IS THE EXCLUSIVE REMEDY FOR ANY AND ALL DISPUTES AND IS MANDATORY EXCEPT AS SPECIFIED BELOW IN SECTION 12.
              </p>
              <p>
                <strong>1.7.</strong> IF YOU DO NOT AGREE WITH ANY PART OF THESE TERMS, OR IF YOU ARE NOT ELIGIBLE OR AUTHORIZED TO BE BOUND BY THESE TERMS, THEN DO NOT ACCESS OR USE THE WEBSITE AND THE SERVICE.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-text-primary mb-4">2. IMPORTANT DISCLAIMERS</h2>
            
            <div className="space-y-4 text-text-secondary">
              <p>
                <strong>2.1.</strong> WE MAKE NO GUARANTEES THAT (I) THE SERVICE WILL MEET YOUR REQUIREMENTS, (II) THE SERVICE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, (III) THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE SERVICE WILL BE ACCURATE OR RELIABLE, OR (IV) THE QUALITY OF ANY PRODUCTS, SERVICES, INFORMATION, OR OTHER MATERIAL PURCHASED OR OBTAINED BY YOU THROUGH THE SERVICE WILL MEET YOUR EXPECTATIONS OR WILL PROVIDE ANY BENEFIT.
              </p>
              <p>
                <strong>2.2.</strong> NOT ALL INFORMATION DESCRIBED IN THE SERVICE IS SUITABLE FOR EVERYONE. THE SERVICE IS INTENDED ONLY AS A TOOL WHICH MAY BE USEFUL IN ACHIEVING YOUR OVERALL LIFESTYLE GOALS. YOU ACKNOWLEDGE THAT IF YOUR ACTIVITIES ENCOURAGED OR INSPIRED BY THE SERVICE INVOLVE ANY RISKS, YOU ASSUME THOSE RISKS AND UNDERSTAND AND AGREE THAT YOU TAKE FULL RESPONSIBILITY FOR YOUR HEALTH, LIFE AND WELL-BEING, AS WELL AS THE HEALTH, LIVES AND WELL-BEING OF YOUR FAMILY AND CHILDREN (BORN AND UNBORN, AS APPLICABLE), AND ALL DECISIONS NOW OR IN THE FUTURE.
              </p>
              <p>
                <strong>2.3.</strong> INFORMATION PROVIDED THROUGH OUR SERVICE IS FOR INFORMATIONAL AND ENTERTAINMENT PURPOSES ONLY. THE SERVICE IS NOT INTENDED TO BE A SUBSTITUTE FOR ANY PROFESSIONAL ADVICE, INCLUDING BUT NOT LIMITED TO (A) PROFESSIONAL MEDICAL OR PSYCHIATRIC ADVICE, DIAGNOSIS, OR TREATMENT, OR (B) PROFESSIONAL FINANCIAL OR INVESTMENT ADVICE OR GUIDANCE, OR (C) PROFESSIONAL LEGAL ADVICE. NEVER DISREGARD OR DELAY SEEKING PROFESSIONAL MEDICAL ADVICE OR OTHER PROFESSIONAL ADVICE. YOUR RELIANCE ON THE INFORMATION PROVIDED BY THE SERVICE IS SOLELY AT YOUR OWN ELECTION OR CHOICE. ANY AND ALL DECISIONS THAT YOU MAKE THAT ARE BASED IN WHOLE OR IN PART UPON INFORMATION PROVIDED BY THE SERVICE WILL BE YOUR SOLE AND EXCLUSIVE RESPONSIBILITY.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-text-primary mb-4">3. ACCOUNT REGISTRATION</h2>
            
            <div className="space-y-4 text-text-secondary">
              <p>
                <strong>3.1.</strong> In order to use certain features of the Service, you may need to register an account ("Account") and provide certain information about yourself as prompted by the registration form.
              </p>
              <p>
                <strong>3.2.</strong> If you register an Account, you represent and warrant to the Company that: (i) all required registration information you submit is truthful and accurate; (ii) you will maintain the accuracy of such information; and (iii) your use of the Service does not violate any applicable law or regulation or these Terms.
              </p>
              <p>
                <strong>3.3.</strong> The Service is not intended to be used by individuals under age of 18. You hereby represent and warrant to the Company that you meet the foregoing qualification.
              </p>
              <p>
                <strong>3.4.</strong> The Company reserves the right to suspend or terminate your Account, or your access to the Service, with or without notice to you, in the event that you breach these Terms.
              </p>
              <p>
                <strong>3.5.</strong> You are responsible for maintaining the confidentiality of your Account login information and are fully responsible for all activities that occur under your Account.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-text-primary mb-4">4. SERVICE</h2>
            
            <div className="space-y-4 text-text-secondary">
              <p>
                <strong>4.1.</strong> When you use the Service, you represent and warrant to the Company that: (i) all required information you submit is truthful and accurate; (ii) your use of the Service does not violate any applicable law or regulation or these Terms.
              </p>
              <p>
                <strong>4.2.</strong> The Company reserves the right to suspend or terminate your use of Service, or your access to the Service, in the event that you breach these Terms.
              </p>
              <p>
                <strong>4.3.</strong> The Service may be modified, updated, interrupted or suspended at any time without notice to you or our liability.
              </p>
              <p>
                <strong>4.4.</strong> You are solely responsible for obtaining the equipment and telecommunication services necessary to access the Service, and all fees associated therewith.
              </p>
              <p>
                <strong>4.5.</strong> We retain the right to implement any changes to the Service (whether to free or paid features) at any time, with or without notice.
              </p>
              <p>
                <strong>4.6.</strong> Your access to and use of the Service is at your own risk. The Company will have no responsibility for any harm to your computing system, loss of data, or other harm to you or any third party.
              </p>
              <p>
                <strong>4.7.</strong> The Company has no obligation to provide you with customer support of any kind. However, the Company may provide you with customer support from time to time, at the Company's sole discretion.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-text-primary mb-4">5. THIRD PARTY ADS, INTELLECTUAL PROPERTY, USER CONTENT</h2>
            
            <div className="space-y-4 text-text-secondary">
              <p>
                <strong>5.1.</strong> The Service may contain links to third party websites or resources and advertisements for third parties (collectively, "Third-Party Ads"). Such Third-Party Ads are not under the control of the Company and the Company is not responsible for any Third-Party Ads.
              </p>
              <p>
                <strong>5.2.</strong> You hereby release us, our officers, employees, agents and successors from claims, demands any and all losses, damages, rights, claims, and actions of any kind that is either directly or indirectly related to or arises from any interactions with or conduct of any users of the Service, or any Third-Party Ads.
              </p>
              <p>
                <strong>5.3.</strong> Subject to these Terms, the Company grants you a non-transferable, non-exclusive, revocable license (without the right to sublicense) to use the Service solely for your personal, non-commercial purposes.
              </p>
              <p>
                <strong>5.4.</strong> You agree that your use of the Service will be consistent with the foregoing license, covenants and restrictions and will neither infringe nor violate the rights of any other party.
              </p>
              <p>
                <strong>5.5.</strong> You acknowledge that all the text, images, marks, logos, compilations, data, other content, software and materials displayed on the Service is proprietary to us or to the third parties.
              </p>
              <p>
                <strong>5.6.</strong> The Company expressly reserves all rights, including all intellectual property rights, in all of the foregoing.
              </p>
              <p>
                <strong>5.7.</strong> The information you submit to us and any data, text and other material that you may submit to the Service ("User Content") remain your intellectual property.
              </p>
              <p>
                <strong>5.8.</strong> You grant the Company the non-exclusive, worldwide, transferable, perpetual, irrevocable right to publish, distribute, publicly display and perform the User Content in connection with the Service.
              </p>
              <p>
                <strong>5.9.</strong> Each user of the Service is solely responsible for any and all his or her User Content.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-text-primary mb-4">6. PAYMENTS AND REFUNDS</h2>
            
            <div className="space-y-4 text-text-secondary">
              <p>
                <strong>6.1.</strong> Certain features of the Service may be offered for a fee. You can make a purchase directly through us (the "Purchase").
              </p>
              <p>
                <strong>6.2.</strong> To the maximum extent permitted by applicable laws, we may change the Purchase fee at any time.
              </p>
              <p>
                <strong>6.3.</strong> You authorize us to charge the applicable fees to the payment method that you submit.
              </p>
              <p>
                <strong>6.4.</strong> Our Service may offer subscriptions that automatically renew. Unless you cancel your subscription before the end of the subscription period, you authorize us to charge you for the renewal term.
              </p>
              <p>
                <strong>6.5.</strong> To the extent permitted by applicable law, Purchases made via our website are non-refundable and/or non-exchangeable, unless otherwise is stated herein or is required by applicable law.
              </p>
            </div>

            {/* EEA Notice */}
            <div className="mt-6 p-4 bg-background-secondary rounded-lg border border-border">
              <h3 className="font-semibold text-text-primary mb-2">NOTE FOR EEA CITIZENS:</h3>
              <div className="space-y-3 text-text-secondary text-sm">
                <p>
                  If you are an EEA-based user, you have a period of 14 days to withdraw from a contract, without giving any reason, and without incurring any costs.
                </p>
                <p>
                  To exercise the right of withdrawal, you must inform us of your decision to withdraw from this contract by an e-mail. To meet the withdrawal deadline, it is sufficient for you to send your communication concerning your exercise of the right of withdrawal before the withdrawal period has expired.
                </p>
                <p>
                  If you withdraw from this contract within the said 14-day window, we shall reimburse to you all payments received from you for the same period. We will make the reimbursement without undue delay and in any event not later than 14 days from the day on which we are informed about your decision to withdraw from this contract.
                </p>
                <p>
                  If you have provided your prior express consent to begin the performance during the right of withdrawal period and acknowledgement that you will lose your right of withdrawal, then, unless the Service is defective, you will not be eligible to a refund in relation to digital content and will only be eligible to a proportional refund in relation to digital service.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-text-primary mb-4">7. USER REPRESENTATIONS AND RESTRICTIONS</h2>
            
            <div className="space-y-4 text-text-secondary">
              <p><strong>7.1.</strong> By using the Service, you represent and warrant that:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>you are not under the age of 18;</li>
                <li>you will not access the Service through automated or non-human means;</li>
                <li>you will not use the Service for any illegal or unauthorized purpose;</li>
                <li>you are not located in a country subject to a U.S. government embargo;</li>
                <li>you are not listed on any U.S. government list of prohibited or restricted parties;</li>
                <li>your use of the Service will not violate any applicable law or regulation.</li>
              </ul>
              <p>
                <strong>7.2.</strong> If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to refuse any and all current or future use of the Service.
              </p>
              <p>
                <strong>7.3.</strong> You may not access or use the Service for any purpose other than that for which we make the Service available.
              </p>
              <p>
                <strong>7.4.</strong> As a user of the Service, you agree not to: systematically retrieve data without permission, make modifications or derivative works, use the Service for commercial purposes, circumvent security features, interfere with the Service, decompile or reverse engineer the software, upload viruses or malware, use automated systems without authorization, or disparage the Service.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-text-primary mb-4">8. DISCLAIMER OF WARRANTIES</h2>
            
            <p className="text-text-secondary">
              THE WEBSITE, CONTENT AND OTHER ASPECTS OF THE SERVICE ARE PROVIDED "AS IS" AND "AS AVAILABLE". THE WEBSITE, CONTENT AND OTHER ASPECTS OF THE SERVICE ARE PROVIDED WITHOUT REPRESENTATION OR WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF TITLE, NON-INFRINGEMENT, INTEGRATION, MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE, AND ANY WARRANTIES IMPLIED BY ANY COURSE OF PERFORMANCE OR USAGE OF TRADE, ALL OF WHICH ARE EXPRESSLY DISCLAIMED.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-text-primary mb-4">9. LIMITATION OF LIABILITY</h2>
            
            <div className="space-y-4 text-text-secondary">
              <p>
                <strong>9.1.</strong> IN NO EVENT SHALL WE (AND OUR AFFILIATES) BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY LOST PROFIT OR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL OR PUNITIVE DAMAGES ARISING FROM THESE TERMS OR YOUR USE OF, OR INABILITY TO USE, THE SERVICE.
              </p>
              <p>
                <strong>9.2.</strong> NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, YOU AGREE THAT THE AGGREGATE LIABILITY OF THE COMPANY TO YOU FOR ANY AND ALL CLAIMS ARISING FROM THE USE OF THE WEBSITE, CONTENT OR SERVICE IS LIMITED TO THE AMOUNTS YOU HAVE PAID TO THE COMPANY FOR THE SERVICE.
              </p>
              <p>
                <strong>9.3.</strong> SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OF CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-text-primary mb-4">10. INDEMNITY</h2>
            
            <p className="text-text-secondary">
              You agree to indemnify and hold the Company, its successors, subsidiaries, affiliates, any related companies, its suppliers, licensors and partners, and the officers, directors, employees, agents and representatives of each of them harmless, including costs and attorneys' fees, from any claim or demand made by any third party due to or arising out of (i) your use of the Service, (ii) your User Content, or (iii) your violation of these Terms.
            </p>
          </section>

          {/* Section 11 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-text-primary mb-4">11. INTERNATIONAL USE</h2>
            
            <p className="text-text-secondary">
              The Service is controlled and operated from Cyprus and is not intended to subject the Company to the laws or jurisdiction of any state, country or territory other than that of Cyprus.
            </p>
          </section>

          {/* Section 12 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-text-primary mb-4">12. MANDATORY BINDING ARBITRATION AND CLASS ACTION WAIVER</h2>
            
            <div className="space-y-4 text-text-secondary">
              <p>
                <strong>12.1.</strong> PLEASE READ THIS ARBITRATION PROVISION CAREFULLY TO UNDERSTAND YOUR RIGHTS. EXCEPT WHERE PROHIBITED BY LAW, YOU AGREE THAT ANY CLAIM THAT YOU MAY HAVE IN THE FUTURE MUST BE RESOLVED THROUGH FINAL AND BINDING CONFIDENTIAL ARBITRATION. YOU ACKNOWLEDGE AND AGREE THAT YOU ARE WAIVING THE RIGHT TO A TRIAL BY JURY.
              </p>
              <p>
                <strong>12.2.</strong> YOU AGREE THAT YOU MAY ONLY BRING A CLAIM IN YOUR INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.
              </p>
              <p>
                <strong>12.3.</strong> YOU AND THE COMPANY AGREE TO ARBITRATION AS THE EXCLUSIVE FORM OF DISPUTE RESOLUTION FOR ALL DISPUTES AND CLAIMS ARISING OUT OF OR RELATING TO THIS AGREEMENT, THE SERVICE, OR THE PRIVACY POLICY.
              </p>
              <p>
                <strong>12.4-12.17.</strong> Arbitration will be conducted by the American Arbitration Association (AAA) in accordance with its Commercial Arbitration Rules. The arbitration shall be conducted exclusively in English. A single, independent and impartial arbitrator will be appointed. The arbitrator shall have exclusive authority to resolve any dispute relating to these Terms.
              </p>
              <p>
                <strong>12.18.</strong> YOU HAVE THE RIGHT TO OPT-OUT OF THIS ARBITRATION PROVISION WITHIN THIRTY (30) DAYS FROM THE DATE THAT YOU FIRST USE, OR ATTEMPT TO USE, THE SERVICE BY WRITING TO info@mementa.io OR TO THE ARBITRATION NOTICE ADDRESS.
              </p>
            </div>
          </section>

          {/* Section 13 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-text-primary mb-4">13. GOVERNING LAW</h2>
            
            <div className="space-y-4 text-text-secondary">
              <p>
                <strong>13.1.</strong> The laws of England and Wales, excluding its conflicts of law principles, govern these Terms and your use of the Service.
              </p>
              <p>
                <strong>13.2.</strong> To the extent that any action relating to any dispute hereunder is permitted to be brought in a court of law, such action will be subject to the exclusive jurisdiction of:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>the state and federal courts in the City of Alexandria, Virginia – if you are a resident of the United States; or</li>
                <li>the courts of Nicosia, Cyprus – if you are not a resident of the United States.</li>
              </ul>
            </div>
          </section>

          {/* Section 14 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-text-primary mb-4">14. MISCELLANEOUS PROVISIONS</h2>
            
            <div className="space-y-4 text-text-secondary">
              <p>
                <strong>14.1.</strong> No delay or omission by us in exercising any of our rights will impair any such right or be construed to be a waiver thereof.
              </p>
              <p>
                <strong>14.2.</strong> If any provision of these Terms is found to be invalid or unenforceable, these Terms will remain in full force and effect.
              </p>
              <p>
                <strong>14.3.</strong> These Terms set forth the entire agreement between you and the Company regarding its subject matter.
              </p>
              <p>
                <strong>14.4.</strong> The Company may transfer or assign any and all of its rights and obligations under these Terms to any other person.
              </p>
              <p>
                <strong>14.5.</strong> You agree that we may communicate electronically with you and that such communications are equivalent to communications in writing.
              </p>
              <p>
                <strong>14.6.</strong> In no event shall the Company be liable for any failure to comply with these Terms to the extent that such failure arises from factors outside the Company's reasonable control.
              </p>
            </div>
          </section>

          {/* Section 15 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-text-primary mb-4">15. CONTACT</h2>
            
            <p className="text-text-secondary">
              If you want to send any notice under these Terms or have any questions regarding the Service, you may contact us at: <a href="mailto:info@mementa.io" className="text-primary hover:underline">info@mementa.io</a>.
            </p>
          </section>

          {/* Agreement Statement */}
          <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-text-primary font-medium text-center">
              I HAVE READ THESE TERMS AND AGREE TO ALL OF THE PROVISIONS CONTAINED ABOVE.
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

