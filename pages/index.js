import React, { useState } from 'react';
import { Phone, MessageCircle, TrendingUp, ChevronDown } from 'lucide-react';

// Custom style component
const CustomStyle = () => (
  <style jsx>{`
    @keyframes gradientAnimation {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    .animate-gradient {
      animation: gradientAnimation 3s ease infinite;
    }
    
    .bg-300\\% {
      background-size: 300% 300%;
    }
  `}</style>
);

// Gradient text component
const GradientText = ({ children, className }) => (
  <span className={`bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 text-transparent bg-clip-text bg-300% animate-gradient ${className || ''}`}>
    {children}
  </span>
);

// WhatsApp button component
const WhatsAppButton = () => (
  <a 
    href="https://wa.me/5511917199810" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center gap-2"
  >
    <span className="font-semibold">WhatsApp</span>
  </a>
);

// FAQ item component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="mb-4">
      <button
        className="w-full flex justify-between items-center p-4 bg-gray-900 rounded-lg text-left hover:bg-gray-800 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm md:text-base">{question}</span>
        <ChevronDown 
          className={`transform transition-transform ${isOpen ? 'rotate-180' : ''} flex-shrink-0 ml-2`} 
          size={20}
        />
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-800 rounded-b-lg mt-1 text-sm md:text-base">
          {answer}
        </div>
      )}
    </div>
  );
};

// Benefit card component
const BenefitCard = ({ title, features }) => (
  <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors">
    <h3 className="text-lg md:text-xl font-bold mb-4">
      <GradientText>{title}</GradientText>
    </h3>
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-sm md:text-base">
          <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 flex-shrink-0"></div>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <button className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-colors">
      AGENDE SUA DEMONSTRAÇÃO
    </button>
  </div>
);

const LandingPage = () => {
  const faqs = [
    {
      question: 'Como a Bianca funciona?',
      answer: 'A Bianca é um agente de IA que automatiza seu atendimento no WhatsApp, aprendendo com suas respostas e processos para oferecer um atendimento consistente 24/7.'
    },
    {
      question: 'A Bianca realmente substitui um atendente humano?',
      answer: 'A Bianca é capaz de lidar com a maioria das interações rotineiras, liberando sua equipe para focar em casos mais complexos e estratégicos.'
    },
    {
      question: 'É muito caro? Preciso pagar para começar?',
      answer: 'Oferecemos um teste gratuito para você avaliar o potencial da Bianca no seu negócio. Após isso, temos planos que se adequam a diferentes necessidades e orçamentos.'
    }
  ];

  const benefits = [
    {
      title: 'ATENDIMENTO CONSISTENTE',
      features: [
        'Personalização Para o Seu Negócio',
        'Respostas Imediatas 24/7',
        'Mesma Qualidade Sempre',
        'Nunca Perde Uma Oportunidade'
      ]
    },
    {
      title: 'INTELIGÊNCIA EM AÇÃO',
      features: [
        'Toma Decisões Baseadas em Dados',
        'Aprende com Cada Interação',
        'Adapta-se ao Seu Negócio',
        'Resolve Problemas Complexos'
      ]
    },
    {
      title: 'RESULTADOS PRÁTICOS',
      features: [
        'Economia de Tempo para Colaboradores',
        'Aumento nas Conversões',
        'Clientes Mais Satisfeitos',
        'Crescimento Escalável'
      ]
    }
  ];

  const testimonials = [
    {
      text: 'Saí do atendimento e melhorei muito minha vida',
      author: 'Maria Clara Oliveira Barbosa',
      role: 'Proprietária CleanApp',
      rating: 5
    },
    {
      text: 'Atendimento instantâneo fez toda diferença',
      author: 'João Paulo São Pedro',
      role: 'CEO Tech Solutions',
      rating: 5
    },
    {
      text: 'Não perco mais tempo com dúvidas',
      author: 'Ana Maria Santos de Oliveira',
      role: 'Diretora Comercial',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <CustomStyle />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Tenha <GradientText>Liberdade</GradientText> de Tempo
              Enquanto Seu <GradientText>Atendimento</GradientText> Funciona
              Perfeitamente 24/7
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-8">
              Um Agente Inteligente Que Conversa,
              Decide e Resolve - Com a Mesma Qualidade
            </p>
            <button className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white px-6 md:px-8 py-3 rounded-full text-base md:text-lg font-semibold transition-colors">
              AGENDE UMA DEMONSTRAÇÃO
            </button>
          </div>
          
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8 md:my-12">
            <div className="p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors">
              <h3 className="text-2xl md:text-3xl font-bold">1,250+</h3>
              <p className="text-gray-400 text-sm md:text-base">Clientes Atendidos</p>
            </div>
            <div className="p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors">
              <h3 className="text-2xl md:text-3xl font-bold">10X</h3>
              <p className="text-gray-400 text-sm md:text-base">Mais Produtividade</p>
            </div>
            <div className="p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors">
              <h3 className="text-2xl md:text-3xl font-bold">400+</h3>
              <p className="text-gray-400 text-sm md:text-base">Empresas Atendidas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Como Bianca Resolve Section */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
          COMO BIANCA RESOLVE SEUS <GradientText>PROBLEMAS</GradientText>
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8 md:mb-16">
          <div className="w-full md:w-1/2">
            {/* Placeholder para a imagem do celular */}
            <div className="w-full aspect-[3/4] bg-gray-800 rounded-3xl shadow-lg flex items-center justify-center">
              Imagem do App
            </div>
          </div>
          
          <div className="w-full md:w-1/2 space-y-6 md:space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-500 rounded-lg flex-shrink-0">
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h3 className="font-bold mb-2 text-base md:text-lg">CONFIGURAÇÃO SIMPLES</h3>
                <p className="text-gray-300 text-sm md:text-base">
                  Você fornece as informações do seu negócio e Bianca aprende a atender seus clientes.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-500 rounded-lg flex-shrink-0">
                <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h3 className="font-bold mb-2 text-base md:text-lg">APRENDIZADO INTELIGENTE</h3>
                <p className="text-gray-300 text-sm md:text-base">
                  A Bianca aprende continuamente com cada interação para melhorar seus resultados.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-500 rounded-lg flex-shrink-0">
                <Phone className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h3 className="font-bold mb-2 text-base md:text-lg">RESULTADOS IMEDIATOS</h3>
                <p className="text-gray-300 text-sm md:text-base">
                  Atendimento 24/7, respostas instantâneas e zero leads perdidos.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-base md:text-lg mb-4">
            Teste e <GradientText>surpreenda-se</GradientText>
          </p>
          <button className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white px-6 md:px-8 py-3 rounded-full text-base md:text-lg font-semibold transition-colors">
            AGENDAR TESTE GRATUITO
          </button>
        </div>
      </div>

      {/* Partners Section */}
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-gray-400 mb-6 md:mb-8 text-sm md:text-base">
          APOIADO PELAS MELHORES FERRAMENTAS
        </p>
        <div className="grid grid-cols-2 md:flex md:justify-center items-center gap-4 md:gap-8">
          <div className="w-full md:w-24 h-12 bg-gray-800 rounded flex items-center justify-center text-sm md:text-base">OpenAI</div>
          <div className="w-full md:w-24 h-12 bg-gray-800 rounded flex items-center justify-center text-sm md:text-base">Twilio</div>
          <div className="w-full md:w-24 h-12 bg-gray-800 rounded flex items-center justify-center text-sm md:text-base">VAPI</div>
          <div className="w-full md:w-24 h-12 bg-gray-800 rounded flex items-center justify-center text-sm md:text-base">n8n</div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
          AUTOMATIZE SEU <GradientText>ATENDIMENTO</GradientText>, POTENCIALIZE
          <GradientText> RESULTADOS</GradientText> E LIBERTE SEU <GradientText>TEMPO</GradientText>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
          QUEM USOU, <GradientText>APROVOU!</GradientText>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-800 transition-colors">
              <p className="text-base md:text-lg mb-4">"{testimonial.text}"</p>
              <div className="flex justify-center mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="font-bold text-sm md:text-base">{testimonial.author}</p>
              <p className="text-gray-400 text-sm md:text-base">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
          PERGUNTAS FREQUENTES
        </h2>

        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="mt-8 md:mt-12 p-6 md:p-8 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg max-w-2xl mx-auto text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            PERGUNTE TUDO O QUE QUISER EM UMA CHAMADA DE VÍDEO
          </h3>
          <p className="mb-6 text-sm md:text-base">
            Agende uma chamada personalizada para esclarecer suas perguntas e entender como Bianca pode ajudar seu negócio
          </p>
          <button className="w-full md:w-auto bg-white text-blue-600 px-6 md:px-8 py-3 rounded-full text-base md:text-lg font-semibold hover:bg-gray-100 transition-colors">
            AGENDE SUA DEMONSTRAÇÃO GRATUITA
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-8 md:mt-16 py-6 md:py-8">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm md:text-base">
          <p>© Copyright 2025 Bianca IA™ | Todos os Direitos Reservados</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;