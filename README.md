This is a Next.js portfolio using the App Router. The application root is the repository root; `src/` contains legacy files that are not part of the active Next.js app.

## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

The project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to load Geist and has no required environment variables for the Next.js app. The optional variables in `.env.example` apply only to the standalone `email-server/` service.

## Production build

Use the standard Next.js commands from the repository root:

```bash
npm install
npm run build
npm start
```

## Vercel

Import the repository as a Next.js project with the root directory set to `.`. Leave the Build Command and Output Directory at their automatic defaults, or set the Build Command to `npm run build` (equivalent to `next build`). Do not set the Build Command to `vercel build`, and do not set an output directory such as `build` or `out`. No `vercel.json` is required.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
