import React from 'react';

const rutaAprendizaje = [
  // --- CLOUD ---
  {
    numero: "☁️",
    nivel: "Full Cloud",
    modulos: [
      { titulo: "Nivel 0: Documentos", desc: "Historial y versiones.", link: "/RoadMapCAD/onshape/00-documentos-en-la-nube", color: "#4caf50" }, // Verde Base
      { titulo: "Nivel 1: Sketching", desc: "Variables globales.", link: "/RoadMapCAD/onshape/01-sketching", color: "#4caf50" }
    ]
  },
  // --- PART STUDIOS ---
  {
    numero: "🧊",
    nivel: "Part Studios",
    modulos: [
      { titulo: "Nivel 2: Sólidos", desc: "Diseño Multi-cuerpo.", link: "/RoadMapCAD/onshape/02-part-studios-solidos", color: "#43a047" }, // Verde Medio
      { titulo: "Nivel 3: Superficies", desc: "Curvas 3D y Loft.", link: "/RoadMapCAD/onshape/03-part-studios-superficies", color: "#43a047" }
    ]
  },
  // --- ENSAMBLES ---
  {
    numero: "🔗",
    nivel: "Conectores y Chapa",
    modulos: [
      { titulo: "Nivel 4: Ensambles", desc: "Mate Connectors únicos.", link: "/RoadMapCAD/onshape/04-ensambles-mates", color: "#388e3c" }, // Verde Oscuro
      { titulo: "Nivel 5: Chapa", desc: "Doblado simultáneo.", link: "/RoadMapCAD/onshape/05-chapa-metalica", color: "#388e3c" },
      { titulo: "Nivel 6: Planos", desc: "Drawings en nube.", link: "/RoadMapCAD/onshape/06-planos-drawings", color: "#388e3c" }
    ]
  },
  // --- AVANZADO ---
  {
    numero: "🌈",
    nivel: "Análisis y Render",
    modulos: [
      { titulo: "Nivel 7: Simulación", desc: "Visual Loads.", link: "/RoadMapCAD/onshape/07-simulacion-integrada", color: "#2e7d32" }, // Verde Forest
      { titulo: "Nivel 8: Render", desc: "Render Studio.", link: "/RoadMapCAD/onshape/08-render-studio", color: "#2e7d32" }
    ]
  },
  // --- ENTERPRISE ---
  {
    numero: "🏢",
    nivel: "Empresa y Código",
    modulos: [
      { titulo: "Nivel 9: PCB Studio", desc: "ECAD-MCAD.", link: "/RoadMapCAD/onshape/09-pcb-studio-ecad", color: "#1b5e20" }, // Verde Muy Oscuro
      { titulo: "Nivel 10: Enterprise", desc: "Gestión y Aprobaciones.", link: "/RoadMapCAD/onshape/10-colaboracion-enterprise", color: "#1b5e20" },
      { titulo: "Nivel 11: FeatureScript", desc: "Código abierto FS.", link: "/RoadMapCAD/onshape/11-featurescript-codigo", color: "#1b5e20" }
    ]
  }
];

export default function TimelineOnshape() {
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