# Jose Luis Montejo — Software Engineering Portfolio (V3)

Personal software engineering portfolio for Jose Luis Montejo, showcasing full-stack web development, Python automation, and practical AI systems grounded in verified evidence.

## Overview & Architecture

* **Frontend:** Semantic HTML5, modern vanilla CSS (custom properties, responsive grid/flexbox), vanilla JavaScript.
* **Build Tooling:** Vite (multi-page application architecture).
* **Theme System:** Zero-dependency dark-first theme toggle with `localStorage` persistence and early `<head>` execution to prevent flash of unstyled content (FOUC).
* **Privacy & Security:** Zero analytics, zero third-party tracking scripts, zero cookies, Content Security Policy, and automated security headers (`public/_headers`).
* **Interactive Document Viewer:** Dedicated public résumé page (`resume.html`) featuring an embedded PDF viewer, accessible fallback controls, direct open, and clean file download capabilities.

---

## Featured Case Studies

The portfolio highlights four projects covering distinct engineering challenges:

1. **[CAST Tours AI Chatbot](projects/cast-tours.html)** — *Production Bilingual Assistant*
   * A live, bilingual travel assistance chatbot deployed on WordPress that handles tourist inquiries across English and Spanish. Features preflight privacy filtering, deterministic trip scoping, and lexical retrieval over approved tour documentation.
   * **Stack:** Python, FastAPI, Vanilla JavaScript, Groq Low-Latency Inference.
   * **Status & Verification:** Publicly deployed in production for travelers. Includes verified resolution for an October 31 WordPress iframe sandbox restriction (`allow-forms`) with automated regression tests.
   * **Confidentiality:** Source code, tour knowledge units, and client configurations are maintained in a private repository.

2. **[DetailDesk](projects/detaildesk.html)** — *Auto Detailing Virtual Receptionist & Lead Pipeline*
   * A collaborative college project developed with classmates Quincy and Dominique. Features a customer-facing intake portal, condition ratings, photo uploads, and an owner management dashboard.
   * **My Contributions:** Frontend UI architecture, multi-step quote form validation, cross-browser styling, test coverage, and pull request reviews.
   * **Stack:** React, Vite, Node.js, Express, SQLite, Vitest.
   * **Status:** Active working prototype (academic project). Maintained in a private repository.

3. **[eFolio](projects/efolio.html)** — *Academic Assessment Portfolio Platform*
   * A multi-role academic assessment platform developed collaboratively at Georgia Gwinnett College connecting students, faculty, and administrators.
   * **Stack:** React, Node.js, Express, MongoDB, REST APIs.
   * **My Contributions:** Portfolio content reporting, API rate limiting, role-based endpoint restrictions, and notification preference controls through merged PR #76, along with peer reviews and integration.
   * **Status & Privacy:** Academic capstone platform (not deployed in production). Maintained in a private institutional repository.

4. **[AI Job Search](projects/ai-job-search.html)** — *Deterministic Job Aggregation Pipeline*
   * An open-source Python CLI pipeline that queries the Adzuna REST API, parses unstructured listings into strongly-typed dataclasses, expands titles via role aliases, and filters opportunities against user preferences.
   * **Stack:** Python 3, Adzuna REST API, HTTPX, Dataclasses, Pytest.
   * **Status & Verification:** Released open-source tool (V1.0.0). Backed by 18 automated pytest tests covering API resilience, pattern extraction, and preference logic.
   * **Source:** [GitHub Repository (JoseLM03/ai-job-search)](https://github.com/JoseLM03/ai-job-search)

---

## Public Résumé Integration

* **Location:** [`resume.html`](resume.html) / [`assets/SWE_Public_Master_Resume.pdf`](assets/SWE_Public_Master_Resume.pdf)
* **Privacy:** Excludes personal phone numbers; contains professional contact channels (email, LinkedIn, GitHub), Lawrenceville, GA location, and U.S. citizenship.
* **Credentials:** Includes both Georgia Gwinnett College (B.S. in Information Technology, Software Development concentration; Expected Dec 2026) and Georgia State University Perimeter College (A.S. in Computer Science; Dec 2023).

---

## Local Development & Build

This project requires **Node.js 20.19+ or 22.12+** and **npm**.

### 1. Install Dependencies
```bash
npm ci
```

### 2. Start Development Server
```bash
npm run dev
```
Starts the Vite local development server with hot module reloading (HMR).

### 3. Build for Production
```bash
npm run build
```
Compiles and bundles the multi-page static site into the `dist/` directory, including hashed assets, bundled stylesheets, and the copied `_headers` security configuration.

### 4. Preview Production Build
```bash
npm run preview
```
Spins up a local web server to preview the generated `dist/` production output.

---

## Deployment Status

* **Platform:** Cloudflare Pages Free
* **Status:** **LIVE** ([jose-montejo-portfolio.pages.dev](https://jose-montejo-portfolio.pages.dev/))
* **Production Branch:** `main`
* **Build Configuration:**
  * Framework preset: `Vite`
  * Build command: `npm run build`
  * Build output directory: `dist`
  * Automatic deployments: Enabled for pushes to `main`
  * Edge Security: Security headers and Content Security Policy are served via [`public/_headers`](public/_headers).

---

## Ownership & Attribution

* **Author:** Jose Luis Montejo ([@JoseLM03](https://github.com/JoseLM03))
* **Collaborative Credits:** DetailDesk developed in collaboration with classmates Quincy and Dominique.
* **Academic Capstone:** eFolio developed collaboratively as a senior academic capstone project at Georgia Gwinnett College.
* **Client Work:** CAST Tours chatbot developed for Da Silva International / CAST Tours.
