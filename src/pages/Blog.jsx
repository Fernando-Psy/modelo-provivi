function Blog() {
  const posts = [
    {
      id: 1,
      title: "Impactos de um diagnóstico na saúde mental da família",
      date: "10 de fevereiro de 2026",
      excerpt:
        "Entenda como acolhimento, psicoeducação e rede de apoio podem ajudar no processo de adaptação e cuidado.",
      category: "Saúde mental",
      image: "🌱",
    },
    {
      id: 2,
      title: "Autismo (TEA): orientações e manejo no dia a dia",
      date: "05 de fevereiro de 2026",
      excerpt:
        "Dicas práticas sobre rotina, comunicação e estratégias para lidar com desafios comuns, respeitando cada singularidade.",
      category: "Autismo",
      image: "🔬",
    },
    {
      id: 3,
      title: "Seletividade alimentar: quando olhar além do prato",
      date: "28 de janeiro de 2026",
      excerpt:
        "Como fatores emocionais, sensoriais e de desenvolvimento podem influenciar a alimentação e o bem-estar.",
      category: "Psicoeducação",
      image: "💰",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blog
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Conteúdos e reflexões sobre saúde mental, psicoterapia e
            psicoeducação.
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
                <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-5xl sm:text-6xl">
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
                    Ler mais →
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Empty State for more posts */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-4">Mais artigos em breve!</p>
            <a href="/" className="btn-primary inline-block">
              Voltar ao início
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
