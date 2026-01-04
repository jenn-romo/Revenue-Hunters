declare module 'front-matter' {
  export default function frontMatter<T = any>(markdown: string): { attributes: T, body: string };
}
