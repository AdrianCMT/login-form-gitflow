# IETMM Pro - Login Form

Interfaz de autenticación para una plataforma educativa, desarrollada como ejercicio práctico aplicando el flujo de trabajo **GitFlow**.  
El objetivo principal es implementar un formulario de inicio de sesión con diseño adaptable y estructura modular de recursos.

## Estructura del Proyecto
```
login-form-gitflow-3/
│
├── index.html
├── README.md
├── script.js
├── styles.css
└── assets/
    ├── fondo.jpg
    └── escudo.gif
```

## 🛠 Funcionalidad
- **Vista dividida 50/50**
  - Lado izquierdo: imagen institucional con capa de información.
  - Lado derecho: formulario de credenciales.
- **Responsive Design**: soporte para pantallas móviles, tablets y escritorio.
- **Validación en cliente**: comprobación básica de campos requeridos antes del envío.

## 🧩 Historias de Usuario Implementadas

### HU0001 – Base del formulario de login
- Pantalla dividida 50/50 entre información institucional y formulario.
- Formulario con campos de usuario y contraseña.
- Responsive design.

### HU0002 – Panel informativo
- Panel izquierdo con información del sistema EduSystem Pro.
- Animaciones de burbujas de fondo.
- Estadísticas institucionales (estudiantes, profesores, eficiencia).

### HU0003 – Datos del sistema
- Información institucional sobre funcionalidades del sistema educativo.
- Diseño limpio y legible con iconografía profesional.
- Lista de características del sistema.

## Tecnologías Usadas
- **HTML5**
- **CSS3**
- **JavaScript**
- **FontAwesome 6.5.2**

## Metodología de Trabajo
Se siguió el flujo de trabajo GitFlow con las siguientes ramas:

- `main`: rama principal protegida.
- `develop`: rama base para integración.
- `feature/HU000*-*`: ramas por cada Historia de Usuario.
- `release/`: rama usada para preparar la versión final y el README.

## Desarrollado por
**Adrian Morales**