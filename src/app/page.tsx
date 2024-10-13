export default function Home() {
  return (
    <section className="p-4 bg-gray-50">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold text-center mb-4">
          Unlocking the Potential of AI
        </h1>
        <h1 className="text-4xl font-bold text-center mb-6 text-purple-600">
          Welcome to the Future of AI Innovation!
        </h1>

        <p className="text-lg font-medium mb-6 leading-relaxed text-gray-700 text-center">
          Explore the World of Generative AI. At the forefront of technological
          advancements, Generative AI is transforming the way we think about
          creativity and problem-solving. Our blog dives deep into the latest
          breakthroughs, offering insights, tutorials, and hands-on projects
          that make complex concepts easy to understand.
        </p>
       
        <h2 className="text-2xl font-semibold mb-4">What You’ll Discover:</h2>
        <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
          <li>
            <strong>Cutting-Edge Research:</strong> Stay up-to-date with the
            latest developments in generative models like GPT, DALL·E, and more.
          </li>
          <li>
            <strong>Hands-On Tutorials:</strong> Learn how to implement AI
            models for text generation, image synthesis, and more.
          </li>
          <li>
            <strong>Real-World Applications:</strong> Explore how industries
            like healthcare, entertainment, and finance are leveraging
            Generative AI to innovate.
          </li>
          <li>
            <strong>Expert Insights:</strong> Read interviews and articles from
            top AI researchers and professionals in the field.
          </li>
        </ul>
        
        <h2 className="text-2xl font-semibold mb-4">Why Follow Us?</h2>
        <p className="text-lg font-medium mb-6 leading-relaxed text-gray-700">
          We are passionate about making AI accessible to everyone. Whether
          you're an AI enthusiast, a professional, or just starting your
          journey, our blog offers practical, actionable content that helps you
          navigate the world of Generative AI with confidence.
        </p>
  
        <h2 className="text-2xl font-semibold mb-4">Get Started Now!</h2>
        <p className="text-lg font-medium leading-relaxed text-gray-700 mb-6">
          Browse our latest posts below and take your first step towards
          mastering Generative AI. Dive into tutorials, explore real-world use
          cases, and stay ahead of the curve.
        </p>

        <div className="text-center">
          <a
            href="/responsive" 
            className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-500 transition-colors duration-300"
            aria-label="Explore our blog posts"
          >
            Explore Blog Posts
          </a>
        </div>

        <footer className="mt-8 p-4 text-center bg-gray-200 rounded">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} AI Solutions by MZ. All Rights Reserved.
          </p>
        </footer>
      </div>
    </section>
  );
}
