# Elias Segura — Portfolio

A dark, sleek developer portfolio built with React + Vite.

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production
```bash
npm run build
```

## Project Structure

```
src/
├── App.jsx                  # Root component
├── main.jsx                 # React entry point
├── styles/
│   └── globals.css          # CSS variables, resets, base styles
└── components/
    ├── Nav.jsx / Nav.css
    ├── Hero.jsx / Hero.css
    ├── Projects.jsx / Projects.css   ← Edit your projects here
    ├── Skills.jsx / Skills.css       ← Edit your tech stack here
    ├── About.jsx / About.css
    ├── Contact.jsx / Contact.css
    └── Footer.jsx / Footer.css
```

## Customizing

- **Add/edit projects** → `src/components/Projects.jsx` — update the `projects` array
- **Update skills** → `src/components/Skills.jsx` — update the `skills` array
- **Change colors** → `src/styles/globals.css` — edit the CSS variables in `:root`
- **Update contact info** → `src/components/Contact.jsx`

## Deploying (Free)

### GitHub Pages
1. Push to GitHub
2. `npm run build`
3. Deploy the `dist/` folder via GitHub Pages settings

### Netlify
1. Push to GitHub
2. Connect repo on [netlify.com](https://netlify.com)
3. Set build command: `npm run build`, publish dir: `dist`
4. Deploy — done!
