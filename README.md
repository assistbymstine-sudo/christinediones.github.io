# VA Tine Portfolio
React + Vite single-page site (hash navigation, so refresh never breaks).

## Run
`npm install` → `npm run dev` · build with `npm run build`

## Edit
- Copy, services, experience, skills, tools: `src/data.js`
- Contact details + form endpoint: top of `src/App.jsx` (`CONTACT`, `FORM_ENDPOINT`)
- Photo / resume: replace `public/assets/profile.png` and `public/assets/christine-diones-resume.pdf`

## Deploy (GitHub Pages)
1. Push to a GitHub repo's `main` branch.
2. Settings → Pages → Source: **GitHub Actions**.
3. `base: './'` in `vite.config.js` works for project and user pages; no change needed.

## Contact form
Create a free form at formspree.io and paste its URL into `FORM_ENDPOINT`. Until then, the form opens a pre-filled email instead and never claims a message was sent.
