// --- VERİ SETİ (KATEGORİ BAZLI, 5 YIL x 3 KATEGORİ x 7 RENK = 105 TEMSİLİ VERİ) ---
const pantoneColorsCategorized = [
    // 2025 Moda Paleti (Örnek)
    { year: 2025, category: "kadın", name: "Icy Blue", hex: "#a0c4ff" },
    { year: 2025, category: "kadın", name: "Sunlit Coral", hex: "#ff9289" },
    { year: 2025, category: "kadın", name: "Soft Lilac", hex: "#c7a3cc" },
    { year: 2025, category: "kadın", name: "Olive Oil", hex: "#a5a359" },
    { year: 2025, category: "kadın", name: "Vanilla Cream", hex: "#f0e6c7" },
    { year: 2025, category: "kadın", name: "Midnight Teal", hex: "#004953" },
    { year: 2025, category: "kadın", name: "Molten Lava", hex: "#a80000" },

    { year: 2025, category: "erkek", name: "Sage Green", hex: "#8c9f7a" },
    { year: 2025, category: "erkek", name: "Slate Gray", hex: "#5b626e" },
    { year: 2025, category: "erkek", name: "Deep Khaki", hex: "#8c825a" },
    { year: 2025, category: "erkek", name: "Electric Blue", hex: "#2b56e6" },
    { year: 2025, category: "erkek", name: "Burgundy", hex: "#800020" },
    { year: 2025, category: "erkek", name: "White Smoke", hex: "#f5f5f5" },
    { year: 2025, category: "erkek", name: "Burnt Orange", hex: "#cc5500" },

    { year: 2025, category: "çocuk", name: "Sunny Yellow", hex: "#ffc300" },
    { year: 2025, category: "çocuk", name: "Bubble Gum", hex: "#ff85a2" },
    { year: 2025, category: "çocuk", name: "Sky Blue", hex: "#87ceeb" },
    { year: 2025, category: "çocuk", name: "Kiwi Green", hex: "#8ee53f" },
    { year: 2025, category: "çocuk", name: "Red Pop", hex: "#ff474c" },
    { year: 2025, category: "çocuk", name: "Creamy Peach", hex: "#f8d8b9" },
    { year: 2025, category: "çocuk", name: "Dark Denim", hex: "#1560bd" },
    
    // 2024 Moda Paleti
    { year: 2024, category: "kadın", name: "Peach Fuzz", hex: "#ffbe98" },
    { year: 2024, category: "kadın", name: "Strong Yellow", hex: "#e0b000" },
    { year: 2024, category: "kadın", name: "Capri Blue", hex: "#00bfff" },
    { year: 2024, category: "kadın", name: "Mint Sorbet", hex: "#98ff98" },
    { year: 2024, category: "kadın", name: "Dusty Cedar", hex: "#995f5c" },
    { year: 2024, category: "kadın", name: "Apricot Crush", hex: "#fa8072" },
    { year: 2024, category: "kadın", name: "Forest Green", hex: "#228b22" },
    
    { year: 2024, category: "erkek", name: "Deep Teal", hex: "#004d40" },
    { year: 2024, category: "erkek", name: "Rust Brown", hex: "#8b4513" },
    { year: 2024, category: "erkek", name: "Ash Gray", hex: "#b2beb5" },
    { year: 2024, category: "erkek", name: "Stone Blue", hex: "#4a748c" },
    { year: 2024, category: "erkek", name: "Dark Mauve", hex: "#633c5e" },
    { year: 2024, category: "erkek", name: "Warm White", hex: "#f9f6f2" },
    { year: 2024, category: "erkek", name: "Petrol Green", hex: "#006450" },

    { year: 2024, category: "çocuk", name: "Lavender", hex: "#c9a0dc" },
    { year: 2024, category: "çocuk", name: "Aqua Blue", hex: "#00ffff" },
    { year: 2024, category: "çocuk", name: "Mandarin", hex: "#ff8c00" },
    { year: 2024, category: "çocuk", name: "Lime Punch", hex: "#c7f000" },
    { year: 2024, category: "çocuk", name: "Magenta Pink", hex: "#ff00ff" },
    { year: 2024, category: "çocuk", name: "Sandy Beige", hex: "#f4a460" },
    { year: 2024, category: "çocuk", name: "Turquoise", hex: "#40e0d0" },

    // 2023 Moda Paleti
    { year: 2023, category: "kadın", name: "Viva Magenta", hex: "#bb2649" },
    { year: 2023, category: "kadın", name: "Luscious Red", hex: "#d10000" },
    { year: 2023, category: "kadın", name: "Crystal Rose", hex: "#fcdce0" },
    { year: 2023, category: "kadın", name: "Dark Cheddar", hex: "#e59400" },
    { year: 2023, category: "kadın", name: "Classic Green", hex: "#008000" },
    { year: 2023, category: "kadın", name: "Summer Song", hex: "#c9c9e5" },
    { year: 2023, category: "kadın", name: "Desert Flower", hex: "#a46039" },

    { year: 2023, category: "erkek", name: "Dark Olive", hex: "#556b2f" },
    { year: 2023, category: "erkek", name: "Quiet Shade", hex: "#5e6670" },
    { year: 2023, category: "erkek", name: "Lichen", hex: "#87846f" },
    { year: 2023, category: "erkek", name: "Dazzling Blue", hex: "#2f4fbc" },
    { year: 2023, category: "erkek", name: "Spicy Mustard", hex: "#b48c00" },
    { year: 2023, category: "erkek", name: "Tannin", hex: "#987258" },
    { year: 2023, category: "erkek", name: "Warm Taupe", hex: "#b39e94" },

    { year: 2023, category: "çocuk", name: "Bright Pink", hex: "#ff69b4" },
    { year: 2023, category: "çocuk", name: "Orange Pop", hex: "#ff4500" },
    { year: 2023, category: "çocuk", name: "Sunny Lime", hex: "#c3ff00" },
    { year: 2023, category: "çocuk", name: "Deep Violet", hex: "#800080" },
    { year: 2023, category: "çocuk", name: "Ocean Blue", hex: "#4682b4" },
    { year: 2023, category: "çocuk", name: "Sweet Mint", hex: "#a6e3d2" },
    { year: 2023, category: "çocuk", name: "Tangerine", hex: "#f28500" },

    // 2022 Moda Paleti
    { year: 2022, category: "kadın", name: "Very Peri", hex: "#6768ab" },
    { year: 2022, category: "kadın", name: "Skydiver", hex: "#004b8d" },
    { year: 2022, category: "kadın", name: "Innuendo", hex: "#b360a6" },
    { year: 2022, category: "kadın", name: "Daffodil", hex: "#ffff31" },
    { year: 2022, category: "kadın", name: "Poinciana", hex: "#e51a4c" },
    { year: 2022, category: "kadın", name: "Spring Crocus", hex: "#8a5895" },
    { year: 2022, category: "kadın", name: "Basil", hex: "#7a8a68" },

    { year: 2022, category: "erkek", name: "Navy Blue", hex: "#000080" },
    { year: 2022, category: "erkek", name: "Ultimate Gray", hex: "#939597" },
    { year: 2022, category: "erkek", name: "Rhodo Red", hex: "#cc6666" },
    { year: 2022, category: "erkek", name: "Summer Green", hex: "#6b8e23" },
    { year: 2022, category: "erkek", name: "Winery", hex: "#800040" },
    { year: 2022, category: "erkek", name: "Potting Soil", hex: "#4a3b3a" },
    { year: 2022, category: "erkek", name: "Perfect Pale", hex: "#f0e68c" },

    { year: 2022, category: "çocuk", name: "Electric Green", hex: "#7df9ff" },
    { year: 2022, category: "çocuk", name: "Coral Reef", hex: "#ff7f50" },
    { year: 2022, category: "çocuk", name: "Sunlight", hex: "#f9d74a" },
    { year: 2022, category: "çocuk", name: "Cerulean", hex: "#007ba7" },
    { year: 2022, category: "çocuk", name: "Cotton Candy", hex: "#ffbcd9" },
    { year: 2022, category: "çocuk", name: "Lemon Zest", hex: "#fde188" },
    { year: 2022, category: "çocuk", name: "Mint Chip", hex: "#4cc3a4" },

    // 2021 Moda Paleti
    { year: 2021, category: "kadın", name: "Dusty Rose", hex: "#d1b2b2" },
    { year: 2021, category: "kadın", name: "Illuminating", hex: "#f5df4d" },
    { year: 2021, category: "kadın", name: "Amethyst Orchid", hex: "#9966cc" },
    { year: 2021, category: "kadın", name: "French Blue", hex: "#0072b0" },
    { year: 2021, category: "kadın", name: "Rust", hex: "#b7410e" },
    { year: 2021, category: "kadın", name: "Burnished Lilac", hex: "#a490a6" },
    { year: 2021, category: "kadın", name: "Fired Brick", hex: "#b22222" },

    { year: 2021, category: "erkek", name: "Charcoal Gray", hex: "#36454f" },
    { year: 2021, category: "erkek", name: "Classic Blue", hex: "#0f4c81" },
    { year: 2021, category: "erkek", name: "Military Green", hex: "#556b2f" },
    { year: 2021, category: "erkek", name: "Orange Ochre", hex: "#cc7722" },
    { year: 2021, category: "erkek", name: "Sleet", hex: "#9da1a5" },
    { year: 2021, category: "erkek", name: "Buttercream", hex: "#fff9c7" },
    { year: 2021, category: "erkek", name: "Deep Lake", hex: "#00555e" },

    { year: 2021, category: "çocuk", name: "Sky Blue", hex: "#87ceeb" },
    { year: 2021, category: "çocuk", name: "Flame Orange", hex: "#ff5e00" },
    { year: 2021, category: "çocuk", name: "Bubble Pink", hex: "#ffc0cb" },
    { year: 2021, category: "çocuk", name: "Minty Green", hex: "#00a86b" },
    { year: 2021, category: "çocuk", name: "Violet Blue", hex: "#8a2be2" },
    { year: 2021, category: "çocuk", name: "Saffron", hex: "#f4c430" },
    { year: 2021, category: "çocuk", name: "Soft Grey", hex: "#c9cacb" }
];

const categories = ["kadın", "erkek", "çocuk"];

// --- HSL DÖNÜŞÜM FONKSİYONLARI ---

/** HEX'i HSL'ye Çevirir (Ton: 0-360, Doygunluk/Açıklık: 0-100) */
function hexToHsl(hex) {
    let r = 0, g = 0, b = 0;
    if (hex.length == 7) { 
        r = parseInt(hex.substring(1, 3), 16) / 255;
        g = parseInt(hex.substring(3, 5), 16) / 255;
        b = parseInt(hex.substring(5, 7), 16) / 255;
    }

    let min = Math.min(r, g, b),
        max = Math.max(r, g, b),
        delta = max - min,
        h = 0, s = 0,
        l = (max + min) / 2;

    if (delta !== 0) {
        s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
        switch (max) {
            case r: h = (g - b) / delta + (g < b ? 6 : 0); break;
            case g: h = (b - r) / delta + 2; break;
            case b: h = (r - g) / delta + 4; break;
        }
        h /= 6;
    }
    
    return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        l: Math.round(l * 100)
    };
}

/** HSL değerlerini CSS uyumlu HSL stringine çevirir. */
function hslToCssString(h, s, l) {
    return `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l)}%)`;
}


// --- TAHMİN MANTIĞI: HSL MESAFESİ VE 3 RENK SEÇİMİ ---

/** İki HSL rengi arasındaki ağırlıklı mesafeyi hesaplar. */
function getHslDistance(hsl1, hsl2) {
    const dh = Math.min(Math.abs(hsl1.h - hsl2.h), 360 - Math.abs(hsl1.h - hsl2.h));
    const ds = hsl1.s - hsl2.s;
    const dl = hsl1.l - hsl2.l;
    
    // Ağırlıklı Öklid mesafesi
    const distance = Math.sqrt(
        (dh * dh * 0.5) + // Ton (dairesel, daha az ağırlık)
        (ds * ds * 1.5) + // Doygunluk (daha fazla ağırlık)
        (dl * dl)         // Açıklık (orta ağırlık)
    );
    return distance;
}

/** Belirtilen kategori için HSL ortalamasını ve bu ortalamaya en yakın 3 trend rengini bulur. */
function predictColorForCategory(category) {
    const categoryColors = pantoneColorsCategorized.filter(c => c.category === category);
    
    // 1. HSL Ortalamasını Bul (Merkez Tahmini)
    let totalH = 0, totalS = 0, totalL = 0, count = 0;
    categoryColors.forEach(color => {
        const hsl = hexToHsl(color.hex);
        totalH += hsl.h;
        totalS += hsl.s;
        totalL += hsl.l;
        count++;
    });

    if (count === 0) return { palette: [] };

    const centerHsl = { 
        h: totalH / count, 
        s: totalS / count, 
        l: totalL / count 
    };

    // 2. Uzaklıkları Hesapla
    const rankedColors = categoryColors.map(color => {
        const colorHsl = hexToHsl(color.hex);
        const distance = getHslDistance(centerHsl, colorHsl);
        return {
            ...color,
            hsl: colorHsl,
            distance: distance
        };
    });

    // 3. En Yakın 3 Rengi Bul (En kısa mesafe, en yakın renk)
    rankedColors.sort((a, b) => a.distance - b.distance);

    // İlk 3 benzersiz rengi seç (Aynı isimli renklerin tekrar etmemesi için)
    const uniquePalette = [];
    const names = new Set();

    for (const color of rankedColors) {
        // Renk adının benzersiz olduğundan emin ol
        if (!names.has(color.name)) {
            uniquePalette.push(color);
            names.add(color.name);
        }
        if (uniquePalette.length >= 3) {
            break;
        }
    }
    
    return { palette: uniquePalette };
}

/** Butona basılınca tahmin edilen paleti HTML'de gösterir. */
function showPredictedPalette(category) {
    const result = predictColorForCategory(category);
    const gridElement = document.getElementById('palette-grid');
    const titleElement = document.getElementById('palette-title');
    
    titleElement.innerHTML = `${category.charAt(0).toUpperCase() + category.slice(1)} Giyim İçin 2026 Tahmini Palet Önerisi`;

    gridElement.innerHTML = '';
    
    if (result.palette.length === 0) {
        gridElement.innerHTML = `<p>Bu kategori için yeterli veri bulunamadı.</p>`;
        return;
    }

    // Yeni paleti (3 rengi) ekle
    result.palette.forEach((color, index) => {
        const card = document.createElement('div');
        card.className = 'palette-color-card';
        const hslString = hslToCssString(color.hsl.h, color.hsl.s, color.hsl.l);
        
        card.innerHTML = `
            <div class="palette-swatch" style="background-color: ${hslString};"></div>
            <p><strong>Öneri ${index + 1}</strong></p>
            <p>${color.name} (Yakın Geçmiş)</p>
            <p>HSL: H:${color.hsl.h}° S:${color.hsl.s}% L:${color.hsl.l}%</p>
        `;
        gridElement.appendChild(card);
    });

    // Tahmin bölümünü görünür yap
    document.getElementById('prediction').style.display = 'block';
}

/** Kategori butonlarına tıklama olaylarını bağlar. */
function setupCategoryButtons() {
    const categories = ["kadın", "erkek", "çocuk"];
    
    categories.forEach(category => {
        const button = document.getElementById(`btn-${category}`);
        button.addEventListener('click', () => {
            showPredictedPalette(category);
            
            // Aktif butonu vurgula
            document.querySelectorAll('.category-button').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
}

/** Geçmiş renk kartlarını HTML'e ekler. */
function displayPastColors() {
    const container = document.getElementById('color-list');
    
    pantoneColorsCategorized.forEach(color => {
        const hsl = hexToHsl(color.hex);
        const hslString = hslToCssString(hsl.h, hsl.s, hsl.l);
        
        const card = document.createElement('div');
        card.className = 'color-card';
        card.innerHTML = `
            <div class="color-swatch" style="background-color: ${hslString};"></div>
            <p><strong>Yıl:</strong> ${color.year}</p>
            <p><strong>Kategori:</strong> ${color.category.charAt(0).toUpperCase() + color.category.slice(1)}</p>
            <p>${color.name}</p>
        `;
        container.appendChild(card);
    });
}

// --- BAŞLANGIÇ ---
document.addEventListener('DOMContentLoaded', () => {
    displayPastColors();
    setupCategoryButtons();
    
    // Varsayılan olarak Kadın Giyim tahminini göster
    showPredictedPalette('kadın');
    const defaultButton = document.getElementById('btn-kadın');
    if (defaultButton) {
        defaultButton.classList.add('active');
    }
});