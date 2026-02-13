function Blog() {
  const posts = [
    {
      id: 1,
      title: "The Future of Sustainable Agriculture",
      date: "February 10, 2026",
      excerpt:
        "Discover how technology is revolutionizing the way we produce food sustainably.",
      category: "Sustainability",
      image: "🌱",
    },
    {
      id: 2,
      title: "Biological Control: An Effective Alternative",
      date: "February 05, 2026",
      excerpt:
        "Understand how biological control can be more efficient than traditional pesticides.",
      category: "Technology",
      image: "🔬",
    },
    {
      id: 3,
      title: "Reducing Costs with Natural Methods",
      date: "January 28, 2026",
      excerpt:
        "See how producers are saving up to 40% with sustainable solutions.",
      category: "Economy",
      image: "💰",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blog AgroTech
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Stay up to date with the latest news, trends and insights about
            sustainable agriculture.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200"
              >
                <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-6xl">
                  {post.image}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                    Read more →
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Empty State for more posts */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-4">More articles coming soon!</p>
            <a href="/" className="btn-primary inline-block">
              Back to Home
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
