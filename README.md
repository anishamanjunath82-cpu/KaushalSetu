# KAUSHAL SETU (कौशल सेतु / ಕೌಶಲ ಸೇತು)
### *“Every craft has a living story.”*

> **A digital marketplace bridging rural Indian artisans directly with conscious buyers across India and the globe.**  
> Built for the Hackathon MVP showcase with low-literacy vernacular voice onboarding, direct transparent earnings (88–92% to makers), and tactile animated craft reveals.

---

## 🚀 Quick Start (Run the Project)

You can run this project instantly with either **Python** or **Node.js**:

### Option 1: Python (Recommended, 0 dependencies)
In your terminal, navigate to this project folder and run:
```bash
python -m http.server 3000
```
Then open: **[http://localhost:3000](http://localhost:3000)** in your browser.

### Option 2: Node.js / npx
```bash
npx --yes serve .
# or
npx --yes http-server -p 3000
```

---

## 🌟 The Priority Feature: Animated Product Experience

Unlike standard static e-commerce catalogs that treat handmade crafts as commodity SKU numbers, **Kaushal Setu** provides an interactive craft reveal tailored to each product category:

1. **Doormats & Mats (Home & Living)**:
   - **Animation**: The rolled mat begins as a 3D cylindrical roll and smoothly unrolls vertically into a textured flat woven mat with colorful chindi strips, woven warp threads, and braided fringe tassels.
   - **Replay Control**: Click the **`↻ Replay Reveal Animation`** button to re-trigger the unrolling motion at any time.
2. **Handloom Kurtis (Clothing)**:
   - **Animation**: Fabric unfold reveal with layered drape, displaying authentic GI-tagged Kasuti needlework along the neckline and cuffs.
3. **Everyday Jute Totes (Bags & Accessories)**:
   - **Animation**: Pop-open 3D volume reveal with swinging reinforced straps and coconut shell toggle detail.
4. **Kaveri Terracotta Urns (Art & Pottery)**:
   - **Animation**: Smooth 360° turntable spin on a potter’s flywheel revealing hand-carved incisions and warm clay sheen.
5. **Hand-Knotted Macrame (Wall Hangings)**:
   - **Animation**: Gravity drop from a seasoned neem-wood rod with pendulum sway and swinging brass bells.
6. **Accessibility**:
   - Fully supports `prefers-reduced-motion` with dignified graceful fades for motion-sensitive users.

---

## 🛠️ Key Capabilities & User Flows

### 1. Buyer Journey
- **Brand Header & Live Search**: Instant filtering across titles, materials, techniques, and artisan names. (Try searching `"doormat"` or clicking the quick tag).
- **Category Filter Pills**: Filter across *All Crafts*, *Home & Living*, *Clothing*, *Accessories*, *Art & Decor*, and *Wall Hangings* with live stock counters.
- **Detailed Artisan Provenance**: Each modal reveals who made the piece, their village/region, the heritage technique, hours taken, materials, and direct revenue breakdown.
- **Cart & Simulated Checkout**:
  - Add to bag with quantity selectors (+ / -).
  - Slide-in cart drawer showing subtotal, 90% direct artisan share, and free demo delivery.
  - One-click **Place Demo Order** (clearly marked as simulated order; zero payment taken).
- **Order Tracking**: Review placed demo orders in the *My Orders* modal anytime.

### 2. Seller Corner (Designed for Rural Artisans)
- **Low-Literacy Friendly**: Clean visual icons, high contrast, zero business jargon.
- **Guided Add Product Form**:
  - Live client validation with polite error indicators.
  - "Load Sample Doormat Data" button for rapid demo testing.
  - Real-time catalog publish: Newly added products appear immediately in the shop view!
- **My Products Catalog**: Manage active listings with live status indicators and remove actions.
- **Buyer Orders Board**: View incoming orders placed by buyers and update dispatch status (*"Mark Packing"*, *"Mark Shipped"*).

### 3. Multilingual Vernacular Voice AI Assistant
- **Supported Regional Languages**:
  - **ಕನ್ನಡ (Kannada)**
  - **हिन्दी (Hindi)**
  - **English**
  - **தமிழ் (Tamil)**
  - **తెలుగు (Telugu)**
- **Voice Dictation**: Uses browser Speech Recognition (`webkitSpeechRecognition` / `SpeechRecognition`) to let artisans speak their product description hands-free.
- **Intelligent Structured Draft**: Automatically parses rough speech/text into a structured listing (Title, Category, Fair Price, Technique, Buyer Description, and Maker's Story).
- **1-Click Form Transfer**: Click *"Transfer to Add Product Form"* to automatically populate all listing fields.
- **Ethical AI Disclosure**: Labeled clearly as a client-side intelligent prototype ready for Gemini 1.5 Flash / Cloud Speech API backend integration.

### 4. Authentication Prototype
- **Buyer vs. Artisan Sign-In Modes**.
- **Password Visibility Toggle** (Show / Hide).
- **Dynamic Password Strength Meter** with real-time score indicators.
- **Demo SMS OTP Flow**: 4-digit code (`4289`) with 1-click test verification.
- **1-Click Evaluation Logins**:
  - *Login as Buyer (Anita Kumar)*
  - *Login as Artisan (Lakshmi Devi)*

---

## 🔒 Security & Prototype Disclosures
- **No Real Payments**: The checkout is purely simulated for hackathon demonstration. No credit card or banking credentials are requested or stored.
- **Local Client-Side Storage**: Products, bag items, and placed orders persist in `localStorage` for the current browser session.
- **Production Roadmap**:
  - **Auth**: Migrate to Firebase Auth / Supabase with OAuth 2.0 and Twilio/GCP SMS gateway.
  - **Voice AI**: Integrate Google Cloud Speech-to-Text API and Gemini 1.5 Flash with multimodal photo recognition.
  - **Payments**: Integrate UPI 2.0 / Razorpay with automated split disbursement directly to artisan Jan Dhan bank accounts.

---

## 📁 Project Structure
```
kaushal-setu/
├── index.html       # Accessible HTML5 structure with semantic modals, drawers & forms
├── style.css        # Warm Indian artisan design system & CSS/SVG animation engine
├── app.js           # State store, animation replay controller, cart, seller & AI engine
└── README.md        # Documentation, quick start guide & specifications
```

---

## 🌐 Publishing to GitHub Pages
1. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Kaushal Setu Artisan Marketplace MVP"
   ```
2. Create a new repository on GitHub (e.g. `kaushal-setu`).
3. Push to GitHub:
   ```bash
   git remote add origin https://github.com/<your-username>/kaushal-setu.git
   git branch -M main
   git push -u origin main
   ```
4. In GitHub Repo Settings -> **Pages** -> Select `main` branch -> **Save**.
5. Your app will be live at `https://<your-username>.github.io/kaushal-setu/`!
