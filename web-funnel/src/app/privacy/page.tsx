'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function PrivacyPage() {
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
          <h1 className="text-3xl font-bold text-text-primary mb-8">Privacy Policy</h1>
          
          <p className="text-text-secondary mb-8">
            Welcome to Memento! These terms and conditions outline the rules and regulations for the use of our website and services.
          </p>

          {/* Important Privacy Information */}
          <section className="mb-8 p-4 bg-background-secondary rounded-lg border border-border">
            <h2 className="text-xl font-semibold text-text-primary mb-4">IMPORTANT PRIVACY INFORMATION</h2>
            
            <div className="space-y-4 text-text-secondary">
              <p>
                When you access our website we automatically collect from your device language settings, time zone, type and model of a device, device settings, operating system, Internet service provider, mobile carrier, hardware ID. We need this data to provide our services, analyze how our customers use the website and to measure ads.
              </p>
              <p>
                For improving the website and serving ads, we use third party solutions. As a result, we may process data using solutions developed by Google, Meta, Stripe, Amplitude, FunnelFox. Therefore, some of the data is stored and processed on the servers of such third parties. This enables us to (1) analyze different interactions (how often users make purchases, what products our users viewed); (2) serve and measure ads (and show them only to a particular group of users, for example, only to those, who have made a purchase).
              </p>
              <p>
                If you decide to make a purchase or to order a service on the Website, we will ask you to provide your email. We will use this data to fulfil your order.
              </p>
              <p>
                Please read our Privacy Policy below to know more about what we do with data (Section 3), what data privacy rights are available to you (Section 6) and who will be the data controller (Section 1). If any questions will remain unanswered, please contact us at <a href="mailto:info@mementa.io" className="text-primary hover:underline">info@mementa.io</a>.
              </p>
            </div>
          </section>

          {/* Privacy Policy Main */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-text-primary mb-4">PRIVACY POLICY</h2>
            
            <div className="space-y-4 text-text-secondary">
              <p>
                This Privacy Policy explains what personal data is collected when you use the website located at mementa.io (the "Website"), the services and products provided through it (together with the Website, the "Service"), how such personal data will be processed.
              </p>
              <p>
                BY USING THE SERVICE, YOU PROMISE US THAT (I) YOU HAVE READ, UNDERSTAND AND AGREE TO THIS PRIVACY POLICY, AND (II) YOU ARE OVER 18 YEARS OF AGE (OR HAVE HAD YOUR PARENT OR GUARDIAN READ AND AGREE TO THIS PRIVACY POLICY FOR YOU). If you do not agree, or are unable to make this promise, you must not use the Service. In such case, you must (a) contact us and request deletion of your data; (b) leave the Website and not access or use it; and (c) cancel any active subscriptions.
              </p>
              <p>
                Any translation from English version is provided for your convenience only. In the event of any difference in meaning or interpretation between the English language version of this Privacy Policy, and any translation, the English language version will prevail. The original English text shall be the sole legally binding version.
              </p>
              <p>
                <strong>"GDPR"</strong> means the General Data Protection Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data.
              </p>
              <p>
                <strong>"EEA"</strong> includes all current member states to the European Union and the European Free Trade Association. For the purpose of this policy EEA shall include the United Kingdom of Great Britain and Northern Ireland.
              </p>
              <p>
                <strong>"Process"</strong>, in respect of personal data, includes to collect, store, and disclose to others.
              </p>
            </div>
          </section>

          {/* Section 1 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-text-primary mb-4">1. PERSONAL DATA CONTROLLER</h2>
            <p className="text-text-secondary">
              GIVC Tech Limited, a company registered under the laws of the Republic of Cyprus, having its registered office at Florinis 7, Greg Tower, 2nd Floor, 1065, Nicosia, Cyprus, will be the controller of your personal data.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-text-primary mb-4">2. CATEGORIES OF PERSONAL DATA WE COLLECT</h2>
            
            <p className="text-text-secondary mb-4">
              We collect data you give us voluntarily (for example, email address). We also collect data automatically (for example, your device settings).
            </p>

            <h3 className="text-lg font-medium text-text-primary mt-6 mb-3">2.1. Data you give us</h3>
            <p className="text-text-secondary mb-4">
              If you decide to make a purchase on the Website, we will ask you to provide email address which will be used to send you details on your payment.
            </p>

            <h3 className="text-lg font-medium text-text-primary mt-6 mb-3">2.2. Data we collect automatically:</h3>
            
            <div className="space-y-4 text-text-secondary">
              <p>
                <strong>2.2.1. Data about how you found us</strong><br />
                We collect data about your referring app or URL (that is, the app or place on the Web where you were when you tapped/clicked on our ad).
              </p>
              <p>
                <strong>2.2.2. Device and Location data</strong><br />
                We collect data from your mobile device. Examples of such data include: language settings, time zone, type and model of a device, device settings, operating system, Internet service provider, mobile carrier, hardware ID. We also record the ads in our Website with which you interact (and the Internet links to which those ads lead).
              </p>
              <p>
                <strong>2.2.3. Usage data</strong><br />
                We record how you interact with our Service. For example, we log what pages you have viewed, the features and content you interact with, how often you use the Website, how long you are on the Website, your purchases.
              </p>
              <p>
                <strong>2.2.4. Transaction data</strong><br />
                When you make payments through the Service, you need to provide financial account data, such as your credit card number, to our third-party service providers. We do not collect or store full credit card number data, though we may receive credit card-related data, data about the transaction, including: date, time and amount of the transaction, the type of payment method used.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-text-primary mb-4">3. FOR WHAT PURPOSES WE PROCESS YOUR PERSONAL DATA</h2>
            
            <p className="text-text-secondary mb-4">We process your personal data:</p>

            <div className="space-y-6 text-text-secondary">
              <div>
                <h3 className="text-lg font-medium text-text-primary mb-2">3.1. To provide our Service</h3>
                <p>
                  This includes enabling you to use the Service in a seamless manner and preventing or addressing Service errors or technical issues. As a result of such processing, we will use your email, for example, to respond to your requests for support.
                </p>
                <p className="mt-2">
                  We use FunnelFox, a funnel creation service, to develop and administer quiz questions that may be presented to our users during the registration process.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-text-primary mb-2">3.2. To provide you with customer support</h3>
                <p>
                  We process your personal data to respond to your requests for technical support, Service information or to any other communication you initiate. For this purpose, we may send you, for example, notifications or emails about, the performance of our Service, security, payment transactions, notices regarding our Terms and Conditions of Use or this Privacy Policy.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-text-primary mb-2">3.3. To communicate with you regarding your use of our Service</h3>
                <p>
                  We communicate with you, for example, by emails. These may include for example, emails with information about the Service. To opt out of receiving emails, you need to follow the instructions in the footer of the emails.
                </p>
                <p className="mt-2">
                  The services that we use for these purposes may collect data concerning the date and time when the message was viewed by our Service's users, as well as when they interacted with it, such as by tapping/clicking on links included in the message.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-text-primary mb-2">3.4. To research and analyze your use of the Service</h3>
                <p>
                  This helps us to better understand our business, analyze our operations, maintain, improve, innovate, plan, design, and develop the Service and our new products. We also use such data for statistical analysis purposes, to test and improve our offers. This enables us to better understand what categories of users use our Services.
                </p>
                <p className="mt-2">
                  As a consequence, we often decide how to improve the Service based on the results obtained from this processing.
                </p>
                <p className="mt-2">
                  We use Meta Analytics, which is a service provided by Facebook that allows us to use different analytical tools. On Facebook Analytics we get, in particular, aggregated demographics and insights on how many people visit our Website, how often users make purchases, and other interactions.
                </p>
                <p className="mt-2">
                  We use Google Analytics, which is a service provided by Google that allows us to use different analytical tools.
                </p>
                <p className="mt-2">
                  Amplitude is an analytics service provided by Amplitude Inc. We use this tool to understand how customers use our Service. Amplitude collects various technical information, in particular, time zone, type of device (phone, tablet or laptop), unique identifiers (including advertising identifiers). Amplitude also allows us to track various interactions that occur in our Website. As a result, Amplitude helps us to decide what features we should focus on.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-text-primary mb-2">3.5. To send you marketing communications</h3>
                <p>
                  We process your personal data for our marketing campaigns. As a result, you will receive information about our products, such as, for example, special offers or new features and products available on the Website. We may show you advertisements on our Website, and send you emails for marketing purposes. If you do not want to receive marketing emails from us, you can unsubscribe following instructions in the footer of the marketing emails.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-text-primary mb-2">3.6. To personalize our ads</h3>
                <p>
                  We and our partners use your personal data to tailor ads and possibly even show them to you at the relevant time. For example, if you visited our Website, you might see ads of our products in your Facebook's feed.
                </p>
                
                <div className="mt-4 p-4 bg-background-secondary rounded-lg">
                  <h4 className="font-medium text-text-primary mb-2">How to opt out or influence personalized advertising</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>iOS:</strong> On your iPhone or iPad, go to Settings &gt; Privacy &gt; Apple Advertising and deselect Personalized Ads.</li>
                    <li><strong>Android:</strong> To opt-out of ads on an Android device, go to Settings &gt; Privacy &gt; Ads and enable Opt out of Ads personalization.</li>
                    <li><strong>macOS:</strong> On your MacBook, go to System Preferences &gt; Security & Privacy &gt; Privacy, select Apple Advertising, and deselect Personalized Ads.</li>
                    <li><strong>Windows:</strong> Select Start &gt; Settings &gt; Privacy and turn off the setting for Let apps use advertising ID.</li>
                  </ul>
                  
                  <h4 className="font-medium text-text-primary mt-4 mb-2">Useful Links</h4>
                  <ul className="space-y-1 text-sm">
                    <li><a href="http://optout.networkadvertising.org/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Network Advertising Initiative</a></li>
                    <li><a href="http://optout.aboutads.info/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance</a></li>
                    <li><a href="http://youradchoices.ca/choices" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance (Canada)</a></li>
                    <li><a href="http://www.youronlinechoices.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance (EU)</a></li>
                    <li><a href="http://www.aboutads.info/appchoices" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">DAA AppChoices page</a></li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-text-primary mb-2">3.7. To deliver targeted advertising</h3>
                <p>
                  We use Meta pixel on the Website. Facebook pixel is a code placed on the Website collecting data that helps us track conversions from Facebook ads, build targeted audience and remarket to people who have taken some action on the Website.
                </p>
                <p className="mt-2">
                  We use Meta Ads Manager together with Meta Custom Audience, which allows us to choose audiences that will see our ads on Facebook or other Facebook's products (for example, Instagram).
                </p>
                <p className="mt-2">
                  Google Ads is an ad delivery service provided by Google that can deliver ads to users. In particular, Google allows us to tailor the ads in a way that they will appear, for example, only to users that have conducted certain actions with our Website.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-text-primary mb-2">3.8. To process your payments</h3>
                <p>
                  We provide paid products and/or services within the Service. For this purpose, we use third-party services for payment processing. We will not store or collect your payment card details ourselves. This information will be provided directly to our third-party payment processors.
                </p>
                <p className="mt-2">
                  To enable the purchase and to process your payments we use Stripe.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-text-primary mb-2">3.9. To enforce our Terms and Conditions of Use and to prevent and combat fraud</h3>
                <p>
                  We use personal data to enforce our agreements and contractual commitments, to detect, prevent, and combat fraud. As a result of such processing, we may share your information with others, including law enforcement agencies.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-text-primary mb-2">3.10. To comply with legal obligations</h3>
                <p>
                  We may process, use, or share your data when the law requires it, in particular, if a law enforcement agency requests your data by available legal means.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-text-primary mb-4">4. UNDER WHAT LEGAL BASES WE PROCESS YOUR PERSONAL DATA</h2>
            
            <p className="text-text-secondary mb-4">
              In this section, we are letting you know what legal basis we use for each particular purpose of processing. This section applies only to EEA-based users.
            </p>
            
            <p className="text-text-secondary mb-4">We process your personal data under the following legal bases:</p>
            
            <ul className="list-disc list-inside text-text-secondary mb-4 space-y-1">
              <li>your consent</li>
              <li>to perform our contract with you</li>
              <li>for our (or others') legitimate interests</li>
            </ul>
            
            <p className="text-text-secondary mb-2">
              Under contract performance, we: Provide our Service, Customize your experience, Provide you with customer support, Communicate with you regarding your use of our Service, Process your payments.
            </p>
            
            <p className="text-text-secondary">
              We rely on legitimate interests to: communicate with you, research and analyze your use of the Service, send you marketing communications, personalize our ads, and enforce our Terms and Conditions of Use.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-text-primary mb-4">5. WITH WHOM WE SHARE YOUR PERSONAL DATA</h2>
            
            <p className="text-text-secondary mb-4">
              We share information with third parties that help us operate, provide, improve, integrate, customize, support, and market our Service.
            </p>

            <h3 className="text-lg font-medium text-text-primary mt-6 mb-3">5.1. Service providers</h3>
            <ul className="list-disc list-inside text-text-secondary space-y-1">
              <li>data analytics providers (Meta, Google, Amplitude)</li>
              <li>marketing partners (Meta)</li>
              <li>payment service providers (Stripe)</li>
              <li>user experience tools (FunnelFox)</li>
            </ul>

            <h3 className="text-lg font-medium text-text-primary mt-6 mb-3">5.2. Law enforcement agencies and other public authorities</h3>
            <p className="text-text-secondary">
              We may use and disclose personal data to enforce our Terms and Conditions of Use, to protect our rights, privacy, safety, or property, and to respond to requests from courts and law enforcement agencies.
            </p>

            <h3 className="text-lg font-medium text-text-primary mt-6 mb-3">5.3. Third parties as part of a merger or acquisition</h3>
            <p className="text-text-secondary">
              We may share information with any affiliated entity and may transfer such information in the course of a corporate transaction.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-text-primary mb-4">6. HOW YOU CAN EXERCISE YOUR PRIVACY RIGHTS</h2>
            
            <p className="text-text-secondary mb-4">To be in control of your personal data, you have the following rights:</p>
            
            <ul className="space-y-2 text-text-secondary">
              <li><strong>Accessing / reviewing / updating / correcting your personal data.</strong> You may review, edit, or change the personal data that you had previously provided.</li>
              <li><strong>Deleting your personal data.</strong> You can request erasure of your personal data as permitted by law.</li>
              <li><strong>Objecting to or restricting the use of your personal data.</strong> You can ask us to stop using all or some of your personal data.</li>
            </ul>

            <div className="mt-4 p-4 bg-background-secondary rounded-lg">
              <h4 className="font-medium text-text-primary mb-2">Additional information for EEA-based users:</h4>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li><strong>The right to lodge a complaint with supervisory authority.</strong></li>
                <li><strong>The right to data portability.</strong> If you wish to receive your personal data in a machine-readable format, you can send respective request to us.</li>
              </ul>
            </div>
            
            <p className="text-text-secondary mt-4">
              To exercise any of your privacy rights, please send a request to <a href="mailto:info@mementa.io" className="text-primary hover:underline">info@mementa.io</a>.
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-text-primary mb-4">7. AGE LIMITATION</h2>
            <p className="text-text-secondary">
              We do not knowingly process personal data from persons under 18 years of age. If you learn that anyone younger than 18 has provided us with personal data, please contact us.
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-text-primary mb-4">8. INTERNATIONAL DATA TRANSFERS</h2>
            <p className="text-text-secondary">
              We may transfer personal data to countries other than the country in which the data was originally collected. When we transfer personal data to countries that do not provide an adequate level of protection, we use appropriate safeguards.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-text-primary mb-4">9. CHANGES TO THIS PRIVACY POLICY</h2>
            <p className="text-text-secondary">
              We may modify this Privacy Policy from time to time. If we decide to make material changes, you will be notified by available means such as email. By continuing to use the Service after those changes become effective, you agree to be bound by the revised Privacy Policy.
            </p>
          </section>

          {/* Section 10 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-text-primary mb-4">10. CALIFORNIA PRIVACY RIGHTS</h2>
            <p className="text-text-secondary">
              California's Shine the Light law gives California residents the right to ask companies once a year what personal information they share with third parties for those third parties' direct marketing purposes.
            </p>
          </section>

          {/* Section 11 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-text-primary mb-4">11. DATA RETENTION</h2>
            <p className="text-text-secondary">
              We will store your personal data for as long as it is reasonably necessary for achieving the purposes set forth in this Privacy Policy. We will also retain and use your personal data as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.
            </p>
          </section>

          {/* Section 12 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-text-primary mb-4">12. HOW 'DO NOT TRACK' REQUESTS ARE HANDLED</h2>
            <p className="text-text-secondary">
              Except as otherwise stipulated in this Privacy Policy, this Website does not support "Do Not Track" requests. To determine whether any of the third-party services it uses honor the "Do Not Track" requests, please read their privacy policies.
            </p>
          </section>

          {/* Section 13 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-text-primary mb-4">13. CONTACT US</h2>
            <p className="text-text-secondary">
              You may contact us at any time for details regarding this Privacy Policy and its previous versions. For any questions concerning your account or your personal data please contact us at <a href="mailto:info@mementa.io" className="text-primary hover:underline">info@mementa.io</a>.
            </p>
          </section>

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-border text-center text-text-tertiary text-sm">
            <p>© 2025 Memento. All rights reserved.</p>
          </footer>
        </article>
      </motion.div>
    </main>
  )
}

