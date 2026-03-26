# Frontend Capstone Project — Group 3

A React web application that explores our solar system through data. Built as a capstone project for the TS Academy Frontend Development course.

---

## Live Demo

> **Deployment Link:** _Update this once deployed to Vercel_
> `https://group3-capstone-project.vercel.app`

---

## Project Summary

This application recreates a provided mockup as a fully working React web app. It fetches real planet data from an external API and displays it in a responsive grid of planet cards. It also includes a comparative NASA data table and a validated contact form. The project demonstrates HTML, CSS and JavaScript fundamentals, React component architecture, the Fetch API, responsive design, and collaborative Git workflows — all skills covered throughout the TS Academy Frontend Development course.

---

## Team Members

| Name | GitHub Profile | Role |
|------|---------------|------|
| Jeremiah Barnabas | [GitHub](https://github.com/jerrybarry/) | **Group Leader** — Environment setup & final improvements |
| Oladejo Oluwatoyin Adebukola | [GitHub](https://github.com/Toyin-dev) | **Assistant Group Leader** — VideoSection Component |
| Nwadimkpa Chidubem Mac-Anthony | [GitHub](https://github.com/mac-dubem) | Header Component |
| Abdul Afeez Abubakar | [GitHub](https://github.com/Dextervade-sys) | Hero Component |
| Charles Chiadikaobi Aruma | [GitHub](https://github.com/Aruma527) | PlanetCard Component |
| Ani Benjamin | [GitHub](https://github.com/achiever891-ux) | DataTable Structure |
| Blessing Ocheme | [GitHub](https://github.com/Ehibliss) | DataTable Styling |
| Daniel Princewill | [GitHub](https://github.com/danielprincewill278-creator) | Contact Form — Structure & Validation |
| Mary Nwankwo | [GitHub](https://github.com/MaryChioma) | Contact Form — Styling |
| Chikezie Samuel | [GitHub](https://github.com/Yungmora) | Footer Component |
| Adebayo Samuel | [GitHub](https://github.com/Samerx1) | Footer Styling |
| Caleb Oyeyipo | [GitHub](https://github.com/caleboyeyipo) | PlanetSection Component |
| Muideen Idris | [GitHub](https://github.com/muideenidris) | Footer Styling |

---

## Components & Contributors

| Component | File Location | Description | Contributor(s) |
|-----------|--------------|-------------|----------------|
| `Header` | `src/components/Header/` | Sticky navigation bar with Planet Creative World logo | NwadimkOchemedubem Mac-Anthony |
| `Hero` | `src/components/Hero/` | Landing section with heading, description and two CTA buttons that scroll to their target sections | Abdul Afeez Abubakar |
| `VideoSection` | `src/components/VideoSection/` | Two-column section with an HTML5 autoplay video and descriptive text | Oladejo Oluwatoyin Adebukola |
| `PlanetCard` | `src/components/PlanetCard/` | Reusable `<figure>` card displaying a planet image, name and distance from the sun | Charles Chiadikaobi Aruma |
| `PlanetSection` | `src/components/PlanetSection/` | Fetches planet data from the API and renders a responsive grid of PlanetCard components | Caleb Oyeyipo |
| `DataTable` | `src/components/DataTable/` | NASA comparative planetary facts table with grouped planet categories | Ani Benjamin (structure), Blessing Ocheme (styling) |
| `ContactForm` | `src/components/ContactForm/` | Validated contact form with POST submission and success message | Daniel Princewill (structure & validation), Mary Nwankwo (styling) |
| `Footer` | `src/components/Footer/` | About section with team names, links to contributors and TSAcademy | Chikezie Samuel (structure), Adebayo Samuel (styling) |
| `App.jsx` | `src/App.jsx` | Root component that composes all sections in order | Jeremiah Barnabas |
| `index.css` | `src/index.css` | Global styles and CSS design tokens | Jeremiah Barnabas |
| `Footer` | `src/components/Footer/` | About section with team names, links to contributors and TSAcademy | Muideen Idris (styling) |

---

## How to Run the Project Locally

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)
- [Git](https://git-scm.com/)

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/YOUR-ORG/YOUR-REPO-NAME.git

# 2. Navigate into the project folder
cd YOUR-REPO-NAME

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Then open your browser and visit: `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready output will be in the `/dist` folder.

---

---

## 🔌 API Reference

| Purpose | Method | URL |
|---------|--------|-----|
| Fetch planet data | GET | `https://anurella.github.io/json/planets.json` |
| Form submission | POST | _(update with endpoint provided by instructor)_ |

The planets API returns an array of objects. Each object contains:
- `name` — the planet name
- `distanceFromSun` — distance from the sun
- `image` — URL of the planet image

---

## Git Workflow

```
main                         ← protected, production-ready only
├── feature/header
├── feature/hero
├── feature/video-section
├── feature/planet-card
├── feature/planet-section
├── feature/data-table
├── feature/data-table-styles
├── feature/contact-form
├── feature/contact-form-submit
└── feature/footer
```

### Rules followed
- All work was done on **separate feature branches**
- Every contribution was submitted through a **Pull Request**
- The person who opened a PR did **not** review or merge their own PR
- All PRs were **reviewed and approved** before merging into main
- **GitHub Projects** was used to track task progress

---

## 📁 Project Structure

```
capstone-group3/
├── index.html                   # Entry point (meta author = Group 3)
├── package.json
├── vite.config.js
├── .gitignore
├── README.md
└── src/
    ├── main.jsx                 # React DOM entry point
    ├── App.jsx                  # Root component
    ├── index.css                # Global styles + CSS variables
    └── components/
        ├── Header/
        │   ├── Header.jsx
        │   └── Header.css
        ├── Hero/
        │   ├── Hero.jsx
        │   └── Hero.css
        ├── VideoSection/
        │   ├── VideoSection.jsx
        │   └── VideoSection.css
        ├── PlanetCard/
        │   ├── PlanetCard.jsx
        │   └── PlanetCard.css
        ├── PlanetSection/
        │   ├── PlanetSection.jsx
        │   └── PlanetSection.css
        ├── DataTable/
        │   ├── DataTable.jsx
        │   └── DataTable.css
        ├── ContactForm/
        │   ├── ContactForm.jsx
        │   └── ContactForm.css
        └── Footer/
            ├── Footer.jsx
            └── Footer.css
```

---
