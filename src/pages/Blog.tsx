import React from 'react';

const BlogPost: React.FC<{ title: string; excerpt: string }> = ({ title, excerpt }) => (
  <div className="bg-[--entry] p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-2 text-[--primary]">{title}</h2>
    <p className="text-[--secondary]">{excerpt}</p>
    <a href="#" className="mt-4 inline-block text-[--link-color] hover:text-[--link-hover-color] hover:underline">Read more</a>
  </div>
)

const Blog: React.FC = () => {
  const posts = [
    { title: "First Blog Post", excerpt: "This is the excerpt for the first blog post." },
    { title: "Second Blog Post", excerpt: "This is the excerpt for the second blog post." },
  ]

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-8 text-[--primary]">Blog Posts</h1>
      {posts.map((post, index) => (
        <BlogPost key={index} title={post.title} excerpt={post.excerpt} />
      ))}
    </div>
  )
}

export default Blog;