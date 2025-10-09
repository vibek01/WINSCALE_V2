# WinScale - Luxury Landing Page

A pixel-perfect, production-ready luxury landing page for WinScale built with React, TypeScript, Tailwind CSS, Framer Motion, GSAP, and Lenis smooth scrolling.

## Features

### Design & Aesthetics
- **Luxury Dark Theme**: Deep navy gradient background (#0A1224 → #09132F) with electric azure (#4F82FF) and satin gold (#F4C95D) accents
- **Glassmorphism**: Frosted glass panels with subtle blur and transparency
- **Texture Effects**: Animated grain texture and vignette overlay for depth
- **Premium Typography**: Poppins for display (700/800), Inter for body (400-600)

### Animations & Interactions

#### Hero Section
- Split text reveal with staggered upward animation
- Rocket icon with scale/rotation entrance and floating animation
- Orbital rings with continuous rotation
- Parallax gradient blobs
- Magnetic CTA buttons that follow cursor
- Shimmer effect on primary buttons

#### Scroll Choreography (GSAP ScrollTrigger)
- Scroll progress bar in navbar
- Staggered card entrance animations (fade + slide)
- Parallax background elements at different speeds
- Animated counters in stats section (triggers at 40% viewport)
- Pinned process timeline with progressive gold line fill
- 3D tilt effects on hover (perspective transform)

#### Navigation
- Sticky glassmorphic navbar with blur effect
- Active link underline grows from center
- Smooth scroll with Lenis (1.2s duration, custom easing)
- Mobile: Sheet drawer with staggered menu items
- Magnetic hover effect on CTA button

#### Interactive Elements
- Portfolio cards with lightbox modal
- Expandable FAQ accordion
- Service selection chips in contact form
- Hover effects: glow, scale, 3D tilt, gradient borders
- Success confetti on form submission

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Focus states on interactive elements
- Prefers-reduced-motion support
- Keyboard navigation friendly

### Performance
- Lazy-load sections with Intersection Observer
- Optimized images from Pexels CDN
- 60fps animations with hardware acceleration
- Minimal layout shift
- Code splitting with Vite

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**:
  - Framer Motion (component animations)
  - GSAP + ScrollTrigger (scroll choreography)
  - Lenis (smooth scrolling)
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Poppins, Inter)

## Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

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

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

## Performance Optimizations

1. **Images**: Using Pexels CDN with compression and optimization
2. **Fonts**: Preconnect to Google Fonts, variable fonts with optical sizing
3. **Animations**: CSS transforms (GPU accelerated), will-change hints
4. **Bundle**: Code splitting, tree shaking via Vite
5. **Scroll**: Passive event listeners, RAF throttling

## Credits

- Design: Based on luxury landing page principles
- Images: Pexels.com
- Icons: Lucide Icons
- Fonts: Google Fonts (Poppins, Inter)