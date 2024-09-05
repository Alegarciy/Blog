import React from 'react';
import './BlogPost.css';

interface BlogPostProps {
  title: string;
  date: string;
  content: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, date, content }) => (
  <article className="blog-post">
    <header className="blog-post-header">
      <h2 className="blog-post-title">{title}</h2>
      <p className="blog-post-date">{date}</p>
    </header>
    <div className="blog-post-content">
      {content}
    </div>
  </article>
);

export default BlogPost;