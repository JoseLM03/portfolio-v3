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

1. **[Fieldwork](projects/fieldwork.html)** — *AI Product-Research Workspace*
   * An AI-assisted workspace that gathers web sources, extracts cited evidence, and validates report statements against exact excerpts to prevent hallucinations.
   * **Stack:** Python, FastAPI, React, TypeScript, SQL, Ollama, Tavily.
   * **Status & Verification:** Open-source local application (V1.0.1 release; not publicly deployed). Backed by 138 backend tests, 9 frontend tests, and passing GitHub Actions CI.
   * **Source:** [GitHub Repository (JoseLM03/product-research-agent)](https://github.com/JoseLM03/product-research-agent)

2. **[CAST Tours AI Chatbot](projects/cast-tours.html)** — *Production Bilingual Assistant*
   * A live, bilingual travel assistance chatbot deployed on WordPress that handles tourist inquiries across English and Spanish. Features preflight privacy filtering, deterministic trip scoping, and lexical retrieval over approved tour documentation.
   * **Stack:** Python, FastAPI, Vanilla JavaScript, Groq Low-Latency Inference.
   * **Status & Verification:** Publicly deployed in production for travelers. Includes verified resolution for an October 31 WordPress iframe sandbox restriction (`allow-forms`) with automated regression tests.
   * **Confidentiality:** Source code, tour knowledge units, and client configurations are maintained in a private repository.

3. **[DetailDesk](projects/detaildesk.html)** — *Auto Detailing Virtual Receptionist & Lead Pipeline*
   * A collaborative college project developed with classmates Quincy and Dominique. Features a customer-facing intake portal, condition ratings, photo uploads, and an owner management dashboard.
   * **My Contributions:** Frontend UI architecture, multi-step quote form validation, cross-browser styling, test coverage, and pull request reviews.
   * **Stack:** React, Vite, Node.js, Express, SQLite, Vitest.
   * **Status:** Active working prototype (academic project). Maintained in a private repository.

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

* **Target Platform:** Cloudflare Pages Free
* **Current Status:** **NOT DEPLOYED YET** (Repository published to GitHub; hosting deployment pending final configuration)
* **Build Configuration:**
  * Framework preset: `Vite` (or None)
  * Build command: `npm run build`
  * Build output directory: `dist`
  * Environment variable: `NODE_VERSION: 20`
  * Edge Security: Security headers and Content Security Policy are served via [`public/_headers`](public/_headers).

---

## Ownership & Attribution

* **Author:** Jose Luis Montejo ([@JoseLM03](https://github.com/JoseLM03))
* **Collaborative Credits:** DetailDesk developed in collaboration with classmates Quincy and Dominique.
* **Client Work:** CAST Tours chatbot developed for Da Silva International / CAST Tours.
