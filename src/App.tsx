import React from 'react';
import { Menu, X, Facebook, Linkedin, Instagram, Github, Download, MessageCircle, Code, Rocket, Star } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className= "min-h-screen bg-slate-900" >
    {/* Header */ }
    < header className = "fixed w-full bg-slate-900/80 backdrop-blur-md shadow-lg border-b border-purple-900/20 z-50" >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between" >
        <a href="#inicio" className = "text-2xl font-bold gradient-text" >
          Kleiton
          </a>

  {/* Navegação de menu*/ }
  <ul className="hidden md:flex items-center space-x-8" >
    <li><a href="#inicio" className = "text-slate-300 hover:text-purple-400 transition-colors" > Início < /a></li >
      <li><a href="#projetos" className = "text-slate-300 hover:text-purple-400 transition-colors" > Projetos < /a></li >
        <li><a href="#sobre" className = "text-slate-300 hover:text-purple-400 transition-colors" > Sobre < /a></li >
          <li><a href="https://github.com/kleitonmac" target = "_blank" rel = "noopener noreferrer" className = "text-slate-300 hover:text-purple-400 transition-colors" > Github < /a></li >
            <li>
            <a 
                href="https://wa.me/5527981911375"
  target = "_blank"
  rel = "noopener noreferrer"
  className = "gradient-border inline-block"
    >
    <span className="px-4 py-2 inline-block hover:text-purple-400 transition-colors" >
      Contatos
      </span>
      </a>
      </li>
      </ul>

  {/* menu botão */ }
  <button className="md:hidden text-slate-300" onClick = { toggleMenu } >
    { isMenuOpen?<X size = { 24 } /> : <Menu size={ 24 } />
}
</button>
  </nav>

{/* navegação mobile*/ }
{
  isMenuOpen && (
    <div className="md:hidden bg-slate-900/80 backdrop-blur-md border-t border-purple-900/20" >
      <ul className="px-4 py-2" >
        <li><a href="#inicio" className = "block py-2 text-slate-300 hover:text-purple-400" > Início < /a></li >
          <li><a href="#projetos" className = "block py-2 text-slate-300 hover:text-purple-400" > Projetos < /a></li >
            <li><a href="#sobre" className = "block py-2 text-slate-300 hover:text-purple-400" > Sobre < /a></li >
              <li><a href="https://github.com/kleitonmac" target = "_blank" rel = "noopener noreferrer" className = "block py-2 text-slate-300 hover:text-purple-400" > Github < /a></li >
                <li><a href="https://wa.me/5527981911375" target = "_blank" rel = "noopener noreferrer" className = "block py-2 text-slate-300 hover:text-purple-400" > Contatos < /a></li >
                  </ul>
                  </div>
        )
}
</header>

{/* inicio sessão */ }
<section id="inicio" className = "pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-purple-900" >
  <div className="container mx-auto px-4" >
    <div className="flex flex-col md:flex-row items-center gap-12" >
      <div className="flex-1 text-center md:text-left" >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 text-white mb-6" >
          <Code size={ 20 } />
            < span className = "font-medium text-white" > Software Developer </span>
              </div>
              < h1 className = "text-5xl md:text-6xl font-bold mb-6" >
                <span className="gradient-text" > Kleiton Macedo </span>
                  </h1>
                  < p className = "text-lg text-slate-300 mb-8 leading-relaxed" >
                    Desenvolvedor Full-Stack apaixonado por criar experiências digitais únicas.
                Transformando ideias em código com criatividade e precisão.
              </p>
  < div className = "flex flex-col sm:flex-row gap-4 justify-center md:justify-start" >
    <a
                  href="/src/cv/kleiton.pdf"
download
className = "gradient-border inline-block"
  >
  <span className="flex items-center justify-center gap-2 px-8 py-3 hover:text-purple-400 transition-colors" >
    <Download size={ 20 } />
                    Download CV
  </span>
  </a>
  < a
href = "https://wa.me/5527981911375"
target = "_blank"
rel = "noopener noreferrer"
className = "flex items-center justify-center gap-2 px-8 py-3 border-2 border-purple-600 text-white rounded-lg hover:bg-purple-900/30 transition-colors"
  >
  <MessageCircle size={ 20 } />
Contrate - me
  </a>
  </div>
  </div>
  < div className = "flex-1" >
    <div className="relative" >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-900 rounded-full blur-3xl opacity-20" > </div>
        < img
src = "https://scontent.fvix7-1.fna.fbcdn.net/v/t39.30808-6/487128882_2935667073273055_3683984472563376216_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3xECqcY3fc8Q7kNvwGCtcmA&_nc_oc=Adl82-nujoJiGjR1BpnD1vBzSv3XokK3kntPEMZGlZElSKJBzO005Rp-IdY6UaYIhs-zzHOMFeJ84gyyRf2kGnJd&_nc_zt=23&_nc_ht=scontent.fvix7-1.fna&_nc_gid=ayMX8fV1rZfHJ3ZzPyNkow&oh=00_AfJQyfXvg1lCEsKopnu7SVTgiBZDtvxtwpefTbPWyPzSTA&oe=683160A3"
alt = "perfil"
className = "relative rounded-2xl shadow-xl animate-float w-50 max-w-sm mx-auto md:max-w-50"
  />
  </div>
  </div>
  </div>
  </div>
  </section>

{/* Projeto e sessão*/ }
<section id="projetos" className = "py-20 bg-white-900" >
  <div className="container mx-auto px-4" >
    <div className="text-center mb-16" >
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg--900/30 text-white mb-4" >
        <Rocket size={ 20 } />
          < span className = "font-medium" > Projetos em Destaque </span>
            </div>
            < h2 className = "text-4xl font-bold gradient-text" > Meus Projetos </h2>
              </div>
              < div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" >
              {
                [
                  {
                    title: "Instagram Clone",
                    description: "Clone da página de login do Instagram com animações suaves e design moderno",
                    image: "https://images.unsplash.com/photo-1675352161918-2dc701738691?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    link: "https://github.com/kleitonmac/Projeto-clone-insta",
                    tags: ["React", "TailwindCSS", "Firebase"]
                  },
                  {
                    title: "One Piece",
                    description: "Projeto inspirado no universo de One Piece com elementos visuais únicos",
                    image: "https://images.unsplash.com/photo-1621478374422-35206faeddfb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    link: "https://github.com/kleitonmac/onepiece",
                    tags: ["JavaScript", "CSS3", "Anime"]
                  },
                  {
                    title: "Mario Bros Services",
                    description: "Reinterpretação criativa do clássico Mario Bros com visual moderno",
                    image: "https://images.unsplash.com/photo-1595429035839-c99c298ffdde?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    link: "https://github.com/kleitonmac/ProjetoMarioandLuigui",
                    tags: ["HTML5", "CSS3", "JavaScript"]
                  },
                  {
                    title: "Barbearia Novo Estilo",
                    description: "Site moderno para barbearia com agendamento online",
                    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800",
                    link: "https://novoestilobarbearia-github-io.vercel.app/",
                    tags: ["Next.js", "TailwindCSS"]
                  },
                  {
                    title: "Grão & Aroma Cafeteria",
                    description: "Site elegante para cafeteria com cardápio digital",
                    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800",
                    link: "https://cafeteriagraoearoma.vercel.app/",
                    tags: ["React", "Estilo-componetes"]
                  },
                   {
                    title: "Consórcio Dev",
                    description: "Site criado para vendas de carros",
                    image: "https://scontent.fvix7-1.fna.fbcdn.net/v/t45.5328-4/469240121_1318430292909450_4516906728469132984_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=AAOcN2dAxXcQ7kNvwGDeHSv&_nc_oc=AdmPy_1nwEkkMCzi7t7DHbXxW_ePecR3hj35Bg-YQpY6wFrt6DPwWo47zY8dul-txmAcWiuQ_POd97hx0oebOf86&_nc_zt=23&_nc_ht=scontent.fvix7-1.fna&_nc_gid=h8elSBnrWv6sgr9mFWYyJw&oh=00_AfKr-U8J8CucQtZzKgJ9Y-w6BewyUC-46fZwg-E-ECqtFQ&oe=68317166",
                    link: "https://github.com/kleitonmac/carros-dev",
                    tags: ["Python","Django", "Estilo-componetes"]
                  },
                   {
                    title: "Conversor de Moedas",
                    description: "Conversor de moedas em tempo real com interface intuitiva",
                    image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=800",
                    link: "https://github.com/kleitonmac/convesor-de-moedas",
                    tags: ["React", "API", "Financia"]
                  },
                ].map((project, index) => (
                  <a
                key= { index }
                href = { project.link }
                target = "_blank"
                rel = "noopener noreferrer"
                className = "card-hover bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-purple-900/20"
                  >
                  <div className="relative overflow-hidden group" >
                <img
                    src={ project.image }
                    alt = { project.title }
                    className = "w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" > </div>
                  </div>
                < div className = "p-6" >
                <h3 className="text-xl font-bold mb-2 gradient-text" > { project.title } </h3>
                < p className = "text-slate-300 mb-4" > { project.description } </p>
                < div className = "flex flex-wrap gap-2" >
                {
                  project.tags.map((tag, tagIndex) => (
                    <span
                        key= { tagIndex }
                        className = "px-3 py-1 bg-purple-900/30 text-purple-400 rounded-full text-sm"
                    >
                    { tag }
                    </span>
                  ))
              }
                </div>
                </div>
                </a>
            ))}
</div>
  </div>
  </section>

{/* Social Links */ }
<footer className="py-12 bg-slate-800" >
  <div className="container mx-auto px-4" >
    <div className="text-center mb-8" >
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 text-white mb-4" >
        <Star size={ 20 } />
          < span className = "font-medium" > Redes Sociais </span>
            </div>
            </div>
            < div className = "flex justify-center gap-6" >
              <a 
              href="https://www.facebook.com/kleiton.santosmacedo/photos_by"
target = "_blank"
rel = "noopener noreferrer"
className = "gradient-border"
  >
  <span className="w-12 h-12 flex items-center justify-center text-slate-300 hover:text-purple-400" >
    <Facebook size={ 24 } />
      </span>
      </a>
      < a
href = "https://www.linkedin.com/in/kleiton-santos-macedo-8322a7235/"
target = "_blank"
rel = "noopener noreferrer"
className = "gradient-border"
  >
  <span className="w-12 h-12 flex items-center justify-center text-slate-300 hover:text-white-400" >
    <Linkedin size={ 24 } />
      </span>
      </a>
      < a
href = "https://www.instagram.com/iamkleiton/"
target = "_blank"
rel = "noopener noreferrer"
className = "gradient-border"
  >
  <span className="w-12 h-12 flex items-center justify-center text-slate-300 hover:text-purple-400" >
    <Instagram size={ 24 } />
      </span>
      </a>
      < a
href = "https://github.com/kleitonmac"
target = "_blank"
rel = "noopener noreferrer"
className = "gradient-border"
  >
  <span className="w-12 h-12 flex items-center justify-center text-slate-300 hover:text-purple-400" >
    <Github size={ 24 } />
      </span>
      </a>
      </div>
      </div>
      </footer>
      </div>
  );
}

export default App;
