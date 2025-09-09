# How to Add Images to Your Next.js Website

## Method 1: Using Next.js Image Component (Recommended)

### Step 1: Add your image to the `public` folder
```
public/
  profile.jpg        # Your profile photo
  project1.png       # Project screenshots
  logo.svg          # Your logo
  background.jpg    # Background images
```

### Step 2: Import and use the Image component
```tsx
import Image from 'next/image';

// Fixed size image
<Image
  src="/profile.jpg"
  alt="Harvey Mouloundou"
  width={300}
  height={300}
  className="rounded-full"
/>

// Fill container (responsive)
<div className="relative w-64 h-64">
  <Image
    src="/profile.jpg"
    alt="Harvey Mouloundou"
    fill
    className="rounded-full object-cover"
    priority // Load immediately for above-fold images
  />
</div>
```

## Method 2: Regular HTML img tag (Not recommended for Next.js)
```tsx
<img 
  src="/profile.jpg" 
  alt="Harvey Mouloundou" 
  className="w-64 h-64 rounded-full object-cover"
/>
```

## Method 3: External images (from URLs)
```tsx
<Image
  src="https://example.com/image.jpg"
  alt="Description"
  width={300}
  height={300}
  // You need to configure domains in next.config.js for external images
/>
```

## Image Optimization Benefits of Next.js Image:
- ✅ Automatic image optimization
- ✅ Lazy loading by default
- ✅ Responsive images
- ✅ WebP format conversion
- ✅ Prevents layout shift
- ✅ Better performance

## Common Image Formats:
- `.jpg/.jpeg` - Photos
- `.png` - Images with transparency
- `.svg` - Icons and logos
- `.webp` - Modern format (Next.js converts automatically)

## Recommended Image Sizes:
- Profile photos: 400x400px
- Project screenshots: 1200x600px
- Logos: SVG format preferred
- Background images: 1920x1080px

## To add your own images:
1. Save your images in the `public` folder
2. Use descriptive filenames (e.g., `harvey-profile.jpg`)
3. Update the `src` path in your Image components
4. Add proper `alt` text for accessibility
