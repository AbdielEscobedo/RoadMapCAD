---
title: Bloque 11.1 — Análisis Estático
description: La base del FEA.
sidebar:
  order: 1
---

## 📺 Temas del Video
1.  **Pre-Proceso:** Definir Material (Elastic Modulus), Sujeciones (Fixtures) y Cargas (Fuerza/Presión/Torque).
2.  **Mallado (Meshing):**
    *   Malla Standard vs Curvature-based.
    *   **Mesh Control:** Refinar la malla solo en los radios donde hay concentración de esfuerzos (Singularidades).
3.  **Post-Proceso:**
    *   **Tensión de Von Mises:** ¿Cuándo usarla? (Materiales dúctiles).
    *   **Factor de Seguridad (FOS):** El gráfico más importante. Todo lo que esté debajo de 1 falla.

:::tip[Simplifica antes de Simular]
Utiliza la herramienta **Defeature**. Elimina textos grabados, redondeos cosméticos y roscas cosméticas. Estos detalles disparan el tiempo de cálculo y generan errores en la malla sin aportar valor.
:::