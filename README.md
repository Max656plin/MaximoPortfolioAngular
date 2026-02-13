
# Mi Portfolio en Angular

Este proyecto es un portfolio profesional desarrollado con Angular y Bootstrap 5. Muestra mis proyectos, habilidades, y permite el contacto directo mediante un formulario. El diseño es completamente responsive y adaptable a modo claro/oscuro.

## 1. Estructura de componentes y rutas

La aplicación está organizada en varios componentes principales:
- **Home**: Página de presentación, habilidades y tecnologías.
- **Portfolio**: Muestra los proyectos en tarjetas reutilizables.
- **Contact**: Formulario de contacto con validación.
- **Navbar**: Barra de navegación fija, con cambio de tema y enlaces a las rutas.
- **Footer**: Pie de página siempre oscuro, con enlaces rápidos y redes sociales.
- **ProjectCard**: Componente reutilizable para mostrar información de cada proyecto.

Las rutas están configuradas en el módulo de enrutamiento (`app-routing.module.ts`):
- `/` → Home
- `/portfolio` → Portfolio
- `/contact` → Contact

La navegación se realiza mediante el uso de `<router-outlet>` en el template principal y `routerLink` en el navbar. Ejemplo:

```html
<nav>
	<a routerLink="/">Inicio</a>
	<a routerLink="/portfolio">Portfolio</a>
	<a routerLink="/contact">Contacto</a>
</nav>
<router-outlet></router-outlet>
```

## 2. Personalización de Bootstrap

Bootstrap 5.3 está integrado globalmente vía npm (`bootstrap` y `@popperjs/core`). Los estilos se cargan en el archivo `angular.json` y se aplican a toda la app.

- Los estilos personalizados se encuentran en `src/styles.scss` y en los archivos SCSS de cada componente (por ejemplo, `navbar.component.scss`).
- No se importa Bootstrap en los SCSS de componentes; solo se usan clases de utilidad de Bootstrap en los HTML.
- El diseño es responsive y se adapta a móvil, tablet y escritorio gracias a las clases de Bootstrap.
- Se han sobrescrito estilos de Bootstrap en los SCSS para personalizar el aspecto de algunos componentes, manteniendo la coherencia visual.

## 3. Uso de servicios y almacenamiento web

La aplicación implementa varios servicios para gestionar datos y preferencias:
- **ThemeService**: Permite cambiar entre tema claro y oscuro, guardando la preferencia en localStorage. El tema se mantiene al recargar la página.
- **PortfolioService**: Proporciona la lista de proyectos, simulada o almacenada en localStorage para persistencia.
- **StorageService**: Abstrae el acceso a localStorage/sessionStorage para guardar datos del usuario.

Buenas prácticas:
- Manejo de errores con try/catch al leer/escribir en localStorage.
- No se almacenan datos sensibles ni información privada.
- Preferencia por métodos tipados y validaciones.

## 4. Decisiones de diseño en TypeScript

Para modelar los datos y asegurar la robustez del código, se han definido:
- **Interfaces**: `Project`, `ContactMessage`, `Theme`, `UserPreferences` para tipar correctamente los datos.
- **Enums**: `Theme` (Light, Dark) para controlar el modo de la aplicación.
- Se evita el uso de `any` en toda la aplicación, tipando variables, parámetros y retornos de funciones.
- Manejo de excepciones en operaciones críticas, como acceso a localStorage o transformación de datos.

Ejemplo de interface:
```typescript
export interface Project {
	id: number;
	title: string;
	description: string;
	technologies: string[];
	imageUrl: string;
}
```

Si tienes dudas o quieres contribuir, puedes abrir un issue o enviar un pull request.



