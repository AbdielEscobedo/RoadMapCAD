---
title: Bloque 3.3 — Buenas Prácticas
description: Estructura y gestión de archivos.
sidebar:
  order: 3
---

## 📺 Clase en Video

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
  <iframe 
    src="https://www.youtube.com/embed/TU_VIDEO_AQUI" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;" 
    allowfullscreen>
  </iframe>
</div>

---

## ⚠️ Regla de Oro: Referencias
Un archivo `.SLDASM` (Ensamble) pesa muy poco (kb) porque **no contiene las piezas**, solo contiene "rutas" hacia las piezas en tu disco duro.

> **Nunca muevas las piezas de carpeta después de crear el ensamble.** Si lo haces, al abrir el ensamble te saldrá el error de "Archivo no encontrado".

### Estrategia recomendada: Pack and Go
Si necesitas enviar el proyecto a un cliente o moverlo de PC, usa la herramienta **Pack and Go** (Archivo > Pack and Go). Esto empaqueta todo en un ZIP manteniendo los vínculos.