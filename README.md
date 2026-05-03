# Rashko Restaurant — Static Site

Plain HTML / CSS / JavaScript version of the Rashko Restaurant website.
No build step, no frameworks, no npm. Just open `index.html` in a browser
or upload the whole folder to any static host (Netlify, Vercel, GitHub
Pages, cPanel, S3, etc.).

## Pages
- `index.html` — Home
- `menu.html` — Full menu
- `order.html` — Build a WhatsApp order
- `reviews.html` — Guest reviews
- `contact.html` — Reservations + contact
- `locations.html` — All 3 branches
- `about.html` — Our story

## Files
```
/
├── index.html, about.html, menu.html, order.html, reviews.html, contact.html, locations.html
└── assets/
    ├── css/styles.css   — design system (brand greens + typography)
    ├── js/site.js       — branch picker, WhatsApp logic, menu data, icons
    └── img/             — hero, dishes, interior, logo
```

## Updating branch info
Open `assets/js/site.js` and edit the `BRANCHES` array near the top
(phone numbers, addresses, hours, WhatsApp number).

## Updating the menu
Edit the `MENU` array in `assets/js/site.js`. Both `menu.html` and
`order.html` read from it.

## Notes
- The selected branch is remembered in `localStorage` (`rashko.branchId`)
  so returning visitors keep their last choice.
- Font: Cormorant Garamond + Inter, loaded from Google Fonts.
- WhatsApp links use `https://wa.me/<number>?text=...` — no API key needed.
