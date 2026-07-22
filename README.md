# Say Hi — Thai Noodle Bar · website

A modern, multi-page website for **Say Hi (สหาย)**, Brisbane. Brand colours:
deep crimson **red + gold** (taken from the Say Hi logo), warm cream, with the
restaurant's own food photography integrated throughout. Plain HTML/CSS/JS —
no build step, no dependencies. Just upload the folder.

## Pages
```
index.html   → Home (hero, the seven bowls, story/drinks/market teasers)
menu.html    → Full menu with photos (rendered from menu-data.js)
story.html   → Our story / the laneway / press
market.html  → Say Hi Market (fortnightly Sunday street-food market)
visit.html   → Find Us (address, hours, Google map)
```

## Shared building blocks
```
styles.css   → all styling + the red/gold theme (edit :root at the top to tweak colours)
site.js      → injects the shared header, footer, mobile menu, floating Order button
menu.js      → renders the menu page from the data
menu-data.js → the menu (mirrored from the live Clover order page) + photo mapping
assets/images/ → logo + food photos (see that folder's README for what to add)
```

## Preview locally
```
python3 -m http.server 8137
```
then open http://localhost:8137 . (Use a server, not the raw file — the shared
header/footer and menu are built by JavaScript.)

## Deploy to the Ferienwohnung Hagen server (test host)
Static site, so hosting = copy the files:
1. Connect via FTP/SFTP or the host's file manager.
2. Upload the **contents** of this folder into the web root (e.g. `public_html/`,
   `www/`, or a subfolder like `sayhi/`).
3. Visit the URL. No database, no PHP, nothing to configure.

Send me the FTP/SFTP details or hosting panel and I can script/walk through the upload.

## Mobile & SEO

**Mobile:** responsive across phone/tablet/desktop — single-column stacking, a
slide-in nav drawer, horizontally-scrolling menu tabs, a floating Order button,
and no horizontal overflow. Uses `viewport`, fluid `clamp()` type, and lazy-loaded
images.

**SEO built in:**
- Unique `<title>` + meta description per page; one `<h1>` per page; descriptive
  image `alt` text.
- Open Graph + Twitter Card tags (nice link previews when shared).
- **Restaurant structured data (JSON-LD)** — name, address, hours, cuisine,
  price range, geo, menu link and socials — injected by `site.js` (helps Google
  show a rich local listing).
- `sitemap.xml`, `robots.txt`, canonical URLs, `theme-color`, geo meta.

### ⚠️ One step when you get a real domain
The site works on any host as-is (`site.js` fills canonical/OG URLs from the live
address at runtime). But for perfect social-share previews and the sitemap,
do a find-and-replace of **`REPLACE-WITH-YOUR-DOMAIN`** with your real domain
(e.g. `www.sayhithai.com.au`) across: `robots.txt`, `sitemap.xml`, and the 5
`*.html` files. Then submit `sitemap.xml` in Google Search Console. Tell me the
domain and I'll do the replacement in one pass.

## Online ordering
Every **Order Online** button links to the existing Clover shop
`https://sayhi-thainoodlebar.cloveronline.com.au/menu/all`. Checkout & payment
stay in Clover — the current ordering flow is unchanged.

## Updating the menu
Edit `menu-data.js`. Each item: `{ name, desc, price, hot?, img?, order? }`.
`hot:true` adds a ★; `order:` sets a per-item Clover deep link. Prices are a
manual snapshot — the live Clover page stays the source of truth for real-time
pricing and availability. The website intentionally shows **no "sold out" state**
(availability changes too often to mirror by hand).

## What's real vs. to-confirm
- ✅ Menu, prices, logo, food photos — from the brand's own logo + Clover page
- ✅ Shop / laneway / market photos — from the Facebook page (facebook.com/Sayhiburi)
- ✅ Address: 123 Charlotte St, Ground Floor, Brisbane City QLD 4000
- ✅ Hours: 11:00am–7:30pm (from Clover — confirm exact per-day hours)
- ✅ Market: Genki Asian Lane Market, 4th Sunday monthly, 10am–3pm, free entry
      (from the market poster — worth a final confirm)
- 🔎 Venue photos are ~315–960px (from Facebook). Swap in higher-res originals
      anytime by overwriting the same filename in assets/images/ (see its README).
- ☎️ Phone number — to add (placeholder on the Find Us page)
