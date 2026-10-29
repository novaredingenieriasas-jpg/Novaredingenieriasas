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

  // 4. Formateamos el título visible
  const nombreServicio = slugDecodificado.replace(/-/g, ' ').toUpperCase();
  const mensajeWhatsApp = `Hola Ingenieros de Novared, estoy interesado en el servicio de ${nombreServicio} y deseo recibir más información o agendar una visita técnica.`;
  const urlWhatsApp = `https://wa.me/573105816104?text=${encodeURIComponent(mensajeWhatsApp)}`;
  const correoContacto = "novaredingenieriasas@gmail.com";

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
                <img 
                  src={`/galeria/${slugLimpio}-${num}.jpg`} 
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 absolute inset-0 z-10"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Texto de respaldo */}
                <div className="text-center p-4 z-0">
                  <span className="text-neutral-700 text-2xl font-black block mb-1">{num}</span>
                  <span className="text-neutral-500 text-xs font-semibold">Subir: {slugLimpio}-{num}.jpg</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TARJETA DE CONTACTO ESTILIZADA */}
        <div className="p-8 md:p-10 rounded-3xl bg-neutral-900/80 border border-neutral-800 shadow-2xl relative overflow-hidden backdrop-blur-xl">
          {/* Resplandor decorativo de fondo */}
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold uppercase tracking-wider mb-3">
                Atención Inmediata
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">¿Buscas Soluciones de Ingeníeria?</h3>
              <p className="text-neutral-400 text-sm max-w-md">
                Comunícate directamente con nuestro equipo de ingenieros para asesoría, proyectos o agenda de visitas técnicas.
              </p>
            </div>

            {/* OPCIONES DE CONTACTO */}
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
              {/* Opción Celular / WhatsApp */}
              <a 
                href={urlWhatsApp}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl bg-neutral-800/80 hover:bg-neutral-800 border border-neutral-700/60 hover:border-emerald-500/50 transition-all group shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-semibold text-neutral-400">Celular / WhatsApp</span>
                  <span className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                    +57 310 581 6104
                  </span>
                </div>
              </a>

              {/* Opción Correo Electrónico */}
              <a 
                href={`mailto:${correoContacto}`}
                className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl bg-neutral-800/80 hover:bg-neutral-800 border border-neutral-700/60 hover:border-red-500/50 transition-all group shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-semibold text-neutral-400">Correo Electrónico</span>
                  <span className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">
                    {correoContacto}
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
