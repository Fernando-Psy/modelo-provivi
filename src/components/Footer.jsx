function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/priscilabpsi/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.5-1.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.2-1.5 1.5-1.5h1.7V4.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V11H7.3v3H10v8h3.5Z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/priscila-borges-moraes-703563103/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.5 9H3.2v12h3.3V9ZM4.85 3.5a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8ZM21 21h-3.3v-6.1c0-1.5 0-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3V21H9.9V9h3.2v1.6h.1c.4-.8 1.6-1.7 3.2-1.7 3.4 0 4.1 2.2 4.1 5.1V21Z" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/5521976217918",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.04 2a9.94 9.94 0 0 0-8.67 14.83L2 22l5.33-1.36A9.96 9.96 0 1 0 12.04 2Zm0 18.2c-1.48 0-2.93-.4-4.2-1.15l-.3-.17-3.16.81.84-3.07-.2-.32A8.22 8.22 0 1 1 12.04 20.2Zm4.77-6.17c-.26-.13-1.53-.76-1.77-.84-.24-.09-.42-.13-.6.13-.18.26-.68.84-.84 1.02-.15.18-.3.2-.56.07-.26-.13-1.1-.4-2.1-1.28-.77-.69-1.3-1.55-1.45-1.81-.15-.26-.02-.4.11-.53.12-.12.26-.3.4-.44.13-.15.18-.26.26-.44.09-.18.04-.33-.02-.46-.07-.13-.6-1.45-.83-1.98-.22-.54-.44-.46-.6-.46h-.51c-.18 0-.46.07-.7.33-.24.26-.92.9-.92 2.2 0 1.3.95 2.55 1.08 2.73.13.18 1.87 2.86 4.54 4.01.63.27 1.12.44 1.5.56.63.2 1.2.17 1.65.1.5-.08 1.53-.62 1.75-1.22.22-.6.22-1.1.15-1.22-.06-.11-.24-.18-.5-.3Z" />
        </svg>
      ),
    },
  ];

  const footerLinks = {
    company: [
      { name: "Sobre", href: "#about" },
      { name: "Áreas de atuação", href: "#features" },
      { name: "Contato", href: "#contact" },
    ],
    resources: [
      { name: "Blog", href: "/blog" },
      { name: "Vídeos", href: "/videos" },
      { name: "Orientações", href: "/documentacao" },
      { name: "Perguntas frequentes", href: "/faq" },
    ],
    legal: [
      { name: "Privacidade", href: "/privacidade" },
      { name: "Termos de uso", href: "/termos" },
      { name: "Cookies", href: "/cookies" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary-400">
              Priscila Borges Moraes
            </h3>
            <p className="text-gray-400">
              Psicologia clínica com foco em acolhimento, ética e cuidado
              baseado em evidências.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label={link.name}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Site</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Conteúdos</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Priscila Borges Moraes. Todos os direitos
              reservados.
            </p>
            <p className="text-gray-400 text-sm">
              Desenvolvido com cuidado para acolher você
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
