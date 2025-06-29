"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ candidateName }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Evita hacer scroll cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const links = [
    { href: "#about", label: "Sobre" },
    { href: "#issues", label: "Propuestas" },
    { href: "#contact", label: "Contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-700 to-blue-500 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Nombre / logo */}
          <Link href="#home" className="text-2xl font-bold text-white">
            {candidateName}
          </Link>

          {/* Enlaces versión desktop */}
          <div className="hidden md:flex space-x-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-white/90 font-medium hover:text-white transition"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* CTA versión desktop */}
          <Link
            href="#contact"
            className="hidden md:inline-block bg-white text-blue-700 font-semibold px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Apóyame
          </Link>

          {/* Botón hamburguesa */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Panel móvil */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden bg-blue-600 overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-2">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-white py-2 text-lg"
                >
                  {label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block bg-white text-blue-700 font-semibold w-full text-center py-2 rounded-lg shadow"
              >
                Apóyame
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
