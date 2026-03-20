function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Política de Privacidade
          </h1>
          <p className="text-lg text-gray-600">
            Última atualização: 19 de março de 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Introdução
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Este site tem o compromisso de proteger a sua privacidade. Esta
                Política explica como informações podem ser coletadas, usadas e
                protegidas quando você utiliza o site e seus recursos.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Informações que coletamos
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Podemos coletar diferentes tipos de informação:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>
                  Informações fornecidas por você (nome, e-mail, telefone e
                  mensagem)
                </li>
                <li>Dados de navegação (por exemplo, páginas acessadas)</li>
                <li>Cookies e tecnologias semelhantes</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Como usamos suas informações
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Usamos suas informações para:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Responder mensagens e solicitações de contato</li>
                <li>Melhorar conteúdo e experiência de navegação</li>
                <li>Manter a segurança e prevenir abusos</li>
                <li>Cumprir obrigações legais quando aplicável</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Compartilhamento de informações
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Não vendemos seus dados pessoais. Podemos compartilhar dados
                apenas quando necessário com:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mt-4">
                <li>Prestadores de serviço que apoiam a operação do site</li>
                <li>Autoridades, quando exigido por lei</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Segurança
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Aplicamos medidas razoáveis para proteger informações contra
                acessos não autorizados, alteração, divulgação ou destruição.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Seus direitos
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nos termos da LGPD, você pode solicitar:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Acesso e correção de dados</li>
                <li>Confirmação de tratamento e informações</li>
                <li>Eliminação, quando aplicável</li>
                <li>Revogação de consentimento, quando aplicável</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Cookies
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Usamos cookies para melhorar sua experiência. Você pode
                configurar seu navegador para recusar cookies, mas isso pode
                afetar algumas funcionalidades do site. Veja nossa{" "}
                <a
                  href="/cookies"
                  className="text-primary-600 hover:text-primary-700"
                >
                  Política de Cookies
                </a>{" "}
                para mais informações.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Alterações
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Podemos atualizar esta Política periodicamente. Mudanças
                relevantes serão publicadas nesta página.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Contato
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Para dúvidas sobre privacidade, entre em contato:
              </p>
              <div className="mt-4 p-6 bg-gray-50 rounded-lg">
                <p className="text-gray-700 break-words">
                  <strong>E-mail:</strong>{" "}
                  psicologapriscilaborgesmoraes@gmail.com
                  <br />
                  <strong>Celular:</strong> (21) 97621-7918
                  <br />
                  <strong>Endereço:</strong> Rua Rondônia n 28, Pauline —
                  Belford Roxo, RJ — 26170-440
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
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

export default Privacy;
