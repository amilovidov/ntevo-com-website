# Deployment Guide for ntevo.com

## Quick Start

Your website is ready to deploy to Cloudflare Pages!

## What's Been Built

✅ Modern Vite-based website with TypeScript
✅ Bauhaus-inspired hi-tech design (matching canbuildai-website style)
✅ Responsive layout for mobile, tablet, and desktop
✅ Three main sections:
   - **Hero**: AI Agents with Emotional Intelligence
   - **Features**: Emotional Intelligence, Long-Term Memory, Sales & Success
   - **About**: Team profiles for Alexander Milovidov (CEO), Alexander Klimov (CTO), and Oxana Milovidova (COO)
✅ Contact email: info@ntevo.com (with CTA button linking to email)
✅ Security headers configured
✅ SEO meta tags (Open Graph, Twitter Cards)
✅ Build configuration for Cloudflare Pages

## Deploy to Cloudflare Pages

### Option 1: Via Cloudflare Dashboard (Recommended)

1. **Initialize Git Repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Integrity Evolution website"
   ```

2. **Push to GitHub**:
   ```bash
   # Create a new repository on GitHub first, then:
   git remote add origin https://github.com/YOUR_USERNAME/ntevo-com-website.git
   git branch -M main
   git push -u origin main
   ```

3. **Connect to Cloudflare**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to **Workers & Pages** > **Create application** > **Pages**
   - Click **Connect to Git**
   - Select your `ntevo-com-website` repository
   - Configure build settings:
     - **Framework preset**: Vite
     - **Build command**: `npm run build`
     - **Build output directory**: `dist`
     - **Node version**: 18 or higher
   - Click **Save and Deploy**

4. **Add Custom Domain**:
   - Once deployed, go to your Pages project
   - Click **Custom domains** tab
   - Add `ntevo.com` and `www.ntevo.com`
   - Cloudflare will automatically configure DNS if your domain uses Cloudflare nameservers

### Option 2: Wrangler CLI (Quick Deploy)

```bash
# Install Wrangler (if not already installed)
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Build and deploy
npm run build
cp _headers dist/
wrangler pages deploy dist --project-name=ntevo
```

## Local Development

```bash
# Install dependencies (if needed)
npm install

# Start dev server at http://localhost:3000
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
ntevo-com-website/
├── index.html                 # Main page with all content
├── main.ts                    # TypeScript for interactivity
├── _headers                   # Security headers for Cloudflare
├── build.sh                   # Build script with _headers copy
├── package.json               # Dependencies
├── vite.config.js            # Vite configuration
├── tsconfig.json             # TypeScript configuration
└── .cloudflare-pages-build-config.json  # Cloudflare build settings
```

## What's Next

After deployment:

1. **Verify DNS**: Ensure ntevo.com points to Cloudflare Pages
2. **Test HTTPS**: Cloudflare automatically provides SSL certificates
3. **Check Email**: Test that info@ntevo.com links work correctly
4. **Mobile Testing**: Verify responsive design on various devices
5. **SEO**: Consider adding Google Analytics or other tracking

## Customization

### Update Content
Edit `index.html` directly to modify:
- Hero headline and subtitle
- Feature descriptions
- Team member bios
- Contact information

### Change Colors
Modify CSS variables in `index.html`:
```css
:root {
    --tech-blue: #1E40AF;
    --bauhaus-red: #E63946;
    --bauhaus-yellow: #F1C40F;
}
```

### Add Pages
Create new HTML files and add them to `vite.config.js`:
```javascript
rollupOptions: {
  input: {
    main: '/index.html',
    about: '/about.html',  // Add new pages here
  }
}
```

## Support

For questions or issues:
- Contact: alex@ntevo.com
- Website: https://ntevo.com

---

Built with Vite + TypeScript | Deployed on Cloudflare Pages
