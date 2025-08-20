# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based landing page for "Upsail" - a modern business solutions platform. The project uses Create React App with Tailwind CSS for styling.

## Development Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject from Create React App (irreversible)
npm run eject
```

## Project Architecture

### Tech Stack
- **React 18.2.0** - Main framework
- **Tailwind CSS 3.3.2** - Utility-first CSS framework
- **Create React App 5.0.1** - Build tooling and development environment
- **PostCSS with Autoprefixer** - CSS processing

### Component Structure
The application follows a simple single-page architecture with route-like navigation handled via state:

- `App.js` - Root component managing page state and routing
- `components/Home.js` - Main landing page composed of multiple sections
- `components/Header.js` - Navigation header
- `components/Footer.js` - Site footer
- `components/Contact.js` - Contact form page

**Landing Page Sections** (rendered within Home component):
- `Hero.js` - Main hero section with CTA
- `Solution.js` - Feature showcase with icons and descriptions
- `Testimonials.js` - Customer testimonials
- `HowItWorks.js` - Process explanation
- `FinalCTA.js` - Bottom call-to-action

### Navigation System
The app uses a simple state-based navigation system rather than React Router:
- `currentPage` state in App.js controls which component renders
- `setPage` function passed down to components for navigation
- Two main pages: 'home' and 'contact'

### Styling
- **Tailwind CSS** configured with custom colors:
  - `lime`: #BFFF00 (brand accent color)
  - `gentle-black`: #1F2937 (primary text color)
- CSS imports only Tailwind directives in `src/index.css`
- Responsive design with mobile-first approach

### File Organization
```
src/
├── App.js              # Root component with routing logic
├── index.js            # React DOM render entry point
├── index.css           # Tailwind CSS imports
└── components/         # All React components
    ├── Header.js       # Navigation
    ├── Footer.js       # Footer
    ├── Home.js         # Landing page wrapper
    ├── Contact.js      # Contact form
    ├── Hero.js         # Hero section
    ├── Solution.js     # Features section
    ├── Testimonials.js # Social proof
    ├── HowItWorks.js   # Process steps
    └── FinalCTA.js     # Bottom CTA
```

## Testing
- Uses Jest and React Testing Library (via Create React App)
- No custom test configuration
- Run tests with `npm test`

## Build and Deployment
- Production build: `npm run build`
- Outputs to `build/` directory
- Standard Create React App build process with optimizations