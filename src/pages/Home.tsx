import React from 'react';
import { Section } from '../components/Section';
import { FlowDiagram } from '../components/FlowDiagram';
import { PricingCard } from '../components/PricingCard';
import { CHECKLIST_STEPS, REQUIRED_INPUTS, PRICING_MODELS } from '../constants';
import { PlayCircle } from 'lucide-react';
import { Layout } from '../components/Layout';
import { Helmet } from 'react-helmet-async';

export const Home: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>ASR | Product Strategy Document</title>
        <meta name="description" content="Autonomous Sales Representative (ASR) Product Strategy. Infinite scalability, perfect adherence, and 10x ROI." />
      </Helmet>
      
      {/* Header / Hero */}
      <header id="overview" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden bg-brand-dark text-white print:pt-12 print:pb-12">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-light/20 to-transparent print:hidden"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
            <div className="md:w-3/5 flex flex-col items-center md:items-start text-center md:text-left">
                <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight text-white">
                  Autonomous Sales Representative
                </h1>
                
                <div className="mb-10">
                  <p className="text-xl md:text-3xl font-light opacity-90 max-w-4xl leading-relaxed mb-4">
                    The first AI Sales Employee that works 24/7/365 for less than the cost of a daily coffee.
                  </p>
                </div>

                <button className="bg-brand-light text-brand-dark px-8 py-4 rounded font-bold text-sm md:text-base uppercase tracking-widest hover:bg-white transition-colors shadow-lg shadow-brand-light/20">
                  Schedule a Discovery Call
                </button>
            </div>

            <div className="md:w-2/5 flex justify-center md:justify-end print:hidden">
                <div className="relative w-[22rem] h-[22rem] md:w-[30rem] md:h-[30rem] rounded-full border-8 border-white/10 shadow-2xl overflow-hidden shrink-0">
                    <img 
                      src="https://comprehensive-pink-dfmggi2iog.edgeone.app/Generated%20Image%20December%2030,%202025%20-%205_12PM.jpeg" 
                      alt="Autonomous Sales Representative" 
                      className="w-full h-full object-cover"
                    />
                </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 border-t border-white/10 pt-12 print:mt-8">
             <div>
                <h3 className="font-display font-bold text-2xl mb-3 text-brand-light">Scalable</h3>
                <p className="text-lg opacity-80 leading-relaxed">Control your demand</p>
             </div>
             <div>
                <h3 className="font-display font-bold text-2xl mb-3 text-brand-light">Pitch Perfect</h3>
                <p className="text-lg opacity-80 leading-relaxed">Fine tuned closing scripts</p>
             </div>
             <div>
                <h3 className="font-display font-bold text-2xl mb-3 text-brand-light">Tailored</h3>
                <p className="text-lg opacity-80 leading-relaxed">Speaks your language in your way</p>
             </div>
          </div>
        </div>
      </header>

      {/* Wireframe / Sales Sheet */}
      <Section id="system" className="bg-gray-50">
        <div className="text-center mb-16 print:mb-8">
           <h2 className="text-4xl md:text-6xl font-display font-bold text-brand-dark mb-4">Stop Cold Calling. Start Closing.</h2>
        </div>

        <div className="mb-16 print:mb-8">
          <FlowDiagram />
        </div>
      </Section>

      {/* Onboarding Checklist */}
      <Section id="process" dark>
        <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Onboarding <span className="text-brand-light">Protocol</span></h2>
                <p className="opacity-80 leading-relaxed mb-8">
                    These are the operational steps required to deploy an ASR unit. We move from discovery to full integration with precision.
                </p>
                <div className="p-6 bg-brand-light/10 rounded-xl border border-brand-light/20 break-inside-avoid">
                    <h4 className="font-bold uppercase tracking-widest text-sm mb-4 text-brand-light">Required Inputs</h4>
                    <ul className="space-y-4">
                        {REQUIRED_INPUTS.map((input, i) => (
                            <li key={i} className="flex gap-3 text-sm">
                                <div className="min-w-[4px] h-[4px] mt-2 rounded-full bg-brand-light"></div>
                                <div>
                                    <strong className="block text-white">{input.title}</strong>
                                    <span className="opacity-60 text-xs">{input.desc}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="md:w-2/3 grid gap-6">
                {CHECKLIST_STEPS.map((phase, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors break-inside-avoid">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-display text-xl font-bold">{phase.phase}: <span className="text-brand-light">{phase.title}</span></h3>
                        </div>
                        <ul className="space-y-3">
                            {phase.items.map((item) => (
                                <li key={item.id} className="flex items-start gap-3">
                                    <div className="mt-1">
                                      <div className="w-5 h-5 rounded border border-brand-light flex items-center justify-center">
                                          <div className="w-3 h-3 bg-brand-light opacity-50"></div>
                                      </div>
                                    </div>
                                    <span className="text-sm md:text-base opacity-90">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section id="benefits">
        <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-4">Performance Metrics</h2>
             <p className="text-gray-600 max-w-2xl mx-auto">Why the math works in your favor.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
            {/* Cost Efficiency */}
            <div className="bg-brand-dark text-white p-8 rounded-3xl relative overflow-hidden shadow-2xl break-inside-avoid">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-light opacity-20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl print:hidden"></div>
                <h3 className="font-display text-2xl font-bold mb-8">Cost Efficiency Analysis</h3>
                
                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between text-sm mb-2 opacity-80">
                            <span>Human SDR</span>
                            <span>$4,000 - $6,000/mo</span>
                        </div>
                        <div className="h-4 bg-white/10 rounded-full overflow-hidden border border-white/10">
                            <div className="h-full bg-red-400 w-[90%] print:bg-red-500"></div>
                        </div>
                    </div>
                     <div>
                        <div className="flex justify-between text-sm mb-2 opacity-80">
                            <span className="text-brand-light font-bold">ASR AI Agent</span>
                            <span className="text-brand-light font-bold">~$500/mo</span>
                        </div>
                        <div className="h-4 bg-white/10 rounded-full overflow-hidden border border-white/10">
                            <div className="h-full bg-brand-light w-[15%] print:bg-brand-light"></div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10">
                    <p className="text-center font-display text-3xl font-bold text-brand-light">10x ROI</p>
                    <p className="text-center text-xs uppercase tracking-widest opacity-60 mt-2">On Operating Costs</p>
                </div>
            </div>

            {/* Productivity Analysis */}
            <div className="bg-brand-dark text-white p-8 rounded-3xl relative overflow-hidden shadow-2xl break-inside-avoid">
                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 opacity-20 rounded-full -translate-y-1/2 -translate-x-1/2 blur-3xl print:hidden"></div>
                <h3 className="font-display text-2xl font-bold mb-8">Productivity Analysis</h3>
                
                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between text-sm mb-2 opacity-80">
                            <span>Human SDR</span>
                            <span>50 calls/day</span>
                        </div>
                        <div className="h-4 bg-white/10 rounded-full overflow-hidden border border-white/10">
                            <div className="h-full bg-red-400 w-[10%] print:bg-red-500"></div>
                        </div>
                    </div>
                     <div>
                        <div className="flex justify-between text-sm mb-2 opacity-80">
                            <span className="text-brand-light font-bold">ASR AI Agent</span>
                            <span className="text-brand-light font-bold">500 calls/day</span>
                        </div>
                        <div className="h-4 bg-white/10 rounded-full overflow-hidden border border-white/10">
                            <div className="h-full bg-brand-light w-full print:bg-brand-light"></div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10">
                    <p className="text-center font-display text-3xl font-bold text-brand-light">10x Productivity</p>
                    <p className="text-center text-xs uppercase tracking-widest opacity-60 mt-2">Volume per Agent</p>
                </div>
            </div>
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing" className="bg-gray-50">
        <div className="text-center mb-16 print:mb-8">
             <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-4">It's not the cost of the software, it's the cost of your lost sales</h2>
        </div>
        <div className="flex justify-center max-w-4xl mx-auto">
            {PRICING_MODELS.map((model, i) => (
                <div key={i} className="w-full max-w-md">
                   <PricingCard model={model} />
                </div>
            ))}
        </div>
      </Section>

       {/* Video Demo Plan Preview */}
       <Section id="demo" dark>
           <div className="text-center max-w-3xl mx-auto break-inside-avoid">
                <span className="text-brand-light font-bold tracking-widest uppercase text-xs mb-4 block">Coming Soon</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">Live Demo Experience</h2>
                <div className="aspect-video bg-black/50 border border-white/10 rounded-xl flex items-center justify-center relative group cursor-pointer overflow-hidden print:bg-gray-900 print:border-gray-800">
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark to-brand-light opacity-50 print:hidden"></div>
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                             <PlayCircle size={40} className="text-white" />
                        </div>
                        <p className="mt-6 font-bold uppercase tracking-widest text-sm text-white">Watch the AI Handle Objections</p>
                    </div>
                    
                    {/* Simulated Interface Elements */}
                    <div className="absolute left-4 bottom-4 flex gap-2">
                        <div className="bg-black/80 px-3 py-1 rounded text-xs text-green-400 font-mono border border-white/20">Listening...</div>
                        <div className="bg-black/80 px-3 py-1 rounded text-xs text-brand-light font-mono border border-white/20">Processing (12ms)</div>
                    </div>
                </div>
           </div>
       </Section>
    </Layout>
  );
};