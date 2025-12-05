import fs from 'fs';
import path from 'path';

// --- CONFIGURACIÓN ---
// CAMBIA ESTO: 'autocad', 'siemens-nx', 'fusion-360', 'onshape'
const SOFTWARE = 'onshape'; 

// URL base para GitHub Pages
const BASE_URL = '/RoadMapCAD';

// --- TEMARIOS MASTER CLASS (TODOS LOS SOFTWARES) ---
const CURSOS = {
  // === AUTOCAD (12 Niveles) ===
  'autocad': [
    { title: "Nivel 0 — Configuración Pro", blocks: ["Espacios de trabajo (Workspaces)", "Coordenadas (UCS vs WCS)", "Gestión de Plantillas (DWT)"] },
    { title: "Nivel 1 — Dibujo de Precisión", blocks: ["Polilíneas y Splines", "Object Snaps y Tracking", "Selección avanzada (Lasso/Fence)"] },
    { title: "Nivel 2 — Edición y Modificación", blocks: ["Arrays (Rectangular/Polar/Path)", "Stretch y Lengthen", "Align y Join"] },
    { title: "Nivel 3 — Capas y Normas", blocks: ["Layer States Manager", "Filtros de Capas", "Layer Walk y Merge"] },
    { title: "Nivel 4 — Anotación Avanzada", blocks: ["Estilos de Texto y Cota", "Multileaders (Directrices)", "Tablas vinculadas a Excel"] },
    { title: "Nivel 5 — Bloques Dinámicos", blocks: ["Creación de Bloques", "Parámetros de Visibilidad", "Actions (Stretch/Flip/Rotate)"] },
    { title: "Nivel 6 — Atributos y Datos", blocks: ["Definición de Atributos", "Extracción de Datos a Tablas", "Campos (Fields) Automáticos"] },
    { title: "Nivel 7 — Referencias Externas", blocks: ["XREF (Planos superpuestos)", "Imágenes y PDF Underlay", "eTransmit (Empaquetado)"] },
    { title: "Nivel 8 — Paramétrico", blocks: ["Restricciones Geométricas", "Restricciones Dimensionales", "Formula Manager"] },
    { title: "Nivel 9 — Layouts y Sheet Sets", blocks: ["Viewports Poligonales", "Escalas Anotativas", "Sheet Set Manager (Gestor de Proyectos)"] },
    { title: "Nivel 10 — Modelado 3D", blocks: ["Espacio de trabajo 3D", "Sólidos Primitivos y Extrusiones", "Operaciones Booleanas"] },
    { title: "Nivel 11 — Visualización", blocks: ["Materiales y Luces", "Cámaras y Recorridos", "Renderizado Local vs Cloud"] },
    { title: "Nivel 12 — Automatización (LISP)", blocks: ["Cargar aplicaciones (APPLOAD)", "Scripts (.SCR)", "Intro a AutoLISP básico"] },
  ],

  // === SIEMENS NX (13 Niveles) ===
  'siemens-nx': [
    { title: "Nivel 0 — Gateway y Entorno", blocks: ["Roles y UI Personalizada", "Sistema de Coordenadas (WCS)", "Estructura de Partes (.prt)"] },
    { title: "Nivel 1 — Sketching", blocks: ["Direct Sketch vs Task Environment", "Restricciones Geométricas", "Fórmulas y Expresiones"] },
    { title: "Nivel 2 — Modelado Sólido", blocks: ["Design Features (Extrude/Revolve)", "Detail Features (Blend/Chamfer)", "Operaciones Booleanas"] },
    { title: "Nivel 3 — Synchronous Technology", blocks: ["Move/Pull Face", "Relaciones Síncronas", "Edición de STEPs importados (La joya de NX)"] },
    { title: "Nivel 4 — Ensambles", blocks: ["Assembly Constraints", "Move Component", "WAVE Geometry Linker (Diseño Top-Down)"] },
    { title: "Nivel 5 — Drafting (PMI)", blocks: ["Vistas Base y Proyectadas", "PMI (Product Manufacturing Info)", "GD&T 3D"] },
    { title: "Nivel 6 — Superficies Clase A", blocks: ["Through Curves y Mesh Surface", "Swept y Variational Sweep", "Análisis de Curvatura (Zebra)"] },
    { title: "Nivel 7 — Chapa Metálica", blocks: ["Tab y Flange", "Aerospace Sheet Metal", "Flat Pattern y DXF"] },
    { title: "Nivel 8 — Mold Wizard", blocks: ["Análisis de Desmoldeo", "Parting Lines y Surfaces", "Librerías de Moldes y Portamoldes"] },
    { title: "Nivel 9 — Routing", blocks: ["Rutas Mecánicas (Tuberías)", "Rutas Eléctricas (Arneses)", "Listas de Conexiones"] },
    { title: "Nivel 10 — Realize Shape", blocks: ["Modelado por Subdivisión", "Jaulas y Transformación", "Conversión a NURBS"] },
    { title: "Nivel 11 — Simulación", blocks: ["Motion Simulation (Cinemática)", "Pre/Post (FEM Básico)", "Nastran Solver"] },
    { title: "Nivel 12 — Manufactura (CAM)", blocks: ["Planar Milling", "Contour Milling (3 a 5 Ejes)", "Verificación y Post-Procesado"] },
  ],

  // === FUSION 360 y ONSHAPE (Ya los tenías, los dejo aquí para que el script esté completo) ===
  'fusion-360': [
    { title: "Nivel 0 — Cloud y Gestión", blocks: ["Data Panel y Proyectos", "Interfaz y Preferencias", "Control de Versiones"] },
    { title: "Nivel 1 — Sketching", blocks: ["Líneas y Restricciones", "Dimensiones y Parámetros", "Splines"] },
    { title: "Nivel 2 — Modelado Sólido", blocks: ["Extrude, Revolve y Sweep", "Fillet, Chamfer y Shell", "Hole y Thread"] },
    { title: "Nivel 3 — Superficies", blocks: ["Patch y Stitch", "Loft con Guías", "Reparación"] },
    { title: "Nivel 4 — T-Splines", blocks: ["Entorno Sculpt", "Edit Form", "Bridge y Weld"] },
    { title: "Nivel 5 — Ensambles", blocks: ["Componentes", "Joints vs Mates", "Motion Link"] },
    { title: "Nivel 6 — Chapa Metálica", blocks: ["Flange y Bend", "Reglas de Chapa", "Flat Pattern"] },
    { title: "Nivel 7 — Planos", blocks: ["Vistas Base", "BOM", "GD&T"] },
    { title: "Nivel 8 — Render", blocks: ["Apariencias", "Escena", "Despiece"] },
    { title: "Nivel 9 — Simulación", blocks: ["Estática", "Térmica", "Optimización"] },
    { title: "Nivel 10 — Generativo", blocks: ["Preserve Geometry", "Cargas", "Resultados IA"] },
    { title: "Nivel 11 — Electrónica", blocks: ["Esquemáticos", "PCB 2D", "PCB 3D"] },
    { title: "Nivel 12 — CAM", blocks: ["Setup", "Estrategias 2D/3D", "G-Code"] },
  ],
  'onshape': [
    { title: "Nivel 0 — Cloud", blocks: ["Dashboard", "Historial y Versiones", "Part Studios"] },
    { title: "Nivel 1 — Sketching", blocks: ["Herramientas", "Variables Globales", "Constraints"] },
    { title: "Nivel 2 — Part Studios", blocks: ["Multi-body", "Extrude/Revolve", "Booleanas"] },
    { title: "Nivel 3 — Superficies", blocks: ["Curvas 3D", "Loft y Fill", "Booleanas mixtas"] },
    { title: "Nivel 4 — Ensambles", blocks: ["Mate Connectors", "Revolute/Slider", "Relaciones"] },
    { title: "Nivel 5 — Chapa", blocks: ["Convert to Sheet Metal", "Vistas simultáneas", "Tablas"] },
    { title: "Nivel 6 — Planos", blocks: ["Formatos", "Vistas", "BOM interactiva"] },
    { title: "Nivel 7 — Simulación", blocks: ["Análisis Estático", "Visual Loads", "Resultados"] },
    { title: "Nivel 8 — Render", blocks: ["Materiales", "Entornos", "Cloud Render"] },
    { title: "Nivel 9 — PCB Studio", blocks: ["Importar IDF", "Mapeo", "Contexto mecánico"] },
    { title: "Nivel 10 — Enterprise", blocks: ["Branching", "Release Management", "Tareas"] },
    { title: "Nivel 11 — FeatureScript", blocks: ["Intro FS", "Operación personalizada", "Librerías"] },
  ]
};

// --- LÓGICA DEL GENERADOR ---
if (!CURSOS[SOFTWARE]) {
  console.error(`❌ Error: El software '${SOFTWARE}' no existe en la lista.`);
  process.exit(1);
}

const baseDir = path.join(process.cwd(), 'src/content/docs', SOFTWARE);

if (fs.existsSync(baseDir)) {
  console.log(`🗑️  Limpiando carpeta anterior de ${SOFTWARE}...`);
  fs.rmSync(baseDir, { recursive: true, force: true });
}

fs.mkdirSync(baseDir, { recursive: true });

console.log(`🚀 Generando curso MASTER CLASS de ${SOFTWARE.toUpperCase()}...`);

CURSOS[SOFTWARE].forEach((level, index) => {
  const folderName = `${String(index).padStart(2, '0')}-${level.title.split('—')[1].trim().toLowerCase().replace(/ /g, '-').normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`;
  const levelPath = path.join(baseDir, folderName);
  
  if (!fs.existsSync(levelPath)) fs.mkdirSync(levelPath, { recursive: true });

  const indexContent = `---
title: ${level.title}
description: Módulo ${index} de ${SOFTWARE.toUpperCase()}.
sidebar:
  order: ${index}
  label: Introducción
---
import { LinkCard, CardGrid } from '@astrojs/starlight/components';

## Contenido del Nivel

<CardGrid>
${level.blocks.map((block, i) => `  <LinkCard title="Bloque ${index}.${i + 1} — ${block}" href="${BASE_URL}/${SOFTWARE}/${folderName}/bloque-${i + 1}" />`).join('\n')}
</CardGrid>

---

:::note[Progreso]
Nivel ${index} de ${CURSOS[SOFTWARE].length - 1}. ¡Sigue avanzando!
:::
`;
  fs.writeFileSync(path.join(levelPath, 'index.mdx'), indexContent);

  level.blocks.forEach((blockName, i) => {
    const blockContent = `---
title: Bloque ${index}.${i + 1} — ${blockName}
description: Lección práctica de ${SOFTWARE}.
sidebar:
  order: ${i + 1}
---
## 📺 Clase en Video

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
  <iframe 
    src="https://www.youtube.com/embed/TU_ID_AQUI" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;" 
    allowfullscreen>
  </iframe>
</div>

---

## 📝 Resumen
Contenido pendiente para **${blockName}**.
`;
    fs.writeFileSync(path.join(levelPath, `bloque-${i + 1}.md`), blockContent);
  });

  console.log(`✅ Creado: ${level.title}`);
});

console.log(`✨ ¡Listo! Revisa src/content/docs/${SOFTWARE}`);