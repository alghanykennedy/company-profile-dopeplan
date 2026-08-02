import React from 'react';
import './SocialProof.css';

const caseStudies = [
  {
    id: 1,
    brand: 'Velora Active',
    niche: 'Activewear',
    metric1: '+187%',
    metric1Label: 'Revenue Growth (90 Days)',
    metric2: '6.2x',
    metric2Label: 'ROAS Achieved',
    description: 'Through integrated PPC, SEO, and conversion-optimized web development.',
  },
  {
    id: 2,
    brand: 'Kana Skincare',
    niche: 'Skincare',
    metric1: '+143%',
    metric1Label: 'Organic Traffic (6 Months)',
    metric2: '3.8x',
    metric2Label: 'Conversion Rate',
    description: 'SEO-optimized content and technical improvements that drive long-term growth.',
  },
  {
    id: 3,
    brand: 'Lumme Home',
    niche: 'Home Decor',
    metric1: '+220%',
    metric1Label: 'Sales from Affiliate (4 Months)',
    metric2: '250+',
    metric2Label: 'Active Affiliates',
    description: 'Performance-based affiliate program that scaled with zero upfront risk.',
  }
];

const SocialProof = () => {
  return (
    <section id="work" className="section social-proof-section">
      <div className="container">
        
        {/* Trusted By Logos */}
        <div className="trusted-by text-center">
          <p className="heading-sm text-secondary">TRUSTED BY GROWING E-COMMERCE BRANDS</p>
          <div className="marquee-container">
            <div className="marquee-content">
              {['LUMME', 'URBANLIFE', 'NUMA', 'VELORA', 'KANA', 'MOZAIC', 'LUMME', 'URBANLIFE', 'NUMA', 'VELORA', 'KANA', 'MOZAIC'].map((logo, index) => (
                <div key={index} className="brand-logo">{logo}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="section-header text-center" style={{ marginTop: '6rem' }}>
          <h2 className="heading-md">Proven Results. Real <span className="text-accent">Impact.</span></h2>
        </div>

        <div className="case-studies-grid">
          {caseStudies.map((study) => (
            <div key={study.id} className="case-study-card glass-card">
              <div className="case-header">
                <h3 className="brand-name">{study.brand}</h3>
                <span className="badge-niche">{study.niche}</span>
              </div>
              
              <div className="metrics-container">
                <div className="metric">
                  <div className="metric-value">{study.metric1}</div>
                  <div className="metric-label">{study.metric1Label}</div>
                </div>
                <div className="metric">
                  <div className="metric-value">{study.metric2}</div>
                  <div className="metric-label">{study.metric2Label}</div>
                </div>
              </div>
              
              <p className="case-description">{study.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="cta-banner">
          <div className="cta-content">
            <h3 className="heading-md">Ready to Accelerate Your Business Growth?</h3>
            <p>Get a custom growth blueprint and discover opportunities across ads, social, affiliate, and your website.</p>
          </div>
          <div className="cta-action">
            <a href="#contact" className="btn-primary">
              Get My Growth Blueprint
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SocialProof;
