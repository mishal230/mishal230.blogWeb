import Link from "next/link";

export default function Homepage() {
  const blogs = [
    {
      id: 1,
      title: "GPT's Impact on Content Creation",
      description: "Discover how GPT is revolutionizing content...",
      link: "/responsive/blog/blog1",
      
    },
    {
      id: 2,
      title: "Build a Text Generator with GPT",
      description: "Learn how to create your own GPT-powered text generator...",
      link: "/responsive/blog/blog2",
    },
    {
      id: 3,
      title: "DALL·E and AI Art Innovation",
      description:
        "Explore how DALL·E’s AI is transforming the digital art...",
      link: "/responsive/blog/blog3",
    },
    {
      id: 4,
      title: "Generative AI in Healthcare",
      description: "Learn how generative AI is improving healthcare...",
      link: "/responsive/blog/blog4",
    },
    {
      id: 5,
      title: "Ethics in Generative AI",
      description:
        "Dive into the ethical concerns surrounding AI technologies...",
      link: "/responsive/blog/blog5",
    },
    {
      id: 6,
      title: "Top Generative AI Tools in 2024",
      description:
        "An overview of the best generative AI tools available...",
      link: "/responsive/blog/blog6",
    },
  ];

  return (
    <div className="parentContainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="childContainer flex flex-col justify-between min-h-[400px] bounce-in-right bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <div className="imageContainer">
            <img
              src={`/images/blog${blog.id}.webt`} 
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-4 flex-grow">
            <h1 className="title text-xl font-bold mb-2">{blog.title}</h1>
            <p className="description text-gray-700 mb-2">{blog.description}</p>
          </div>
          <div className="p-2">
            <Link href={blog.link}>
              <button className="readMore bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded transition-all duration-300">
                Read More
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
