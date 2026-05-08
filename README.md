# Vertex Delta Group - Portfolio Website

Modern real estate portfolio website built with React, Vite, and deployed on Vercel.

## 🚀 Quick Start

### Prerequisites
- Node.js v16+
- npm or yarn
- Vercel account (deployment)

### Installation & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── HomePage.jsx
│   ├── ProjectPage.jsx
│   ├── DirectorsPage.jsx
│   ├── Header.jsx
│   ├── ContactForm.jsx
│   └── ImageSlideshow.jsx
├── assets/images/        # Project photos organized by folder
├── data.js              # Centralized data (projects, contact, directors)
├── App.jsx              # Main app component
├── styles.css           # Global styles
└── main.jsx             # React entry point
```

## 📧 Contact Information

**Company:** Vertex Delta Group  
**Email:** vertexdeltagroup@gmail.com  
**Phone:** +254 739 704 350 (WhatsApp)  
**Location:** Nairobi, Kenya

## 🎨 Features

- ✅ Responsive design with modern CSS
- ✅ Project gallery with image slideshows (3-6 images per project)
- ✅ Contact form with email integration
- ✅ SEO optimized (meta tags, Open Graph, Twitter Card)
- ✅ Lazy loading for performance
- ✅ Directors/team page with profiles
- ✅ Testimonials section

## 📸 Adding Project Photos

Project photos are organized in `src/assets/images/` by project folder:
- `etago-maisonette/`
- `joska-bungalow/`
- `ruiru-apartments/`
- `kikuyu-modern-house/`
- `ruiru-4bed-maisonette/`
- `lavington-landscaping/`
- `karen-duplexes/`
- `ngoigwa-thika-apartments/`
- `wego-group-interiors/`
- `homabay-maisonette/`

Photos are automatically loaded into the slideshow. Update `src/data.js` to add image references.

## 🚀 Deployment

Deployed automatically on Vercel. Push to `main` branch to trigger deployment.

```bash
git push origin main
```

## 📦 Dependencies

- **React** - UI library
- **React Router** - Client-side routing
- **Vite** - Build tool
- **CSS** - Styling (no external CSS framework)

## 📄 License

All rights reserved © Vertex Delta Group

