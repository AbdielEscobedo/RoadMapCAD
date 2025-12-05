import React from 'react';

const rutaAprendizaje = [
  // --- FUNDAMENTOS ---
  {
    numero: "🛠️",
    nivel: "Fundamentos y Precisión",
    modulos: [
      { titulo: "Nivel 0: Configuración Pro", desc: "Workspaces y Coordenadas.", link: "/RoadMapCAD/autocad/00-configuracion-pro", color: "#c41e3a" },
      { titulo: "Nivel 1: Dibujo de Precisión", desc: "Snaps, Tracking y Selección.", link: "/RoadMapCAD/autocad/01-dibujo-de-precision", color: "#c41e3a" }
    ]
  },
  // --- EDICIÓN Y GESTIÓN ---
  {
    numero: "🏗️",
    nivel: "Edición y Organización",
    modulos: [
      { titulo: "Nivel 2: Edición", desc: "Arrays y Modificación avanzada.", link: "/RoadMapCAD/autocad/02-edicion-y-modificacion", color: "#d32f2f" },
      { titulo: "Nivel 3: Capas y Normas", desc: "Gestión profesional de Layers.", link: "/RoadMapCAD/autocad/03-capas-y-normas", color: "#d32f2f" }
    ]
  },
  // --- ANOTACIÓN Y BLOQUES ---
  {
    numero: "📝",
    nivel: "Documentación Inteligente",
    modulos: [
      { titulo: "Nivel 4: Anotación", desc: "Cotas, Tablas y Directrices.", link: "/RoadMapCAD/autocad/04-anotacion-avanzada", color: "#b71c1c" },
      { titulo: "Nivel 5: Bloques Dinámicos", desc: "Parámetros y Acciones.", link: "/RoadMapCAD/autocad/05-bloques-dinamicos", color: "#b71c1c" }
    ]
  },
  // --- DATA Y XREF ---
  {
    numero: "🔗",
    nivel: "Gestión de Datos",
    modulos: [
      { titulo: "Nivel 6: Atributos y Datos", desc: "Extracción a Excel.", link: "/RoadMapCAD/autocad/06-atributos-y-datos", color: "#ef5350" },
      { titulo: "Nivel 7: Referencias (XREF)", desc: "Trabajo colaborativo.", link: "/RoadMapCAD/autocad/07-referencias-externas", color: "#ef5350" }
    ]
  },
  // --- AVANZADO ---
  {
    numero: "📐",
    nivel: "Paramétrico y Layouts",
    modulos: [
      { titulo: "Nivel 8: Paramétrico", desc: "Restricciones geométricas.", link: "/RoadMapCAD/autocad/08-parametrico", color: "#e53935" },
      { titulo: "Nivel 9: Layouts y Sheet Sets", desc: "Impresión profesional.", link: "/RoadMapCAD/autocad/09-layouts-y-sheet-sets", color: "#e53935" }
    ]
  },
  // --- 3D Y PROGRAMACIÓN ---
  {
    numero: "🧊",
    nivel: "3D y Automatización",
    modulos: [
      { titulo: "Nivel 10: Modelado 3D", desc: "Sólidos y Mallas.", link: "/RoadMapCAD/autocad/10-modelado-3d", color: "#880e4f" },
      { titulo: "Nivel 11: Visualización", desc: "Render y Materiales.", link: "/RoadMapCAD/autocad/11-visualizacion", color: "#880e4f" },
      { titulo: "Nivel 12: AutoLISP", desc: "Automatización con código.", link: "/RoadMapCAD/autocad/12-automatizacion-lisp", color: "#880e4f" }
    ]
  }
];

export default function TimelineAutoCAD() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      {rutaAprendizaje.map((paso, index) => (
        <div key={index} style={{ display: 'flex', gap: '20px', marginBottom: '40px', position: 'relative' }}>
          {index !== rutaAprendizaje.length - 1 && (
            <div style={{ position: 'absolute', left: '26px', top: '50px', bottom: '-50px', width: '4px', background: '#e5e7eb', zIndex: 0, borderRadius: '4px' }} />
          )}
          <div style={{ width: '55px', height: '55px', borderRadius: '50%', background: paso.modulos[0].color, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem', flexShrink: 0, zIndex: 1, border: '4px solid var(--sl-color-bg)', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
            {paso.numero}
          </div>
          <div style={{ flexGrow: 1 }}>
            <h4 style={{ margin: '0 0 15px 0', opacity: 0.8, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px' }}>{paso.nivel}</h4>
            <div style={{ display: 'grid', gridTemplateColumns: paso.modulos.length > 1 ? 'repeat(auto-fit, minmax(250px, 1fr))' : '1fr', gap: '15px' }}>
              {paso.modulos.map((modulo, i) => (
                <a key={i} href={modulo.link} style={{ textDecoration: 'none', color: 'inherit', background: 'var(--sl-color-bg-nav)', padding: '1.5rem', borderRadius: '12px', borderLeft: `5px solid ${modulo.color}`, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.2)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)'; }}>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '1.2rem' }}>{modulo.titulo}</h3>
                  <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.8, lineHeight: '1.5' }}>{modulo.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}