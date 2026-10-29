"use client";

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function DetalleServicio() {
  const params = useParams();
  
  // 1. Obtenemos el slug raw de Next.js
  const rawSlug = (params?.slug as string) || "servicio";

  // 2. Decodificamos %20 a espacios reales para el título y variables
  const slugDecodificado = decodeURIComponent(rawSlug);

  // 3. Convertimos a minúsculas y reemplazamos espacios por guiones para buscar las fotos limpiamente
  const slugLimpio = slugDecodificado.toLowerCase().trim().replace(/\s+/g, '-');

  // 4. Formateamos el título visible (ej. "sistemas-electricos" o "sistemas electricos" -> "SISTEMAS ELECTRICOS")
  const nombreServicio = slugDecodificado.replace(/-/g, ' ').toUpperCase();
  const mensajeWhatsApp = `Hola Ingenieros de Novared, estoy interesado en el servicio de ${nombreServicio} y deseo recibir más información o agendar una visita técnica.`;
  const urlWhatsApp = `https://wa.me/573105816104?text=${encodeURIComponent(mensajeWhatsApp)}`;

  return (
    <div className="bg-[#09090b] min-h-screen text-neutral-100 font-sans selection:bg-red-600 selection:text-white relative">
      
      {/* NAVEGACIÓN SUPERIOR */}
      <nav className="fixed w-full z-50 top-0 border-b border-neutral-800/80 bg-[#09090b]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <div className="bg-white px-3 py-1.5 rounded-xl shadow-md border border-neutral-800 flex items-center justify-center transition-transform group-hover:scale-105">
              <img src="/logo.png" alt="Novared Ingeniería S.A.S." className="h-9 w-auto object-contain" />
            </div>
          </Link>
          <Link href="/#division-it" className="text-sm font-medium text-neutral-300 hover:text-red-500 transition-colors">
            ← Volver al Inicio
          </Link>
        </div>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <main className="pt-32 pb-24 max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-red-500 text-xs font-bold uppercase tracking-widest block mb-2"></span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase mb-4">
            {nombreServicio}
          </h1>
         
        </div>

        {/* GALERÍA DE TRABAJOS REALIZADOS */}
        <div className="mb-16">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span>🖼️</span> Galería de Trabajos Realizados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5].map((num) => (
              <div 
                key={num} 
                className="h-48 md:h-64 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 overflow-hidden relative group flex items-center justify-center"
              >
                {/* 
                  FOTO DINÁMICA: Llama a /galeria/sistemas-electricos-1.jpg
                  alt="" previene que aparezcan textos feos si la foto falla
                */}
                <img 
                  src={`/galeria/${slugLimpio}-${num}.jpg`} 
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 absolute inset-0 z-10"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Texto de respaldo (se ve elegantemente solo si la foto no existe aún) */}
                <div className="text-center p-4 z-0">
                  <span className="text-neutral-700 text-2xl font-black block mb-1">{num}</span>
                  <span className="text-neutral-500 text-xs font-semibold">Subir: {slugLimpio}-{num}.jpg</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTÓN WHATSAPP */}
        <div className="p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">¿Necesitas ayuda con este servicio?</h3>
            <p className="text-neutral-400 text-sm">Podemos agendar una visita técnica o realizar una cotización para tu empresa.</p>
          </div>
          <a 
            href={urlWhatsApp}
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20b858] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#25D366]/20 whitespace-nowrap"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </main>
    </div>
  );
}