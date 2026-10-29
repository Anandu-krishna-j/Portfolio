# AnanduKrishna J — Senior Frontend Engineer Portfolio

A modern, aesthetic, and high-performance single-page developer portfolio built with **React** and **Vite**, based strictly on the verified professional background of **AnanduKrishna J**.

---

## ✦ Modern Aesthetic Design System

- **Visual Direction:** Modern editorial minimalism (inspired by Linear, Vercel, and Apple Developer design aesthetics).
- **Color Palette:**
  - Deep obsidian canvas (`#090a0f`, `#0e111a`, `#131724`)
  - Radiant Electric Indigo (`#6366f1`) and Soft Cyan (`#38bdf8`) accents
  - Realistic frosted glass surfaces (`backdrop-filter: blur(20px)`) with specular inner highlights (`inset 0 1px 0 rgba(255, 255, 255, 0.09)`)
- **Atmospheric Background (`AmbientGlow.jsx`):** Ethereal liquid-light orbs that slowly undulate, replacing heavy matrix grids with a fluid ambient glow.
- **Architectural Portrait Showcase:** Features AnanduKrishna's studio portrait with background removed, illuminated by ambient backlighting and floating frosted glass status chips.
- **Bento Grid Architecture (`About.jsx`):** High-density, elegant grid showcasing his engineering summary, state flow expertise, performance tuning, and agile mentorship.
- **Typography:** `Plus Jakarta Sans` for bold editorial headlines and `Inter` for crisp body copy.
- **Micro-Interactions & Accessibility:** Smooth spring-like reveals, keyboard focus outlines (`:focus-visible`), and full support for `prefers-reduced-motion`.

---

## 📁 Project Structure

```text
portfolio-main/
├── index.html                    # SEO tags, Plus Jakarta Sans & Inter fonts, monogram favicon
├── package.json                  # Dependencies & npm scripts
├── vite.config.js                # Vite build configuration with brain fs access
├── README.md                     # Documentation & setup guide
├── public/                       # Static public assets (place resume.pdf here)
└── src/
    ├── main.jsx                  # React application entry point
    ├── App.jsx                   # Page layout & IntersectionObserver scroll spy
    ├── index.css                 # Modern aesthetic design system & responsive styling
    ├── data/
    │   └── portfolioData.js      # Centralized verified data store with facts from resume.pdf
    └── components/
        ├── Navbar.jsx            # Floating pill navbar with reading progress indicator
        ├── Hero.jsx              # Editorial headline, role cycler & sculptural portrait card
        ├── About.jsx             # Bento grid with verified profile & architectural pillars
        ├── Skills.jsx            # Modern category pills, search bar & skill progress bars
        ├── Experience.jsx        # Segmented timeline for Work History & Education
        ├── Projects.jsx          # Modern browser mockup project cards with category filters
        ├── ProjectModal.jsx      # Technical deep-dive modal dialog
        ├── Contact.jsx           # Direct communication channels with one-click copy & form
        ├── Footer.jsx            # Editorial footer with navigation & back-to-top button
        ├── AmbientGlow.jsx       # 60 FPS atmospheric liquid-light canvas
        └── Icons.jsx             # Clean, reusable SVG icons
```

---

## 🚀 Running the Project

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build for Production
```bash
npm run build
```
Output will be generated in `dist/`.
