import React from 'react';
import { ArrowRight, Play, TrendingUp, BarChart3, Users } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      {/* Background elements */}
      <div className="hero-glow"></div>
      <div className="hero-grid"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge animate-fade-in">
            FULL-SERVICE MARKETING AGENCY
          </div>
          
          <h1 className="heading-lg animate-fade-in delay-100">
            Drive Measurable E-commerce <span className="text-accent">Growth.</span>
          </h1>
          
          <p className="hero-description animate-fade-in delay-200">
            We combine performance advertising, social media, affiliate networks, and conversion-focused web development to attract your ideal customers and turn clicks into loyal buyers.
          </p>
          
          <div className="hero-actions animate-fade-in delay-300">
            <a href="#contact" className="btn-primary">
              Get My Growth Blueprint <ArrowRight size={18} />
            </a>
            <button className="btn-play">
              <span className="play-icon-wrapper">
                <Play size={18} fill="currentColor" />
              </span>
              <span className="play-text">
                <span className="play-title">Watch How We Drive Growth</span>
                <span className="play-duration">2 min</span>
              </span>
            </button>
          </div>
        </div>

        <div className="hero-visuals animate-fade-in delay-200">
          <div className="dashboard-mockup">
            <div className="mockup-card primary-card">
              <div className="card-header">
                <span className="card-title">Growth Overview</span>
              </div>
              <div className="card-value-group">
                <span className="card-label">Revenue</span>
                <div className="card-value">$2,450,000</div>
                <span className="card-trend positive">+32% vs last 90 days</span>
              </div>
              <div className="chart-placeholder">
                <svg viewBox="0 0 100 30" className="sparkline">
                  <path d="M0,25 L10,22 L20,24 L30,15 L40,18 L50,8 L60,12 L70,5 L80,7 L90,2 L100,0" fill="none" stroke="var(--accent-primary)" strokeWidth="2" />
                  <path d="M0,25 L10,22 L20,24 L30,15 L40,18 L50,8 L60,12 L70,5 L80,7 L90,2 L100,0 L100,30 L0,30 Z" fill="url(#gradient)" stroke="none" opacity="0.2" />
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--accent-primary)" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            <div className="mockup-card secondary-card">
               <div className="card-value-group">
                <span className="card-label">ROAS</span>
                <div className="card-value">6.8x</div>
                <span className="card-trend positive">+45%</span>
              </div>
               <div className="bar-chart-placeholder">
                 <div className="bar" style={{height: '30%'}}></div>
                 <div className="bar" style={{height: '50%'}}></div>
                 <div className="bar" style={{height: '70%'}}></div>
                 <div className="bar accent" style={{height: '100%'}}></div>
               </div>
            </div>
            
            <div className="mockup-card tertiary-card">
              <div className="card-value-group">
                <span className="card-label">Conversions</span>
                <div className="card-value">28,540</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
