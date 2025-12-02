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
          href: "https://github.com"
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
      ],
    }),
    mermaid(),
    react(), // <--- 2. ACTIVA REACT AQUÍ (después de mermaid)
  ],
});