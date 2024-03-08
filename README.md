# Description

## Objective

ViteJS, Vue, TypeScript project that implements internationalization (i18n) in both English and French for four distinct Vue components.

These components are buildable as web-components and integrated into a second codebase (a single HTML file in the dist folder), displaying 2 instances of all 4 components on a single page. The web-components interact with each other, demonstrating dynamic functionality and language switching capabilities.

## Components

- Component A: Counter.
- Component B: Metrics Display.
- Component C: Reset Button.
- Component D: Locale Picker.

## Web-Components

- All four components are buildable as web-components.
- The components are loaded in a single index.html file in the dist folder to integrate the built files.
- The index.html consists of 2 groups of 4 components that interact with each other.

## Vue Page

In the development environment there are all four components working in Vue.

# Dependencies

- Vue 3.
- vue-i18n: Internationalization plugin for Vue.js.
- vue-chartjs: Vue.js wrapper for Chart.js.
- chart.js: Simple yet flexible JavaScript charting for designers & developers.
- TypeScript.

## DevDependencies

- Vite.
- vue-tsc: Check TypeScript error in *.vue files.
- Vitest: A test runner for Vite.
- Tailwind CSS: A utility-first CSS framework for rapidly building custom user interfaces.
- PostCSS: A tool for transforming CSS with JavaScript.
- Autoprefixer: A PostCSS plugin to parse CSS and add vendor prefixes to CSS rules.

# Get it working

- Clone the repository to your local machine.
- Enter the project directory.
- Install the dependencies.

```bash
git clone https://github.com/ianguita/Diabolocom.git
cd Diabolocom
npm install
```

## Available Scripts

- npm run dev: Starts the development server. Open http://localhost:3000 to view it in the browser. The page will reload if you make edits.
- npm run build: Builds the app for production to the dist folder. It correctly bundles Vue in production mode and optimizes the build for the best performance.
- npm run test: Runs the tests using Vitest.

# Tests

- Unit tests have been implemented to each component.
- Store methods have been tested.
- Internationalization has also been tested.