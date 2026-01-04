import React, { useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import { Section } from '../components/Section';
import { BlogPost } from '../types';
import { getBlogPosts } from '../lib/blog';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogPosts().then(data => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Insights | Luis F Romo</title>
        <meta name="description" content="Strategic insights on AI, Autonomous Sales, and Operational Scale." />
      </Helmet>
      
      <Section className="min-h-screen pt-32">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-brand-dark mb-6">Strategic Intelligence</h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Notes on high-velocity execution, AI implementation, and the future of work.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-brand-dark"></div>
            </div>
          ) : (
            <div className="grid gap-12">
              {posts.map(post => (
                <article key={post.id} className="group border-b border-gray-100 pb-12 last:border-0">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                        <span className="text-brand-light">{post.category}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <Link to={`/blog/${post.id}`}>
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-dark mb-4 group-hover:text-brand-light transition-colors">
                          {post.title}
                        </h2>
                      </Link>
                      
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {post.excerpt}
                      </p>
                      
                      <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-dark hover:gap-4 transition-all">
                        Read Memo <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </Section>
    </Layout>
  );
};