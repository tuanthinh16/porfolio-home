# Do Tuan Thinh — Portfolio

Backend-focused portfolio built with Next.js, React, TypeScript and CSS. The homepage features selected work, core expertise, career history and a direct email contact link. There is no Three.js scene or CV download.

## Run locally

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`. To check production output, run `npm run build`.

## Edit content

- `src/data/siteContent.ts`: navigation, contact details, work, expertise and career entries shown on the homepage.
- `src/components/`: individual homepage sections and the mobile navigation.
- `src/app/globals.css`: layout, colors, typography and responsive behavior.
- `src/app/layout.tsx`: metadata and structured data.

The contact CTA uses `mailto:`. The existing `/api/contact` route remains available but is not used by the homepage.
