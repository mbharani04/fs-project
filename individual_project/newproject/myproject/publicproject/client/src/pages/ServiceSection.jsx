import React, { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ServicesContext } from '../context/ServicesContext';
import ServiceCard from '../servicescards/ServiceCard';
import Footer from '../components/Footer';
import serviceBanner from '../assets/servicesimg/servicebanner.png';

const ServiceSection = () => {
  const { services, showAll, setShowAll } = useContext(ServicesContext);
  const location = useLocation();
  const isServicesPage = location.pathname === '/services';
  const shouldShowAll = isServicesPage || showAll;

  useEffect(() => {
    if (isServicesPage) window.scrollTo(0, 0);
  }, [isServicesPage]);

  const displayServices = shouldShowAll ? services : services.slice(0, 6);

  return (
    <>
      <section className={`${isServicesPage ? 'bg-white' : 'bg-white border-t border-slate-100'} py-7`} id="services">
        <div className="mx-auto max-w-7xl px-5">

          {/* ── Service Banner ── */}
          <div className="relative w-full rounded-3xl overflow-hidden shadow-lg mb-10 border border-slate-100">
            <img
              src={serviceBanner}
              alt="Our Services - One Portal, Many Services"
              className="w-full object-cover"
              style={{ maxHeight: '420px', objectPosition: 'center' }}
            />
            {/* Subtle gradient overlay at bottom for smooth transition */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/60 to-transparent" />
          </div>

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-center gap-6 mb-7">
            <div>
              <h2 className="mt-4 text-3xl flex justify-center md:text-5xl font-extrabold tracking-tight text-slate-900 mb-7">
                {isServicesPage ? 'Everything you need to know' : ''}
              </h2>
            </div>

            {!shouldShowAll && (
              <Link
                to="/services"
                onClick={() => setShowAll(true)}
                className="flex-shrink-0 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 hover:-translate-y-0.5 self-start md:self-end"
              >
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 ml-25 mr-25 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {displayServices.map((service, i) => (
              <ServiceCard key={service.id} {...service} index={i} />
            ))}
          </div>

          {/* Mobile CTA */}
          {!shouldShowAll && (
            <div className="mt-10 md:hidden text-center">
              <Link
                to="/services"
                onClick={() => setShowAll(true)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all"
              >
                View all services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ── Footer (only on the dedicated /services page) ── */}
      {isServicesPage && <Footer />}
    </>
  );
};

export default ServiceSection;
