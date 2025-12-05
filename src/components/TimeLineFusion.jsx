import React from 'react';

const rutaAprendizaje = [
  // --- CLOUD & SKETCH ---
  {
    numero: "☁️",
    nivel: "La Nube y el Croquis",
    modulos: [
      { titulo: "Nivel 0: Cloud", desc: "Proyectos y versiones.", link: "/RoadMapCAD/fusion-360/00-cloud-y-gestion", color: "#ff9800" }, // Naranja Claro
      { titulo: "Nivel 1: Sketching", desc: "Restricciones.", link: "/RoadMapCAD/fusion-360/01-sketching", color: "#ff9800" }
    ]
  },
  // --- MODELADO ---
  {
    numero: "🧊",
    nivel: "Modelado Híbrido",
    modulos: [
      { titulo: "Nivel 2: Sólidos", desc: "Paramétrico.", link: "/RoadMapCAD/fusion-360/02-modelado-solido", color: "#f57c00" }, // Naranja Medio
      { titulo: "Nivel 3: Superficies", desc: "Patch y Stitch.", link: "/RoadMapCAD/fusion-360/03-modelado-de-superficies", color: "#f57c00" },
      { titulo: "Nivel 4: T-Splines", desc: "Forma libre (Sculpt).", link: "/RoadMapCAD/fusion-360/04-forma-libre-t-splines", color: "#f57c00" }
    ]
  },
  // --- ENSAMBLES Y MANUFACTURA ---
  {
    numero: "⚙️",
    nivel: "Ensambles y Chapa",
    modulos: [
      { titulo: "Nivel 5: Ensambles", desc: "Joints y Motion.", link: "/RoadMapCAD/fusion-360/05-ensambles-y-joints", color: "#ef6c00" }, // Naranja Oscuro
      { titulo: "Nivel 6: Chapa", desc: "Sheet Metal.", link: "/RoadMapCAD/fusion-360/06-chapa-metalica", color: "#ef6c00" },
      { titulo: "Nivel 7: Planos", desc: "Documentación 2D.", link: "/RoadMapCAD/fusion-360/07-planos-drawings", color: "#ef6c00" }
    ]
  },
  // --- VISUAL Y SIMULACIÓN ---
  {
    numero: "🔬",
    nivel: "Validación y Render",
    modulos: [
      { titulo: "Nivel 8: Render", desc: "Imágenes realistas.", link: "/RoadMapCAD/fusion-360/08-render-y-animacion", color: "#e65100" }, // Naranja Intenso
      { titulo: "Nivel 9: Simulación", desc: "FEA y Térmico.", link: "/RoadMapCAD/fusion-360/09-simulacion-cae", color: "#e65100" },
      { titulo: "Nivel 10: Generativo", desc: "Diseño con IA.", link: "/RoadMapCAD/fusion-360/10-diseno-generativo", color: "#e65100" }
    ]
  },
  // --- ECAD Y CAM ---
  {
    numero: "⚡",
    nivel: "Electrónica y CAM",
    modulos: [
      { titulo: "Nivel 11: Electrónica", desc: "PCB y Esquemáticos.", link: "/RoadMapCAD/fusion-360/11-electronica-ecad", color: "#bf360c" }, // Rojo/Naranja quemado
      { titulo: "Nivel 12: CAM", desc: "CNC y G-Code.", link: "/RoadMapCAD/fusion-360/12-manufactura-cam", color: "#bf360c" }
    ]
  }
];

export default function TimelineFusion() {
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