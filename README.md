# Yuva Raj Bhatta Personal Website

Personal website and portfolio for Yuva Raj Bhatta, built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

The site is designed as a single-page personal brand site that combines professional background, education, resume access, social links, and a more personal introduction.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint 9

## Features

- Custom one-page homepage
- Headshot and resume served from `public/`
- Professional and personal profile sections
- Social links with platform icons
- Responsive layout for desktop and mobile

## Local Development

Install dependencies if needed:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in the browser.

## Production Build

Build the project:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Linting

```bash
npm run lint
```

## Project Structure

```text
src/app/
  layout.tsx      Shared layout and metadata
  page.tsx        Homepage content
  globals.css     Global styles

public/
  yuva-headshot.PNG
  Yuva_Raj_Bhatta_Resume.pdf
```

## Where To Edit Content

- Update homepage copy in `src/app/page.tsx`
- Update metadata in `src/app/layout.tsx`
- Update styling in `src/app/globals.css`
- Add or replace static assets in `public/`

## Notes

- The homepage is currently implemented as a single route: `/`
- Resume and image assets are referenced directly from `public/`
- The project uses the App Router in Next.js 16

## Future Improvements

- Add a projects section with real project links
- Improve SEO metadata and social sharing previews
- Add analytics if needed
- Deploy to Vercel or another hosting platform
