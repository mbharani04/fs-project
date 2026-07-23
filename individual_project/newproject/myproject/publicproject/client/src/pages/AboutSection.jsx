import React from 'react';
import { Target, Eye, Shield, Users, CheckCircle2 } from 'lucide-react';

const pillars = [
  {
    icon: Target,
    title: 'Our Mission',
    desc: 'Build trust among citizens through a transparent, safe, and easy-to-use digital platform.',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    borderHover: 'hover:border-blue-200',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    desc: 'Encouraging accountability, public participation, and smart governance for a better future.',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    borderHover: 'hover:border-emerald-200',
  },
  {
    icon: Shield,
    title: 'Safe & Secure',
    desc: 'OTP verified authentication and encrypted data handling for complete peace of mind.',
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
    borderHover: 'hover:border-violet-200',
  },
  {
    icon: Users,
    title: 'Public Trust',
    desc: 'Directly connecting millions of citizens to actionable, fast government support.',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-500',
    borderHover: 'hover:border-orange-200',
  },
];

const highlights = [
  'Direct connection to 500+ government departments',
  'Real-time complaint tracking and updates',
  'Multi-language support for all citizens',
  'Mobile-first, accessible on any device',
];

const AboutSection = () => {
  return (
    <section className="bg-slate-50/60 border-t border-slate-100 py-10" id="about">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="section-label mb-4 inline-flex">About Us</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Bridging citizens &amp;{' '}
            <span className="text-gradient">government</span>
          </h2>
          <p className="mx-auto max-w-2xl text-slate-500 text-lg leading-relaxed">
            A platform created to eliminate the gap between public needs and government response — transparent, fast, and built for everyone.
          </p>
        </div>

        {/* 2-col layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text */}
          <div className="space-y-6">
            <p className="text-slate-600 text-lg leading-relaxed">
              Our platform bridges citizens and government authorities through a safe, simple channel to raise complaints and access important public services. Issues like road damage, water supply, electricity failures, women's safety, farmer assistance, education, and medical support often languish due to poor communication — we fix that.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Beyond complaints, citizens can apply for government forms and correct ID documents (Aadhaar, PAN, Voter ID, Ration Card, Driving License) entirely online. Our goal: quick resolution, secure communication, full transparency, and lasting public trust.
            </p>
            <ul className="space-y-3 pt-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-2 gap-5">
            {pillars.map(({ icon: Icon, title, desc, iconBg, iconColor, borderHover }, i) => (
              <div
                key={title}
                className={`card p-6 flex flex-col items-center text-center ${borderHover} hover:-translate-y-1 transition-all duration-300 ${i % 2 !== 0 ? 'mt-6' : ''}`}
              >
                <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-2xl ${iconBg}`}>
                  <Icon className={`h-5 w-5 ${iconColor}`} />
                </div>
                <h4 className="font-bold text-slate-900 mb-1.5 text-base">{title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
