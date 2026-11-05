# Projektledning – studieapp (IT-projektledare)

Quiz och flashkort per kurs. Ren HTML/CSS/JS, ingen build behövs.

## Publicera på GitHub Pages
Settings > Pages > Source: "Deploy from a branch", branch `main`, mapp `/ (root)`.

## Lägga till innehåll
- Kurserna definieras i `courses.js` (id, namn, YHP).
- Varje datafil i `data/` anropar `addTopics("kurs-id", [ämnen])`. Kurs-id: `pl55`, `it10`, `itpl30`.
- Fyll i `data/it-orientering.js` och `data/it-projektledning.js` (mall finns i filerna).
- Nya filer läggs till som en `<script>`-rad i `index.html`, före `app.js`.
- En ny kurs läggs till som en rad i `courses.js`.
