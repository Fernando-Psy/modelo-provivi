import { useState } from "react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: "Geral",
      questions: [
        {
          q: "Como funciona o atendimento psicológico?",
          a: "O atendimento é realizado por sessões com horário agendado, com escuta qualificada e definição de objetivos terapêuticos. O processo é individualizado conforme sua demanda.",
        },
        {
          q: "Você atende online?",
          a: "Sim. Também realizo teleatendimentos, quando indicado e conforme disponibilidade.",
        },
        {
          q: "Você atende todas as idades?",
          a: "Sim. Tenho experiência com atendimentos clínicos em diferentes faixas etárias.",
        },
      ],
    },
    {
      category: "Atendimento",
      questions: [
        {
          q: "Como faço para agendar?",
          a: "Você pode preencher o formulário na página inicial ou enviar mensagem pelo contato. Após isso, combinamos horários e orientações para o atendimento.",
        },
        {
          q: "O atendimento é presencial?",
          a: "Há possibilidade de atendimento presencial e on-line (conforme disponibilidade).",
        },
        {
          q: "Você trabalha com TCC?",
          a: "Sim. Tenho formação em Terapia Cognitivo-Comportamental e utilizo estratégias alinhadas ao seu contexto e objetivos.",
        },
      ],
    },
    {
      category: "Avaliações",
      questions: [
        {
          q: "O que é psicodiagnóstico?",
          a: "É um processo de avaliação que busca compreender o quadro e as necessidades da pessoa, auxiliando em hipóteses e encaminhamentos quando necessário.",
        },
        {
          q: "O que é avaliação neuropsicológica?",
          a: "É uma avaliação focada em funções cognitivas (como atenção, memória e linguagem), auxiliando na compreensão do funcionamento e em recomendações.",
        },
        {
          q: "Como funciona a devolutiva?",
          a: "Ao final da avaliação, é feita uma devolutiva com explicação do processo, resultados e orientações de próximos passos.",
        },
      ],
    },
    {
      category: "Valores e suporte",
      questions: [
        {
          q: "Como são os valores?",
          a: "Os valores variam conforme modalidade e demanda (psicoterapia, avaliação, etc.). Entre em contato para combinarmos detalhes.",
        },
        {
          q: "Você oferece palestras e conteúdos?",
          a: "Sim. Tenho experiência como palestrante e com participação em jornadas e eventos sobre temas de saúde mental.",
        },
        {
          q: "Como tirar dúvidas rápidas?",
          a: "Você pode me enviar uma mensagem pelo formulário de contato. Assim que possível, retorno com orientações.",
        },
      ],
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Perguntas frequentes
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Respostas rápidas para dúvidas comuns sobre atendimento e
            avaliações.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = `${catIndex}-${faqIndex}`;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <div
                      key={faqIndex}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 pr-4">
                          {faq.q}
                        </span>
                        <svg
                          className={`w-5 h-5 text-primary-600 flex-shrink-0 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4 text-gray-600 bg-gray-50">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Contact Section */}
          <div className="mt-16 bg-primary-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Não encontrou sua resposta?
            </h2>
            <p className="text-gray-600 mb-6">
              Me envie uma mensagem e eu retorno assim que possível.
            </p>
            <a href="/#contact" className="btn-primary inline-block">
              Entrar em contato
            </a>
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

export default FAQ;
