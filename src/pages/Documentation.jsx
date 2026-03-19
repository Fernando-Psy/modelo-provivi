function Documentation() {
  const sections = [
    {
      title: "Como funciona o atendimento",
      items: [
        {
          name: "Primeiro contato",
          desc: "Como enviar sua mensagem e tirar dúvidas iniciais",
        },
        { name: "Agendamento", desc: "Organização de horários e confirmação" },
        { name: "Sessões", desc: "O que esperar das sessões e do processo" },
      ],
    },
    {
      title: "Avaliações",
      items: [
        {
          name: "Psicodiagnóstico",
          desc: "Etapas, objetivos e encaminhamentos",
        },
        {
          name: "Neuropsicológica",
          desc: "Indicações e estrutura do processo",
        },
        {
          name: "Devolutiva",
          desc: "Alinhamento de resultados e próximos passos",
        },
      ],
    },
    {
      title: "Dúvidas e suporte",
      items: [
        { name: "Confidencialidade", desc: "Sigilo e ética profissional" },
        { name: "Teleatendimento", desc: "Orientações para sessões on-line" },
        { name: "Contato", desc: "Como falar comigo" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Orientações
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Informações gerais sobre atendimento e processos de avaliação.
          </p>
        </div>
      </section>

      {/* Documentation Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all duration-200 cursor-pointer"
                    >
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Resources */}
          <div className="mt-16 bg-primary-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Precisa de ajuda?
            </h2>
            <p className="text-gray-600 mb-6">
              Se preferir, me envie uma mensagem e eu retorno.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" className="btn-primary">
                Entrar em contato
              </a>
              <a href="/faq" className="btn-secondary">
                Ver FAQ
              </a>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="/"
              className="text-primary-600 hover:text-primary-700 font-semibold"
            >
              ← Voltar ao início
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Documentation;
