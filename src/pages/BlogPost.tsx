import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Section } from '../components/Section';
import { BlogPost as BlogPostType } from '../types';
import { getBlogPost } from '../lib/blog';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      getBlogPost(slug).then(data => {
        setPost(data);
        setLoading(false);
      });
    }
  }, [slug]);

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-brand-dark"></div>
        </div>
      </Layout>
    );
  }

  if (!post) {
    return (
        <Layout>
            <div className="min-h-screen flex flex-col items-center justify-center gap-4">
                <h1 className="text-2xl font-bold">Post not found</h1>
                <Link to="/blog" className="text-brand-light hover:underline">Return to Insights</Link>
            </div>
        </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>{post.title} | Luis F Romo</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <article className="min-h-screen pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
            <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-dark transition-colors mb-12 text-sm font-bold uppercase tracking-widest">
                <ArrowLeft size={16} /> Back to Intelligence
            </Link>

            <header className="mb-12">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 font-medium">
                    <span className="bg-brand-light/10 text-brand-dark px-3 py-1 rounded uppercase tracking-widest text-xs font-bold">{post.category}</span>
                    <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-display font-bold text-brand-dark leading-tight">
                    {post.title}
                </h1>
            </header>

            <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-brand-light hover:prose-a:text-brand-dark">
                <ReactMarkdown>{post.content[0]}</ReactMarkdown>
            </div>

            <div className="mt-16 pt-10 border-t border-gray-100">
                <h3 className="font-display font-bold text-xl mb-4">About the Author</h3>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-dark rounded-full flex items-center justify-center text-white font-display font-bold">LR</div>
                    <div>
                        <p className="font-bold text-brand-dark">Luis F Romo</p>
                        <p className="text-sm text-gray-500">Building autonomous systems.</p>
                    </div>
                </div>
            </div>
        </div>
      </article>
    </Layout>
  );
};