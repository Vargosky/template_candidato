"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

export default function Home() {
  // ===== Editable Variables =====
  const candidateName = 'Javier Ignacio';
  const tagline = 'Tu Voz, Tu Futuros';
  const heroSubtitle = 'Comprometido con la seguridad, el desarrollo económico y la libertad.';

  const candidateBio = `
Con más de una década al servicio del país y de su comunidad, Javier Ignacio representa una nueva generación de líderes que valoran la tradición, el esfuerzo y el compromiso con el bien común. Su historia no comienza en los grandes escenarios de la política, sino en las calles de su ciudad natal, donde desde joven trabajó por causas sociales, impulsando iniciativas vecinales y apoyando a emprendedores locales.

Apasionado por la seguridad ciudadana y la libertad individual, Javier Ignacio cree firmemente que un país fuerte se construye sobre pilares sólidos: familias unidas, respeto por la ley y oportunidades reales para quienes se esfuerzan. Su experiencia profesional, tanto en el sector público como en el privado, le ha entregado una visión integral de los desafíos que enfrentamos como sociedad y una profunda convicción de que con orden y responsabilidad, Chile puede volver a ser un país de oportunidades para todos.

Amante de la historia nacional, defensor de nuestras tradiciones y firme creyente en el poder de las ideas claras, Javier Ignacio propone una política cercana, honesta y con sentido común. No promete imposibles, pero sí asegura trabajo constante, coherencia en sus principios y una lealtad inquebrantable hacia quienes lo eligieron.

Porque no se trata de discursos vacíos, sino de acciones concretas. Porque Chile merece líderes valientes, preparados y con vocación de servicio. Por eso, Javier Ignacio hoy da un paso al frente.`;

  // Proposals data (title, description, icon path)
  const proposals = [
    {
      title: 'Seguridad',
      desc: 'Propuestas enfocadas en prevención del delito y fortalecimiento de la policía comunitaria.',
      icon: '/site/seguridadLogo.png',
    },
    {
      title: 'Desarrollo Económico',
      desc: 'Iniciativas para impulsar pymes locales, turismo sostenible y generación de empleo.',
      icon: '/site/economiaLogo.png',
    },
    {
      title: 'Libertad',
      desc: 'Defensa de los derechos civiles, libertad de expresión y acceso a la información.',
      icon: '/site/libertadLogo.png',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800 w-full" id="home">
      {/* ===== Navbar ===== */}
      <Navbar candidateName={candidateName} />

      {/* ===== Hero Section ===== */}
      <header className="bg-white">
        <div className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-6 items-center">
          <motion.img
            src="/site/profile.png"
            alt="Candidato"
            className="w-2/4 mx-auto rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-blue-600 mb-4">{tagline}</h1>
            <p className="text-lg mb-8">{heroSubtitle}</p>
            <Link href="#contact">
              <motion.button
                className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apóyame
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </header>

      {/* ===== About Section ===== */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">Conoce al Candidato</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{candidateBio}</p>
          </motion.div>
          <motion.img
            src="/site/conoceAlCandidato.png"
            alt="Biografía"
            className="w-full rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          />
        </div>
      </section>

      {/* ===== Issues Section ===== */}
      <section id="issues" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">Propuestas Clave</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {proposals.map((p) => (
              <motion.div
                key={p.title}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
                whileHover={{ scale: 1.02 }}
              >
                <img src={p.icon} alt={p.title} className="mx-auto mb-4 w-24 h-24" />
                <h3 className="text-xl font-semibold mb-2 text-center">{p.title}</h3>
                <p className="text-gray-600 text-center">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Contact Section ===== */}
      <section id="contact" className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">¡Únete al cambio!</h2>
          <p className="mb-8 max-w-xl mx-auto">
            Déjanos tus datos y serás la primera persona en recibir noticias sobre nuestras actividades y eventos.
          </p>
          <form className="max-w-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Nombre"
              className="p-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white transition"
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="p-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white transition"
            />
            <motion.button
              type="submit"
              className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enviar
            </motion.button>
          </form>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="py-6 bg-gray-200 text-center">
        <p className="text-gray-700">© {new Date().getFullYear()} {candidateName}. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
