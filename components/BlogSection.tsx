import React from 'react';
import { BlogPost } from '../types';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

interface BlogSectionProps {
  posts: BlogPost[];
  onPostClick: (post: BlogPost) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ posts, onPostClick }) => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {posts.map((post) => (
        <article 
          key={post.id} 
          onClick={() => onPostClick(post)}
          className="flex flex-col bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer break-inside-avoid"
        >
          {/* Abstract Image Placeholder */}
          <div className={`h-48 ${post.imageColor} relative overflow-hidden`}>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
            <div className="absolute top-4 left-4">
              <span className="bg-white/90 backdrop-blur text-brand-dark text-xs font-bold px-3 py-1 rounded uppercase tracking-widest">
                {post.category}
              </span>
            </div>
          </div>
          
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex items-center gap-4 text-xs text-gray-400 mb-3 font-medium">
              <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
              <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
            </div>
            
            <h3 className="font-display font-bold text-lg mb-3 leading-tight group-hover:text-brand-light transition-colors">
              {post.title}
            </h3>
            
            <p className="text-sm text-gray-600 mb-6 line-clamp-3">
              {post.excerpt}
            </p>
            
            <div className="mt-auto pt-4 border-t border-gray-50">
              <button className="flex items-center gap-2 text-brand-dark text-xs font-bold uppercase tracking-widest group-hover:gap-3 transition-all">
                Read Article <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};
