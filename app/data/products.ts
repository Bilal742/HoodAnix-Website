export interface Product {
    id: number;
    name: string;
    category: "men" | "women" | "unisex" | "new-arrivals" | "limited-edition";
    price: string;
    image: string;
    heading: string;
    description?: string; 
}

const allProducts: Product[] = [
    // ---------------- MEN ----------------
    { 
        id: 101, 
        name: "Black Minimalist Hoodie", 
        category: "men", 
        price: "$150", 
        image: "/Men_Hoodies_Collections/men1.jpg", 
        heading: "Explore our Men Collection",
        description: "This premium black hoodie is crafted from ultra-soft cotton blend for maximum comfort. Its minimalist design makes it perfect for casual outings, layering, or relaxed streetwear looks. With durable stitching and a cozy fit, it offers both style and practicality for everyday wear."
    },
    { 
        id: 102, 
        name: "Urban Streetwear Red Hoodie", 
        category: "men", 
        price: "$240", 
        image: "/Men_Hoodies_Collections/men2.jpg", 
        heading: "Explore our Men Collection",
        description: "Make a bold statement with this vibrant red hoodie inspired by modern streetwear fashion."
    },
    { 
        id: 103, 
        name: "Urban Streetwear Navy Hoodie", 
        category: "men", 
        price: "$140", 
        image: "/Men_Hoodies_Collections/men3.jpg", 
        heading: "Explore our Men Collection",
        description: "A stylish navy hoodie crafted for comfort and a polished urban look."
    },
    { 
        id: 104, 
        name: "Forest Green Sporty Hoodie", 
        category: "men", 
        price: "$45", 
        image: "/Men_Hoodies_Collections/men4.jpg", 
        heading: "Explore our Men Collection",
        description: "Sporty, fresh, and lightweight — perfect for active casual wear."
    },
    { 
        id: 105, 
        name: "Charcoal Grey Casual Hoodie", 
        category: "men", 
        price: "$450", 
        image: "/Men_Hoodies_Collections/men5.jpg", 
        heading: "Explore our Men Collection",
        description: "A premium charcoal grey hoodie with a soft-touch fabric for all-day comfort."
    },
    { 
        id: 106, 
        name: "Olive Green Techwear Hoodie", 
        category: "men", 
        price: "$450", 
        image: "/Men_Hoodies_Collections/men6.jpg", 
        heading: "Explore our Men Collection",
        description: "Techwear-inspired design with sharp lines and a modern aesthetic."
    },
    { 
        id: 107, 
        name: "Red Urban Street Hoodie", 
        category: "men", 
        price: "$450", 
        image: "/Men_Hoodies_Collections/men7.jpg", 
        heading: "Explore our Men Collection",
        description: "A bold red hoodie for the ones who love standing out with confidence."
    },
    { 
        id: 108, 
        name: "Blue Gradient Hoodie", 
        category: "men", 
        price: "$450", 
        image: "/Men_Hoodies_Collections/men8.jpg", 
        heading: "Explore our Men Collection",
        description: "A smooth gradient blend in soothing blue tones for a stylish everyday look."
    },
    { 
        id: 109, 
        name: "Yellow Bold Logo Hoodie", 
        category: "men", 
        price: "$450", 
        image: "/Men_Hoodies_Collections/men9.jpg", 
        heading: "Explore our Men Collection",
        description: "Bright, energetic, and eye-catching — this yellow hoodie brings instant style."
    },
    { 
        id: 110, 
        name: "Maroon Classic Hoodie", 
        category: "men", 
        price: "$450", 
        image: "/Men_Hoodies_Collections/men10.jpg", 
        heading: "Explore our Men Collection",
        description: "Classic maroon elegance blended with soft-touch premium cotton."
    },
    { 
        id: 111, 
        name: "White Clean Hoodie", 
        category: "men", 
        price: "$450", 
        image: "/Men_Hoodies_Collections/men11.jpg", 
        heading: "Explore our Men Collection",
        description: "A crisp, clean white hoodie for a fresh minimal everyday look."
    },
    { 
        id: 112, 
        name: "Orange Vibrant Hoodie", 
        category: "men", 
        price: "$450", 
        image: "/Men_Hoodies_Collections/men12.jpg", 
        heading: "Explore our Men Collection",
        description: "Bright and energetic orange hoodie that guarantees standout style."
    },

    // ---------------- WOMEN ----------------
    {
        id: 201,
        name: "Soft Pink Aesthetic Hoodie",
        category: "women",
        price: "$50",
        image: "/Women_Hoodies_Collections/bg1.jpg",
        heading: "Explore our Women Collection",
        description: "A soft, pastel pink hoodie designed for a cozy and aesthetic everyday look."
    },
    {
        id: 202,
        name: "White Clean Minimal Hoodie",
        category: "women",
        price: "$50",
        image: "/Women_Hoodies_Collections/bg2.jpg",
        heading: "Explore our Women Collection",
        description: "Minimal, clean, and elegant — perfect for a classy casual outfit."
    },
    {
        id: 203,
        name: "Lavender Cozy Hoodie",
        category: "women",
        price: "$50",
        image: "/Women_Hoodies_Collections/bg3.jpg",
        heading: "Explore our Women Collection",
        description: "Soft lavender tones crafted with cozy fabric to keep you warm and stylish."
    },
    {
        id: 204,
        name: "Black Elegant Fashion Hoodie",
        category: "women",
        price: "$50",
        image: "/Women_Hoodies_Collections/bg4.jpg",
        heading: "Explore our Women Collection",
        description: "A sleek black hoodie that blends elegance with everyday comfort."
    },
    {
        id: 205,
        name: "Beige Neutral Hoodie",
        category: "women",
        price: "$50",
        image: "/Women_Hoodies_Collections/bg5.jpg",
        heading: "Explore our Women Collection",
        description: "A soft neutral beige hoodie to match any outfit effortlessly."
    },
    {
        id: 206,
        name: "Sky Blue Casual Hoodie",
        category: "women",
        price: "$50",
        image: "/Women_Hoodies_Collections/bg6.jpg",
        heading: "Explore our Women Collection",
        description: "Fresh sky-blue color with a comfy casual feel for everyday wear."
    },
    {
        id: 207,
        name: "Red Bold Vibrant Hoodie",
        category: "women",
        price: "$50",
        image: "/Women_Hoodies_Collections/bg7.jpg",
        heading: "Explore our Women Collection",
        description: "A bold and confident red hoodie that adds power to your style."
    },
    {
        id: 208,
        name: "Purple Gradient Hoodie",
        category: "women",
        price: "$50",
        image: "/Women_Hoodies_Collections/bg8.jpg",
        heading: "Explore our Women Collection",
        description: "Smooth purple gradient shades for a dreamy and modern outfit."
    },
    {
        id: 209,
        name: "Brown Coffee-Tone Hoodie",
        category: "women",
        price: "$50",
        image: "/Women_Hoodies_Collections/bg9.jpg",
        heading: "Explore our Women Collection",
        description: "Warm coffee-toned hoodie that feels as cozy as your morning latte."
    },
    {
        id: 210,
        name: "White & Black Contrast Hoodie",
        category: "women",
        price: "$50",
        image: "/Women_Hoodies_Collections/bg10.jpg",
        heading: "Explore our Women Collection",
        description: "A clean white hoodie with sharp black contrasts — minimal yet bold."
    },
    {
        id: 211,
        name: "Retro 90s Color Splash Hoodie",
        category: "women",
        price: "$50",
        image: "/Women_Hoodies_Collections/bg11.jpg",
        heading: "Explore our Women Collection",
        description: "90s-inspired color splash design for a fun and vibrant vintage vibe."
    },
    {
        id: 212,
        name: "90s Neon Street Hoodie",
        category: "women",
        price: "$50",
        image: "/Women_Hoodies_Collections/bg12.jpg",
        heading: "Explore our Women Collection",
        description: "Neon shades and retro style combined into a standout fashion hoodie."
    },

    // ---------------- UNISEX ----------------
    {
        id: 301,
        name: "Minimalist Unisex Black Hoodie",
        category: "unisex",
        price: "$48",
        image: "/Unisex_Hoodies_Collections/bg1.jpg",
        heading: "Explore our Unisex Collection",
        description: "A universal black hoodie that suits every style and personality."
    },
    {
        id: 302,
        name: "Blue Urban Unisex Hoodie",
        category: "unisex",
        price: "$48",
        image: "/Unisex_Hoodies_Collections/bg10.jpg",
        heading: "Explore our Unisex Collection",
        description: "Comfortable, modern, and stylish — perfect for urban streetwear lovers."
    },
    {
        id: 303,
        name: "Futuristic Techwear Hoodie",
        category: "unisex",
        price: "$48",
        image: "/Unisex_Hoodies_Collections/bg3.jpg",
        heading: "Explore our Unisex Collection",
        description: "Techwear-inspired futuristic hoodie with a sleek modern look."
    },
    {
        id: 304,
        name: "Gradient Colorflow Hoodie",
        category: "unisex",
        price: "$48",
        image: "/Unisex_Hoodies_Collections/bg4.jpg",
        heading: "Explore our Unisex Collection",
        description: "Soft gradient colors that blend seamlessly for a smooth aesthetic."
    },
    {
        id: 305,
        name: "Retro Street Graphic Hoodie",
        category: "unisex",
        price: "$48",
        image: "/Unisex_Hoodies_Collections/bg5.jpg",
        heading: "Explore our Unisex Collection",
        description: "Vintage-inspired graphic hoodie with bold artistic elements."
    },
    {
        id: 306,
        name: "Classic White Clean Hoodie",
        category: "unisex",
        price: "$48",
        image: "/Unisex_Hoodies_Collections/bg6.jpg",
        heading: "Explore our Unisex Collection",
        description: "A timeless white hoodie that pairs with every outfit."
    },
    {
        id: 307,
        name: "Dual-Tone White Hoodie",
        category: "unisex",
        price: "$48",
        image: "/Unisex_Hoodies_Collections/bg7.jpg",
        heading: "Explore our Unisex Collection",
        description: "Dual-tone design for a clean, modern, and stylish appearance."
    },
    {
        id: 308,
        name: "Urban Camouflage Hoodie",
        category: "unisex",
        price: "$48",
        image: "/Unisex_Hoodies_Collections/bg8.jpg",
        heading: "Explore our Unisex Collection",
        description: "Camouflage design with a modern street-style twist."
    },
    {
        id: 309,
        name: "Rainbow Swirl Hoodie – HoodAnix",
        category: "unisex",
        price: "$48",
        image: "/Unisex_Hoodies_Collections/bg9.jpg",
        heading: "Explore our Unisex Collection",
        description: "A bright and colorful swirl design for a fun and joyful vibe."
    },
    {
        id: 310,
        name: "Oversized Urban Street Hoodie",
        category: "unisex",
        price: "$48",
        image: "/Unisex_Hoodies_Collections/bg2.jpg",
        heading: "Explore our Unisex Collection",
        description: "Oversized fit crafted for relaxed comfort and bold urban style."
    },
    {
        id: 311,
        name: "Premium Velvet Texture Hoodie",
        category: "unisex",
        price: "$48",
        image: "/Unisex_Hoodies_Collections/bg11.jpg",
        heading: "Explore our Unisex Collection",
        description: "Luxurious velvet texture with a soft and premium feel."
    },
    {
        id: 312,
        name: "Two-Tone Split Hoodie",
        category: "unisex",
        price: "$48",
        image: "/Unisex_Hoodies_Collections/bg12.jpg",
        heading: "Explore our Unisex Collection",
        description: "A rare split-color design that adds instant uniqueness to your outfit."
    },

    // ---------------- NEW ARRIVALS ----------------
    {
        id: 301,
        name: "Minimalist Black Premium Hoodie",
        category: "new-arrivals",
        price: "$48",
        image: "/New_Arrivals_Hoodies_Collections/bg1.jpg",
        heading: "Explore our new-arrivals Collection",
        description: "Premium black hoodie with ultra-soft fabric and a clean minimalist finish."
    },
    {
        id: 302,
        name: "Urban Red Streetwear Hoodie",
        category: "new-arrivals",
        price: "$48",
        image: "/New_Arrivals_Hoodies_Collections/bg2.jpg",
        heading: "Explore our new-arrivals Collection",
        description: "Urban red hoodie crafted for comfort with a striking modern look."
    },
    {
        id: 303,
        name: "Navy Blue Classic Hoodie",
        category: "new-arrivals",
        price: "$48",
        image: "/New_Arrivals_Hoodies_Collections/bg3.jpg",
        heading: "Explore our new-arrivals Collection",
        description: "A deep navy hoodie blending classic style with everyday comfort."
    },
    {
        id: 304,
        name: "Forest Green Sporty Hoodie",
        category: "new-arrivals",
        price: "$48",
        image: "/New_Arrivals_Hoodies_Collections/bg4.jpg",
        heading: "Explore our new-arrivals Collection",
        description: "Fresh forest-green color with a sporty fit for active lifestyles."
    },
    {
        id: 305,
        name: "Grey Casual Everyday Hoodie",
        category: "new-arrivals",
        price: "$48",
        image: "/New_Arrivals_Hoodies_Collections/bg5.jpg",
        heading: "Explore our new-arrivals Collection",
        description: "A simple grey hoodie designed for daily comfort and easy styling."
    },
    {
        id: 306,
        name: "Orange Aesthetic Hoodie",
        category: "new-arrivals",
        price: "$48",
        image: "/New_Arrivals_Hoodies_Collections/bg6.jpg",
        heading: "Explore our new-arrivals Collection",
        description: "Vibrant orange hoodie with an aesthetic finish that stands out."
    },
    {
        id: 307,
        name: "White Minimal Clean Hoodie",
        category: "new-arrivals",
        price: "$48",
        image: "/New_Arrivals_Hoodies_Collections/bg7.jpg",
        heading: "Explore our new-arrivals Collection",
        description: "Clean white minimal design crafted with soft premium cotton."
    },
    {
        id: 308,
        name: "Purple Gradient Hoodie",
        category: "new-arrivals",
        price: "$48",
        image: "/New_Arrivals_Hoodies_Collections/bg8.jpg",
        heading: "Explore our new-arrivals Collection",
        description: "Beautiful purple gradient that adds softness and aesthetic charm."
    },
    {
        id: 309,
        name: "Yellow Bold Statement Hoodie",
        category: "new-arrivals",
        price: "$48",
        image: "/New_Arrivals_Hoodies_Collections/bg9.jpg",
        heading: "Explore our new-arrivals Collection",
        description: "Bright yellow with a bold statement look — simple yet powerful."
    },
    {
        id: 310,
        name: "Black Techwear Hoodie",
        category: "new-arrivals",
        price: "$48",
        image: "/New_Arrivals_Hoodies_Collections/bg10.jpg",
        heading: "Explore our new-arrivals Collection",
        description: "Modern techwear design in deep black for a futuristic vibe."
    },
    {
        id: 311,
        name: "Sky Blue Cozy Hoodie",
        category: "new-arrivals",
        price: "$48",
        image: "/New_Arrivals_Hoodies_Collections/bg11.jpg",
        heading: "Explore our new-arrivals Collection",
        description: "A soft sky-blue hoodie that gives a calm and cozy feel."
    },
    {
        id: 312,
        name: "Brown Coffee Tone Hoodie",
        category: "new-arrivals",
        price: "$48",
        image: "/New_Arrivals_Hoodies_Collections/bg12.jpg",
        heading: "Explore our new-arrivals Collection",
        description: "Rich coffee-toned hoodie crafted for warmth and modern style."
    },

    // ---------------- LIMITED EDITION ----------------
    {
        id: 313,
        name: "Limited Edition Hoodie 1",
        category: "limited-edition",
        price: "$48",
        image: "/Limited_edition_Hoodies_Collections/bg1.jpg",
        heading: "Explore our limited-edition Collection",
        description: "Exclusive limited-edition hoodie with rare premium fabric."
    },
    {
        id: 314,
        name: "Limited Edition Hoodie 2",
        category: "limited-edition",
        price: "$48",
        image: "/Limited_edition_Hoodies_Collections/bg2.jpg",
        heading: "Explore our limited-edition Collection",
        description: "A unique limited-edition design crafted for collectors."
    },
    {
        id: 315,
        name: "Limited Edition Hoodie 3",
        category: "limited-edition",
        price: "$48",
        image: "/Limited_edition_Hoodies_Collections/bg3.jpg",
        heading: "Explore our limited-edition Collection",
        description: "Rare color pattern with premium stitching and exclusive detailing."
    },
    {
        id: 316,
        name: "Limited Edition Hoodie 4",
        category: "limited-edition",
        price: "$48",
        image: "/Limited_edition_Hoodies_Collections/bg4.jpg",
        heading: "Explore our limited-edition Collection",
        description: "Modern limited-edition hoodie with smooth texture and premium fit."
    },
    {
        id: 317,
        name: "Limited Edition Hoodie 5",
        category: "limited-edition",
        price: "$48",
        image: "/Limited_edition_Hoodies_Collections/bg5.jpg",
        heading: "Explore our limited-edition Collection",
        description: "Exclusive dark-toned hoodie crafted with luxury-grade material."
    },
    {
        id: 318,
        name: "Limited Edition Hoodie 6",
        category: "limited-edition",
        price: "$48",
        image: "/Limited_edition_Hoodies_Collections/bg6.jpg",
        heading: "Explore our limited-edition Collection",
        description: "Stylish color blend with a soft fabric feel — rare and premium."
    },
    {
        id: 319,
        name: "Limited Edition Hoodie 7",
        category: "limited-edition",
        price: "$48",
        image: "/Limited_edition_Hoodies_Collections/bg7.jpg",
        heading: "Explore our limited-edition Collection",
        description: "Exclusive pattern crafted for fashion lovers looking for uniqueness."
    },
    {
        id: 320,
        name: "Limited Edition Hoodie 8",
        category: "limited-edition",
        price: "$48",
        image: "/Limited_edition_Hoodies_Collections/bg8.jpg",
        heading: "Explore our limited-edition Collection",
        description: "A modern limited-edition design with a futuristic look."
    },
    {
        id: 321,
        name: "Limited Edition Hoodie 9",
        category: "limited-edition",
        price: "$48",
        image: "/Limited_edition_Hoodies_Collections/bg9.jpg",
        heading: "Explore our limited-edition Collection",
        description: "Premium fabric with a rare color tone — available for a short time only."
    },
    {
        id: 322,
        name: "Limited Edition Hoodie 10",
        category: "limited-edition",
        price: "$48",
        image: "/Limited_edition_Hoodies_Collections/bg10.jpg",
        heading: "Explore our limited-edition Collection",
        description: "A sleek and bold limited-edition hoodie with luxury detailing."
    },
    {
        id: 323,
        name: "Limited Edition Hoodie 11",
        category: "limited-edition",
        price: "$48",
        image: "/Limited_edition_Hoodies_Collections/bg11.jpg",
        heading: "Explore our limited-edition Collection",
        description: "Rich fabric texture and rare pattern designed for true collectors."
    },
    {
        id: 324,
        name: "Limited Edition Hoodie 12",
        category: "limited-edition",
        price: "$48",
        image: "/Limited_edition_Hoodies_Collections/bg12.jpg",
        heading: "Explore our limited-edition Collection",
        description: "A bold and artistic limited-edition hoodie with premium finish."
    },

];

export default allProducts;
