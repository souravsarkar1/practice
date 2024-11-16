# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with Hot Module Replacement (HMR) and some ESLint rules.

## Official Plugins

Currently, two official plugins are available:

- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)**: Uses [Babel](https://babeljs.io/) for Fast Refresh.
- **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)**: Uses [SWC](https://swc.rs/) for Fast Refresh.

## ESLint Configuration

For production applications, we recommend updating the ESLint configuration to enable type-aware lint rules. Follow these steps:

1. **Configure `parserOptions`** in your ESLint config:

   ```javascript
   // eslint.config.js
   export default tseslint.config({
     languageOptions: {
       parserOptions: {
         project: ['./tsconfig.node.json', './tsconfig.app.json'],
         tsconfigRootDir: import.meta.dirname,
       },
     },
   })
   ```

2. **Update ESLint Config**:
   - Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`.
   - Optionally add `...tseslint.configs.stylisticTypeChecked`.

3. **Install ESLint Plugin for React**:
   - Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update your ESLint config:

   ```javascript
   // eslint.config.js
   import react from 'eslint-plugin-react'

   export default tseslint.config({
     settings: { react: { version: '18.3' } },
     plugins: {
       react,
     },
     rules: {
       ...react.configs.recommended.rules,
       ...react.configs['jsx-runtime'].rules,
     },
   })
   ```

## Project Structure

Your project structure should look like this:

```
src/
├── components/
│   ├── Footer.tsx
│   ├── LandingPage1.tsx
│   ├── LandingPage2.tsx
│   ├── LandingPage3.tsx
│   ├── LandingPage4.tsx
│   ├── LandingPage5.tsx
│   ├── LandingPage6.tsx
│   ├── LandingPage7.tsx
│   ├── LandingPage8.tsx
│   └── LandingPage9.tsx
└── pages/
    └── home/
        └── screens/
            └── Home.tsx
```

## Running the Project

To run the project, use the following command:

```bash
npm run dev
```

This will start the Vite development server with HMR enabled.

## Conclusion

This setup provides a solid foundation for building a React application with TypeScript and Vite. Customize the components and ESLint rules as needed for your project.