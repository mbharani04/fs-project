import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, CheckCircle2, Zap, Lock, TrendingUp } from 'lucide-react';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import { ServicesContext } from '../context/ServicesContext';
import Ferrofluid from '../components/Ferrofluid';
import './Home.css';

const features = [
  {
    icon: Zap,
    title: 'Instant Processing',
    desc: 'Complaints are routed to the right department within seconds using smart automation.',
    color: 'from-amber-400 to-orange-500',
    bg: 'bg-amber-500/10 border border-amber-500/20',
    text: 'text-amber-400',
  },
  {
    icon: Lock,
    title: 'Bank-grade Security',
    desc: 'End-to-end encryption and OTP verification keep your personal data always safe.',
    color: 'from-blue-400 to-blue-600',
    bg: 'bg-blue-500/10 border border-blue-500/20',
    text: 'text-blue-400',
  },
  {
    icon: TrendingUp,
    title: 'Real-time Tracking',
    desc: 'Track the live status of every request with transparent timelines and notifications.',
    color: 'from-emerald-400 to-teal-500',
    bg: 'bg-emerald-500/10 border border-emerald-500/20',
    text: 'text-emerald-400',
  },
];

const Home = () => {
  const { setShowAll } = useContext(ServicesContext);

  return (
    <div className="home-page">
      {/* ── Ferrofluid Animated Background Layer ── */}
      <div className="landing-ferrofluid-background">
        <Ferrofluid />
        <div className="landing-ferrofluid-overlay" />
      </div>

      {/* ── Home Page Content Layer ── */}
      <div className="home-page-content">
        {/* ── HERO ── */}
        <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
          {/* Decorative mesh */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-gradient-to-b from-indigo-500/10 to-transparent blur-3xl" />
            <div className="absolute top-1/2 -right-32 w-[400px] h-[400px] rounded-full bg-gradient-to-l from-violet-500/10 to-transparent blur-2xl" />
          </div>

          <div className="relative mx-auto max-w-5xl px-6 text-center">
            {/* Pill badge */}
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-800/80 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-blue-300 mb-8 tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              Trusted by 2 million citizens across India
            </div>

            <h1 className="animate-fade-up-2 text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.08] text-white mb-6">
              Government services,{' '}
              <span className="text-gradient">redesigned</span>{' '}
              for everyone.
            </h1>

            <p className="animate-fade-up-3 mx-auto max-w-2xl text-lg md:text-xl text-slate-300 leading-relaxed mb-10">
              One secure portal to raise complaints, access welfare schemes, and interact with government departments — fast, transparent, and effortless.
            </p>

            <div className="animate-fade-up-4 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link
                to="/services"
                onClick={() => setShowAll(true)}
                className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore Services
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
              <Link to="/about" className="inline-flex items-center gap-2 rounded-2xl border border-slate-700/80 bg-slate-800/80 backdrop-blur-md px-8 py-4 text-base font-semibold text-white shadow-sm hover:shadow-md hover:border-slate-600 transition-all duration-200 hover:-translate-y-0.5">
                Learn more
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-300">
              {['OTP Verified', 'End-to-End Encrypted', 'Real-time Tracking', 'ISO 27001'].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="py-24 px-6">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-300 uppercase tracking-wider mb-4">
                Why PublicService
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mt-3 mb-4">
                Built for citizens. Trusted by government.
              </h2>
              <p className="mx-auto max-w-xl text-slate-300 text-lg">
                A platform designed with the same care and precision that citizens deserve from public services.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {features.map(({ icon: Icon, title, desc, bg, text }) => (
                <div key={title} className="group rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-md p-8 hover:-translate-y-1 hover:border-slate-700 transition-all duration-300">
                  <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${bg}`}>
                    <Icon className={`h-6 w-6 ${text}`} />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT + CONTACT ── */}
        <AboutSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Home;