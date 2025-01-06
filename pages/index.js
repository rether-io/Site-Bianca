import React, { useState } from 'react';
import { Phone, MessageCircle, TrendingUp, ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="mb-4">
      <button
        className="w-full flex justify-between items-center p-4 bg-gray-900 rounded-lg text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <ChevronDown className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-800 rounded-b-lg mt-1">
          {answer}
        </div>
      )}
    </div>
  );
};

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
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Tenha <span className="text-green-400">Liberdade</span> de Tempo
              Enquanto Seu <span className="text-blue-400">Atendimento</span> Funciona
              Perfeitamente 24/7
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Um Agente Inteligente Que Conversa,
              Decide e Resolve - Com a Mesma Qualidade
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold">
              AGENDE UMA DEMONSTRAÇÃO
            </button>
          </div>
          
          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 my-12">
            <div className="p-4 bg-gray-900 rounded-lg">
              <h3 className="text-3xl font-bold">1,250+</h3>
              <p className="text-gray-400">Clientes Atendidos</p>
            </div>
            <div className="p-4 bg-gray-900 rounded-lg">
              <h3 className="text-3xl font-bold">10X</h3>
              <p className="text-gray-400">Mais Produtividade</p>
            </div>
            <div className="p-4 bg-gray-900 rounded-lg">
              <h3 className="text-3xl font-bold">400+</h3>
              <p className="text-gray-400">Empresas Atendidas</p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          COMO BIANCA RESOLVE SEUS <span className="text-blue-400">PROBLEMAS</span>
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
          <div className="md:w-1/2">
            <img 
              src="/api/placeholder/300/600"
              alt="Bianca Interface" 
              className="rounded-3xl shadow-lg"
            />
          </div>
          
          <div className="md:w-1/2 space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-500 rounded-lg">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold mb-2">CONFIGURAÇÃO SIMPLES</h3>
                <p className="text-gray-300">Você fornece as informações do seu negócio e Bianca aprende a atender seus clientes.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-500 rounded-lg">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold mb-2">APRENDIZADO INTELIGENTE</h3>
                <p className="text-gray-300">A Bianca aprende continuamente com cada interação para melhorar seus resultados.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-500 rounded-lg">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold mb-2">RESULTADOS IMEDIATOS</h3>
                <p className="text-gray-300">Atendimento 24/7, respostas instantâneas e zero leads perdidos.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg mb-4">
            Teste e <span className="text-blue-400">surpreenda-se</span>
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold">
            AGENDAR TESTE GRATUITO
          </button>
        </div>
      </div>

      {/* Partners Section */}
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-gray-400 mb-8">APOIADO PELAS MELHORES FERRAMENTAS</p>
        <div className="flex justify-center items-center gap-8 flex-wrap">
          <div className="w-24 h-12 bg-gray-800 rounded flex items-center justify-center">OpenAI</div>
          <div className="w-24 h-12 bg-gray-800 rounded flex items-center justify-center">Twilio</div>
          <div className="w-24 h-12 bg-gray-800 rounded flex items-center justify-center">VAPI</div>
          <div className="w-24 h-12 bg-gray-800 rounded flex items-center justify-center">n8n</div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          AUTOMATIZE SEU <span className="text-blue-400">ATENDIMENTO</span>, POTENCIALIZE
          <span className="text-blue-400"> RESULTADOS</span> E LIBERTE SEU <span className="text-blue-400">TEMPO</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <ul className="space-y-3">
                {benefit.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full">
                AGENDE SUA DEMONSTRAÇÃO
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          QUEM USOU, <span className="text-blue-400">APROVOU!</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg text-center">
              <p className="text-lg mb-4">"{testimonial.text}"</p>
              <div className="flex justify-center mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="font-bold">{testimonial.author}</p>
              <p className="text-gray-400">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          PERGUNTAS FREQUENTES
        </h2>

        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">
            PERGUNTE TUDO O QUE QUISER EM UMA CHAMADA DE VÍDEO
          </h3>
          <p className="mb-6">
            Agende uma chamada personalizada para esclarecer suas perguntas e entender como Bianca pode ajudar seu negócio
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold">
            AGENDE SUA DEMONSTRAÇÃO GRATUITA
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© Copyright 2025 Bianca IA™ | Todos os Direitos Reservados</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;