import React from 'react';

const rutaAprendizaje = [
  // --- BASICS (AZUL SIEMENS) ---
  {
    numero: "🚀",
    nivel: "Fundamentos NX",
    modulos: [
      { titulo: "Nivel 0: Gateway", desc: "Roles y Entorno.", link: "/RoadMapCAD/siemens-nx/00-gateway-y-entorno", color: "#0046ad" }, // Azul Siemens
      { titulo: "Nivel 1: Sketching", desc: "Direct Sketch.", link: "/RoadMapCAD/siemens-nx/01-sketching", color: "#0046ad" }
    ]
  },
  // --- MODELADO (CARMESÍ NX) ---
  {
    numero: "🧊",
    nivel: "Modelado y Sincronía",
    modulos: [
      { titulo: "Nivel 2: Modelado", desc: "Design Features.", link: "/RoadMapCAD/siemens-nx/02-modelado-solido", color: "#d9002b" }, // Carmesí
      { titulo: "Nivel 3: Synchronous", desc: "Edición sin historial.", link: "/RoadMapCAD/siemens-nx/03-synchronous-technology", color: "#d9002b" }
    ]
  },
  // --- ENSAMBLES (AZUL OSCURO) ---
  {
    numero: "⚙️",
    nivel: "Ingeniería de Detalle",
    modulos: [
      { titulo: "Nivel 4: Ensambles", desc: "WAVE Geometry.", link: "/RoadMapCAD/siemens-nx/04-ensambles", color: "#003366" }, // Azul Oscuro
      { titulo: "Nivel 5: Drafting", desc: "PMI y GD&T.", link: "/RoadMapCAD/siemens-nx/05-drafting-pmi", color: "#003366" }
    ]
  },
  // --- ESPECIALIZACIONES (CARMESÍ OSCURO) ---
  {
    numero: "💎",
    nivel: "Superficies y Chapa",
    modulos: [
      { titulo: "Nivel 6: Superficies", desc: "Clase A.", link: "/RoadMapCAD/siemens-nx/06-superficies-clase-a", color: "#b71c1c" }, // Carmesí Oscuro
      { titulo: "Nivel 7: Chapa", desc: "Aerospace Sheet Metal.", link: "/RoadMapCAD/siemens-nx/07-chapa-metalica", color: "#b71c1c" }
    ]
  },
  // --- TOOLING (AZUL INTENSO) ---
  {
    numero: "🧩",
    nivel: "Moldes y Rutas",
    modulos: [
      { titulo: "Nivel 8: Mold Wizard", desc: "Diseño de Moldes.", link: "/RoadMapCAD/siemens-nx/08-mold-wizard", color: "#1565c0" }, 
      { titulo: "Nivel 9: Routing", desc: "Tuberías y Cables.", link: "/RoadMapCAD/siemens-nx/09-routing", color: "#1565c0" }
    ]
  },
  // --- AVANZADO (CARMESÍ VIBRANTE) ---
  {
    numero: "🧠",
    nivel: "Simulación y Manufactura",
    modulos: [
      { titulo: "Nivel 10: Realize Shape", desc: "Subdivisión.", link: "/RoadMapCAD/siemens-nx/10-realize-shape", color: "#ff1744" },
      { titulo: "Nivel 11: Simulación", desc: "Nastran Solver.", link: "/RoadMapCAD/siemens-nx/11-simulacion", color: "#ff1744" },
      { titulo: "Nivel 12: CAM", desc: "Mecanizado 5 Ejes.", link: "/RoadMapCAD/siemens-nx/12-manufactura-cam", color: "#ff1744" }
    ]
  }
];

export default function TimelineNX() {
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