import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';
import react from '@astrojs/react'; // <--- 1. IMPORTA REACT AQUÍ

// https://astro.build/config
export default defineConfig({

site: 'https://AbdielEscobedo.github.io',
base: '/RoadMapCAD', 

  integrations: [
    starlight({
      title: 'CAD con Abdiel',
      social:  [
        {
          label: "GitHub",
          icon: "github",
          href: "https://abdielescobedo.github.io/RoadMapCAD/"
        },
        {
        label: "Youtube",
          icon: "youtube",
          href: 'https://www.youtube.com/@diseñandoconabdiel'
        },
        {
        label: "Linkedin",
          icon: "linkedin",
          href: "www.linkedin.com/in/abdiel-escobedo"
        }
      ],
      sidebar: [
        {
          label: '🏠 MAPA GENERAL',
          items: [
            { label: 'Ruta de Aprendizaje', link: '/solidworks/ruta' },
          ],
        },
        // --- FUNDAMENTOS ---
        {
          label: 'Nivel 0: Introducción',
          collapsed: true, // Empiezan cerrados para no saturar
          autogenerate: { directory: 'solidworks/00-intro' },
        },
        {
          label: 'Nivel 1: Sketching 2D',
          collapsed: true,
          autogenerate: { directory: 'solidworks/01-sketch' },
        },
        {
          label: 'Nivel 2: Modelado 3D',
          collapsed: true,
          autogenerate: { directory: 'solidworks/02-modelado-basico' },
        },
        {
          label: 'Nivel 3: Ensambles',
          collapsed: true,
          autogenerate: { directory: 'solidworks/03-ensambles' },
        },
        {
          label: 'Nivel 4: Planos Técnicos',
          collapsed: true,
          autogenerate: { directory: 'solidworks/04-planos' },
        },
        // --- ESPECIALIZACIÓN ---
        {
          label: 'Nivel 5: Superficies',
          collapsed: true,
          autogenerate: { directory: 'solidworks/05-superficies' },
        },
        {
          label: 'Nivel 6: Chapa Metálica',
          collapsed: true,
          autogenerate: { directory: 'solidworks/06-chapa-metalica' },
        },
        {
          label: 'Nivel 7: Soldadura',
          collapsed: true,
          autogenerate: { directory: 'solidworks/07-soldadura' },
        },
        {
          label: 'Nivel 8: Mecanismos',
          collapsed: true,
          autogenerate: { directory: 'solidworks/08-mecanismos' },
        },
        {
          label: 'Nivel 9: Moldes',
          collapsed: true,
          autogenerate: { directory: 'solidworks/09-moldes' },
        },
        // --- EXPERTO ---
        {
          label: 'Nivel 10: Render',
          collapsed: true,
          autogenerate: { directory: 'solidworks/10-render' },
        },
        {
          label: 'Nivel 11: Simulación',
          collapsed: true,
          autogenerate: { directory: 'solidworks/11-simulacion' },
        },
        {
          label: 'Nivel 12: API & Code',
          collapsed: true,
          autogenerate: { directory: 'solidworks/12-api-automatizacion' },
        },
        {
          label: '🏆 PROYECTOS MAESTROS',
          collapsed: false, // Este lo dejamos abierto para motivar
          autogenerate: { directory: 'solidworks/13-proyectos-maestros' },
        },

        // ============================================================
        // 📘 AUTOCAD (12 Niveles)
        // ============================================================
        {
          label: '📘 AutoCAD',
          collapsed: true, // El grupo principal empieza cerrado
          items: [
            { label: 'Mapa de Ruta', link: '/autocad/ruta' },
            { label: 'Nivel 0: Configuración', collapsed: true, autogenerate: { directory: 'autocad/00-configuracion-pro' } },
            { label: 'Nivel 1: Dibujo', collapsed: true, autogenerate: { directory: 'autocad/01-dibujo-de-precision' } },
            { label: 'Nivel 2: Edición', collapsed: true, autogenerate: { directory: 'autocad/02-edicion-y-modificacion' } },
            { label: 'Nivel 3: Capas', collapsed: true, autogenerate: { directory: 'autocad/03-capas-y-normas' } },
            { label: 'Nivel 4: Anotación', collapsed: true, autogenerate: { directory: 'autocad/04-anotacion-avanzada' } },
            { label: 'Nivel 5: Bloques', collapsed: true, autogenerate: { directory: 'autocad/05-bloques-dinamicos' } },
            { label: 'Nivel 6: Datos', collapsed: true, autogenerate: { directory: 'autocad/06-atributos-y-datos' } },
            { label: 'Nivel 7: XREF', collapsed: true, autogenerate: { directory: 'autocad/07-referencias-externas' } },
            { label: 'Nivel 8: Paramétrico', collapsed: true, autogenerate: { directory: 'autocad/08-parametrico' } },
            { label: 'Nivel 9: Layouts', collapsed: true, autogenerate: { directory: 'autocad/09-layouts-y-sheet-sets' } },
            { label: 'Nivel 10: Modelado 3D', collapsed: true, autogenerate: { directory: 'autocad/10-modelado-3d' } },
            { label: 'Nivel 11: Visualización', collapsed: true, autogenerate: { directory: 'autocad/11-visualizacion' } },
            { label: 'Nivel 12: LISP', collapsed: true, autogenerate: { directory: 'autocad/12-automatizacion-lisp' } },
          ]
        },

        // ============================================================
        // 📙 SIEMENS NX (13 Niveles)
        // ============================================================
        {
          label: '📙 Siemens NX',
          collapsed: true,
          items: [
            { label: 'Mapa de Ruta', link: '/siemens-nx/ruta' },
            { label: 'Nivel 0: Gateway', collapsed: true, autogenerate: { directory: 'siemens-nx/00-gateway-y-entorno' } },
            { label: 'Nivel 1: Sketching', collapsed: true, autogenerate: { directory: 'siemens-nx/01-sketching' } },
            { label: 'Nivel 2: Modelado', collapsed: true, autogenerate: { directory: 'siemens-nx/02-modelado-solido' } },
            { label: 'Nivel 3: Synchronous', collapsed: true, autogenerate: { directory: 'siemens-nx/03-synchronous-technology' } },
            { label: 'Nivel 4: Ensambles', collapsed: true, autogenerate: { directory: 'siemens-nx/04-ensambles' } },
            { label: 'Nivel 5: Drafting', collapsed: true, autogenerate: { directory: 'siemens-nx/05-drafting-pmi' } },
            { label: 'Nivel 6: Superficies', collapsed: true, autogenerate: { directory: 'siemens-nx/06-superficies-clase-a' } },
            { label: 'Nivel 7: Chapa', collapsed: true, autogenerate: { directory: 'siemens-nx/07-chapa-metalica' } },
            { label: 'Nivel 8: Mold Wizard', collapsed: true, autogenerate: { directory: 'siemens-nx/08-mold-wizard' } },
            { label: 'Nivel 9: Routing', collapsed: true, autogenerate: { directory: 'siemens-nx/09-routing' } },
            { label: 'Nivel 10: Realize Shape', collapsed: true, autogenerate: { directory: 'siemens-nx/10-realize-shape' } },
            { label: 'Nivel 11: Simulación', collapsed: true, autogenerate: { directory: 'siemens-nx/11-simulacion' } },
            { label: 'Nivel 12: CAM', collapsed: true, autogenerate: { directory: 'siemens-nx/12-manufactura-cam' } },
          ]
        },

        // ============================================================
        // 🟣 FUSION 360 (13 Niveles)
        // ============================================================
        {
          label: '🟣 Fusion 360',
          collapsed: true,
          items: [
            { label: 'Mapa de Ruta', link: '/fusion-360/ruta' },
            { label: 'Nivel 0: Cloud', collapsed: true, autogenerate: { directory: 'fusion-360/00-cloud-y-gestion' } },
            { label: 'Nivel 1: Sketching', collapsed: true, autogenerate: { directory: 'fusion-360/01-sketching' } },
            { label: 'Nivel 2: Modelado', collapsed: true, autogenerate: { directory: 'fusion-360/02-modelado-solido' } },
            { label: 'Nivel 3: Superficies', collapsed: true, autogenerate: { directory: 'fusion-360/03-modelado-de-superficies' } },
            { label: 'Nivel 4: T-Splines', collapsed: true, autogenerate: { directory: 'fusion-360/04-forma-libre-t-splines' } },
            { label: 'Nivel 5: Ensambles', collapsed: true, autogenerate: { directory: 'fusion-360/05-ensambles-y-joints' } },
            { label: 'Nivel 6: Chapa', collapsed: true, autogenerate: { directory: 'fusion-360/06-chapa-metalica' } },
            { label: 'Nivel 7: Planos', collapsed: true, autogenerate: { directory: 'fusion-360/07-planos-drawings' } },
            { label: 'Nivel 8: Render', collapsed: true, autogenerate: { directory: 'fusion-360/08-render-y-animacion' } },
            { label: 'Nivel 9: Simulación', collapsed: true, autogenerate: { directory: 'fusion-360/09-simulacion-cae' } },
            { label: 'Nivel 10: Generativo', collapsed: true, autogenerate: { directory: 'fusion-360/10-diseno-generativo' } },
            { label: 'Nivel 11: Electrónica', collapsed: true, autogenerate: { directory: 'fusion-360/11-electronica-ecad' } },
            { label: 'Nivel 12: CAM', collapsed: true, autogenerate: { directory: 'fusion-360/12-manufactura-cam' } },
          ]
        },

        // ============================================================
        // 🔵 ONSHAPE (12 Niveles)
        // ============================================================
        {
          label: '🔵 Onshape',
          collapsed: true,
          items: [
            { label: 'Mapa de Ruta', link: '/onshape/ruta' },
            { label: 'Nivel 0: Intro', collapsed: true, autogenerate: { directory: 'onshape/00-documentos-en-la-nube' } },
            { label: 'Nivel 1: Sketching', collapsed: true, autogenerate: { directory: 'onshape/01-sketching' } },
            { label: 'Nivel 2: Part Studios', collapsed: true, autogenerate: { directory: 'onshape/02-part-studios-solidos' } },
            { label: 'Nivel 3: Superficies', collapsed: true, autogenerate: { directory: 'onshape/03-part-studios-superficies' } },
            { label: 'Nivel 4: Ensambles', collapsed: true, autogenerate: { directory: 'onshape/04-ensambles-mates' } },
            { label: 'Nivel 5: Chapa', collapsed: true, autogenerate: { directory: 'onshape/05-chapa-metalica' } },
            { label: 'Nivel 6: Planos', collapsed: true, autogenerate: { directory: 'onshape/06-planos-drawings' } },
            { label: 'Nivel 7: Simulación', collapsed: true, autogenerate: { directory: 'onshape/07-simulacion-integrada' } },
            { label: 'Nivel 8: Render', collapsed: true, autogenerate: { directory: 'onshape/08-render-studio' } },
            { label: 'Nivel 9: PCB Studio', collapsed: true, autogenerate: { directory: 'onshape/09-pcb-studio-ecad' } },
            { label: 'Nivel 10: Enterprise', collapsed: true, autogenerate: { directory: 'onshape/10-colaboracion-enterprise' } },
            { label: 'Nivel 11: FeatureScript', collapsed: true, autogenerate: { directory: 'onshape/11-featurescript-codigo' } },
          ]
        },

      ],
    }),
    mermaid(),
    react(), // <--- 2. ACTIVA REACT AQUÍ (después de mermaid)
  ],
});