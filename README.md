# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


<!-- notes about mask -->
This defines a mask:

<defs>: Contains definitions (things like gradients, masks, etc.) that can be reused in the SVG.

<mask id='viMask'>: Creates a mask with ID "viMask", which you’ll later apply to an image.

<rect>: Fills the entire SVG with black, which in masking means “completely transparent” (you won’t see the image here).

<text>: The text "VI" is in white, which means completely visible. It is centered both horizontally and vertically using:

x='50%' and textAnchor='middle' for horizontal centering

y='50%' (with some vertical offset, but good enough for rough centering)

So this mask makes the image only visible inside the "VI" letters — everywhere else, the image will be invisible.