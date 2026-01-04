import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

console.log('Build Script: Starting blog index generation...');

try {
  // ES Module fix for __dirname
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  // Resolve paths relative to the script location (in /scripts)
  const rootDir = path.resolve(__dirname, '..');
  const contentDir = path.join(rootDir, 'public/content/blog');
  const outputControl = path.join(rootDir, 'public/blog-index.json');

  console.log(`Build Script: Content directory: ${contentDir}`);

  // Helper to parse frontmatter simply without adding heavy deps to the build script
  function parseFrontMatter(content) {
    const match = content.match(/^---\n([\s\S]*?)\n---/);
    if (!match) return {};
    
    const frontMatter = {};
    match[1].split('\n').forEach(line => {
      const parts = line.split(':');
      if (parts.length >= 2) {
        const key = parts[0].trim();
        let value = parts.slice(1).join(':').trim();
        if (value.startsWith('"') && value.endsWith('"')) {
          value = value.slice(1, -1);
        }
        frontMatter[key] = value;
      }
    });
    return frontMatter;
  }

  if (!fs.existsSync(contentDir)) {
    console.log('Build Script: Content directory does not exist, creating...');
    fs.mkdirSync(contentDir, { recursive: true });
  }

  const files = fs.readdirSync(contentDir).filter(file => file.endsWith('.md'));
  console.log(`Build Script: Found ${files.length} markdown files.`);

  const posts = files.map(file => {
    const content = fs.readFileSync(path.join(contentDir, file), 'utf-8');
    const metadata = parseFrontMatter(content);
    
    return {
      id: file.replace('.md', ''),
      ...metadata,
      excerpt: metadata.excerpt || content.split('---')[2].slice(0, 150).trim() + '...'
    };
  }).sort((a, b) => new Date(b.date) - new Date(a.date));

  fs.writeFileSync(outputControl, JSON.stringify(posts, null, 2));

  console.log(`✅ Build Script: Generated blog index with ${posts.length} posts.`);
} catch (error) {
  console.error('❌ Build Script Error:', error);
  process.exit(1);
}
