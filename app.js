/**
 * KAUSHAL SETU — Authentic Indian Artisan Marketplace
 * Interactive Application Engine & Animation Controller
 */

// ============================================================================
// 1. DATA SEEDING: AUTHENTIC ARTISAN CATALOGUE
// ============================================================================
const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: "Handwoven Cotton Strip Doormat (Chindi)",
    category: "Home",
    price: 450,
    maker: "Lakshmi Devi · Mandya, Karnataka",
    craftType: "Chindi Pit-Loom Weaving",
    emoji: "🧶",
    bgClass: "bg-home",
    animType: "unroll",
    description: "A thick, durable floor mat woven entirely by hand using upcycled pure cotton fabric strips from local garment tailoring clusters. High absorbency, vibrant geometric striations, and finished with sturdy braided edges.",
    story: "Lakshmi learned pit-loom weaving from her grandmother in Mandya. She collects clean cotton remnant fabrics from local tailor shops, hand-sorts them by color, and weaves each mat over 6 hours. Every piece diverts textile waste while keeping Mandya's weaving heritage alive.",
    materials: "100% Upcycled Cotton, Natural Vegetable Dyes",
    dimensions: "24\" × 16\" (60cm × 40cm)",
    care: "Machine washable in cold water, line dry under sun.",
    artisanNet: 396
  },
  {
    id: 2,
    name: "Braided Natural Coir Entry Mat",
    category: "Home",
    price: 320,
    maker: "Namma Fibre Guild · Hassan, Karnataka",
    craftType: "Hand-braided Coconut Coir",
    emoji: "🟤",
    bgClass: "bg-home",
    animType: "unroll",
    description: "Rugged, dirt-trapping entryway doormat handcrafted from 100% renewable coconut husk fibre. Braided with tight multi-ply cords for high-traffic doorways and wet monsoons.",
    story: "Namma Fibre is a women's self-help collective in rural Hassan. They extract natural fibres using traditional water soaking without harsh chemical bleaches, providing sustainable secondary farm income to 42 rural households.",
    materials: "Unbleached Natural Golden Coir, Biodegradable Jute Cord",
    dimensions: "28\" × 18\" (71cm × 45cm)",
    care: "Shake out dirt or rinse with plain water. Mild sun dry.",
    artisanNet: 288
  },
  {
    id: 3,
    name: "Sabai Grass Floral Weave Mat",
    category: "Home",
    price: 580,
    maker: "Basanti Soren · Mayurbhanj Weavers",
    craftType: "Tribal Grass Plaiting",
    emoji: "🌿",
    bgClass: "bg-home",
    animType: "unroll",
    description: "Hand-plaited organic Sabai grass floor runner and accent mat. Treated with boiled madder root and turmeric for earthy natural hues that age gracefully.",
    story: "Sabai grass is harvested wild along the forest fringes. Basanti and her sister plait the grass blades into supple, silky ropes before weaving on wooden hand-frames.",
    materials: "Wild Sabai Grass, Natural Forest Dyes",
    dimensions: "30\" × 20\" (76cm × 50cm)",
    care: "Wipe with damp cloth. Keep dry.",
    artisanNet: 510
  },
  {
    id: 4,
    name: "Kasuti Hand-Embroidered Chanderi Kurti",
    category: "Clothing",
    price: 1450,
    maker: "Savita Patil · Dharwad, Karnataka",
    craftType: "GI-Tagged Kasuti Needlework",
    emoji: "👗",
    bgClass: "bg-clothing",
    animType: "unfold",
    description: "Breathable pure Chanderi cotton-silk kurti adorned with intricate GI-tagged Kasuti embroidery along the neckline and cuffs. Features traditional Gopura and chariot motifs.",
    story: "Kasuti is an ancient 7th-century needlecraft practiced in North Karnataka. Savita counts individual warp and weft threads without using stencils, creating reversible motifs where both sides look identical.",
    materials: "Chanderi Cotton-Silk, Mercerized Cotton Threads",
    dimensions: "Size M / L / XL Available",
    care: "Dry clean first wash, gentle handwash in cool water thereafter.",
    artisanNet: 1290
  },
  {
    id: 5,
    name: "Ajrakh Hand Block-Print Cotton Kurta",
    category: "Clothing",
    price: 1190,
    maker: "Ismail Khatri · Kutch, Gujarat",
    craftType: "16-Stage Ajrakh Mud-Resist",
    emoji: "👘",
    bgClass: "bg-clothing",
    animType: "unfold",
    description: "Comfortable straight-fit kurta crafted through traditional 16-stage indigo and madder block printing on soft, breathable river-washed cotton.",
    story: "Ajrakh printing is a meditative craft spanning 4,000 years. The cloth undergoes repeated washings in river waters, oil treatments, and hand-carved teakwood stamping with natural indigo extract.",
    materials: "100% Handloom Cotton, Pure Indigo & Madder Dyes",
    dimensions: "Regular Comfort Fit",
    care: "Cold wash separately with mild liquid detergent.",
    artisanNet: 1045
  },
  {
    id: 6,
    name: "Handcrafted Jute & Cotton Everyday Tote",
    category: "Accessories",
    price: 420,
    maker: "Meera Crafts · Mysuru, Karnataka",
    craftType: "Heavy Jute Braiding & Tailoring",
    emoji: "👜",
    bgClass: "bg-accessories",
    animType: "pop",
    description: "Sturdy eco-friendly shopper tote bag with reinforced handles, inner zip pouch, and natural coconut shell toggle button. Holds up to 12kg of groceries or books.",
    story: "Meera started her small craft unit with two foot-operated sewing machines. Her studio trains young women in pattern making, stitching, and zero-plastic everyday alternatives.",
    materials: "Natural Golden Jute, Unbleached Cotton Canvas Lining",
    dimensions: "16\" Height × 14\" Width × 4\" Base Gusset",
    care: "Spot clean with damp cloth and gentle soap.",
    artisanNet: 375
  },
  {
    id: 7,
    name: "Lambani Mirror-Work Sling Bag",
    category: "Accessories",
    price: 780,
    maker: "Ganga Bai · Sandur Lambani Collective",
    craftType: "Lambani Needlecraft & Cowrie Shells",
    emoji: "👝",
    bgClass: "bg-accessories",
    animType: "pop",
    description: "Vibrant bohemian cross-body bag stitched with traditional nomadic mirror-work, yellow embroidery stitches, and genuine sea cowrie shell trims.",
    story: "The Lambani craft is a UNESCO-recognized nomadic embroidery tradition. Ganga Bai spends 3 days embroidering each bag with geometric amulets traditionally believed to ward off negative energy.",
    materials: "Handloom Khadi, Authentic Mirrors, Cotton Threads",
    dimensions: "10\" × 8\" with 46\" Sturdy Strap",
    care: "Dry clean only to protect delicate mirror work.",
    artisanNet: 690
  },
  {
    id: 8,
    name: "Terracotta Hand-Thrown Table Decor Urn",
    category: "Art",
    price: 540,
    maker: "Ravi Kumbhar · Channapatna, Karnataka",
    craftType: "Wheel-Thrown Clay Pottery",
    emoji: "🏺",
    bgClass: "bg-art",
    animType: "spin",
    description: "Earthy decorative vase shaped on a manual flywheel using riverbed clay from the Kaveri basin. Incised with subtle geometric sunbeams and pit-fired with rice husk smoke.",
    story: "Ravi is a fourth-generation potter in Channapatna. He hand-kneads the clay using foot-treading, shapes the urns without electric molds, and polishes the leather-hard clay with smooth river pebbles.",
    materials: "Kaveri Basin Clay, Organic Rice Husk Ash Smoke",
    dimensions: "8\" Height × 6\" Diameter",
    care: "Dust with soft dry cloth. Avoid harsh scrubbing.",
    artisanNet: 480
  },
  {
    id: 9,
    name: "Macrame & Brass Bell Wall Hanging",
    category: "Wall Hanging",
    price: 690,
    maker: "Threads & Knots Studio · Mandya",
    craftType: "Hand-Knotted Cotton Macrame",
    emoji: "🪡",
    bgClass: "bg-hanging",
    animType: "drop",
    description: "Boho-chic wall tapestry knotted on a seasoned neem-wood branch. Features chevron weave patterns, long flowing fringes, and handcrafted temple brass bells that chime with light breezes.",
    story: "Created by a small artisan guild in Mandya specializing in architectural fiber art. Every branch is sustainably sourced from orchard pruning and hand-sanded with natural beeswax.",
    materials: "Pure Unbleached Cotton Cord, Neem Wood Dowel, Brass Bells",
    dimensions: "28\" Length × 14\" Width",
    care: "Comb fringes gently with wide-tooth comb. Shake out dust.",
    artisanNet: 615
  }
];

// ============================================================================
// 2. STATE MANAGEMENT & STORAGE REPOSITORY
// ============================================================================
class Store {
  constructor() {
    this.products = this.load('ks_products', INITIAL_PRODUCTS);
    this.cart = this.load('ks_cart', []);
    this.orders = this.load('ks_orders', []);
    this.currentUser = this.load('ks_user', null);
    this.currentCategory = 'All';
    this.currentSort = 'featured';
    this.searchQuery = '';
    this.activeModalProduct = null;
    this.activeModalQty = 1;
    this.activeLanguage = 'Kannada';
    this.aiSuggestion = null;
  }

  load(key, fallback) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch (e) {
      console.warn(`LocalStorage access restricted for ${key}:`, e);
      return fallback;
    }
  }

  save(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {
      console.warn(`LocalStorage write error for ${key}:`, e);
    }
  }

  addProduct(newProd) {
    this.products.unshift(newProd);
    this.save('ks_products', this.products);
  }

  deleteProduct(id) {
    this.products = this.products.filter(p => p.id !== id);
    this.save('ks_products', this.products);
  }

  addToCart(productId, qty = 1) {
    const prod = this.products.find(p => p.id === productId);
    if (!prod) return;
    const existing = this.cart.find(i => i.id === productId);
    if (existing) {
      existing.qty += qty;
    } else {
      this.cart.push({ ...prod, qty });
    }
    this.save('ks_cart', this.cart);
  }

  updateCartQty(productId, delta) {
    const item = this.cart.find(i => i.id === productId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
      this.cart = this.cart.filter(i => i.id !== productId);
    }
    this.save('ks_cart', this.cart);
  }

  removeFromCart(productId) {
    this.cart = this.cart.filter(i => i.id !== productId);
    this.save('ks_cart', this.cart);
  }

  createOrder(shippingAddress) {
    if (!this.cart.length) return null;
    const order = {
      id: 'KS-' + Math.floor(100000 + Math.random() * 900000),
      date: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
      items: JSON.parse(JSON.stringify(this.cart)),
      total: this.cart.reduce((sum, item) => sum + (item.price * item.qty), 0),
      artisanTotal: this.cart.reduce((sum, item) => sum + ((item.artisanNet || item.price * 0.9) * item.qty), 0),
      address: shippingAddress,
      status: 'Order Placed · Preparing Craft'
    };
    this.orders.unshift(order);
    this.save('ks_orders', this.orders);
    this.cart = [];
    this.save('ks_cart', this.cart);
    return order;
  }

  setCurrentUser(user) {
    this.currentUser = user;
    this.save('ks_user', this.currentUser);
  }
}

const store = new Store();

// ============================================================================
// 3. UTILITIES & HELPERS
// ============================================================================
const $ = id => document.getElementById(id);
const formatMoney = num => '₹' + Number(num || 0).toLocaleString('en-IN');
const escapeHTML = str => String(str ?? '').replace(/[&<>"']/g, c => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[c]));

function showToast(message, duration = 3000) {
  const toast = $('toast');
  toast.innerHTML = `<span>✨</span><span>${escapeHTML(message)}</span>`;
  toast.classList.remove('hidden');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.add('hidden'), duration);
}

// ============================================================================
// 4. THE ANIMATION ENGINE: CATEGORY-SPECIFIC CRAFT REVEALS
// ============================================================================
/**
 * Generates realistic SVG & CSS animated stages for each product craft type:
 * 1. Doormat: Rolls unroll downward into flat woven textile with braided tassels.
 * 2. Kurti: Folded textile unfolds gracefully displaying intricate embroidery.
 * 3. Jute Bag: Pop-open volume expansion with swinging handles and tassel bounce.
 * 4. Terracotta: Rotating pottery wheel turntable reveal.
 * 5. Wall Hanging: Gravity drop and pendulum sway with brass bells.
 */
function createAnimationMarkup(product) {
  const animType = product.animType || (
    product.category === 'Home' ? 'unroll' :
    product.category === 'Clothing' ? 'unfold' :
    product.category === 'Accessories' ? 'pop' :
    product.category === 'Art' ? 'spin' : 'drop'
  );

  switch (animType) {
    case 'unroll':
      return `
        <div class="doormat-animation-container animating-unroll" id="craftAnimTarget">
          <div class="doormat-roll-cylinder">
            <div class="cylinder-spiral"></div>
            <span style="font-size:0.6rem; color:#ffe8d6; font-weight:700; letter-spacing:1px;">HANDWOVEN</span>
            <div class="cylinder-spiral"></div>
          </div>
          <div class="doormat-mat">
            <div class="mat-fringe fringe-top">
              ${'<span class="tassel-strand"></span>'.repeat(16)}
            </div>
            <div class="chindi-weave-body">
              <svg viewBox="0 0 200 240" style="position:absolute; inset:0; width:100%; height:100%; opacity:0.18;" aria-hidden="true">
                <pattern id="chindiPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 0 10 L 20 10 M 10 0 L 10 20" stroke="#000" stroke-width="1.2"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#chindiPattern)"/>
              </svg>
            </div>
            <div class="mat-fringe fringe-bottom">
              ${'<span class="tassel-strand"></span>'.repeat(16)}
            </div>
          </div>
        </div>
      `;

    case 'unfold':
      return `
        <div class="kurti-animation-container animating-unfold" id="craftAnimTarget">
          <div class="kurti-stage">
            <svg class="kurti-svg-art" viewBox="0 0 260 340" aria-label="Handmade Kurti Fabric Reveal">
              <defs>
                <linearGradient id="fabricGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="#d65a31"/>
                  <stop offset="100%" stop-color="#9a3412"/>
                </linearGradient>
              </defs>
              <!-- Kurti Body -->
              <path d="M 80 40 L 40 100 L 75 115 L 75 320 L 185 320 L 185 115 L 220 100 L 180 40 Z" fill="url(#fabricGrad)" stroke="#6b2108" stroke-width="2"/>
              <!-- Neckline Embroidery -->
              <path d="M 110 40 Q 130 95 150 40 Z" fill="#fdf8e2" stroke="#d4af37" stroke-width="2"/>
              <!-- Kasuti Needlework Motifs (Gopura & Chariot) -->
              <g stroke="#d4af37" stroke-width="2" fill="none">
                <path d="M 130 110 L 120 130 L 140 130 Z"/>
                <path d="M 115 130 L 145 130 L 130 150 Z"/>
                <circle cx="130" cy="180" r="10"/>
                <circle cx="130" cy="220" r="12"/>
                <!-- Hem stitches -->
                <line x1="75" y1="310" x2="185" y2="310" stroke-dasharray="4,4"/>
              </g>
            </svg>
          </div>
        </div>
      `;

    case 'pop':
      return `
        <div class="bag-animation-container animating-pop" id="craftAnimTarget">
          <div class="bag-stage">
            <svg viewBox="0 0 240 310" style="width:100%; height:100%; filter:drop-shadow(0 15px 25px rgba(60,40,20,0.25));" aria-label="Jute Tote Bag">
              <defs>
                <linearGradient id="juteGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="#d4b483"/>
                  <stop offset="100%" stop-color="#9f7943"/>
                </linearGradient>
              </defs>
              <!-- Handles -->
              <path d="M 80 110 C 80 20, 160 20, 160 110" fill="none" stroke="#684a28" stroke-width="9" stroke-linecap="round"/>
              <path d="M 80 110 C 80 20, 160 20, 160 110" fill="none" stroke="#b08958" stroke-width="4" stroke-linecap="round"/>
              <!-- Main Bag Body -->
              <rect x="40" y="105" width="160" height="185" rx="14" fill="url(#juteGrad)" stroke="#583c1d" stroke-width="2.5"/>
              <!-- Jute cross-stitch texture -->
              <g stroke="#7b562a" stroke-width="1.2" opacity="0.35">
                ${Array.from({length: 12}).map((_, i) => `<line x1="40" y1="${120 + i*14}" x2="200" y2="${120 + i*14}"/>`).join('')}
                ${Array.from({length: 10}).map((_, i) => `<line x1="${55 + i*15}" y1="105" x2="${55 + i*15}" y2="290"/>`).join('')}
              </g>
              <!-- Pocket & Button -->
              <rect x="80" y="150" width="80" height="60" rx="4" fill="#c49e6d" stroke="#694621" stroke-width="1.5"/>
              <circle cx="120" cy="148" r="7" fill="#422912"/>
            </svg>
          </div>
        </div>
      `;

    case 'spin':
      return `
        <div class="pottery-animation-container animating-spin" id="craftAnimTarget">
          <div class="pottery-stage">
            <svg viewBox="0 0 220 280" style="width:200px; height:250px; z-index:2;" aria-label="Hand-thrown Terracotta Urn">
              <defs>
                <linearGradient id="clayGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="#803417"/>
                  <stop offset="40%" stop-color="#d66838"/>
                  <stop offset="70%" stop-color="#ea8254"/>
                  <stop offset="100%" stop-color="#692810"/>
                </linearGradient>
              </defs>
              <!-- Urn Body -->
              <path d="M 70 30 L 150 30 L 140 60 C 185 100, 205 180, 150 240 L 70 240 C 15 180, 35 100, 80 60 Z" fill="url(#clayGrad)" stroke="#4b1b0b" stroke-width="2.5"/>
              <!-- Rim -->
              <ellipse cx="110" cy="30" rx="40" ry="10" fill="#f09165" stroke="#4b1b0b" stroke-width="2"/>
              <!-- Hand Carved Incisions -->
              <path d="M 50 140 Q 110 160 170 140" fill="none" stroke="#ffe3d1" stroke-width="2" stroke-dasharray="5,5"/>
              <path d="M 45 165 Q 110 185 175 165" fill="none" stroke="#ffe3d1" stroke-width="2"/>
              <circle cx="110" cy="100" r="14" fill="#5c200c"/>
              <circle cx="110" cy="100" r="8" fill="#ffe3d1"/>
            </svg>
            <div class="pottery-wheel-base"></div>
          </div>
        </div>
      `;

    case 'drop':
    default:
      return `
        <div class="hanging-animation-container animating-drop" id="craftAnimTarget">
          <div class="hanging-stage">
            <svg viewBox="0 0 240 330" style="width:220px; height:320px;" aria-label="Macrame Wall Hanging">
              <!-- Hanging cord -->
              <line x1="120" y1="15" x2="35" y2="55" stroke="#cbb28d" stroke-width="3"/>
              <line x1="120" y1="15" x2="205" y2="55" stroke="#cbb28d" stroke-width="3"/>
              <circle cx="120" cy="15" r="4" fill="#a48455"/>
              <!-- Wooden Rod -->
              <rect x="25" y="52" width="190" height="12" rx="6" fill="#80562e" stroke="#492d13" stroke-width="1.5"/>
              <!-- Macrame Knots -->
              <g stroke="#3a2512" stroke-width="1" fill="#ede2cb">
                <polygon points="45,64 120,150 195,64 120,80"/>
                <polygon points="55,140 120,210 185,140 120,155" fill="#dfd0b2"/>
                <!-- Fringes -->
                ${Array.from({length: 17}).map((_, i) => `
                  <line x1="${50 + i*8.8}" y1="200" x2="${50 + i*8.8}" y2="305" stroke="#f4ebe0" stroke-width="3.5" stroke-linecap="round"/>
                `).join('')}
                <!-- Brass Bells -->
                <circle cx="70" cy="270" r="6" fill="#d4af37"/>
                <circle cx="120" cy="285" r="7" fill="#d4af37"/>
                <circle cx="170" cy="270" r="6" fill="#d4af37"/>
              </g>
            </svg>
          </div>
        </div>
      `;
  }
}

function replayModalAnimation() {
  const stage = $('animStageBox');
  const target = $('craftAnimTarget');
  if (!stage || !target || !store.activeModalProduct) return;

  const currentProduct = store.activeModalProduct;
  // Trigger DOM recreation for flawless replay
  stage.innerHTML = '';
  // Force microtask tick
  setTimeout(() => {
    stage.innerHTML = createAnimationMarkup(currentProduct);
    const captionMap = {
      unroll: "Doormat unrolling: Handloom cotton warp threads settling with woven bounce.",
      unfold: "Fabric reveal: Reversible Kasuti needlework uncurling on pure Chanderi silk.",
      pop: "3D Tote reveal: Natural golden jute expanding with reinforced strap swing.",
      spin: "Potter's turntable: Wheel-turned Kaveri clay urn revolving under studio light.",
      drop: "Wall tapestry: Hand-knotted macrame settling naturally with brass chime sway."
    };
    $('animStatusCaption').textContent = captionMap[currentProduct.animType] || "Replaying authentic handcraft animation.";
  }, 20);
}

// ============================================================================
// 5. BUYER EXPERIENCE & CATALOGUE RENDERING
// ============================================================================
function getFilteredProducts() {
  const q = store.searchQuery.trim().toLowerCase();
  const cat = store.currentCategory;

  let list = store.products.filter(p => {
    const matchCat = cat === 'All' || p.category === cat;
    if (!matchCat) return false;
    if (!q) return true;
    const searchBlob = [
      p.name,
      p.category,
      p.maker,
      p.craftType || '',
      p.description,
      p.story,
      p.materials || ''
    ].join(' ').toLowerCase();
    return searchBlob.includes(q);
  });

  // Sorting
  if (store.currentSort === 'price-asc') {
    list.sort((a, b) => a.price - b.price);
  } else if (store.currentSort === 'price-desc') {
    list.sort((a, b) => b.price - a.price);
  } else if (store.currentSort === 'name') {
    list.sort((a, b) => a.name.localeCompare(b.name));
  }

  return list;
}

function updateCategoryCounts() {
  const counts = { All: store.products.length, Home: 0, Clothing: 0, Accessories: 0, Art: 0, 'Wall Hanging': 0 };
  store.products.forEach(p => {
    if (counts[p.category] !== undefined) counts[p.category]++;
  });

  if ($('countAll')) $('countAll').textContent = counts.All;
  if ($('countHome')) $('countHome').textContent = counts.Home;
  if ($('countClothing')) $('countClothing').textContent = counts.Clothing;
  if ($('countAccessories')) $('countAccessories').textContent = counts.Accessories;
  if ($('countArt')) $('countArt').textContent = counts.Art;
  if ($('countHanging')) $('countHanging').textContent = counts['Wall Hanging'];
}

function renderProductGrid() {
  const grid = $('productGrid');
  const empty = $('emptyCatalog');
  const resultsCount = $('resultsCount');
  const filtered = getFilteredProducts();

  updateCategoryCounts();

  if (resultsCount) {
    resultsCount.textContent = `${filtered.length} product${filtered.length === 1 ? '' : 's'} found`;
  }

  if (!filtered.length) {
    grid.innerHTML = '';
    empty.classList.remove('hidden');
    return;
  }
  empty.classList.add('hidden');

  grid.innerHTML = filtered.map(p => {
    const animLabel = p.category === 'Home' ? 'Unrolling Mat Reveal' :
                      p.category === 'Clothing' ? 'Fabric Unfold Reveal' :
                      p.category === 'Accessories' ? 'Pop-Open 3D Reveal' :
                      p.category === 'Art' ? 'Potter\'s Wheel Reveal' : 'Wall Drop Reveal';

    return `
      <article class="product-card" data-id="${p.id}" tabindex="0" role="button" aria-label="View details of ${escapeHTML(p.name)}">
        <div class="card-visual-stage ${p.bgClass || 'bg-home'}">
          <span class="craft-origin-pill">${escapeHTML(p.craftType || p.category)}</span>
          <div class="card-svg-preview">
            <div style="font-size: 5rem; display:flex; align-items:center; justify-content:center; height:100%; filter:drop-shadow(0 8px 12px rgba(0,0,0,0.15));">
              ${p.emoji}
            </div>
          </div>
          <div class="card-anim-tag">
            <span>✨</span>
            <span>${animLabel}</span>
          </div>
        </div>

        <div class="card-info">
          <div class="card-maker">
            <span>🌿</span>
            <span>${escapeHTML(p.maker)}</span>
          </div>
          <h3 class="card-title">${escapeHTML(p.name)}</h3>
          <p class="card-desc-snippet">${escapeHTML(p.description)}</p>

          <div class="card-footer">
            <div class="card-price-wrap">
              <span class="card-price">${formatMoney(p.price)}</span>
              <span class="card-artisan-cut">${formatMoney(p.artisanNet || p.price * 0.9)} direct to maker</span>
            </div>
            <button class="card-quick-add-btn" data-add="${p.id}" title="Quick add to shopping bag" aria-label="Add ${escapeHTML(p.name)} to bag">
              +
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Attach card click handlers (separate from quick add)
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.closest('[data-add]')) return;
      openProductModal(+card.dataset.id);
    });
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openProductModal(+card.dataset.id);
      }
    });
  });

  // Attach quick add buttons
  document.querySelectorAll('[data-add]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = +btn.dataset.add;
      store.addToCart(id, 1);
      renderCartUI();
      const p = store.products.find(x => x.id === id);
      showToast(`Added "${p ? p.name : 'Item'}" to your craft bag!`);
    });
  });
}

// ============================================================================
// 6. PRODUCT DETAIL MODAL CONTROLLER (WITH REPLAY ANIMATION)
// ============================================================================
function openProductModal(productId) {
  const p = store.products.find(x => x.id === productId);
  if (!p) return;

  store.activeModalProduct = p;
  store.activeModalQty = 1;

  $('modalCategoryTag').textContent = `${(p.craftType || p.category).toUpperCase()} · ${p.category.toUpperCase()}`;
  $('modalMaker').textContent = p.maker;
  $('modalTitle').textContent = p.name;
  $('modalPrice').textContent = formatMoney(p.price);
  $('modalBtnPrice').textContent = formatMoney(p.price);
  $('modalDescription').textContent = p.description;
  $('modalStory').textContent = p.story;
  $('modalQtyVal').textContent = '1';

  // Render animated stage
  $('animStageBox').innerHTML = createAnimationMarkup(p);

  const captionMap = {
    unroll: "Interactive Craft Experience: Watch how the rolled cotton doormat unrolls into a tactile flat woven mat.",
    unfold: "Interactive Craft Experience: Watch how the traditional fabric unfolds to display Kasuti embroidery.",
    pop: "Interactive Craft Experience: Watch the handcrafted jute bag expand into its 3D everyday shopper volume.",
    spin: "Interactive Craft Experience: Watch the Kaveri terracotta urn rotate on the artisan's wheel.",
    drop: "Interactive Craft Experience: Watch the hand-knotted macrame drop and chime with brass bells."
  };
  $('animStatusCaption').textContent = captionMap[p.animType] || "Interactive handcrafted reveal animation.";

  $('productModal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  $('productModal').classList.add('hidden');
  document.body.style.overflow = '';
}

// ============================================================================
// 7. SHOPPING CART & DEMO ORDER CHECKOUT
// ============================================================================
function renderCartUI() {
  const count = store.cart.reduce((sum, item) => sum + item.qty, 0);
  const cartBadge = $('cartCount');
  if (cartBadge) cartBadge.textContent = count;

  const list = $('cartItemsList');
  if (!list) return;

  if (!store.cart.length) {
    list.innerHTML = `
      <div class="cart-empty-view">
        <span>🧺</span>
        <h3>Your craft bag is empty</h3>
        <p>Explore handmade doormats, kurtis, and crafts directly from rural Indian makers.</p>
      </div>
    `;
    $('cartSubtotal').textContent = '₹0';
    $('cartArtisanShare').textContent = '₹0 (90%)';
    $('cartTotal').textContent = '₹0';
    $('checkoutBtn').disabled = true;
    return;
  }

  const subtotal = store.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const artisanShare = store.cart.reduce((sum, item) => sum + ((item.artisanNet || item.price * 0.9) * item.qty), 0);

  $('cartSubtotal').textContent = formatMoney(subtotal);
  $('cartArtisanShare').textContent = `${formatMoney(artisanShare)} (90%)`;
  $('cartTotal').textContent = formatMoney(subtotal);
  $('checkoutBtn').disabled = false;

  list.innerHTML = store.cart.map(item => `
    <div class="cart-line-item">
      <div class="cart-item-thumb">
        ${item.emoji}
      </div>
      <div class="cart-item-details">
        <h4 class="cart-item-title">${escapeHTML(item.name)}</h4>
        <div class="cart-item-maker">${escapeHTML(item.maker)}</div>
        <div class="cart-item-price">${formatMoney(item.price)} each</div>
      </div>
      <div class="cart-item-actions">
        <div class="cart-qty-ctrl">
          <button data-qty-mod="${item.id}" data-delta="-1" aria-label="Decrease quantity">−</button>
          <span>${item.qty}</span>
          <button data-qty-mod="${item.id}" data-delta="1" aria-label="Increase quantity">+</button>
        </div>
        <button class="cart-remove-btn" data-cart-remove="${item.id}">Remove</button>
      </div>
    </div>
  `).join('');

  // Cart quantity controls
  list.querySelectorAll('[data-qty-mod]').forEach(btn => {
    btn.onclick = () => {
      store.updateCartQty(+btn.dataset.qtyMod, +btn.dataset.delta);
      renderCartUI();
    };
  });

  list.querySelectorAll('[data-cart-remove]').forEach(btn => {
    btn.onclick = () => {
      store.removeFromCart(+btn.dataset.cartRemove);
      renderCartUI();
      showToast('Item removed from your bag');
    };
  });
}

function openCartDrawer() {
  renderCartUI();
  $('cartDrawer').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  $('cartDrawer').classList.add('hidden');
  document.body.style.overflow = '';
}

function handleDemoCheckout() {
  const address = ($('shippingAddress').value || '').trim();
  if (!address) {
    showToast('Please enter a delivery address');
    return;
  }

  const order = store.createOrder(address);
  if (!order) return;

  renderCartUI();
  renderSellerOrders();
  renderBuyerOrders();
  updateKPIs();

  const alert = $('orderStatusAlert');
  alert.innerHTML = `
    🎉 <strong>Demo Order Confirmed! (ID: ${order.id})</strong><br>
    ${formatMoney(order.total)} registered in demo session. The artisan will be credited on simulated dispatch!
  `;
  alert.classList.remove('hidden');
  setTimeout(() => alert.classList.add('hidden'), 5000);

  showToast(`Demo order #${order.id} placed successfully!`);
  setTimeout(() => {
    closeCartDrawer();
    openOrdersModal();
  }, 1200);
}

// ============================================================================
// 8. BUYER ORDERS MODAL
// ============================================================================
function renderBuyerOrders() {
  const list = $('buyerOrdersList');
  const badge = $('orderHistoryBadge');

  if (badge) {
    badge.textContent = store.orders.length;
    badge.classList.toggle('hidden', store.orders.length === 0);
  }

  if (!list) return;

  if (!store.orders.length) {
    list.innerHTML = `
      <div class="cart-empty-view">
        <span>📦</span>
        <h3>No demo orders placed yet</h3>
        <p>Add handcrafted doormats, kurtis or jute bags to your cart and place a demo order to track it here.</p>
      </div>
    `;
    return;
  }

  list.innerHTML = store.orders.map(o => `
    <div class="order-history-card">
      <div class="order-card-header">
        <div>
          <strong class="order-id-tag">Demo Order #${o.id}</strong>
          <span class="order-timestamp">· ${o.date}</span>
        </div>
        <span class="order-status-badge status-received">${escapeHTML(o.status)}</span>
      </div>
      <div class="order-items-snippet">
        ${o.items.map(i => `${escapeHTML(i.name)} (×${i.qty})`).join(', ')}
      </div>
      <div class="order-bottom-bar">
        <div>
          <small class="muted-text">Direct Artisan Payout:</small>
          <strong class="text-green">${formatMoney(o.artisanTotal || o.total * 0.9)}</strong>
        </div>
        <div>
          <small class="muted-text">Order Total:</small>
          <strong>${formatMoney(o.total)}</strong>
        </div>
      </div>
    </div>
  `).join('');
}

function openOrdersModal() {
  renderBuyerOrders();
  $('ordersModal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeOrdersModal() {
  $('ordersModal').classList.add('hidden');
  document.body.style.overflow = '';
}

// ============================================================================
// 9. SELLER CORNER CONTROLLER (LOW-LITERACY & MULTILINGUAL AI)
// ============================================================================
function showSellerView(show) {
  $('shopView').classList.toggle('hidden', show);
  $('sellerView').classList.toggle('hidden', !show);
  $('shopTab').classList.toggle('active', !show);
  $('sellerTab').classList.toggle('active', show);
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (show) {
    // Ensure addPanel is the default visible panel (removes stale hidden classes)
    switchSellerPanel('addPanel');
    renderSellerProducts();
    renderSellerOrders();
    updateKPIs();
  }
}

function switchSellerPanel(panelId) {
  document.querySelectorAll('.seller-tab-panel').forEach(p => {
    const isActive = p.id === panelId;
    p.classList.toggle('active', isActive);
    // Must remove 'hidden' (display:none !important) when activating
    if (isActive) {
      p.classList.remove('hidden');
    } else {
      p.classList.add('hidden');
    }
  });
  document.querySelectorAll('.seller-nav-item').forEach(b => {
    b.classList.toggle('active', b.dataset.panel === panelId);
  });
  if (panelId === 'managePanel') renderSellerProducts();
  if (panelId === 'ordersPanel') renderSellerOrders();
}

function updateKPIs() {
  if ($('kpiProductsCount')) $('kpiProductsCount').textContent = store.products.length;
  if ($('kpiOrdersCount')) $('kpiOrdersCount').textContent = store.orders.length;
  const earnings = store.orders.reduce((sum, o) => sum + (o.artisanTotal || o.total * 0.9), 0);
  if ($('kpiEarnings')) $('kpiEarnings').textContent = formatMoney(earnings);
}

function renderSellerProducts() {
  const container = $('sellerProductsList');
  if (!container) return;

  container.innerHTML = store.products.map(p => `
    <div class="seller-catalog-row">
      <div class="seller-item-main">
        <div class="seller-item-emoji">${p.emoji}</div>
        <div class="seller-item-texts">
          <strong>${escapeHTML(p.name)}</strong>
          <small>${escapeHTML(p.category)} · ${formatMoney(p.price)} · By ${escapeHTML(p.maker)}</small>
        </div>
      </div>
      <div class="seller-row-actions">
        <span class="status-live-pill">● Live in Market</span>
        <button class="delete-listing-btn" data-del="${p.id}">Remove</button>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('[data-del]').forEach(btn => {
    btn.onclick = () => {
      const id = +btn.dataset.del;
      store.deleteProduct(id);
      renderSellerProducts();
      renderProductGrid();
      updateKPIs();
      showToast('Product removed from catalog');
    };
  });
}

function renderSellerOrders() {
  const container = $('sellerOrdersList');
  const badge = $('sellerOrderBadge');
  if (badge) {
    badge.textContent = store.orders.length;
    badge.classList.toggle('hidden', store.orders.length === 0);
  }

  if (!container) return;

  if (!store.orders.length) {
    container.innerHTML = `
      <div class="cart-empty-view">
        <span>🛍️</span>
        <h3>No demo orders received yet</h3>
        <p>Switch to the Shop view, add doormats or kurtis to the cart, and place a demo order to test order fulfillment here.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = store.orders.map(o => `
    <div class="seller-order-card">
      <div class="seller-order-header">
        <span class="order-id-tag">Buyer Order #${o.id}</span>
        <span class="order-status-badge status-received">${escapeHTML(o.status)}</span>
      </div>
      <div class="order-items-snippet">
        <strong>Items to pack:</strong> ${o.items.map(i => `${escapeHTML(i.name)} (×${i.qty})`).join(', ')}
      </div>
      <div class="order-bottom-bar">
        <div>
          <small class="muted-text">Your Net Earning:</small>
          <strong class="text-green">${formatMoney(o.artisanTotal || o.total * 0.9)}</strong>
        </div>
        <div style="display:flex; gap:8px;">
          <button class="btn-outline-small" onclick="updateOrderStatus('${o.id}', 'Packing · Artisan Handcrafted')">Mark Packing</button>
          <button class="btn-primary btn-small" onclick="updateOrderStatus('${o.id}', 'Dispatched via India Post')">Mark Shipped</button>
        </div>
      </div>
    </div>
  `).join('');
}

window.updateOrderStatus = function(orderId, newStatus) {
  const order = store.orders.find(o => o.id === orderId);
  if (order) {
    order.status = newStatus;
    store.save('ks_orders', store.orders);
    renderSellerOrders();
    renderBuyerOrders();
    showToast(`Order #${orderId} marked as: ${newStatus}`);
  }
};

// ============================================================================
// 10. MULTILINGUAL AI HELPER (VOICE & REGIONAL LANGUAGES)
// ============================================================================
const REGIONAL_TEMPLATES = {
  Kannada: {
    welcome: "<strong>ನಮಸ್ಕಾರ! (Namaskara!)</strong><br>ನೀವು ತಯಾರಿಸುವ ಕರಕುಶಲ ವಸ್ತುವಿನ ಬಗ್ಗೆ ಹೇಳಿ (ಉದಾಹರಣೆಗೆ: ಹತ್ತಿ ಡೋರ್‌ಮ್ಯಾಟ್, ಕುರ್ತಿ, ಜೂಟ್ ಬ್ಯಾಗ್). ನಾನು ನಿಮಗಾಗಿ ಮಾರಾಟದ ಪಟ್ಟಿಯನ್ನು ಸಿದ್ಧಪಡಿಸುತ್ತೇನೆ.",
    placeholder: "ಉದಾಹರಣೆಗೆ: ನಾನು ಮಂಡ್ಯದಲ್ಲಿ ಹತ್ತಿ ಸೀರೆಯಿಂದ ಡೋರ್‌ಮ್ಯಾಟ್ ನೇಯುತ್ತೇನೆ...",
    samples: {
      doormat: {
        title: "ಕೈಮಗ್ಗದ ಹತ್ತಿ ಡೋರ್‌ಮ್ಯಾಟ್ (Chindi Doormat)",
        cat: "Home",
        price: 450,
        craft: "ಸಾಂಪ್ರದಾಯಿಕ ಪಿಟ್‌ಲೂಮ್ ನೇಯ್ಗೆ",
        desc: "ಮಂಡ್ಯದ ನೇಕಾರರಿಂದ ಹಳೆಯ ಹತ್ತಿ ಬಟ್ಟೆಗಳನ್ನು ಮರುಬಳಸಿ ತಯಾರಿಸಿದ ಸುಂದರ ಮತ್ತು ದೀರ್ಘಕಾಲ ಬಾಳಿಕೆ ಬರುವ ಕೈಮಗ್ಗ ಡೋರ್‌ಮ್ಯಾಟ್.",
        story: "ನಾನು ಮಂಡ್ಯದ ನೇಕಾರ ಕುಟುಂಬದವಳು. ಪರಿಸರಸ್ನೇಹಿ ವಿಧಾನದಲ್ಲಿ ಪ್ರತಿಯೊಂದು ಮ್ಯಾಟ್ ಅನ್ನು 6 ಗಂಟೆಗಳ ಕಾಲ ಶ್ರಮವಹಿಸಿ ಕೈಯಿಂದಲೇ ನೇಯುತ್ತೇನೆ."
      }
    }
  },
  Hindi: {
    welcome: "<strong>नमस्ते! (Namaste!)</strong><br>आप जो हस्तशिल्प बनाते हैं उसके बारे में बताएं (जैसे सूती पायदान, कुर्ती, जूट बैग)। मैं आपके लिए एक सुंदर उत्पाद सूची तैयार करूंगा।",
    placeholder: "जैसे: मैं हाथ से सूती डोरमैट और दरियां बुनती हूँ...",
    samples: {
      doormat: {
        title: "हस्तनिर्मित सूती पायदान (Handwoven Chindi Doormat)",
        cat: "Home",
        price: 450,
        craft: "पारंपरिक हथकरघा बुनाई",
        desc: "शुद्ध सूती कतरनों से हाथ से बुना गया मजबूत और धोने योग्य पायदान। घर के दरवाजों के लिए सर्वोत्तम।",
        story: "यह उत्पाद ग्रामीण महिलाओं द्वारा पारंपरिक हथकरघे पर बिना किसी मशीन के प्यार और धैर्य से बनाया गया है।"
      }
    }
  },
  Tamil: {
    welcome: "<strong>வணக்கம்! (Vanakkam!)</strong><br>நீங்கள் செய்யும் கைவினைப் பொருள் பற்றி சொல்லுங்கள் (எ.கா. பருத்தி டோர்மேட், குர்தி, சணல் பை). உங்களுக்கான விற்பனைப் பட்டியலை நான் உருவாக்குகிறேன்.",
    placeholder: "எ.கா: நான் பருத்தி துணிகளைக் கொண்டு கால்மிதி நெய்கிறேன்...",
    samples: {
      doormat: {
        title: "கைத்தறி பருத்தி கால்மிதி (Handwoven Cotton Doormat)",
        cat: "Home",
        price: 450,
        craft: "பாரம்பரிய கைத்தறி நெசவு",
        desc: "மறுசுழற்சி செய்யப்பட்ட தூய பருத்தி துணிகளால் கைத்தறியில் நெய்யப்பட்ட உறுதியான கால்மிதி.",
        story: "கிராமப்புற கைவினைஞர்களால் பாரம்பரிய முறையில் நெய்யப்பட்டது. 100% இயற்கை மற்றும் நீடித்து உழைக்கக்கூடியது."
      }
    }
  },
  Telugu: {
    welcome: "<strong>నమస్కారం! (Namaskaram!)</strong><br>మీరు తయారుచేసే చేతిపనుల వస్తువు గురించి చెప్పండి (ఉదా: కాటన్ డోర్‌మాట్, కుర్తీ, జూట్ బ్యాగ్). మీ కోసం నేను ఉత్పత్తి వివరాలను రూపొందిస్తాను.",
    placeholder: "ఉదా: నేను చేతిమగ్గంపై కాటన్ డోర్‌మాట్స్ నేస్తాను...",
    samples: {
      doormat: {
        title: "చేనేత కాటన్ డోర్‌మాట్ (Handwoven Cotton Doormat)",
        cat: "Home",
        price: 450,
        craft: "సాంప్రదాయ చేనేత మగ్గం",
        desc: "స్వచ్ఛమైన కాటన్ వస్త్రాలతో చేతితో నేసిన నాణ్యమైన, మన్నికైన డోర్‌మాట్.",
        story: "గ్రామీణ చేనేత కళాకారుల ద్వారా సంప్రదాయ పద్ధతిలో తయారుచేయబడిన సహజసిద్ధమైన ఉత్పత్తి."
      }
    }
  },
  English: {
    welcome: "<strong>Namaste!</strong><br>Describe what you make (e.g. cotton doormats, embroidered kurtis, jute bags, terracotta pots). I will structure a complete marketplace listing for you.",
    placeholder: "e.g. I weave cotton doormats using pit loom in Mandya...",
    samples: {
      doormat: {
        title: "Handwoven Cotton Chindi Doormat",
        cat: "Home",
        price: 450,
        craft: "Pit-Loom Cotton Weaving",
        desc: "Sturdy, textured doormat woven by hand from upcycled cotton strips. Highly absorbent with braided fringes.",
        story: "Handcrafted in Mandya using heritage pit-loom techniques. Diverts textile scrap into enduring artisan home decor."
      }
    }
  }
};

function initMultilingualAI() {
  const langPills = document.querySelectorAll('.lang-pill');
  langPills.forEach(pill => {
    pill.onclick = () => {
      langPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      store.activeLanguage = pill.dataset.lang;
      const langConfig = REGIONAL_TEMPLATES[store.activeLanguage] || REGIONAL_TEMPLATES.English;
      $('aiWelcomeMsg').innerHTML = langConfig.welcome;
      $('assistantInput').placeholder = langConfig.placeholder;
      showToast(`Language switched to ${store.activeLanguage}`);
    };
  });

  // Speech Recognition (Web Speech API)
  const micBtn = $('voiceMicBtn');
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (SpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    micBtn.onclick = () => {
      const langCodeMap = {
        Kannada: 'kn-IN',
        Hindi: 'hi-IN',
        Tamil: 'ta-IN',
        Telugu: 'te-IN',
        English: 'en-IN'
      };
      recognition.lang = langCodeMap[store.activeLanguage] || 'en-IN';

      try {
        recognition.start();
        micBtn.classList.add('recording');
        $('voiceStatusMsg').classList.remove('hidden');
        $('voiceStatusText').textContent = `Listening in ${store.activeLanguage}... Please describe your craft.`;
      } catch (err) {
        console.warn('SpeechRecognition error or already started:', err);
      }
    };

    recognition.onresult = event => {
      const transcript = event.results[0][0].transcript;
      $('assistantInput').value = transcript;
      micBtn.classList.remove('recording');
      $('voiceStatusMsg').classList.add('hidden');
      processAIAssistant(transcript);
    };

    recognition.onerror = () => {
      micBtn.classList.remove('recording');
      $('voiceStatusMsg').classList.add('hidden');
      showToast('Voice input timed out. You can also type or click an example.');
    };

    recognition.onend = () => {
      micBtn.classList.remove('recording');
      $('voiceStatusMsg').classList.add('hidden');
    };
  } else {
    micBtn.onclick = () => {
      showToast('Browser Speech API not supported on this browser. Please type or click a sample prompt.');
    };
  }

  // Assistant form submission
  $('assistantForm').onsubmit = e => {
    e.preventDefault();
    const txt = $('assistantInput').value.trim();
    if (!txt) return;
    processAIAssistant(txt);
  };

  // Sample prompt chips
  document.querySelectorAll('.sample-prompt-chip').forEach(chip => {
    chip.onclick = () => {
      $('assistantInput').value = chip.dataset.sample;
      processAIAssistant(chip.dataset.sample);
    };
  });

  // Transfer suggestion to Add Product Form
  $('transferToFormBtn').onclick = () => {
    if (!store.aiSuggestion) return;
    const s = store.aiSuggestion;
    $('pName').value = s.title;
    $('pCategory').value = s.category;
    $('pPrice').value = s.price;
    $('pCraftType').value = s.craftType || '';
    $('pDescription').value = s.desc;
    $('pStory').value = s.story;
    $('pMaker').value = store.currentUser ? store.currentUser.name + ' · Mandya' : 'Lakshmi Devi · Mandya';

    switchSellerPanel('addPanel');
    showToast('AI draft copied into product form! Review and click Publish.');
  };
}

function processAIAssistant(inputText) {
  const stream = $('assistantChatStream');
  // Add User bubble
  stream.insertAdjacentHTML('beforeend', `
    <div class="chat-bubble user-bubble">
      <div class="bubble-text">${escapeHTML(inputText)}</div>
    </div>
  `);

  const lang = store.activeLanguage;
  const lower = inputText.toLowerCase();

  // Smart heuristic categorization
  let category = "Home";
  let craftType = "Pit-Loom Weaving";
  let suggestedPrice = 450;
  let title = "Handcrafted Artisan Item";

  if (lower.includes('kurti') || lower.includes('dress') || lower.includes('cloth') || lower.includes('kurta') || lower.includes('embroidery')) {
    category = "Clothing";
    craftType = "Hand-Embroidered Needlework";
    suggestedPrice = 1250;
    title = lang === 'Kannada' ? "ಕಸೂತಿ ಕಸೂತಿ ಚಂದೇರಿ ಕುರ್ತಿ" :
            lang === 'Hindi' ? "कसूती कढ़ाई चंदेरी कुर्ती" : "Kasuti Embroidered Cotton Kurti";
  } else if (lower.includes('bag') || lower.includes('tote') || lower.includes('jute') || lower.includes('pouch')) {
    category = "Accessories";
    craftType = "Handcrafted Jute Braiding";
    suggestedPrice = 390;
    title = lang === 'Kannada' ? "ನೈಸರ್ಗిక ಜೂಟ್ ಬ್ಯಾಗ್" :
            lang === 'Hindi' ? "प्राकृतिक जूट टोट बैग" : "Eco-Friendly Natural Jute Tote";
  } else if (lower.includes('pot') || lower.includes('terracotta') || lower.includes('clay') || lower.includes('vase')) {
    category = "Art";
    craftType = "Wheel-Thrown Clay Pottery";
    suggestedPrice = 520;
    title = lang === 'Kannada' ? "ಟೆರಾಕೋಟಾ ಮಣ್ಣಿನ ಅಲಂಕಾರಿಕ ಪಾತ್ರೆ" :
            lang === 'Hindi' ? "टेराकोटा मिट्टी का फूलदान" : "Terracotta Riverbed Clay Decor";
  } else if (lower.includes('hanging') || lower.includes('wall') || lower.includes('macrame') || lower.includes('tapestry')) {
    category = "Wall Hanging";
    craftType = "Hand-Knotted Macrame";
    suggestedPrice = 680;
    title = lang === 'Kannada' ? "ಮ್ಯಾಕ್ರೇಮ್ ವಾಲ್ ಹ್ಯಾಂಗಿಂಗ್" :
            lang === 'Hindi' ? "मैक्रैम वॉल हैंगिंग" : "Hand-Knotted Cotton Wall Hanging";
  } else {
    // Default to doormat
    category = "Home";
    craftType = "Chindi Pit-Loom Weaving";
    suggestedPrice = 450;
    title = lang === 'Kannada' ? "ಕೈಮಗ್ಗದ ಹತ್ತಿ ಡೋರ್‌ಮ್ಯಾಟ್" :
            lang === 'Hindi' ? "हथकरघा सूती पायदान" : "Handwoven Cotton Strip Doormat";
  }

  const generatedDesc = `Crafted with care using authentic techniques. Features natural materials, durable finishing, and unique artisan texture. Perfect for eco-conscious homes.`;
  const generatedStory = `Directly handcrafted by rural makers celebrating regional heritage. Hand-fashioned over multiple hours of patient labor with zero industrial compromise.`;

  // AI Response bubble in stream
  const responseText = lang === 'Kannada' ?
    `ಧನ್ಯವಾದಗಳು! ನಿಮ್ಮ ವಿವರಣೆಯನ್ನು ಆಧರಿಸಿ ಉತ್ಪನ್ನ ಪಟ್ಟಿಯನ್ನು ಸಿದ್ಧಪಡಿಸಲಾಗಿದೆ. ಕೆಳಗೆ ನೀಡಿರುವ "Transfer to Add Product Form" ಬಟನ್ ಒತ್ತಿ ಇದನ್ನು ಪ್ರಕಟಿಸಿ.` :
    lang === 'Hindi' ?
    `धन्यवाद! आपके विवरण के आधार पर उत्पाद सूची तैयार कर दी गई है। नीचे दिए गए बटन से इसे फॉर्म में कॉपी करें।` :
    `Thank you! We structured your description into a professional marketplace listing with recommended fair pricing. Click below to transfer it to the Add Product form.`;

  stream.insertAdjacentHTML('beforeend', `
    <div class="chat-bubble ai-bubble">
      <div class="ai-avatar">🪷</div>
      <div class="bubble-text">
        ${escapeHTML(responseText)}
      </div>
    </div>
  `);
  stream.scrollTop = stream.scrollHeight;
  $('assistantInput').value = '';

  // Store & display suggestion card
  store.aiSuggestion = {
    title,
    category,
    price: suggestedPrice,
    craftType,
    desc: generatedDesc,
    story: generatedStory
  };

  $('sugTitle').textContent = title;
  $('sugCat').textContent = category;
  $('sugPrice').textContent = formatMoney(suggestedPrice);
  $('sugCraft').textContent = craftType;
  $('sugDesc').textContent = generatedDesc;
  $('sugStory').textContent = generatedStory;

  $('aiSuggestionBox').classList.remove('hidden');
}

// ============================================================================
// 11. AUTHENTICATION & LOGIN/SIGNUP PROTOTYPE
// ============================================================================
function initAuthModal() {
  const modal = $('authModal');
  let currentRole = 'buyer';

  $('authTabBuyer').onclick = () => {
    currentRole = 'buyer';
    $('authTabBuyer').classList.add('active');
    $('authTabSeller').classList.remove('active');
    $('authModalTitle').textContent = 'Sign in as Buyer';
    $('submitAuthLabel').textContent = 'Sign In as Buyer';
    $('authIdentifier').placeholder = '9876543210 or buyer@example.com';
  };

  $('authTabSeller').onclick = () => {
    currentRole = 'seller';
    $('authTabSeller').classList.add('active');
    $('authTabBuyer').classList.remove('active');
    $('authModalTitle').textContent = 'Artisan / Seller Login';
    $('submitAuthLabel').textContent = 'Sign In as Artisan';
    $('authIdentifier').placeholder = '9876543210 or artisan@kaushalsetu.org';
  };

  // Toggle Password Visibility
  $('togglePasswordBtn').onclick = () => {
    const pwd = $('authPassword');
    const isPwd = pwd.type === 'password';
    pwd.type = isPwd ? 'text' : 'password';
    $('togglePasswordBtn').textContent = isPwd ? 'Hide' : 'Show';
  };

  // Password strength meter
  $('authPassword').addEventListener('input', e => {
    const val = e.target.value;
    const fill = $('pwdStrengthFill');
    const label = $('pwdStrengthLabel');

    let score = 0;
    if (val.length >= 6) score += 25;
    if (val.length >= 10) score += 25;
    if (/[0-9]/.test(val)) score += 25;
    if (/[^A-Za-z0-9]/.test(val)) score += 25;

    fill.style.width = score + '%';
    if (score <= 25) {
      fill.style.background = '#c92a2a';
      label.textContent = 'Password strength: Weak';
    } else if (score <= 50) {
      fill.style.background = '#e67700';
      label.textContent = 'Password strength: Medium';
    } else if (score <= 75) {
      fill.style.background = '#2b8a3e';
      label.textContent = 'Password strength: Good';
    } else {
      fill.style.background = '#1f4e38';
      label.textContent = 'Password strength: Excellent & Secure';
    }
  });

  // Demo OTP toggle
  $('requestOtpBtn').onclick = () => {
    $('demoOtpBox').classList.toggle('hidden');
    $('otpInput').value = '4289';
    showToast('Demo OTP 4289 auto-filled for quick prototype test!');
  };

  $('verifyOtpBtn').onclick = () => {
    if ($('otpInput').value.trim() === '4289') {
      loginSuccess(currentRole === 'buyer' ? 'Anita Kumar' : 'Lakshmi Devi', currentRole);
    } else {
      showToast('Invalid OTP. Please enter 4289.');
    }
  };

  // Quick 1-Click Evaluation Login
  $('quickBuyerLoginBtn').onclick = () => loginSuccess('Anita Kumar', 'buyer');
  $('quickArtisanLoginBtn').onclick = () => loginSuccess('Lakshmi Devi', 'seller');

  // Form submit
  $('authForm').onsubmit = e => {
    e.preventDefault();
    const id = $('authIdentifier').value.trim();
    const pwd = $('authPassword').value;
    if (!id || pwd.length < 6) {
      showToast('Please enter a valid mobile/email and at least 6 characters password');
      return;
    }
    loginSuccess(id.split('@')[0], currentRole);
  };
}

function loginSuccess(name, role) {
  const user = { name, role };
  store.setCurrentUser(user);
  updateAuthUI();
  $('authModal').classList.add('hidden');
  document.body.style.overflow = '';
  showToast(`Welcome, ${name}! (${role === 'seller' ? 'Artisan' : 'Buyer'} account active)`);

  if (role === 'seller') {
    showSellerView(true);
  }
}

function updateAuthUI() {
  const bar = $('userGreetingBar');
  const btnLabel = $('authBtnLabel');
  if (store.currentUser) {
    bar.classList.remove('hidden');
    $('greetingText').innerHTML = `Welcome, <strong>${escapeHTML(store.currentUser.name)}</strong> (${store.currentUser.role === 'seller' ? 'Artisan Partner' : 'Buyer Account'})`;
    btnLabel.textContent = store.currentUser.name.split(' ')[0];
  } else {
    bar.classList.add('hidden');
    btnLabel.textContent = 'Sign In';
  }
}

// ============================================================================
// 12. INITIALIZATION & EVENT BINDINGS
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Initial renders
  renderProductGrid();
  renderCartUI();
  renderBuyerOrders();
  updateAuthUI();
  initMultilingualAI();
  initAuthModal();

  // Search input & button
  const searchInput = $('search');
  const clearBtn = $('clearSearch');

  searchInput.addEventListener('input', () => {
    store.searchQuery = searchInput.value;
    clearBtn.classList.toggle('hidden', !searchInput.value);
    renderProductGrid();
  });

  clearBtn.onclick = () => {
    searchInput.value = '';
    store.searchQuery = '';
    clearBtn.classList.add('hidden');
    renderProductGrid();
    searchInput.focus();
  };

  $('searchBtn').onclick = () => {
    store.searchQuery = searchInput.value;
    renderProductGrid();
    $('productsAnchor').scrollIntoView({ behavior: 'smooth' });
  };

  // Quick search tags
  document.querySelectorAll('.quick-tag').forEach(tag => {
    tag.onclick = () => {
      const q = tag.dataset.query;
      searchInput.value = q;
      store.searchQuery = q;
      clearBtn.classList.remove('hidden');
      renderProductGrid();
      $('productsAnchor').scrollIntoView({ behavior: 'smooth' });
    };
  });

  // Sort dropdown
  $('sortBy').addEventListener('change', e => {
    store.currentSort = e.target.value;
    renderProductGrid();
  });

  // Reset search button on empty state
  $('resetSearchBtn').onclick = () => {
    searchInput.value = '';
    store.searchQuery = '';
    store.currentCategory = 'All';
    document.querySelectorAll('.cat-pill').forEach(p => p.classList.toggle('active', p.dataset.cat === 'All'));
    clearBtn.classList.add('hidden');
    renderProductGrid();
  };

  // Category filter pills
  document.querySelectorAll('.cat-pill').forEach(pill => {
    pill.onclick = () => {
      document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      store.currentCategory = pill.dataset.cat;
      renderProductGrid();
    };
  });

  // Footer category links
  document.querySelectorAll('.footer-cat-link').forEach(link => {
    link.onclick = e => {
      e.preventDefault();
      const cat = link.dataset.cat;
      store.currentCategory = cat;
      document.querySelectorAll('.cat-pill').forEach(p => p.classList.toggle('active', p.dataset.cat === cat));
      renderProductGrid();
      $('productsAnchor').scrollIntoView({ behavior: 'smooth' });
    };
  });

  // Navigation tab clicks
  $('shopTab').onclick = () => showSellerView(false);
  $('sellerTab').onclick = () => showSellerView(true);
  $('brandLogo').onclick = e => { e.preventDefault(); showSellerView(false); };
  $('heroSellerCta').onclick = () => showSellerView(true);
  $('footerSellerLink').onclick = e => { e.preventDefault(); showSellerView(true); };
  $('footerAiLink').onclick = e => {
    e.preventDefault();
    showSellerView(true);
    switchSellerPanel('assistantPanel');
  };
  $('exploreBtn').onclick = () => $('productsAnchor').scrollIntoView({ behavior: 'smooth' });

  // Hero interactive mat click: opens doormat detail modal
  $('heroInteractiveMat').onclick = () => openProductModal(1);

  // Cart Drawer toggles
  $('cartBtn').onclick = openCartDrawer;
  $('closeCartBtn').onclick = closeCartDrawer;
  $('drawerBackdrop').onclick = closeCartDrawer;
  $('checkoutBtn').onclick = handleDemoCheckout;

  // Order history
  $('ordersNavBtn').onclick = openOrdersModal;
  $('closeOrdersModalBtn').onclick = closeOrdersModal;
  $('ordersBackdrop').onclick = closeOrdersModal;
  $('footerTrackLink').onclick = e => { e.preventDefault(); openOrdersModal(); };

  // Auth modal toggles
  $('authBtn').onclick = () => {
    $('authModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };
  $('closeAuthModalBtn').onclick = () => {
    $('authModal').classList.add('hidden');
    document.body.style.overflow = '';
  };
  $('authBackdrop').onclick = () => {
    $('authModal').classList.add('hidden');
    document.body.style.overflow = '';
  };
  $('switchRoleBtn').onclick = () => {
    $('authModal').classList.remove('hidden');
    $('authTabSeller').click();
  };
  $('logoutBtn').onclick = () => {
    store.setCurrentUser(null);
    updateAuthUI();
    showToast('Logged out of demo session');
  };

  // Product Detail Modal controls
  $('modalCloseBtn').onclick = closeProductModal;
  $('modalBackdrop').onclick = closeProductModal;
  $('replayAnimBtn').onclick = replayModalAnimation;

  // Modal quantity buttons
  $('modalQtyMinus').onclick = () => {
    if (store.activeModalQty > 1) {
      store.activeModalQty--;
      $('modalQtyVal').textContent = store.activeModalQty;
      $('modalBtnPrice').textContent = formatMoney(store.activeModalProduct.price * store.activeModalQty);
    }
  };
  $('modalQtyPlus').onclick = () => {
    store.activeModalQty++;
    $('modalQtyVal').textContent = store.activeModalQty;
    $('modalBtnPrice').textContent = formatMoney(store.activeModalProduct.price * store.activeModalQty);
  };

  // Modal Add to Cart
  $('modalAddToCartBtn').onclick = () => {
    if (!store.activeModalProduct) return;
    store.addToCart(store.activeModalProduct.id, store.activeModalQty);
    renderCartUI();
    showToast(`Added ${store.activeModalQty} × "${store.activeModalProduct.name}" to your bag!`);
    closeProductModal();
    openCartDrawer();
  };

  // Seller Portal Sidebar Nav
  document.querySelectorAll('.seller-nav-item').forEach(btn => {
    btn.onclick = () => switchSellerPanel(btn.dataset.panel);
  });
  $('refreshCatalogBtn').onclick = () => {
    renderSellerProducts();
    showToast('Catalog refreshed');
  };

  // Quick fill sample data button in seller panel
  $('quickFillSampleBtn').onclick = () => {
    $('pName').value = "Handwoven Coir & Cotton Chevron Doormat";
    $('pCategory').value = "Home";
    $('pPrice').value = "480";
    $('pMaker').value = "Lakshmi Devi · Mandya";
    $('pCraftType').value = "Pit-Loom Double Weaving";
    $('pDescription').value = "Extra-thick entryway mat combining absorbent cotton strips with coarse coconut coir bristles for superior dirt removal.";
    $('pStory').value = "Woven using leftover handloom scraps and organic Hassan coir rope. Takes approximately 5 hours per piece.";
    showToast('Sample doormat data loaded into form!');
  };

  // Add Product Form Submission
  $('productForm').onsubmit = e => {
    e.preventDefault();
    const name = $('pName').value.trim();
    const cat = $('pCategory').value;
    const price = Number($('pPrice').value);
    const maker = $('pMaker').value.trim();
    const craft = $('pCraftType').value.trim();
    const desc = $('pDescription').value.trim();
    const story = $('pStory').value.trim();

    // Validation
    let valid = true;
    if (!name) { $('errName').textContent = 'Please enter product name'; valid = false; } else { $('errName').textContent = ''; }
    if (!price || price < 50) { $('errPrice').textContent = 'Minimum price is ₹50'; valid = false; } else { $('errPrice').textContent = ''; }
    if (!maker) { $('errMaker').textContent = 'Please enter artisan name'; valid = false; } else { $('errMaker').textContent = ''; }
    if (!desc) { $('errDescription').textContent = 'Please enter description'; valid = false; } else { $('errDescription').textContent = ''; }

    if (!valid) return;

    const emojiMap = {
      Home: "🧶",
      Clothing: "👗",
      Accessories: "👜",
      Art: "🏺",
      "Wall Hanging": "🪡"
    };

    const animMap = {
      Home: "unroll",
      Clothing: "unfold",
      Accessories: "pop",
      Art: "spin",
      "Wall Hanging": "drop"
    };

    const newProd = {
      id: Date.now(),
      name,
      category: cat,
      price,
      maker,
      craftType: craft || `${cat} Handcraft`,
      emoji: emojiMap[cat] || "✨",
      bgClass: cat === 'Home' ? 'bg-home' : cat === 'Clothing' ? 'bg-clothing' : cat === 'Accessories' ? 'bg-accessories' : cat === 'Art' ? 'bg-art' : 'bg-hanging',
      animType: animMap[cat] || "unroll",
      description: desc,
      story: story || "Handmade with patience by a local artisan using traditional village crafting methods.",
      materials: "100% Handcrafted Artisan Materials",
      dimensions: "Standard Artisan Size",
      care: "Handle with love, gentle care.",
      artisanNet: Math.round(price * 0.9)
    };

    store.addProduct(newProd);
    renderProductGrid();
    renderSellerProducts();
    updateKPIs();

    const successMsg = $('publishSuccessMsg');
    successMsg.innerHTML = `✅ <strong>Published!</strong> "${escapeHTML(name)}" is now live in the Kaushal Setu marketplace. Buyers can now experience its animated reveal!`;
    successMsg.classList.remove('hidden');
    setTimeout(() => successMsg.classList.add('hidden'), 6000);

    e.target.reset();
    showToast('Product successfully published to marketplace!');
  };

  // Keyboard shortcut Ctrl+K or / to search
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey && e.key === 'k') || (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA')) {
      e.preventDefault();
      searchInput.focus();
    }
    if (e.key === 'Escape') {
      closeProductModal();
      closeCartDrawer();
      closeOrdersModal();
      $('authModal').classList.add('hidden');
    }
  });
});
