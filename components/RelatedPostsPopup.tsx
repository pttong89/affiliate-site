'use client';
import { useEffect, useState } from 'react';

type ProductMeta = {
  title: string;
  slug: string;
  description: string;
};

export default function RelatedPostsPopup() {
  const [related, setRelated] = useState<ProductMeta[]>([]);

  useEffect(() => {
    fetch('/related-posts.json')
      .then(res => res.json())
      .then((data: ProductMeta[]) => {
        const shuffled = [...data].sort(() => 0.5 - Math.random());
        setRelated(shuffled.slice(0, 4));
      })
      .catch(err => console.error('❌ Failed to load related posts:', err));
  }, []);

  if (related.length === 0) return null;

  return (
    <div style={{
      position: 'fixed',
      left: '30px',
      top: '120px',
      zIndex: 9998,
      width: '280px',
      background: 'white',
      border: '1px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0 0 15px rgba(0,0,0,0.15)',
      padding: '16px',
      maxHeight: '80vh',
      overflowY: 'auto'
    }}>
      <h4 style={{ marginBottom: '12px', color: '#1a3f1b' }}>📚 Related Posts</h4>
      {related.map((post, idx) => (
        <div key={idx} style={{ marginBottom: '14px' }}>
          <a href={`/${post.slug}`} style={{
            fontWeight: 600,
            fontSize: '15px',
            color: '#2c5f2d',
            textDecoration: 'none',
            display: 'block',
            marginBottom: '6px'
          }}>
            {post.title}
          </a>
          <p style={{ margin: 0, fontSize: '13px', color: '#555' }}>{post.description.slice(0, 70)}...</p>
        </div>
      ))}
    </div>
  );
}
