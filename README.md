# Diseño y desarrollo de una API REST para gestión de usuarios

La empresa necesita una API REST para gestionar usuarios en su plataforma. La API debe permitir la creación, lectura, actualización y eliminación de usuarios. Los usuarios tienen un nombre, email y contraseña. La API debe validar que el email no esté duplicado y que la contraseña cumpla ciertos criterios de seguridad. El sistema debe registrar cada operación en un log para auditoría.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Node.js Express |
| **Nivel** | junior-l1 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Un IDE o editor de código.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Verifica que el proyecto arranca sin errores.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Definición del modelo de usuario

**Objetivo:** Definir las propiedades y validaciones necesarias para un usuario.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Identificar las propiedades obligatorias de un usuario (nombre, email, contraseña).
- Establecer las reglas de validación para el email y la contraseña.
- Definir el formato del log de auditoría.

**Entregable:** Especificación del modelo de usuario con sus validaciones y el formato del log de auditoría.

<details>
<summary>Pistas de conocimiento</summary>

- Considera los criterios de seguridad comunes para contraseñas.
- Piensa en cómo evitar emails duplicados de manera eficiente.

</details>

### Fase 2: Implementación de las rutas CRUD

**Objetivo:** Implementar las rutas para crear, leer, actualizar y eliminar usuarios.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Crear las rutas necesarias para las operaciones CRUD.
- Aplicar las validaciones definidas en la fase anterior.
- Registrar cada operación en el log de auditoría.

**Entregable:** Rutas CRUD funcionales que aplican las validaciones y registran las operaciones en el log de auditoría.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo manejar los errores de validación.
- Piensa en la estructura de las respuestas HTTP.

</details>

### Fase 3: Pruebas y optimización

**Objetivo:** Realizar pruebas unitarias y optimizar el rendimiento de la API.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Escribir pruebas unitarias para cada ruta.
- Identificar y corregir posibles cuellos de botella en el rendimiento.
- Asegurar que la API maneje correctamente los errores y excepciones.

**Entregable:** API REST con pruebas unitarias, optimizada y capaz de manejar errores y excepciones.

<details>
<summary>Pistas de conocimiento</summary>

- Considera el uso de herramientas de testing y profiling.
- Piensa en cómo mejorar la eficiencia de las validaciones.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es un modelo de usuario y por qué es necesario en una API REST?
- **paraQueSirve**: ¿Para qué sirven las validaciones en una API REST?
- **comoSeUsa**: ¿Cómo se usan las rutas CRUD en una API REST?
- **erroresComunes**: ¿Cuáles son los errores comunes al implementar una API REST y cómo se pueden evitar?
- **queDecisionesImplica**: ¿Qué decisiones implica el diseño de una API REST robusta y eficiente?

## Criterios de Evaluacion

- Definición correcta del modelo de usuario con sus validaciones.
- Implementación funcional de las rutas CRUD.
- Registro de operaciones en el log de auditoría.
- Pruebas unitarias para cada ruta.
- Optimización del rendimiento y manejo correcto de errores y excepciones.

## Como trabajar con un asistente de IA

- **AGENTS.md** — instrucciones nativas del repo (Cursor, Codex, Copilot, Gemini, Claude Code). Abrí el proyecto y el agente las carga solo.
- **PROMPT_MEJORA.md** — el mismo prompt, para copiar y pegar en un chat (claude.ai, ChatGPT, etc.).

---

*Reto generado automaticamente por Challenge Generator - Pragma*
