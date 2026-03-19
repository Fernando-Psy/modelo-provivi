function Terms() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Termos de Uso
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
                1. Aceitação
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Ao acessar e utilizar este site, você concorda com estes Termos
                de Uso. Se não concordar com qualquer parte, recomendamos que
                não utilize o site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Descrição do site
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Este site disponibiliza informações institucionais, conteúdos e
                canais de contato relacionados à atuação profissional.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mt-4">
                <li>Informações sobre áreas de atuação</li>
                <li>Materiais e conteúdos de apoio</li>
                <li>Formulário e dados de contato</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Uso do formulário
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Ao enviar uma mensagem pelo formulário, você concorda em:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Fornecer informações verdadeiras e atualizadas</li>
                <li>Não enviar conteúdo ilícito, ofensivo ou malicioso</li>
                <li>Respeitar a finalidade do canal de contato</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Uso aceitável
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Você concorda em NÃO:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Utilizar o site para fins ilegais</li>
                <li>Tentar acessar áreas restritas</li>
                <li>Interferir no funcionamento do site</li>
                <li>Distribuir spam ou conteúdo malicioso</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Propriedade intelectual
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Os conteúdos do site (textos, marca e elementos visuais) são
                protegidos e não podem ser copiados ou redistribuídos sem
                autorização, salvo quando permitido por lei.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Responsabilidades
              </h2>
              <p className="text-gray-600 leading-relaxed">
                As informações aqui apresentadas têm caráter informativo. O uso
                do site não cria garantia de resultados e não substitui
                orientações profissionais individualizadas.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Limitação de responsabilidade
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Na medida permitida por lei, não nos responsabilizamos por danos
                indiretos decorrentes do uso ou da impossibilidade de uso do
                site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Alterações
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Podemos atualizar estes Termos a qualquer momento. O uso
                continuado do site após alterações representa aceitação das
                mudanças.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Encerramento
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Podemos suspender o acesso ao site em caso de uso indevido,
                manutenção ou motivos técnicos.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. Lei aplicável
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Estes Termos são regidos pelas leis brasileiras.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                11. Contato
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Para dúvidas sobre estes Termos, entre em contato:
              </p>
              <div className="mt-4 p-6 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
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

export default Terms;
