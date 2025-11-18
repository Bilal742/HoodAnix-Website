export interface Product {
    id: number;
    name: string;
    category: "men" | "women" | "unisex" | "new-arrivals" | "limited-edition";
    price: string;
    image: string;
    heading: string;
}

const allProducts: Product[] = [
    // ---------------- MEN ----------------
    { id: 101, name: "Black Minimalist Hoodie", category: "men", price: "$150", image: "/Men_Hoodies_Collections/men1.jpg", heading: "Explore our Men Collection" },
    { id: 102, name: "Urban Streetwear Red Hoodie", category: "men", price: "$240", image: "/Men_Hoodies_Collections/men2.jpg", heading: "Explore our Men Collection" },
    { id: 103, name: "Urban Streetwear Navy Hoodie", category: "men", price: "$140", image: "/Men_Hoodies_Collections/men3.jpg", heading: "Explore our Men Collection" },
    { id: 104, name: "Forest Green Sporty Hoodie", category: "men", price: "$45", image: "/Men_Hoodies_Collections/men4.jpg", heading: "Explore our Men Collection" },
    { id: 105, name: "Charcoal Grey Casual Hoodie", category: "men", price: "$450", image: "/Men_Hoodies_Collections/men5.jpg", heading: "Explore our Men Collection" },
    { id: 106, name: "Olive Green Techwear Hoodie", category: "men", price: "$450", image: "/Men_Hoodies_Collections/men6.jpg", heading: "Explore our Men Collection" },
    { id: 107, name: "Red Urban Street Hoodie", category: "men", price: "$450", image: "/Men_Hoodies_Collections/men7.jpg", heading: "Explore our Men Collection" },
    { id: 108, name: "Blue Gradient Hoodie", category: "men", price: "$450", image: "/Men_Hoodies_Collections/men8.jpg", heading: "Explore our Men Collection" },
    { id: 109, name: "Yellow Bold Logo Hoodie", category: "men", price: "$450", image: "/Men_Hoodies_Collections/men9.jpg", heading: "Explore our Men Collection" },
    { id: 110, name: "Maroon Classic Hoodie", category: "men", price: "$450", image: "/Men_Hoodies_Collections/men10.jpg", heading: "Explore our Men Collection" },
    { id: 111, name: "White Clean Hoodie", category: "men", price: "$450", image: "/Men_Hoodies_Collections/men11.jpg", heading: "Explore our Men Collection" },
    { id: 112, name: "Orange Vibrant Hoodie", category: "men", price: "$450", image: "/Men_Hoodies_Collections/men12.jpg", heading: "Explore our Men Collection" },

    // ---------------- WOMEN ----------------
    { id: 201, name: "Soft Pink Aesthetic Hoodie", category: "women", price: "$50", image: "/Women_Hoodies_Collections/bg1.jpg", heading: "Explore our Women Collection" },
    { id: 202, name: "White Clean Minimal Hoodie", category: "women", price: "$50", image: "/Women_Hoodies_Collections/bg2.jpg", heading: "Explore our Women Collection" },
    { id: 203, name: "Lavender Cozy Hoodie", category: "women", price: "$50", image: "/Women_Hoodies_Collections/bg3.jpg", heading: "Explore our Women Collection" },
    { id: 204, name: "Black Elegant Fashion Hoodie", category: "women", price: "$50", image: "/Women_Hoodies_Collections/bg4.jpg", heading: "Explore our Women Collection" },
    { id: 205, name: "Beige Neutral Hoodie", category: "women", price: "$50", image: "/Women_Hoodies_Collections/bg5.jpg", heading: "Explore our Women Collection" },
    { id: 206, name: "Sky Blue Casual Hoodie", category: "women", price: "$50", image: "/Women_Hoodies_Collections/bg6.jpg", heading: "Explore our Women Collection" },
    { id: 207, name: "Red Bold Vibrant Hoodie", category: "women", price: "$50", image: "/Women_Hoodies_Collections/bg7.jpg", heading: "Explore our Women Collection" },
    { id: 208, name: "Purple Gradient Hoodie", category: "women", price: "$50", image: "/Women_Hoodies_Collections/bg8.jpg", heading: "Explore our Women Collection" },
    { id: 209, name: "Brown Coffee-Tone Hoodie", category: "women", price: "$50", image: "/Women_Hoodies_Collections/bg9.jpg", heading: "Explore our Women Collection" },
    { id: 210, name: "White & Black Contrast Hoodie", category: "women", price: "$50", image: "/Women_Hoodies_Collections/bg10.jpg", heading: "Explore our Women Collection" },
    { id: 211, name: "Retro 90s Color Splash Hoodie", category: "women", price: "$50", image: "/Women_Hoodies_Collections/bg11.jpg", heading: "Explore our Women Collection" },
    { id: 212, name: "90s Neon Street Hoodie", category: "women", price: "$50", image: "/Women_Hoodies_Collections/bg12.jpg", heading: "Explore our Women Collection" },

    // ---------------- UNISEX ----------------
    { id: 301, name: "Minimalist Unisex Black Hoodie", category: "unisex", price: "$48", image: "/Unisex_Hoodies_Collections/bg1.jpg", heading: "Explore our Unisex Collection" },
    { id: 302, name: "Blue Urban Unisex Hoodie", category: "unisex", price: "$48", image: "/Unisex_Hoodies_Collections/bg10.jpg", heading: "Explore our Unisex Collection" },
    { id: 303, name: "Futuristic Techwear Hoodie", category: "unisex", price: "$48", image: "/Unisex_Hoodies_Collections/bg3.jpg", heading: "Explore our Unisex Collection" },
    { id: 304, name: "Gradient Colorflow Hoodie", category: "unisex", price: "$48", image: "/Unisex_Hoodies_Collections/bg4.jpg", heading: "Explore our Unisex Collection" },
    { id: 305, name: "Retro Street Graphic Hoodie", category: "unisex", price: "$48", image: "/Unisex_Hoodies_Collections/bg5.jpg", heading: "Explore our Unisex Collection" },
    { id: 306, name: "Classic White Clean Hoodie", category: "unisex", price: "$48", image: "/Unisex_Hoodies_Collections/bg6.jpg", heading: "Explore our Unisex Collection" },
    { id: 307, name: "Dual-Tone White Hoodie", category: "unisex", price: "$48", image: "/Unisex_Hoodies_Collections/bg7.jpg", heading: "Explore our Unisex Collection" },
    { id: 308, name: "Urban Camouflage Hoodie", category: "unisex", price: "$48", image: "/Unisex_Hoodies_Collections/bg8.jpg", heading: "Explore our Unisex Collection" },
    { id: 309, name: "Rainbow Swirl Hoodie – HoodAnix", category: "unisex", price: "$48", image: "/Unisex_Hoodies_Collections/bg9.jpg", heading: "Explore our Unisex Collection" },
    { id: 310, name: "Oversized Urban Street Hoodie", category: "unisex", price: "$48", image: "/Unisex_Hoodies_Collections/bg2.jpg", heading: "Explore our Unisex Collection" },
    { id: 311, name: "Premium Velvet Texture Hoodie", category: "unisex", price: "$48", image: "/Unisex_Hoodies_Collections/bg11.jpg", heading: "Explore our Unisex Collection" },
    { id: 312, name: "Two-Tone Split Hoodie", category: "unisex", price: "$48", image: "/Unisex_Hoodies_Collections/bg12.jpg", heading: "Explore our Unisex Collection" },

    // ---------------- NEW_ARRIVALS ----------------
    { id: 301, name: "Minimalist Black Premium Hoodie", category: "new-arrivals", price: "$48", image: "/New_Arrivals_Hoodies_Collections/bg1.jpg", heading: "Explore our new-arrivals Collection" },

    { id: 302, name: "Urban Red Streetwear Hoodie", category: "new-arrivals", price: "$48", image: "/New_Arrivals_Hoodies_Collections/bg2.jpg", heading: "Explore our new-arrivals Collection" },

    { id: 303, name: "Navy Blue Classic Hoodie", category: "new-arrivals", price: "$48", image: "/New_Arrivals_Hoodies_Collections/bg3.jpg", heading: "Explore our new-arrivals Collection" },

    { id: 304, name: "Forest Green Sporty Hoodie", category: "new-arrivals", price: "$48", image: "/New_Arrivals_Hoodies_Collections/bg4.jpg", heading: "Explore our new-arrivals Collection" },

    { id: 305, name: "Grey Casual Everyday Hoodie", category: "new-arrivals", price: "$48", image: "/New_Arrivals_Hoodies_Collections/bg5.jpg", heading: "Explore our new-arrivals Collection" },

    { id: 306, name: "Orange Aesthetic Hoodie", category: "new-arrivals", price: "$48", image: "/New_Arrivals_Hoodies_Collections/bg6.jpg", heading: "Explore our new-arrivals Collection" },

    { id: 307, name: "White Minimal Clean Hoodie", category: "new-arrivals", price: "$48", image: "/New_Arrivals_Hoodies_Collections/bg7.jpg", heading: "Explore our new-arrivals Collection" },

    { id: 308, name: "Purple Gradient Hoodie", category: "new-arrivals", price: "$48", image: "/New_Arrivals_Hoodies_Collections/bg8.jpg", heading: "Explore our new-arrivals Collection" },

    { id: 309, name: "Yellow Bold Statement HoodieCool Lavender Soft Hoodie", category: "new-arrivals", price: "$48", image: "/New_Arrivals_Hoodies_Collections/bg9.jpg", heading: "Explore our new-arrivals Collection" },

    { id: 310, name: "Black Techwear Hoodie", category: "new-arrivals", price: "$48", image: "/New_Arrivals_Hoodies_Collections/bg10.jpg", heading: "Explore our new-arrivals Collection" },

    { id: 311, name: "Sky Blue Cozy Hoodie", category: "new-arrivals", price: "$48", image: "/New_Arrivals_Hoodies_Collections/bg11.jpg", heading: "Explore our new-arrivals Collection" },

    { id: 312, name: "Brown Coffee Tone Hoodie", category: "new-arrivals", price: "$48", image: "/New_Arrivals_Hoodies_Collections/bg12.jpg", heading: "Explore our new-arrivals Collection" },


    // limited-edition
    { id: 313, name: "", category: "limited-edition", price: "$48", image: "/Limited_edition_Hoodies_Collections/bg1.jpg", heading: "Explore our limited-edition Collection" },
    { id: 314, name: "", category: "limited-edition", price: "$48", image: "/Limited_edition_Hoodies_Collections/bg2.jpg", heading: "Explore our limited-edition Collection" },
    { id: 315, name: "", category: "limited-edition", price: "$48", image: "/Limited_edition_Hoodies_Collections/bg3.jpg", heading: "Explore our limited-edition Collection" },
    { id: 316, name: "", category: "limited-edition", price: "$48", image: "/Limited_edition_Hoodies_Collections/bg4.jpg", heading: "Explore our limited-edition Collection" },
    { id: 317, name: "", category: "limited-edition", price: "$48", image: "/Limited_edition_Hoodies_Collections/bg5.jpg", heading: "Explore our limited-edition Collection" },
    { id: 318, name: "", category: "limited-edition", price: "$48", image: "/Limited_edition_Hoodies_Collections/bg6.jpg", heading: "Explore our limited-edition Collection" },
    { id: 319, name: "", category: "limited-edition", price: "$48", image: "/Limited_edition_Hoodies_Collections/bg7.jpg", heading: "Explore our limited-edition Collection" },
    { id: 320, name: "", category: "limited-edition", price: "$48", image: "/Limited_edition_Hoodies_Collections/bg8.jpg", heading: "Explore our limited-edition Collection" },
    { id: 321, name: "", category: "limited-edition", price: "$48", image: "/Limited_edition_Hoodies_Collections/bg9.jpg", heading: "Explore our limited-edition Collection" },
    { id: 322, name: "", category: "limited-edition", price: "$48", image: "/Limited_edition_Hoodies_Collections/bg10.jpg", heading: "Explore our limited-edition Collection" },
    { id: 323, name: "", category: "limited-edition", price: "$48", image: "/Limited_edition_Hoodies_Collections/bg11.jpg", heading: "Explore our limited-edition Collection" },
    { id: 324, name: "", category: "limited-edition", price: "$48", image: "/Limited_edition_Hoodies_Collections/bg12.jpg", heading: "Explore our limited-edition Collection" },

    //     // best-sellers
    //     { id: 5, name: "Unisex Hoodie 1", category: "best-sellers", price: "$48", image: "/Men_Hoodies_Collections/men12.jpg" },

];

export default allProducts;
