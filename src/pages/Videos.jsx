import { useState } from "react";

function Videos() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videoCategories = [
    {
      category: "Product Demonstrations",
      videos: [
        {
          id: "demo1",
          title: "How AgroTech Works - Complete Guide",
          description:
            "Learn about our biological control technology and how it transforms agriculture sustainably.",
          thumbnail: "🎬",
          duration: "12:34",
          views: "15.2K",
          embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
          id: "demo2",
          title: "Field Application Tutorial",
          description:
            "Step-by-step guide on how to apply our products in the field effectively.",
          thumbnail: "🔧",
          duration: "8:45",
          views: "8.5K",
          embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
          id: "demo3",
          title: "Monitoring and Results Analysis",
          description:
            "Learn how to monitor your crops and analyze the results of our biological control.",
          thumbnail: "📊",
          duration: "10:20",
          views: "12.1K",
          embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
      ],
    },
    {
      category: "Success Stories",
      videos: [
        {
          id: "story1",
          title: "Coffee Producer Increases Productivity by 35%",
          description:
            "See how João Silva transformed his coffee plantation with AgroTech technology.",
          thumbnail: "☕",
          duration: "6:15",
          views: "22.3K",
          embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
          id: "story2",
          title: "Sustainable Soybean Farming",
          description:
            "Maria Santos shares her experience reducing costs by 40% while protecting the environment.",
          thumbnail: "🌱",
          duration: "9:30",
          views: "18.7K",
          embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
      ],
    },
    {
      category: "Education & Training",
      videos: [
        {
          id: "edu1",
          title: "Introduction to Biological Control",
          description:
            "Understand the fundamentals of biological pest control and its environmental benefits.",
          thumbnail: "📚",
          duration: "15:42",
          views: "31.5K",
          embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
          id: "edu2",
          title: "Pheromones in Agriculture",
          description:
            "Complete webinar on how pheromones work and their application in agriculture.",
          thumbnail: "🔬",
          duration: "45:18",
          views: "9.8K",
          embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
          id: "edu3",
          title: "Integrated Pest Management",
          description:
            "Learn how to integrate our solutions into your pest management plan.",
          thumbnail: "🎓",
          duration: "20:15",
          views: "14.2K",
          embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
      ],
    },
  ];

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Video Library
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Learn more about our solutions through tutorials, success stories,
            and educational content.
          </p>
        </div>
      </section>

      {/* Videos Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {videoCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {category.category}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.videos.map((video) => (
                  <div
                    key={video.id}
                    onClick={() => setSelectedVideo(video)}
                    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 cursor-pointer group"
                  >
                    {/* Thumbnail */}
                    <div className="relative h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                      <div className="text-6xl">{video.thumbnail}</div>
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg
                            className="w-8 h-8 text-primary-600 ml-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>

                    {/* Video Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {video.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <span>{video.views} views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* CTA Section */}
          <div className="mt-16 bg-primary-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Want to See Our Solutions in Action?
            </h2>
            <p className="text-gray-600 mb-6">
              Schedule a personalized demonstration and see how we can help your
              agricultural production.
            </p>
            <a href="/#contact" className="btn-primary inline-block">
              Request a Demo
            </a>
          </div>

          <div className="mt-8 text-center">
            <a
              href="/"
              className="text-primary-600 hover:text-primary-700 font-semibold"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src={selectedVideo.embedUrl}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedVideo.title}
                  </h3>
                  <p className="text-gray-600">{selectedVideo.description}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="flex-shrink-0 ml-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>{selectedVideo.duration}</span>
                <span>•</span>
                <span>{selectedVideo.views} views</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Videos;
