
import { useRouter } from 'next/router';
import blogData from './blogData'; // Make sure your blogData is imported correctly

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query;
  const blog = blogData.find((blog) => blog.id === Number(id));

  if (!blog) {
    return (
      <div className="blogNotFound p-4">
        <h1 className="text-3xl font-bold">404 - Blog not found</h1>
        <p>Sorry, the blog you're looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="blogPostContainer p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <p className="text-lg text-gray-700 leading-relaxed">{blog.content}</p>
    </div>
  );
};

export default BlogPost;
