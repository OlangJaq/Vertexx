# Vertex-Delta Portfolio - Complete Setup & Deployment Guide

## 🚀 Quick Start

### Prerequisites
- Node.js v16+ 
- npm or yarn
- Safaricom Business Portal account (for M-Pesa)
- Vercel account (for deployment)

### Installation

```bash
# Install dependencies
npm install

# Create .env file (if backend is needed)
cp .env.example .env

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── components/
│   │   ├── HomePage.jsx           # Main portfolio page with projects list
│   │   ├── ProjectPage.jsx        # Individual project detail page
│   │   ├── ImageSlideshow.jsx     # Auto-transitioning image carousel
│   │   └── PaymentModal.jsx       # M-Pesa payment interface
│   ├── assets/
│   │   ├── images/                # All project images (to be organized by project slug)
│   │   └── projects/              # Organized project folders
│   │       ├── etago-4-bed-maisonette/
│   │       ├── joska-3-bed-bungalow/
│   │       └── ...
│   ├── App.jsx                    # Main app with routing
│   ├── data.js                    # Project data and contact info
│   ├── main.jsx                   # Entry point with BrowserRouter
│   └── styles.css                 # All styles (including new project page styles)
├── BACKEND_SETUP.md               # Backend setup instructions
├── package.json                   # Dependencies
├── vite.config.js                 # Vite configuration
└── README.md
```

## 🎯 Key Features Implemented

### 1. Dynamic Routing ✅
- Uses React Router v6
- Project pages accessible at `/projects/{slug}`
- Clean URL structure for SEO

### 2. Image Slideshow ✅
- Auto-transitions every 4 seconds
- Manual navigation with arrows
- Dot indicators
- Smooth fade transitions
- Dark overlay for text readability
- Image counter

### 3. Project Details Pages ✅
- Full project specifications
- Amenities list
- Related projects section
- Contact CTA section
- Responsive design

### 4. Payment Modal ✅
- Step-by-step payment flow
- Phone number validation
- Amount customization
- M-Pesa integration ready
- Transaction tracking UI

### 5. Contact Integration ✅
- WhatsApp links with project context
- Email contact options
- Pre-filled message templates

## 🛠️ Backend Setup (M-Pesa Integration)

### Option 1: Vercel Serverless Functions (Recommended)

1. Create `api/payments.js` in your project root:

```javascript
import { Buffer } from "buffer";
import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { phoneNumber, amount, projectId, projectTitle } = req.body;
    
    // Your M-Pesa integration code here
    // See BACKEND_SETUP.md for full implementation
    
    res.status(200).json({
      success: true,
      checkoutRequestId: "generated-id",
      transactionId: "transaction-id"
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
```

2. Update `vite.config.js`:

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
});
```

### Option 2: Separate Node.js Backend

See detailed instructions in `BACKEND_SETUP.md`

## 📊 Data Structure

### Projects Array Structure

```javascript
{
  id: 1,
  slug: "etago-4-bed-maisonette",  // Used in URL: /projects/etago-4-bed-maisonette
  title: "4-Bedroom Maisonette",
  location: "Etago, Kisii County",
  type: "Residential",
  year: "2023",
  status: "Completed",
  description: "Short description", // Used in cards
  longDescription: "Detailed description", // Used on project page
  image: image1, // Main thumbnail
  images: ["image1.jpg", "image2.jpg"], // Slideshow images
  price: 1500000,
  currency: "KES",
  specifications: {
    bedrooms: 4,
    bathrooms: 3,
    plotSize: "0.5 acres",
    builtArea: "450 sqm"
  },
  amenities: ["Open-plan living", "Master suite", ...]
}
```

### Payment Transaction Structure

```javascript
{
  id: 1,
  projectId: 1,
  phoneNumber: "254722123456",
  amount: 1500000,
  mpesaReference: "LHD21ASAE01",
  checkoutRequestId: "ws_pop_id_...",
  status: "completed", // pending, completed, failed
  createdAt: "2024-04-09T10:30:00Z",
  userEmail: "customer@email.com"
}
```

## 🖼️ Image Organization

Organize project images in folders matching project slugs:

```
src/assets/projects/
├── etago-4-bed-maisonette/
│   ├── main.webp          (main thumbnail, <300KB)
│   ├── slideshow-1.webp
│   ├── slideshow-2.webp
│   └── slideshow-3.webp
├── joska-3-bed-bungalow/
│   ├── main.webp
│   └── slideshow-1.webp
└── ...
```

## ⚡ Image Optimization

### Convert to WebP

```bash
# Using ImageMagick
for file in *.jpg *.png; do
  convert "$file" -quality 80 "${file%.*}.webp"
done

# Using ffmpeg
ffmpeg -i input.jpg -q:v 5 output.webp
```

### Compress Images

```bash
# Using ImageOptim (Mac)
# Drag files to ImageOptim

# Using ImageMagick
convert input.jpg -resize 1200x -quality 75 -strip output.jpg

# Using cwebp (best for WebP)
cwebp -q 80 -o output.webp input.jpg
```

### Target Sizes
- Slideshow images: 800-1200px width, <300KB
- Thumbnails: 400px width, <100KB
- Hero images: 1920px width, <500KB

## 🔐 Environment Variables

Create `.env.local` for development:

```env
# Frontend
VITE_API_URL=http://localhost:5000
VITE_ENVIRONMENT=development

# Backend (if using separate server)
SAFARICOM_CONSUMER_KEY=your_key_here
SAFARICOM_CONSUMER_SECRET=your_secret_here
SAFARICOM_SHORTCODE=123456
SAFARICOM_PASSKEY=your_passkey_here
SAFARICOM_INITIATOR_NAME=Initiator
SAFARICOM_INITIATOR_PASSWORD=password
NODE_ENV=sandbox
```

Create `.env.production` for production:

```env
VITE_API_URL=https://api.yourdomain.com
VITE_ENVIRONMENT=production
NODE_ENV=production
```

## 📱 Mobile Optimization

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px  
- Desktop: > 1024px

### Testing on Mobile

```bash
# Get your local IP
ipconfig getifaddr en0  # Mac
# or
hostname -I  # Linux

# Access from phone
http://192.168.x.x:5173
```

## 🧪 Testing Checklist

### Routing & Navigation
- [ ] HomePage loads correctly
- [ ] Project cards are clickable
- [ ] Project URLs work: `/projects/etago-4-bed-maisonette`
- [ ] Back button works on project pages
- [ ] Related projects navigation works
- [ ] No 404 errors

### Slideshow
- [ ] Auto-transitions every 4 seconds
- [ ] Manual navigation (arrows) works
- [ ] Dot indicators update correctly
- [ ] Pause on user interaction
- [ ] Counter displays correctly
- [ ] Images load smoothly (no flashing)

### Payment Modal
- [ ] Opens on "Purchase Design" button click
- [ ] Phone number validation works
- [ ] Amount input accepts valid numbers
- [ ] Form submission triggers API call
- [ ] Loading state displays
- [ ] Success/error messages display
- [ ] Modal closes properly

### Contact Features
- [ ] WhatsApp links work with project context
- [ ] Email links work
- [ ] Pre-filled messages include project title
- [ ] Floating WhatsApp button visible and functional

### Performance
- [ ] Images load under 3 seconds
- [ ] No console errors
- [ ] Lighthouse score > 80
- [ ] Page size < 5MB

### M-Pesa Integration
- [ ] Sandbox testing: STK push appears on phone
- [ ] Phone number formatting works
- [ ] Transaction reference recorded
- [ ] Callback webhook processes correctly
- [ ] Payment status updates in database

### Responsive Design
- [ ] Mobile: all text readable, no horizontal scroll
- [ ] Tablet: content properly distributed
- [ ] Desktop: full layout utilization
- [ ] Slideshow responsive on all sizes
- [ ] Modal fits within viewport

## 🚀 Deployment

### Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Configure build command:
   ```bash
   npm run build
   ```
4. Configure output directory:
   ```
   dist
   ```
5. Deploy!

### Deploy Backend to Vercel

```bash
# Create api/ folder with your serverless functions
mkdir api
# Add your handler functions
# Create vercel.json
# Deploy: vercel
```

### Custom Domain

1. Buy domain from registrar (Namecheap, Google Domains, etc.)
2. Add domain in Vercel dashboard
3. Update DNS records as instructed by Vercel
4. Wait for propagation (15-48 hours)

### SSL/TLS

✅ Automatic with Vercel (free)

## 📊 M-Pesa Sandbox Testing

### Get Sandbox Credentials
1. Visit https://developer.safaricom.co.ke/
2. Create account and register app
3. Copy Consumer Key and Consumer Secret
4. Navigate to Sandbox section
5. Get test phone number (use provided number or register own)

### Test Transaction Flow
1. Click "Purchase Design" button
2. Enter test phone number: `254712345678`
3. Enter amount: `1`  (1 KES minimum in sandbox)
4. Receive STK prompt on registered phone
5. Enter test PIN: `1234`
6. Check transaction status

## 🔧 Troubleshooting

### Images not loading
- Check image paths in data.js
- Verify images exist in src/assets folder
- Check browser DevTools Network tab
- Try converting to WebP format

### Routing not working
- Ensure React Router is properly installed
- Check BrowserRouter wrapper in main.jsx
- Verify slug format in data.js
- Check browser history state

### Payment modal not opening
- Check PaymentModal import in ProjectPage
- Verify onClick handlers are connected
- Check browser console for errors
- Test on localhost first

### M-Pesa errors
- Verify Daraja API credentials
- Check phone number format (254XXXXXXXXX)
- Confirm sandbox/production environment
- Review Safaricom API documentation
- Check callback URL is accessible

## 📞 Support & Resources

- **React Router**: https://reactrouter.com/docs
- **Vite**: https://vitejs.dev/guide/
- **Safaricom Daraja**: https://developer.safaricom.co.ke/
- **Vercel Docs**: https://vercel.com/docs
- **ImageMagick**: https://imagemagick.org/
- **WebP Format**: https://developers.google.com/speed/webp

## ✅ Next Steps

1. **Organize Images**: Move images to project-specific folders
2. **Optimize Images**: Convert to WebP, compress to <300KB
3. **Set Up Backend**: Create M-Pesa integration endpoint
4. **Configure Environment**: Add .env variables
5. **Test Thoroughly**: Run through testing checklist
6. **Deploy**: Push to Vercel or your hosting
7. **Monitor**: Set up error tracking (Sentry)
8. **Analytics**: Add Google Analytics
