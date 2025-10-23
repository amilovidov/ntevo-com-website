# Integrity Evolution Website (ntevo.com)

Modern website for Integrity Evolution, built with Vite and TypeScript, designed for deployment on Cloudflare Pages.

## Tech Stack

- **Vite** - Fast build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **HTML/CSS** - Modern, responsive design with Bauhaus-inspired styling
- **Cloudflare Pages** - Hosting platform

## Design Philosophy

The website features a minimal hi-tech Bauhaus design system with:
- Clean, modern typography (Inter + JetBrains Mono)
- Subtle grid animations and tech patterns
- Bold geometric Bauhaus elements (circles, triangles, squares)
- Responsive design optimized for all devices
- Security-first headers configuration

## Local Development

### Prerequisites

- Node.js >= 18.0.0
- npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The dev server will start at `http://localhost:3000` and automatically open in your browser.

### Build

```bash
# Build for production
npm run build

# Or use the build script
./build.sh
```

The built files will be in the `dist/` directory.

### Preview

```bash
# Preview production build locally
npm run preview
```

## Deployment to Cloudflare Pages

### Option 1: Cloudflare Dashboard (Recommended)

1. Push your code to a GitHub repository
2. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Go to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**
4. Select your repository
5. Configure build settings:
   - **Framework preset**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node version**: 18 or higher
6. Click **Save and Deploy**

### Option 2: Wrangler CLI

```bash
# Install Wrangler globally
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Build the site
npm run build

# Deploy to Cloudflare Pages
wrangler pages deploy dist --project-name=ntevo
```

### Custom Domain Setup

1. In Cloudflare Dashboard, go to your Pages project
2. Click **Custom domains** tab
3. Add `ntevo.com` and `www.ntevo.com`
4. Cloudflare will automatically configure DNS if your domain is on Cloudflare
5. If using external DNS, add the CNAME records provided by Cloudflare

## Project Structure

```
ntevo-com-website/
├── index.html              # Main HTML file with embedded styles
├── main.ts                 # TypeScript entry point
├── _headers               # Security headers for Cloudflare
├── build.sh               # Build script
├── vite.config.js         # Vite configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Dependencies and scripts
└── .cloudflare-pages-build-config.json  # Cloudflare build config
```

## Configuration Files

### `.cloudflare-pages-build-config.json`
Configures Cloudflare Pages build settings. Already set up for Vite.

### `_headers`
Security headers applied to all pages:
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Content Security Policy
- And more...

## Customization

### Colors
Edit CSS variables in `index.html` under `:root`:
```css
--tech-blue: #1E40AF;
--bauhaus-red: #E63946;
--bauhaus-yellow: #F1C40F;
```

### Content
Update the HTML content in `index.html`:
- Hero section
- Features section
- Footer

### Functionality
Add interactive features in `main.ts`

## Performance

- Optimized Vite build with code splitting
- Minimal dependencies
- Fast loading with modern build tools
- CDN distribution via Cloudflare

## Security

- Security headers via `_headers` file
- Content Security Policy (CSP)
- No inline scripts (TypeScript module loaded separately)
- HTTPS enforced by Cloudflare

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design for all screen sizes

## License

© 2025 Integrity Evolution. All rights reserved.

## Support

For issues or questions, please contact Integrity Evolution.
