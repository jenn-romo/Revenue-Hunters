import React, { useEffect } from 'react';
import { BlogPost } from '../types';
import { X, Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose }) => {
  useEffect(() => {
    if (post) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [post]);

  if (!post) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-dark/90 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-3xl max-h-full md:max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-200">
        
        {/* Header Image Area */}
        <div className={`h-48 md:h-64 ${post.imageColor} relative flex-shrink-0`}>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors backdrop-blur-md"
          >
            <X size={24} />
          </button>
          <div className="absolute bottom-6 left-6 md:left-8 right-6">
             <span className="inline-block bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-widest mb-3">
                {post.category}
            </span>
            <h2 className="text-2xl md:text-4xl font-display font-bold text-white leading-tight shadow-black/50 drop-shadow-md">
              {post.title}
            </h2>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto custom-scroll p-6 md:p-10 bg-white">
          <div className="flex items-center gap-6 text-sm text-gray-400 mb-8 border-b border-gray-100 pb-6">
              <span className="flex items-center gap-2"><Calendar size={16} /> {post.date}</span>
              <span className="flex items-center gap-2"><Clock size={16} /> {post.readTime}</span>
              <span className="text-brand-light font-bold">By Luis F Romo</span>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
             <p className="font-medium text-xl text-brand-dark leading-relaxed mb-8">
                 {post.excerpt}
             </p>
             {post.content.map((paragraph, idx) => (
                 <p key={idx} className="mb-6 leading-relaxed">
                     {paragraph}
                 </p>
             ))}
          </div>
          
          <div className="mt-12 p-8 bg-gray-50 rounded-xl border border-gray-100 text-center">
              <h4 className="font-display font-bold text-brand-dark text-xl mb-2">Ready to deploy ASR?</h4>
              <p className="text-gray-600 mb-6">Turn these insights into revenue. Start your autonomous workforce today.</p>
              <button className="bg-brand-dark text-white px-8 py-3 rounded-lg font-bold uppercase tracking-widest hover:bg-brand-light transition-colors inline-flex items-center gap-2">
                  Apply for Access <ArrowRight size={16} />
              </button>
          </div>
        </div>

      </div>
    </div>
  );
};