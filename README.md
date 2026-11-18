# Engagement Invitation (React + Vite)

## Run it
1. Install Node.js (https://nodejs.org), then in this folder run:
   npm install
   npm run dev
2. Open the address it prints (usually http://localhost:5173).
   Always use `npm run dev`. Do not open the folder with another server, that gives "Cannot GET /".

## Change text, date, address, menu, timing
Edit src/content.js (English and Hindi are both in that file).

## Add your images
Put files in public/images/ with the names listed in public/images/README.txt.
Missing images show a dashed placeholder that names the file to add.

## Pages (one file each, in src/pages/)
GaneshPage, WelcomePage, RingPage, FoodPage, VenuePage, ThankYouPage.
Reorder or remove pages in the `pages` list in src/App.jsx.

## Put it online
npm run build, then upload the dist folder to Netlify, Vercel or GitHub Pages.
