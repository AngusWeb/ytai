// next.config.mjs

/** @type {import('next').NextConfig} */

// Define the repository name or subdirectory for GitHub Pages deployment
// IMPORTANT: This should be the name of your repository, e.g., 'ytai'
const repoName = "ytai";

// Check if the current environment is production
// This assumes 'npm run build' sets NODE_ENV to 'production'
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  /**
   * Required for static exports. Outputs your site to the `out/` directory.
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: "export",

  /**
   * Disable Next.js Image Optimization API as it doesn't work on static hosts like GitHub Pages.
   * Images will be served as is from the `out/` directory.
   * Make sure your images are reasonably sized beforehand.
   */
  images: {
    unoptimized: true,
  },

  /**
   * The base path for your site.
   * Set this to '/<repo-name>' for GitHub Pages deployment if your site lives at
   * https://<username>.github.io/<repo-name>/
   * Only apply this during the production build intended for GitHub Pages.
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */
  basePath: isProd ? `/${repoName}` : "",

  /**
   * The prefix for your assets (JS, CSS, images, etc.).
   * This MUST match the `basePath` value for GitHub Pages deployment.
   * Next.js will automatically handle adding the necessary slashes when requesting assets.
   * Only apply this during the production build intended for GitHub Pages.
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/assetPrefix
   */
  assetPrefix: isProd ? `/${repoName}` : "",

  // Optional: Add other Next.js configurations if needed
  // reactStrictMode: true,
};

export default nextConfig;
