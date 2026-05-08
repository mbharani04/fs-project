// AboutSection.jsx

import React from 'react'

const WHY_US = [
  { icon: '🔒', title: 'Secure & Private', desc: 'All complaints are encrypted and stored securely. Your identity is protected.' },
  { icon: '⚡', title: 'Faster Resolution', desc: 'Direct routing to concerned departments ensures quicker action on complaints.' },
  { icon: '📡', title: 'Real-time Tracking', desc: 'Monitor your complaint from submission to resolution with live status updates.' },
  { icon: '🤝', title: 'Public Trust', desc: 'Built with transparency and accountability as core principles.' },
  { icon: '🌍', title: 'Nationwide Coverage', desc: 'Serving citizens from all 28 states and 8 union territories.' },
  { icon: '📱', title: 'Mobile Ready', desc: 'Fully responsive portal — file complaints from any device, anywhere.' },
]

const TIMELINE = [
  { year: '2020', event: 'Platform conceptualized under Digital India initiative' },
  { year: '2021', event: 'Beta launch with 5 departments and 3 states' },
  { year: '2022', event: 'Expanded to 18 states, OTP verification introduced' },
  { year: '2023', event: 'Full national rollout — all 28 states onboarded' },
  { year: '2024', event: 'AI-assisted complaint routing and multilingual support launched' },
  { year: '2025', event: '2+ crore complaints resolved; new mobile app in development' },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Our Story</span>
          <h2 className="font-display text-4xl font-bold text-navy-900 mt-2">About JanSampark</h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start mb-16">
          {/* Mission / Vision */}
          <div>
            <p className="text-gray-600 leading-relaxed text-base mb-6">
              JanSampark was created to help citizens raise complaints easily and safely to concerned government departments. Many public issues — road damage, water supply failures, electricity outages, and farmer-related concerns — are often delayed due to lack of communication and transparency.
            </p>
            <p className="text-gray-600 leading-relaxed text-base mb-8">
              This platform acts as a bridge between the public and government authorities by providing a secure, trusted, and easy-to-use online complaint system. Our mission is to ensure immediate attention and faster action from responsible departments while building trust among citizens.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 bg-navy-50 border-l-4 border-navy-700 rounded-r-xl">
                <div className="text-2xl mb-2">🎯</div>
                <h4 className="font-semibold text-navy-900 mb-1">Our Mission</h4>
                <p className="text-gray-500 text-sm">To create a transparent, safe, and accessible digital platform where every citizen's voice is heard and acted upon.</p>
              </div>
              <div className="p-5 bg-orange-50 border-l-4 border-orange-500 rounded-r-xl">
                <div className="text-2xl mb-2">🔭</div>
                <h4 className="font-semibold text-navy-900 mb-1">Our Vision</h4>
                <p className="text-gray-500 text-sm">A future where smart governance and public participation drive faster development and citizen welfare across India.</p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="font-display text-xl font-bold text-navy-900 mb-6">Our Journey</h3>
            <div className="relative pl-6">
              <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-navy-700 to-orange-500"></div>
              <div className="space-y-5">
                {TIMELINE.map(({ year, event }) => (
                  <div key={year} className="relative flex items-start gap-4">
                    <div className="absolute -left-4 w-4 h-4 rounded-full bg-orange-500 border-2 border-white shadow mt-0.5"></div>
                    <div>
                      <span className="font-mono text-orange-500 text-sm font-bold">{year}</span>
                      <p className="text-gray-600 text-sm mt-0.5">{event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <h3 className="font-display text-2xl font-bold text-navy-900 text-center mb-8">Why Choose JanSampark?</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_US.map(({ icon, title, desc }) => (
              <div key={title} className="info-card p-6 group">
                <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-orange-50 transition-colors">
                  {icon}
                </div>
                <h4 className="font-semibold text-navy-900 mb-2">{title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}