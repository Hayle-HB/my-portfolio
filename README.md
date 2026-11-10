# Haylemeskel Bantiyerga: portfolio

Personal site for Haylemeskel Bantiyerga, software engineer and AI engineer. Built with React, Vite and Tailwind CSS v4.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
npm run lint
```

## Where the content lives

| What | File |
| --- | --- |
| Name, contact, intro, experience, skills, education, awards | `src/data/profile.js` |
| LLM training, evaluation and Terminal-Bench section, including the example task | `src/data/profile.js` (`aiWork`, `sampleTask`) |
| Projects and project detail pages | `src/data/projects.js` |
| Downloadable résumé | `public/Haylemeskel_Bantiyerga_Resume.pdf` |
| Design tokens (colors, fonts) | `src/index.css` (`@theme`) |

In `profile.js`, wrapping text in `[[double brackets]]` renders it as a highlighted metric.

## Design notes

- Type: Archivo (variable width and weight), self-hosted through Fontsource. IBM Plex Mono is used only for code.
- Color: cool paper and deep navy ink, a viridian accent for links, and a highlighter yellow reserved for résumé metrics.
- The dark band on the home page holds the AI training and evaluation work, with an interactive breakdown of a Terminal-Bench task.
- Respects `prefers-reduced-motion`, has visible keyboard focus and a skip link, and is responsive down to 320px.
