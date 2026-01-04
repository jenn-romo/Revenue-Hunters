import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ES Module fix for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDir = path.join(__dirname, '../public/content/blog');
const outputControl = path.join(__dirname, '../public/blog-index.json');

// Helper to parse frontmatter simply without adding heavy deps to the build script
function parseFrontMatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  
  const frontMatter = {};
  match[1].split('\n').forEach(line => {
    const [key, ...value] = line.split(':');
    if (key && value) {
      // Remove quotes and trim
      let val = value.join(':').trim();
      if (val.startsWith('"') && val.endsWith('"')) {
        val = val.slice(1, -1);
      }
      frontMatter[key.trim()] = val;
    }
  });
  return frontMatter;
}

if (!fs.existsSync(contentDir)) {
  fs.mkdirSync(contentDir, { recursive: true });
}

const files = fs.readdirSync(contentDir).filter(file => file.endsWith('.md'));

const posts = files.map(file => {
  const content = fs.readFileSync(path.join(contentDir, file), 'utf-8');
  const metadata = parseFrontMatter(content);
  
  return {
    id: file.replace('.md', ''),
    ...metadata,
    // Provide a snippet
    excerpt: metadata.excerpt || content.split('---')[2].slice(0, 150).trim() + '...'
  };
}).sort((a, b) => new Date(b.date) - new Date(a.date));

fs.writeFileSync(outputControl, JSON.stringify(posts, null, 2));

console.log(`✅ Generated blog index with ${posts.length} posts.`);