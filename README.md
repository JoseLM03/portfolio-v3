# Jose Luis Montejo — Portfolio V3 + Fieldwork Case Study

Local-only review build. Nothing has been committed, pushed, or deployed.

## Preview

Extract the ZIP, then open `index.html` in Chrome. Select **Fieldwork → Read the case study** to open `projects/fieldwork.html`. Both pages default to dark mode for first-time visitors; the light/dark toggle remembers an explicit preference when browser storage is enabled. Navigation from the case study links back to the homepage.

All visual assets are locally included. The site uses basic HTML, CSS, and a small vanilla JavaScript theme toggle, with no third-party scripts, frameworks, fonts, or analytics.

## This revision

- Preserved the approved V3 homepage design, content, dark-first theme, education, contacts, and four featured projects.
- Linked the Fieldwork feature to a dedicated case study, with a separate link to its GitHub documentation.
- Created `projects/fieldwork.html` and `projects/fieldwork.css` using matching responsive design and shared theme behavior.
- Included an explicitly **simplified architecture diagram**, not a fabricated app screenshot or working demo.
- Cross-checked product claims against the repository's README, architecture, security, release, and verification records.
- Corrected the homepage shorthand from Next.js to React (the repository documents a React / Sites-generated Vinext/Vite frontend).

## Verification and limitations

Fieldwork's V1.0.1 GitHub release is published; the actual app is **not publicly deployed**. Its Sept 27, 2026 verification record reports 138 backend tests, 9 frontend tests, manual local-provider acceptance, and passing GitHub Actions, including PostgreSQL migrations. These results are attributed to the project repository's verification record, not represented as fresh tests of Fieldwork in this portfolio build.

Real Fieldwork application screenshots, other project case studies, a reviewed résumé PDF, and public deployment remain to be completed. Do not publicly upload the original GGC backup, academic transcript, or private CAST Tours data. Verify the public portrait and contact information with the owner before deployment.

## References

- [Fieldwork README](https://github.com/JoseLM03/product-research-agent)
- [Architecture](https://github.com/JoseLM03/product-research-agent/blob/main/docs/ARCHITECTURE.md)
- [Claim alignment](https://github.com/JoseLM03/product-research-agent/blob/main/docs/CLAIM_ALIGNMENT.md)
- [Verification](https://github.com/JoseLM03/product-research-agent/blob/main/docs/VERIFICATION.md)
- [V1.0.1 release](https://github.com/JoseLM03/product-research-agent/releases/tag/v1.0.1)


## Layout hotfix (October 22, 2026)
Fixed a nested-grid width regression in the Fieldwork architecture and verification sections. Both full-bleed sections now own their interior two-column layout instead of constraining it to the outer 205px label track. The full case-study page was visually inspected and measured at viewport widths 320, 390, 768, 1024, and 1440px in light and dark modes.

## October 23 patch: Fieldwork architecture/footer

- Every one of the six architecture boxes now has dark `#241b17` background.
- The non-clickable `MORE WORK` label was removed; the useful return link remains.
- Fieldwork CSS URL has a dated version parameter to prevent old cached styles.
- `REVISION_CHECK.txt` has an exact build ID to distinguish this copy from an older extraction.

**Important:** Extract this ZIP to an **entirely new, empty folder**; do not merge it with an older portfolio folder. The ZIP now contains `index.html` right at its top level. Open that `index.html` and click Fieldwork's case-study link. If you still see white nodes, check that Chrome's local file path points inside the new folder.
