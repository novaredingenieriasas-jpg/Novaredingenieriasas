"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const equiposDestacados = [
  { 
    id: 1, 
    categoria: "Suministro de Equipos y Repuestos ti", 
    items: [
      "Suministro y comercialización de servidores y estaciones de trabajo. ",
      "Instalación, configuración y puesta en marcha de equipos.",
      "Mantenimiento preventivo y correctivo de infraestructura TI.",
      "Diagnóstico y soporte técnico especializado. ",
      "Suministro de periféricos, componentes y accesorios tecnológicos.",
      "Optimización y actualización de equipos informáticos.",
      "Recuperación Avanzada de Datos en Medios de Almacenamiento.", 
      "Optimización de rendimiento y gestión de arreglos RAID"
    ],
    etiqueta: "Venta e Instalación", 
    badgeColor: "bg-red-500/10 text-red-400 border-red-500/20"
  },
  { 
    id: 2, 
    categoria: "Suministro y soluciones eléctricas", 
    items: [
      "Plantas eléctricas diésel y gasolina.",
      "Motores, alternadores y reguladores de voltaje.",
      "Transferencias automáticas (ATS).",
      "Baterías, cargadores, filtros y repuestos. ",
      "Tableros eléctricos de distribución y control.",
      "UPS monofásicas y trifásicas.",
      "Baterías y bancos de baterías.", 
      "Paneles solares fotovoltaicos.",
      "Bandejas portacables, canaletas, gabinetes, tuberia y ductos.",
      "Tableros de bypass y unidades de distribución eléctrica (PDU).",
      "Luminarias LED interiores, exteriores e industriales.",
      "Transformadores, medidores y dispositivos de protección contra sobretensiones."
    ],
    etiqueta: "Venta y Mantenimiento", 
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20"
  },
  { 
    id: 3, 
    categoria: "suministro y repuestos de Climatización", 
    items: [
      "Refrigerantes y aceites compatibles",
      "Tuberías de cobre, aislamiento y accesorios",
      "Compresores, motores y ventiladores",
      "Capacitores, contactores, relés y protecciones ",
      "Bombas de condensado, mangueras y accesorios de drenaje",
      "Nitrógeno para pruebas de presión",
      "Insumos para detección y reparación de fugas", 
      "Aires acondicionados tipo minisplit, cassette, piso-techo y paquete",
      "Unidades evaporadoras y condensadoras.",
      "Componentes y repuestos para sistemas de precisión e industriales"
    ],
    etiqueta: "Suministro y Montaje", 
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
  },
  { 
    id: 4, 
    categoria: "Alquiler de equipos de respaldo eléctrico", 
    items: [
      "Planta eléctrica de 20 kVA",
      "Planta eléctrica de 35 kVA",
      "Planta eléctrica de 50 kVA",
      "Planta eléctrica de 80 kVA",
      "UPS monofásica de 3 kVA",
      "UPS bifásica de 6 kVA",
      "UPS bifásica de 10 kVA",
      "UPS trifásica de 15 kVA"
    ],
    etiqueta: "Alquiler", 
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20"
  },
];

const serviciosIT = [
  {
    slug: "mantenimiento-servidores",
    titulo: "Soluciones Tecnológicas y Mantenimiento TI",
    desc: "",
    items: [
      "Suministro y comercialización de servidores y estaciones de trabajo. ",
      "Instalación, configuración y puesta en marcha de equipos.",
      "Mantenimiento preventivo y correctivo de infraestructura TI.",
      "Diagnóstico y soporte técnico especializado. ",
      "Suministro de periféricos, componentes y accesorios tecnológicos.",
      "Optimización y actualización de equipos informáticos.",
      "Recuperación Avanzada de Datos en Medios de Almacenamiento.", 
      "Optimización de rendimiento y gestión de arreglos RAID"
    ],
    icono: (
      <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    )
  },
  { 
    slug: "cableado-estructurado", 
    titulo: "Diseño e Implementación de Redes y Cableado Estructurado", 
    items: [
      "Elaboración de planos y documentación técnica de redes.",
      "Instalación de cableado estructurado y fibra óptica.",
      "Adecuación, identificación y marcación de puntos de red.",
      "Configuración y puesta en servicio de equipos de red.",
      "Segmentación de redes y configuración de VLAN.",
      "Instalación y adecuación de racks y gabinetes.",
      "Organización y administración de cableado estructurado.",
      "Traslado, reubicación y reconexión de redes.",
      "Diagnóstico y solución de fallas de conectividad.",
      "Pruebas y certificación de cableado de cobre y fibra óptica.",
      "Actualización y optimización de infraestructura de red."
    ],
    icono: (
      <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg> 
    )
  },
  { 
    slug: "soporte-tecnico", 
    titulo: "Soporte Técnico Especializado", 
    items: [
      "Diagnóstico y solución de incidentes informáticos.",
      "Soporte técnico preventivo y correctivo.",
      "Mantenimiento de computadores y estaciones de trabajo.",
      "Instalación y configuración de software y sistemas operativos.",
      "Configuración y administración de servidores.",
      "Gestión de usuarios, permisos y recursos compartidos.",
      "Mantenimiento y optimización de sistemas informáticos.",
      "Alistamiento, traslado y puesta en operación de equipos.",
      "Asistencia técnica presencial y remota."
    ],
    icono: (
      <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg> 
    )
  }
];

const serviciosElectricos = [
  { 
    slug: "aires-acondicionados", 
    titulo: "Instalación y Mantenimiento de Sistemas de Climatización Residencial e Industrial", 
    items: [
      "Limpieza de unidades evaporadoras, manejadoras y condensadoras.",
      "Limpieza de filtros, bandejas y sistemas de drenaje.",
      "Inspección y medición de parámetros eléctricos.",
      "Verificación de presiones y niveles de refrigerante.",
      "Detección de fugas en tuberías y circuitos.",
      "Revisión de motores, compresores, válvulas y componentes.",
      "Inspección del aislamiento térmico y conexiones eléctricas.",
      "Diagnóstico y reparación de fallas",
      "Instalación, traslado y puesta en marcha de equipos.",
      "Reemplazo de componentes y recarga de refrigerante cuando corresponda."
    ],
    icono: (
      <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg> 
    )
  },
  { 
    slug: "tableros-y-ups", 
    titulo: "Instalación, Mantenimiento de Sistemas UPS y Protección de Circuitos Regulados ", 
    items: [
      "Instalación y puesta en marcha de sistemas UPS.",
      "Instalación y adecuación de circuitos eléctricos regulados.",
      "Mantenimiento preventivo y correctivo de UPS.",
      "Inspección de acometidas, conexiones y tableros eléctricos.",
      "Verificación de sistemas de transferencia y bypass.",
      "Revisión de baterías y autonomía del respaldo.",
      "Medición de parámetros eléctricos de entrada y salida.",
      "Diagnóstico de alarmas y fallas operativas.",
      "Revisión de inversores, ventiladores y componentes internos.",
      "Reemplazo de baterías y componentes eléctricos.",
      "Traslado, configuración y puesta en servicio de equipos.",
      "Pruebas funcionales del sistema de respaldo y protección eléctrica."
    ],    
    icono: (
      <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg> 
    )
  },
  { 
    slug: "generadores-electricos", 
    titulo: "Instalación y Mantenimiento de Generadores Eléctricos", 
    items: [
      "Cambio de aceite y filtros de lubricación, aire y combustible.",
      "Verificación de niveles de refrigerante y estado del sistema de enfriamiento.",
      "Inspección de baterías, cargadores y sistemas de arranque.",
      "Revisión y reparación de motores y componentes eléctricos.",
      "Diagnóstico y reparación de bombas de combustible e inyectores.",
      "Mantenimiento y reparación de radiadores y sistemas de refrigeración.",
      "Diagnóstico y mantenimiento de sistemas de transferencia automática (ATS).",
      "Pruebas de funcionamiento, verificación de parámetros y puesta en servicio."
    ],
    icono: (
      <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg> 
    )
  },
  { 
    slug: "Sistemas electricos", 
    titulo: "Sistemas Eléctricos de Baja y Media Tensión y Energía Renovables", 
    items: [
      "Instalación de ductería, bandejas portacables, tuberías y canalizaciones eléctricas.",
      "Instalación de circuitos de iluminación, tomacorrientes normales y regulados.",
      "Montaje y mantenimiento de tableros eléctricos, protecciones y sistemas de distribución.",
      "Diseño, instalación y mantenimiento de sistemas de iluminación interior y exterior.",
      "Suministro e instalación de paneles solares, inversores y bancos de baterías.",
      "Diseño, instalación y mantenimiento de sistemas de puesta a tierra y apantallamiento.",
      " Inspección termográfica, mediciones eléctricas y diagnóstico de fallas",
      "Estudios de calidad de energía, eficiencia energética y pérdidas eléctricas.",
      "Instalación y mantenimiento de subestaciones y equipos eléctricos.",
      "Adecuación de redes eléctricas internas y externas.",
      "Pruebas de funcionamiento y verificación de las instalaciones conforme a la normativa aplicable."
    ],
    icono: (
      <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg> 
    )
  }
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [equipoCotizar, setEquipoCotizar] = useState<{nombre?: string, categoria?: string} | null>(null);

  const abrirCotizador = (equipo: any) => {
    setEquipoCotizar(equipo);
    setIsModalOpen(true);
  };

  const cerrarCotizador = () => {
    setIsModalOpen(false);
    setEquipoCotizar(null);
  };

  const correoContacto = "novaredingenieriasas@gmail.com";
  const urlWhatsAppDirecto = "https://wa.me/573105816104?text=Hola%20Ingenieros%20de%20Novared,%20deseo%20realizar%20una%20consulta.";

  return (
    <div className="bg-[#09090b] min-h-screen text-neutral-100 font-sans selection:bg-red-600 selection:text-white relative">
      
      {/* MARCA DE AGUA FIJA EN EL FONDO */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 opacity-[100]">
        <img 
          src="/marca.png" 
          alt="Marca de agua Novared" 
          className="w-[500px] md:w-[800px] object-contain select-none" 
          style={{ mixBlendMode: 'screen' }}
        />
      </div>

      {/* 1. NAVEGACIÓN SUPERIOR */}
      <nav className="fixed w-full z-50 top-0 border-b border-neutral-800/80 bg-[#09090b]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <div className="bg-white px-3 py-1.5 rounded-xl shadow-md border border-neutral-800 flex items-center justify-center transition-transform group-hover:scale-105">
              <img src="/logo.png" alt="Novared Ingeniería S.A.S." className="h-9 w-auto object-contain" />
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
            <a href="#division-it" className="hover:text-red-500 transition-colors">Servicios Informáticos TI</a>
            <a href="#division-electrica" className="hover:text-red-500 transition-colors">Infraestructura, Energía y Climatización</a>
            <a href="#catalogo" className="hover:text-red-500 transition-colors">Suministros de Energía e Infraestructura TI</a>
            
            {/* PORTAFOLIO CON DESCARGA DIRECTA DE PDF */}
            <a 
              href="/portafolio.pdf" 
              download="Portafolio_Novared_Ingenieria_SAS.pdf"
              className="text-[18px] font-black text-white hover:text-red-500 transition-all hover:scale-105 tracking-wide"
            >
              Portafolio
            </a>
          </div>
          
          <a href="#catalogo" className="hidden sm:inline-flex items-center justify-center px-4 py-2">
          </a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="relative pt-40 pb-28 md:pt-52 md:pb-36 flex items-center justify-center overflow-hidden border-b border-neutral-800/60 bg-gradient-to-b from-[#09090b]/80 via-[#120507]/80 to-[#09090b]/80 z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 mb-8 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
            <span className="text-xs font-semibold text-neutral-300 tracking-widest uppercase">Redes Eléctricas • Comunicaciones y Servicios</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-tight">
            NOVARED INGENIERIA S.A.S
          </h1>
          <p className="text-base md:text-lg text-neutral-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal text-justify">
           En NOVARED INGENIERÍA S.A.S. ofrecemos soluciones integrales de ingeniería, tecnología e infraestructura para empresas e instituciones. Desarrollamos proyectos de redes, sistemas eléctricos, climatización y soluciones audiovisuales, complementados con mantenimiento especializado y suministro de equipos, para garantizar la confiabilidad, eficiencia y continuidad operativa de nuestros clientes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#division-it" className="px-8 py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm tracking-wide transition-all shadow-xl shadow-red-600/25 w-full sm:w-auto">
              Ingeniería de Infraestructura TI
            </a>
            <a href="#division-electrica" className="px-8 py-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 font-bold text-sm tracking-wide border border-neutral-800 transition-all w-full sm:w-auto">
              Ingeniería Eléctrica y Climatización
            </a>
          </div>
        </div>
      </header>

      {/* 3. DIVISIÓN IT & REDES (3 Tarjetas) */}
      <section id="division-it" className="py-4 relative bg-[#09090b]/90 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-start text-left py-2 mb-6 border-b border-neutral-800/80">
            <h2 className="text-base md:text-lg font-bold text-white tracking-tight">
              Ingeniería, Infraestructura y Servicios.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviciosIT.map((servicio, idx) => (
              <Link href={`/servicios/${servicio.slug}`} key={idx} className="block group h-full">
                <div className="p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 group-hover:border-red-600/60 group-hover:bg-neutral-900/90 transition-all duration-300 h-full flex flex-col">
                  <div className="mb-6 p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 w-fit group-hover:scale-110 transition-transform">{servicio.icono}</div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-red-500 transition-colors">{servicio.titulo}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-4">{servicio.desc}</p>

                  {/* ÍTEMS DISCRIMINADOS */}
                  {servicio.items && (
                    <ul className="mb-6 space-y-2 text-xs text-neutral-300 flex-grow">
                      {servicio.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2">
                          <span className="text-red-500 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-auto pt-4 border-t border-neutral-800/60 flex items-center justify-between text-xs font-bold text-red-500">
                    <span>Ver especificaciones</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DIVISIÓN ELÉCTRICA & CLIMATIZACIÓN (4 Tarjetas) */}
      <section id="division-electrica" className="py-4 relative bg-[#0b0b0e]/90 border-t border-neutral-800/60 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-start text-left py-2 mb-6 border-b border-neutral-800/80">
            <h2 className="text-base md:text-lg font-bold text-white tracking-tight">
              Eléctrica y Climatización
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviciosElectricos.map((servicio, idx) => (
              <Link href={`/servicios/${servicio.slug}`} key={idx} className="block group h-full">
                <div className="p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 group-hover:border-red-600/60 group-hover:bg-neutral-900/90 transition-all duration-300 h-full flex flex-col">
                  <div className="mb-6 p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 w-fit group-hover:scale-110 transition-transform">{servicio.icono}</div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-red-500 transition-colors">{servicio.titulo}</h3>

                  {/* ÍTEMS DISCRIMINADOS PARA ELÉCTRICA */}
                  {servicio.items && (
                    <ul className="mb-6 space-y-2 text-xs text-neutral-300 flex-grow">
                      {servicio.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2">
                          <span className="text-red-500 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-auto pt-4 border-t border-neutral-800/60 flex items-center justify-between text-xs font-bold text-red-500">
                    <span>Ver especificaciones</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CATÁLOGO DE SUMINISTROS */}
      <section id="catalogo" className="py-4 relative bg-[#09090b]/90 border-t border-neutral-800/60 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-start text-left py-2 mb-6 border-b border-neutral-800/80">
            <h2 className="text-base md:text-lg font-bold text-white tracking-tight">
              Suministro de Equipos
            </h2>
          </div>

          {/* GRID DE 4 COLUMNAS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equiposDestacados.map((equipo) => (
              <div key={equipo.id} className="bg-neutral-900/70 border border-neutral-800 rounded-2xl overflow-hidden flex flex-col group hover:border-neutral-700 transition-all">
                {/* Encabezado del cuadro con el texto blanco destacado */}
                <div className="h-36 bg-neutral-950/80 flex items-center justify-center p-6 relative border-b border-neutral-800/80">
                  <div className={`absolute top-4 right-4 text-[11px] font-bold px-3 py-1 rounded-full border ${equipo.badgeColor}`}>
                    {equipo.etiqueta}
                  </div>
                  <span className="text-xs md:text-sm font-extrabold text-white tracking-wide uppercase text-center drop-shadow-md px-2">
                    {equipo.categoria}
                  </span>
                </div>

                <div className="p-7 flex flex-col flex-grow">
                  {/* Lista de ítems discriminados con letra más compacta */}
                  {equipo.items && (
                    <ul className="mb-6 space-y-1.5 text-[11px] text-neutral-300 flex-grow">
                      {equipo.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2">
                          <span className="text-red-500 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* BOTÓN INTERACTIVO SIN CONFLITOS DE CLIC */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      abrirCotizador(equipo);
                    }}
                    className="w-full mt-auto py-3.5 rounded-xl bg-neutral-900 hover:bg-red-600 text-white font-semibold text-xs uppercase tracking-wider transition-all border border-neutral-800 hover:border-red-500 shadow-sm relative z-20"
                  >
                    Solicitar Cotización
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TARJETA DE CONTACTO ESTILIZADA */}
      <section className="py-12 relative bg-[#09090b]/90 border-t border-neutral-800/60 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="p-8 md:p-10 rounded-3xl bg-neutral-900/80 border border-neutral-800 shadow-2xl relative overflow-hidden backdrop-blur-xl">
            {/* Resplandor decorativo de fondo */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold uppercase tracking-wider mb-3">
                  Atención Inmediata
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">¿Necesitas ayuda o cotización?</h3>
                <p className="text-neutral-400 text-sm max-w-md">
                  Comunícate directamente con nuestro equipo de ingenieros para asesoría, proyectos o agenda de visitas técnicas.
                </p>
              </div>

              {/* OPCIONES DE CONTACTO */}
              <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
                {/* Opción Celular / WhatsApp */}
                <a 
                  href={urlWhatsAppDirecto}
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
        </div>
      </section>

      {/* FOOTER CORPORATIVO */}
      <footer className="py-12 border-t border-neutral-800 bg-[#060608] text-neutral-500 text-xs relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} NOVARED INGENIERÍA S.A.S. Todos los derechos reservados D - J</p>
          <p className="text-neutral-400 font-medium">Redes Eléctricas • Comunicaciones y Servicios</p>
        </div>
      </footer>

      {/* BOTÓN FLOTANTE DE WHATSAPP */}
      <a 
        href={urlWhatsAppDirecto} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:bg-[#20b858] transition-all hover:scale-110 flex items-center justify-center group"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.031 0C5.395 0 0 5.394 0 12.031c0 2.656.848 5.158 2.395 7.275L.5 24l4.908-1.745a11.968 11.968 0 006.623 1.977c6.637 0 12.031-5.395 12.031-12.031S18.668 0 12.031 0zm-1.848 18.271l-1.04-.616a9.972 9.972 0 01-4.708-4.32l-.624-1.033 1.334-1.325c.34-.338.463-.82.316-1.272l-1.12-3.41c-.201-.606-.826-1.002-1.464-.93l-1.15.132c-1.18.136-2.133 1.135-2.228 2.32-.236 2.946 1.144 5.753 3.518 7.151 2.502 1.474 5.565 1.706 8.351.623 1.157-.45 1.905-1.572 1.83-2.825l-.048-1.22c-.024-.61-.433-1.127-1.026-1.278l-3.32-.843c-.503-.127-1.037.05-1.341.448l-1.128 1.488a.962.962 0 01-1.168.307c-.45-.2-1.144-.564-1.92-1.226z" />
        </svg>
      </a>

      {/* MODAL DE COTIZACIÓN */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#121216] border border-neutral-800 rounded-2xl w-full max-w-lg relative shadow-2xl overflow-hidden">
            <div className="px-6 py-5 border-b border-neutral-800 flex justify-between items-center bg-[#0d0d10]">
              <div>
                <span className="text-red-500 text-[10px] font-bold uppercase tracking-wider">{equipoCotizar?.categoria}</span>
                <h3 className="text-base font-bold text-white mt-0.5">Cotizar: {equipoCotizar?.nombre || equipoCotizar?.categoria}</h3>
              </div>
              <button onClick={cerrarCotizador} className="text-neutral-400 hover:text-white p-2 rounded-lg bg-neutral-900 border border-neutral-800">
                ✕
              </button>
            </div>

            <form 
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const nombreItem = equipoCotizar?.nombre || equipoCotizar?.categoria;
                const msg = `Hola, soy ${formData.get('nombre')} de la empresa ${formData.get('empresa')}. Quiero cotizar el equipo/servicio: ${nombreItem}. \n\nDetalles del requerimiento: ${formData.get('req')}`;
                window.open(`https://wa.me/573105816104?text=${encodeURIComponent(msg)}`, '_blank');
                cerrarCotizador();
              }}
              className="p-6 space-y-4"
            >
              <div>
                <label className="block text-xs font-semibold text-neutral-400 mb-1.5">Nombre Completo *</label>
                <input type="text" name="nombre" required className="w-full bg-[#09090b] border border-neutral-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-red-600 transition-colors" placeholder="Ing. Carlos Pérez" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-neutral-400 mb-1.5">Empresa *</label>
                <input type="text" name="empresa" required className="w-full bg-[#09090b] border border-neutral-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-red-600 transition-colors" placeholder="TechCorp S.A." />
              </div>
              <div>
                <label className="block text-xs font-semibold text-neutral-400 mb-1.5">Requerimiento o Especificaciones *</label>
                <textarea name="req" required rows={3} className="w-full bg-[#09090b] border border-neutral-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-red-600 transition-colors resize-none" placeholder="Cantidades, requerimientos de voltaje, etc..."></textarea>
              </div>

              <button type="submit" className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20b858] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#25D366]/20">
                Enviar por WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
