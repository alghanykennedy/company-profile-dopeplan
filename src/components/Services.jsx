import React from 'react';
import { Target, Users, Share2, Code2, CheckCircle2 } from 'lucide-react';
import './Services.css';

const servicesList = [
  {
    id: 1,
    title: 'Performance Advertising',
    description: 'Get in front of high-intent customers and turn clicks into powerful, profitable results—fast.',
    icon: <Target size={28} className="text-accent" />,
    benefits: ['More Qualified Leads', 'Lower Cost Per Acquisition', 'Maximize ROAS'],
  },
  {
    id: 2,
    title: 'Social Media Management',
    description: 'Build brand trust, spark engagement, and turn followers into loyal, lifelong brand advocates.',
    icon: <Users size={28} className="text-accent" />,
    benefits: ['Stronger Brand Presence', 'Higher Engagement', 'Community & Loyalty'],
  },
  {
    id: 3,
    title: 'Affiliate Management',
    description: 'Scale your sales channels risk-free through a curated network of vetted, high-performing partners.',
    icon: <Share2 size={28} className="text-accent" />,
    benefits: ['Pay-for-Performance', 'Scalable Sales Channel', 'Vetted & Active Partners'],
  },
  {
    id: 4,
    title: 'Web Development & SEO',
    description: 'Convert traffic seamlessly with fast, beautiful, and search-optimized digital storefronts that rank and sell.',
    icon: <Code2 size={28} className="text-accent" />,
    benefits: ['Conversion-Focused Design', 'SEO-Optimized Structure', 'E-commerce & Company Profile'],
  }
];

const Services = () => {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="heading-md">Services That Drive Real <span className="text-accent">Business Results</span></h2>
          <p className="section-subtitle">We don't just provide services. We solve growth challenges.</p>
        </div>

        <div className="services-grid">
          {servicesList.map(service => (
            <div key={service.id} className="glass-card service-card">
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <ul className="service-benefits">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={16} className="benefit-icon text-accent" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
