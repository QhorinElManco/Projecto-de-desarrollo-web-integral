# Proyecto Frontend con React + TypeScript + Vite

Este proyecto está construido utilizando tecnologías modernas de desarrollo web.

## Tecnologías Principales

- React 19.1.0
- TypeScript 5.8.3
- Vite 7.0.0

## Bibliotecas y Dependencias Principales

- **Gestión de Estado**
  - Zustand 5.0.6

- **Enrutamiento**
  - React Router DOM 7.6.3

- **Formularios y UI**
  - @mantine/form 8.1.3
  - @tabler/icons-react 3.34.0
  - Swiper 11.2.10
  - React Toastify 11.0.5

- **Gestión de Datos**
  - @tanstack/react-query 5.81.5
  - @tanstack/react-query-devtools 5.81.5

- **Gestión de Cookies**
  - js-cookie 3.0.5

## Herramientas de Desarrollo

- ESLint 9.29.0 con plugins para React
- TypeScript ESLint 8.34.1
- PNPM como gestor de paquetes

## Configuración Inicial

1. Instalar dependencias:
```bash
pnpm install
``` 

2. Iniciar el servidor de desarrollo:
```bash
pnpm dev
``` 

## Scripts Disponibles

- `pnpm dev` - Inicia el servidor de desarrollo
- `pnpm build` - Construye la aplicación para producción
- `pnpm preview` - Previsualiza la construcción de producción localmente

## ESLint y TypeScript

El proyecto incluye una configuración robusta de ESLint con soporte para TypeScript. Para habilitar reglas de lint conscientes del tipo, la configuración se puede expandir según las necesidades del proyecto.

### Configuración Recomendada de ESLint
```js
export default tseslint.config(
    [
        globalIgnores(['dist']),
        { 
            files: ['**/*.{ts,tsx}'],
            extends: [
                ...tseslint.configs.recommendedTypeChecked,
                ...tseslint.configs.strictTypeChecked, 
                ...tseslint.configs.stylisticTypeChecked
            ],
            languageOptions: {
                parserOptions: {
                    project: [
                        './tsconfig.node.json',
                        './tsconfig.app.json'
                    ],
                    tsconfigRootDir: import.meta.dirname
                },
            },
        },
    ]
)
``` 

## Plugins Adicionales de React

Para reglas de lint específicas de React, se pueden utilizar los siguientes plugins:

- eslint-plugin-react-x
- eslint-plugin-react-dom

## Navegadores Soportados

El proyecto está configurado para soportar navegadores modernos que admitan las últimas características de ECMAScript.
```