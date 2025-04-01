import { useEffect, useState } from 'react';

type BlogPost = {
  title: string;
  content: string;
  date: string;
};

async function fetchBlogPost(slug: string): Promise<BlogPost> {
  const response = await fetch(`/api/blog/${slug}`);
  if (!response.ok) {
    throw new Error('Failed to fetch blog post');
  }
  return response.json();
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const fetchedPost = await fetchBlogPost(slug);
        setPost(fetchedPost);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{post?.title}</h1>
      <p className="text-gray-500 mb-4">{post?.date}</p>
      <div className="text-lg text-gray-700" dangerouslySetInnerHTML={{ __html: post?.content || '' }} />
    </div>
  );
}