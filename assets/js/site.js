/* ============================================================
   Rashko Restaurant — shared site JS
   ============================================================ */

// ---------- Branches ----------
const BRANCHES = [
  {
    id: "gwarzo",
    name: "Rashko — Gwarzo Road",
    shortName: "Gwarzo Road",
    address: "C41 Gwarzo Road, New Site Janbulo, Kano",
    addressLines: ["C41 Gwarzo Road", "New Site Janbulo, near Next Electro", "Kano 700252, Nigeria"],
    hours: "Daily · 11:00 — 23:00",
    phoneDisplay: "+234 906 666 4862",
    whatsapp: "2349066664862",
    mapsQuery: "c41+Gwarzo+Rd,+new+site+janbulo,+Kano",
  },
  {
    id: "zoo-road",
    name: "Rashko — Zoo Road",
    shortName: "Zoo Road",
    address: "Zoo Road, Kano",
    addressLines: ["7b Zoo Road", "Gandun Albasa,   Kano",  "Nigeria"],
    hours: "Daily · 11:00 — 23:00",
    phoneDisplay: "+234 808 803 8055 ",
    whatsapp: "2348088038055",
    mapsQuery: "Zoo+Road,+Kano",
  },
  {
    id: "Kano Club",
    name: "Rashko — Kano Club",
    shortName: "Kano Club",
    address: "Inside Kano Club",
    addressLines: ["Inside kano Club ", "Club Road", "GRA, Kano", "Nigeria"],
    hours: "Daily · 11:00 — 23:00",
    phoneDisplay: "+234 806 622 4249",
    whatsapp: "2348066224249",
    mapsQuery: "club+Road,+Kano",
  },
];
const STORAGE_KEY = "rashko.branchId";

function getBranchId() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && BRANCHES.some(b => b.id === stored)) return stored;
  } catch {}
  return BRANCHES[0].id;
}
function getBranch() { return BRANCHES.find(b => b.id === getBranchId()) || BRANCHES[0]; }
function setBranchId(id) {
  try { localStorage.setItem(STORAGE_KEY, id); } catch {}
  window.dispatchEvent(new CustomEvent("rashko:branch-change", { detail: { id } }));
}

window.RashkoBranches = { BRANCHES, getBranch, getBranchId, setBranchId };

// ---------- WhatsApp helpers ----------
function whatsappUrl(number, message) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
window.whatsappUrl = whatsappUrl;

// ---------- Menu data ----------
const MENU = [
  { title: "BBQ & KFC", subtitle: "To Begin", items: [
    { name: "KFC Chicken", desc: "KFC Chicken only", price: "₦5000", priceValue: 5000 },
    { name: "KFC with Rice", desc: "KFC Chicken with Rice", price: "₦6,500", priceValue: 6500 },
    { name: "BBQ Chicken", desc: "BBQ Chicken only", price: "₦5,000", priceValue: 5000 },
    { name: "BBQ Chicken and Rice", desc: "BBQ Chicken and Rice", price: "₦6,500", priceValue: 6500 },
    { name: "Extra Chicken", desc: "Extra Chicken", price: "₦4,500", priceValue: 4500 },
  ]},
  { title: "MANDI & KABULI", subtitle: "", items: [
    { name: "Mandi Chicken", desc: "Mandi Chicken only ", price: "₦5,500", priceValue: 5500 },
    { name: "Mandi Meat", desc: "Mandi Meat only", price: "₦6,500", priceValue: 6500 },
    { name: "Kabuli Chicken", desc: "Kabuli Chicken only", price: "₦5,500", priceValue: 5500 },
    { name: "Kabuli Meat", desc: "Kabuli Meat only", price: "₦6,500", priceValue: 6500 },
    { name: "Mixed Chicken", desc: "Mixed Chicken only", price: "₦5,500", priceValue: 5500 },
    { name: "Mixed Meat", desc: "Mixed Meat only", price: "₦6,500", priceValue: 6500 },
  ]},
  { title: "Fish", subtitle: "", items: [
    { name: "Big Fish & Rice", desc: "Big Fish & Rice", price: "₦8000", priceValue: 8000 },
    { name: "Medium Fish & Rice", desc: "Medium Fish & Rice", price: "₦7000", priceValue: 7000 },
    { name: "Small Fish & Rice", desc: "Small Fish & Rice", price: "₦6,500", priceValue: 6500 },
  ]},
  { title: "PEPPER SOUP", subtitle: "", items: [
    { name: "Pepper Soup ", desc: "Pepper Soup only", price: "₦5000", priceValue: 5000 },
    { name: "Pepper Soup", desc: "Pepper Soup & Rice", price: "₦6,500", priceValue: 6500 },
    { name: "Extra Rice", desc: "Extra Rice", price: "₦4000", priceValue: 4000 },
  ]},
  { title: "HOMUS", subtitle: "", items: [
    { name: "Homus Meat", desc: "Homus Meat only", price: "₦6,500", priceValue: 6500 },
    { name: "Homus Chicken", desc: "Homus Chicken only", price: "₦5500", priceValue: 5500 },
  ]},
  { title: "EXTRA", subtitle: "Homus Extras", items: [
    { name: "Chips", desc: "Extra Chips", price: "₦2,500", priceValue: 2500 },
    { name: "Salad", desc: "Extra Salad", price: "₦1000", priceValue: 1000 },
    { name: "Souce", desc: "Extra Souce", price: "300", priceValue: 300 },
    { name: "Takeaway", desc: "Extra Takeaway", price: "500", priceValue: 500 },
  ]},
  { title: "BEVERAGES", subtitle: "Drinks", items: [
    { name: "Banana Juice", desc: "Banana Juice ", price: "₦2,000", priceValue: 2000 },
    { name: "Avocado Juice", desc: "Avocado Juice", price: "₦2,000", priceValue: 2000 },
    { name: "Tamarind Juice", desc: "Tamarind Juice", price: "1000", priceValue: 1000 },
    { name: "Orange Juice", desc: "Orange Juice", price: "1,500", priceValue: 1500 },
    { name: "Watermelon Juice", desc: "Watermelon Juice", price: "1,500", priceValue: 1500 },
    { name: "Pineapple Juice", desc: "Pineapple Juice", price: "1,500", priceValue: 1500 },
    { name: "Oreo Juice", desc: "Oreo Juice", price: "2,000", priceValue: 2000 },
    { name: "Lemon Juice", desc: "Lemon Juice", price: "1,000", priceValue: 1000 },
    { name: "Zobo Juice", desc: "Zobo Juice", price: "1,000", priceValue: 1000 },
    { name: "Water", desc: " Cold & Warm Water", price: "200", priceValue: 200 },
  ]},
  { title: "TEA", subtitle: "", items: [
    { name: " TEA", desc: "Big Tea", price: "₦1000", priceValue: 1000 },
    { name: "Medium TEA", desc: " Medium Tea", price: "800", priceValue: 800 },
    { name: "TEA", desc: "Small Tea", price: "600", priceValue: 600 },
    { name: "Milk Tea", desc: "Big Milk Tea", price: "1800", priceValue: 1800 },
    { name: "Milk Tea", desc: "Small Milk Tea", price: "1000", priceValue: 1000 },
  ]},
];
window.RashkoMenu = MENU;
function formatNaira(n) { return "₦" + n.toLocaleString("en-NG"); }
window.formatNaira = formatNaira;

// ---------- SVG icon set ----------
const ICONS = {
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2h-4a1 1 0 0 1-1-1v-6h-4v6a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2z"/></svg>',
  utensils: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7a3 3 0 0 0 3 3v10"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3z"/></svg>',
  bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  starFilled: '<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  bike: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h2"/></svg>',
  chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  minus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.04 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.887 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.49-8.413z"/></svg>',
};
window.ICONS = ICONS;

// ---------- Header / Footer / WhatsApp float ----------
function escapeHtml(s) { return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c])); }

function renderHeader() {
  const slot = document.getElementById("site-header-slot");
  if (!slot) return;
  const branch = getBranch();
  slot.innerHTML = `
    <header class="site-header">
      <div class="container-narrow site-header__inner">
        <a href="index.html" class="brand">
          <img src="assets/img/rashko-logo.png" alt="Rashko logo">
          <span class="brand__text">
            <span class="brand__name">Rashko</span>
            <span class="brand__sub" data-branch-short>${escapeHtml(branch.shortName)}</span>
          </span>
        </a>
        <div class="branch-picker" data-open="false">
          <button type="button" class="branch-picker__trigger" aria-haspopup="listbox">
            ${ICONS.pin}
            <span data-branch-short>${escapeHtml(branch.shortName)}</span>
            <span class="branch-picker__chevron">${ICONS.chevron}</span>
          </button>
          <ul class="branch-picker__menu" role="listbox">
            <li class="branch-picker__label">Choose branch</li>
            ${BRANCHES.map(b => `
              <li>
                <button type="button" class="branch-picker__item ${b.id === branch.id ? "branch-picker__item--active" : ""}" data-branch-id="${b.id}">
                  <span class="branch-picker__check">${ICONS.check}</span>
                  <span style="flex:1;min-width:0;">
                    <span class="branch-picker__item-name">${escapeHtml(b.shortName)}</span>
                    <span class="branch-picker__item-addr">${escapeHtml(b.address)}</span>
                  </span>
                </button>
              </li>`).join("")}
          </ul>
        </div>
      </div>
    </header>
    <nav class="bottom-nav" aria-label="Primary">
      <ul>
        ${[
          {href:"index.html", label:"Home", icon:ICONS.home},
          {href:"menu.html", label:"Menu", icon:ICONS.utensils},
          {href:"order.html", label:"Order", icon:ICONS.bag},
          {href:"reviews.html", label:"Reviews", icon:ICONS.star},
          {href:"contact.html", label:"Reserve", icon:ICONS.calendar},
        ].map(l => `<li><a href="${l.href}" data-nav="${l.href}">${l.icon}<span>${l.label}</span></a></li>`).join("")}
      </ul>
    </nav>
  `;

  // Mark active link
  const path = (location.pathname.split("/").pop() || "index.html");
  slot.querySelectorAll("[data-nav]").forEach(a => {
    if (a.dataset.nav === path) a.classList.add("is-active");
  });

  // Wire branch picker
  const picker = slot.querySelector(".branch-picker");
  const trigger = picker.querySelector(".branch-picker__trigger");
  trigger.addEventListener("click", e => {
    e.stopPropagation();
    picker.dataset.open = picker.dataset.open === "true" ? "false" : "true";
  });
  document.addEventListener("click", e => {
    if (!picker.contains(e.target)) picker.dataset.open = "false";
  });
  picker.querySelectorAll("[data-branch-id]").forEach(btn => {
    btn.addEventListener("click", () => {
      setBranchId(btn.dataset.branchId);
      picker.dataset.open = "false";
    });
  });
}

function renderFooter() {
  const slot = document.getElementById("site-footer-slot");
  if (!slot) return;
  slot.innerHTML = `
    <footer class="site-footer">
      <div class="container-narrow site-footer__inner">
        <div>
          <h3>Rashko</h3>
          <p>Authentic Arabic cuisine in the heart of Kano — slow-cooked, generously spiced, served with warmth.</p>
        </div>
        <div>
          <p class="eyebrow">Visit</p>
          <p data-branch-address>C41 Gwarzo Road<br>New Site Janbulo, near Next Electro<br>Kano 700252, Nigeria</p>
        </div>
        <div>
          <p class="eyebrow">Hours</p>
          <p>Daily · 11:00 — 23:00<br>Kitchen closes 22:30</p>
          <div class="site-footer__links">
            <a href="menu.html">Menu</a>
            <a href="locations.html">Locations</a>
            <a href="contact.html">Reserve</a>
          </div>
        </div>
      </div>
      <div class="site-footer__bottom container-narrow">
        <span>© ${new Date().getFullYear()} Rashko Restaurant. All rights reserved.</span>
        <span class="site-footer__script">Ahlan wa sahlan</span>
      </div>
    </footer>
  `;
}

function renderWhatsAppFloat() {
  const slot = document.getElementById("wa-float-slot");
  if (!slot) return;
  const branch = getBranch();
  slot.innerHTML = `
    <a href="${whatsappUrl(branch.whatsapp, `Hello Rashko (${branch.shortName})! I'd like to place an order for delivery. 🍽️`)}"
       target="_blank" rel="noopener" class="wa-float" aria-label="Order on WhatsApp" data-wa-float>
      ${ICONS.whatsapp}
      <span class="sr-only">Order on WhatsApp</span>
    </a>
  `;
}

// Refresh whenever branch changes
function refreshBranchUI() {
  const branch = getBranch();
  document.querySelectorAll("[data-branch-short]").forEach(el => el.textContent = branch.shortName);
  document.querySelectorAll("[data-branch-name]").forEach(el => el.textContent = branch.name);
  document.querySelectorAll("[data-branch-hours]").forEach(el => el.textContent = branch.hours);
  document.querySelectorAll("[data-branch-phone-display]").forEach(el => el.textContent = branch.phoneDisplay);
  document.querySelectorAll("[data-branch-phone-link]").forEach(el => {
    el.setAttribute("href", "tel:" + branch.phoneDisplay.replace(/\s+/g, ""));
    if (!el.hasAttribute("data-keep-text")) el.textContent = branch.phoneDisplay;
  });
  document.querySelectorAll("[data-branch-address]").forEach(el => {
    el.innerHTML = branch.addressLines.map(escapeHtml).join("<br>");
  });
  document.querySelectorAll("[data-branch-map]").forEach(el => {
    el.src = `https://www.google.com/maps?q=${branch.mapsQuery}&output=embed`;
  });
  // Update branch-picker menu active state
  document.querySelectorAll(".branch-picker__item").forEach(el => {
    el.classList.toggle("branch-picker__item--active", el.dataset.branchId === branch.id);
  });
  // Update WhatsApp links
  document.querySelectorAll("[data-wa-message]").forEach(el => {
    const tpl = el.dataset.waMessage;
    const msg = tpl.replace(/\{branch\}/g, branch.shortName);
    el.href = whatsappUrl(branch.whatsapp, msg);
  });
  document.querySelectorAll("[data-wa-float]").forEach(el => {
    el.href = whatsappUrl(branch.whatsapp, `Hello Rashko (${branch.shortName})! I'd like to place an order for delivery. 🍽️`);
  });
  // Page-specific hooks
  if (typeof window.onBranchChange === "function") window.onBranchChange(branch);
}

window.addEventListener("rashko:branch-change", refreshBranchUI);

// ---------- Boot ----------
document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  renderWhatsAppFloat();
  refreshBranchUI();
});

// ---------- Icon placeholder hydration ----------
// Use <span data-icon="name"></span> in HTML; this fills it in.
function hydrateIcons(root) {
  (root || document).querySelectorAll("[data-icon]").forEach(el => {
    const name = el.dataset.icon;
    if (ICONS[name]) el.innerHTML = ICONS[name];
  });
}
window.hydrateIcons = hydrateIcons;
document.addEventListener("DOMContentLoaded", () => hydrateIcons(document));
