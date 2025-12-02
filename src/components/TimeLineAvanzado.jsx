import React from 'react';

const rutaAprendizaje = [
  // --- FUNDAMENTOS ---
  {
    nivel: "Nivel 0: Intro y Fundamentos",
    modulos: [{ titulo: "Interfaz y Entorno", desc: "Configuración, templates y primeros pasos.", link: "/solidworks/00-intro", color: "#3b82f6" }]
  },
  {
    nivel: "Nivel 1: Sketching 2D",
    modulos: [{ titulo: "Dominio del Croquis", desc: "Relaciones geométricas, splines y fully defined.", link: "/solidworks/01-sketch", color: "#3b82f6" }]
  },
  // --- MODELADO ---
  {
    nivel: "Nivel 2: Modelado 3D Básico",
    modulos: [{ titulo: "Operaciones Sólidas", desc: "Extrusiones, revoluciones y features base.", link: "/solidworks/02-modelado-basico", color: "#10b981" }]
  },
  {
    nivel: "Nivel 3: Ensambles",
    modulos: [{ titulo: "Assembly Design", desc: "Mates, sub-ensambles y detección de colisiones.", link: "/solidworks/03-ensambles", color: "#10b981" }]
  },
  {
    nivel: "Nivel 4: Planos Técnicos",
    modulos: [{ titulo: "Drawings & GD&T", desc: "Vistas, BOMs y documentación para manufactura.", link: "/solidworks/04-planos", color: "#10b981" }]
  },
  // --- ESPECIALIZACIÓN (Aquí pongo 2 por fila para ahorrar espacio visual) ---
  {
    nivel: "Especialización A: Formas Complejas",
    modulos: [
      { titulo: "Nivel 5: Superficies", desc: "Diseño orgánico y carcasas.", link: "/solidworks/05-superficies", color: "#8b5cf6" },
      { titulo: "Nivel 9: Moldes", desc: "Núcleos, cavidades y parting lines.", link: "/solidworks/09-moldes", color: "#8b5cf6" }
    ]
  },
  {
    nivel: "Especialización B: Manufactura Metálica",
    modulos: [
      { titulo: "Nivel 6: Chapa Metálica", desc: "Plegados y desarrollo de lámina.", link: "/solidworks/06-chapa-metalica", color: "#f59e0b" },
      { titulo: "Nivel 7: Soldadura", desc: "Estructuras y perfiles (Weldments).", link: "/solidworks/07-soldadura", color: "#f59e0b" }
    ]
  },
  {
    nivel: "Visualización y Movimiento",
    modulos: [
      { titulo: "Nivel 8: Mecanismos", desc: "Motion study y gravedad.", link: "/solidworks/08-mecanismos", color: "#ec4899" },
      { titulo: "Nivel 10: Render", desc: "Visualize e iluminación.", link: "/solidworks/10-render", color: "#ec4899" }
    ]
  },
  // --- INGENIERÍA AVANZADA ---
  {
    nivel: "Ingeniería Avanzada",
    modulos: [
      { titulo: "Nivel 11: Simulación CAE", desc: "FEA estático, fatiga y térmico.", link: "/solidworks/11-simulacion", color: "#ef4444" },
      { titulo: "Nivel 12: API & Automatización", desc: "Macros, VBA y programación.", link: "/solidworks/12-api-automatizacion", color: "#ef4444" }
    ]
  },
  // --- FINAL ---
    {
    nivel: "🏆 Nivel 13: Proyectos Maestros",
    modulos: [{ titulo: "Portfolio Profesional", desc: "Drones, productos complejos y automatización.", link: "/solidworks/13-proyectos-maestros", color: "#eab308" }] // Dorado
  }
];

export default function TimelineAvanzado() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      {rutaAprendizaje.map((paso, index) => (
        <div key={index} style={{ display: 'flex', gap: '20px', marginBottom: '40px', position: 'relative' }}>
          
          {/* 1. LA LÍNEA VERTICAL CONECTORA */}
          {index !== rutaAprendizaje.length - 1 && (
            <div style={{ 
              position: 'absolute', left: '24px', top: '50px', bottom: '-50px', 
              width: '4px', background: '#e5e7eb', zIndex: 0, borderRadius: '4px'
            }} />
          )}

          {/* 2. EL CÍRCULO CON EL NÚMERO */}
          <div style={{ 
            width: '50px', height: '50px', borderRadius: '50%', 
            background: 'var(--sl-color-text-accent)', // Usa el color de acento de tu tema
            color: 'var(--sl-color-text-invert)', 
            fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.4rem', flexShrink: 0, zIndex: 1, border: '4px solid var(--sl-color-bg)'
          }}>
            {index + 1}
          </div>

          {/* 3. EL CONTENEDOR DE CONTENIDO */}
          <div style={{ flexGrow: 1 }}>
            {/* Título del Nivel */}
            <h4 style={{ margin: '0 0 15px 0', opacity: 0.8, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px' }}>
              {paso.nivel}
            </h4>

            {/* Grid inteligente: Si hay 1 item usa 1 columna, si hay 2 usa 2 */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: paso.modulos.length > 1 ? 'repeat(auto-fit, minmax(250px, 1fr))' : '1fr', 
              gap: '15px' 
            }}>
              
              {paso.modulos.map((modulo, i) => (
                <a key={i} href={modulo.link} style={{ 
                  textDecoration: 'none', color: 'inherit',
                  background: 'var(--sl-color-bg-nav)', 
                  padding: '1.5rem', borderRadius: '12px', 
                  borderLeft: `5px solid ${modulo.color}`, // Borde de color a la izquierda
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                }}
                >
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '1.3rem' }}>{modulo.titulo}</h3>
                  <p style={{ margin: 0, fontSize: '0.95rem', opacity: 0.8, lineHeight: '1.5' }}>{modulo.desc}</p>
                </a>
              ))}

            </div>
          </div>
        </div>
      ))}
    </div>
  );
}