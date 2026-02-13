function Hero() {
  return (
    <section
      id="home"
      className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary-50 via-white to-green-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Sustainable Solutions for
                <span className="text-primary-600"> Agriculture</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                Revolutionize your agricultural production with innovative and
                sustainable technologies. Our platform offers complete solutions
                for ecological pest control.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary text-center">
                Request Demo
              </a>
              <a href="#features" className="btn-secondary text-center">
                Explore Features
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-primary-600">98%</div>
                <div className="text-sm text-gray-600">Effectiveness</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">100%</div>
                <div className="text-sm text-gray-600">Sustainable</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 shadow-2xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <svg
                  className="w-3/4 h-3/4 text-white/20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-400 rounded-full opacity-20 animate-pulse delay-75"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
