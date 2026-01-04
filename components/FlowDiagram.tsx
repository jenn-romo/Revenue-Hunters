import React from 'react';

const Box = ({ title, sub, color = "border-brand-dark" }: { title: string, sub?: string, color?: string }) => (
  <div className={`border-2 ${color} bg-white p-6 rounded shadow-lg w-full md:w-72 flex flex-col items-center justify-center text-center z-10 relative`}>
    <h4 className="font-bold text-brand-dark uppercase tracking-widest text-lg mb-2">{title}</h4>
    {sub && <p className="text-sm text-gray-600 font-sans">{sub}</p>}
  </div>
);

const Arrow = ({ direction = "right", label }: { direction?: "right" | "down", label?: string }) => {
    return (
        <div className={`flex flex-col items-center justify-center mx-2 ${direction === 'down' ? 'my-2' : ''}`}>
             {label && <span className="text-xs uppercase font-bold text-gray-400 mb-1 tracking-widest">{label}</span>}
             {direction === 'right' ? (
                 <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12H38M38 12L28 2M38 12L28 22" stroke="#01236B" strokeWidth="2"/>
                 </svg>
             ) : (
                <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0V38M12 38L2 28M12 38L22 28" stroke="#01236B" strokeWidth="2"/>
                 </svg>
             )}
        </div>
    )
}

export const FlowDiagram: React.FC = () => {
  return (
    <div className="w-full bg-slate-50 p-8 md:p-12 rounded-xl border border-gray-200 overflow-x-auto">
      <h3 className="text-2xl font-display font-bold text-brand-dark mb-10 uppercase tracking-widest text-center">System Architecture: How it works</h3>
      
      <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 min-w-[900px]">
        
        {/* INPUTS */}
        <div className="flex flex-col gap-6 justify-center w-1/4">
            <div className="text-lg font-bold text-gray-400 uppercase tracking-widest text-center mb-2">Inputs</div>
            <Box title="Raw Lead Data" sub="Web Scrapers, Purchased Lists, Inbound Forms" />
            <div className="flex justify-center h-8">
               {/* Spacer for alignment */}
            </div>
             <Box title="Training Data" sub="Scripts, FAQs, Rebuttals" color="border-brand-light" />
        </div>

        {/* ARROWS INTO ENGINE */}
        <div className="flex flex-col justify-center items-center w-16">
            <Arrow direction="right" />
        </div>

        {/* ENGINE */}
        <div className="flex flex-col justify-center w-1/4 items-center relative">
             <div className="text-lg font-bold text-gray-400 uppercase tracking-widest text-center mb-6">The Engine</div>
             <div className="bg-brand-dark text-white p-8 rounded-full h-64 w-64 flex flex-col items-center justify-center text-center shadow-2xl z-20 border-4 border-brand-light relative">
                 <div className="absolute inset-0 rounded-full border border-white/20 animate-pulse"></div>
                 <h4 className="font-display font-bold text-2xl mb-0 leading-tight">ASR<br/>Intelligence</h4>
             </div>
        </div>

        {/* OUTPUT BRANCHES */}
        <div className="flex flex-col justify-between w-1/3 gap-8 relative pl-10">
             <div className="text-lg font-bold text-gray-400 uppercase tracking-widest text-center mb-2">Outputs</div>
            
            {/* Connector Lines (CSS based for simplicity in this constrained text env) */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-full border-l-2 border-brand-dark opacity-20"></div>
            
            {/* Branch A */}
            <div className="relative">
                <div className="absolute -left-10 top-1/2 w-10 h-0.5 bg-green-500"></div>
                <div className="border-l-4 border-green-500 bg-white p-6 rounded shadow-sm">
                    <h5 className="font-bold text-green-700 text-lg uppercase">Qualified Lead</h5>
                    <p className="text-sm text-gray-600 mt-2">Real-time Calendar Booking + Invite Sent</p>
                </div>
            </div>

            {/* Branch B */}
            <div className="relative">
                <div className="absolute -left-10 top-1/2 w-10 h-0.5 bg-yellow-500"></div>
                 <div className="border-l-4 border-yellow-500 bg-white p-6 rounded shadow-sm">
                    <h5 className="font-bold text-yellow-600 text-lg uppercase">Interested / Nurture</h5>
                    <p className="text-sm text-gray-600 mt-2">Send Info -> AI Follow-up in 48h</p>
                </div>
            </div>

            {/* Branch C */}
            <div className="relative">
                <div className="absolute -left-10 top-1/2 w-10 h-0.5 bg-red-500"></div>
                <div className="border-l-4 border-red-500 bg-white p-6 rounded shadow-sm">
                    <h5 className="font-bold text-red-600 text-lg uppercase">Unqualified / DNC</h5>
                    <p className="text-sm text-gray-600 mt-2">Tag in CRM -> Feedback Loop</p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};