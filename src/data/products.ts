export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  features: string[];
  image: string;
  badge?: string;
}

export const categories = [
  {
    id: "amplifiers",
    name: "Amplifiers",
    description: "Pure sound without compromise",
    image:
      "https://usa.yamaha.com/files/A-S3200_ff387f7a00964c55e2840b223fa1a7e3.jpg?impolicy=resize&imwid=800&imhei=800",
  },
  {
    id: "speakers",
    name: "Speakers",
    description: "Hi-End sound for your home",
    image:
      "https://usa.yamaha.com/files/1DF6FEAC9EDF414E8A6B4C0898304E68_12073_4cf4a4eee68d00d5f235d51f02045d25.jpg?impolicy=resize&imwid=800&imhei=800",
  },
  {
    id: "receivers",
    name: "Network Receivers",
    description: "The heart of your audio system",
    image:
      "https://usa.yamaha.com/files/16-R-N2000A_Carousel_Black_Straight_Airplay_c70fddf8fb00e209a0460f9aa7e4b64a.jpg?impolicy=resize&imwid=800&imhei=600",
  },
  {
    id: "turntables",
    name: "Turntables",
    description: "Warm analog sound",
    image:
      "https://usa.yamaha.com/files/GT5000WBicUTKABGLV_piano_v2_996de306fd5bb58c7693ed88642030a9.jpg?impolicy=resize&imwid=800&imhei=800",
  },
  {
    id: "headphones",
    name: "Headphones",
    description: "Personal Hi-Fi experience",
    image:
      "https://usa.yamaha.com/files/Image-Index_YH-5000SE_2000x2000_591fd32846220b9b4cecfdbc966c5b72.jpg?impolicy=resize&imwid=800&imhei=800",
  },
];

export const products: Product[] = [
  // Amplifiers
  {
    id: "a-s3200",
    name: "Yamaha A-S3200",
    category: "amplifiers",
    price: 4999,
    description:
      "Flagship integrated amplifier from the 3000 series. Fully balanced circuitry with a floating and balanced power amplifier. Double-bottom chassis and anti-resonance construction deliver crystal-clear sound reproduction.",
    features: [
      "Power: 2×130W (8 Ohm)",
      "Fully balanced circuit design",
      "Mechanical input selector",
      "Retro-style VU meters",
      "MM/MC phono stage",
      "Double-bottom chassis",
    ],
    image:
      "https://usa.yamaha.com/files/A-S3200_ff387f7a00964c55e2840b223fa1a7e3.jpg?impolicy=resize&imwid=800&imhei=800",
    badge: "Flagship",
  },
  {
    id: "a-s2200",
    name: "Yamaha A-S2200",
    category: "amplifiers",
    price: 2999,
    description:
      "Reference integrated amplifier with exceptional sound quality. Discrete circuit design and MOSFET topology deliver outstanding musicality and detail in every note.",
    features: [
      "Power: 2×90W (8 Ohm)",
      "Discrete circuit design",
      "MOSFET output stage",
      "MM/MC phono stage",
      "Toroidal transformer",
      "Aluminum front panel",
    ],
    image:
      "https://usa.yamaha.com/files/A-S2200_1384d36d93e812603af2ddc4deae2795.jpg?impolicy=resize&imwid=800&imhei=800",
    badge: "Best Seller",
  },
  {
    id: "a-s1200",
    name: "Yamaha A-S1200",
    category: "amplifiers",
    price: 1699,
    description:
      "High-class integrated amplifier with rich, detailed sound. The perfect balance between price and performance for the serious audiophile.",
    features: [
      "Power: 2×90W (8 Ohm)",
      "Discrete circuit design",
      "MM/MC phono stage",
      "Toroidal transformer",
      "Dual speaker terminals",
      "Remote control included",
    ],
    image:
      "https://usa.yamaha.com/files/A-S1200_da6968739b7821a7366c335963cc75be.jpg?impolicy=resize&imwid=800&imhei=800",
  },

  // Speakers
  {
    id: "ns-5000",
    name: "Yamaha NS-5000",
    category: "speakers",
    price: 14999,
    description:
      "Flagship 3-way speaker system. All drivers are made from patented Zylon material — a world first. Absolute precision in sound reproduction for the most demanding listener.",
    features: [
      "3-way speaker system",
      "Zylon material drivers",
      "Frequency range: 26Hz — 40kHz",
      "Sensitivity: 88 dB",
      "Birch plywood cabinet",
      "Weight: 35 kg each",
    ],
    image:
      "https://usa.yamaha.com/files/1DF6FEAC9EDF414E8A6B4C0898304E68_12073_4cf4a4eee68d00d5f235d51f02045d25.jpg?impolicy=resize&imwid=800&imhei=800",
    badge: "Reference",
  },
  {
    id: "ns-3000",
    name: "Yamaha NS-3000",
    category: "speakers",
    price: 5999,
    description:
      "High-End bookshelf speakers, successor to the legendary NS-1000. Yamaha's latest technologies in a compact enclosure for a flawless sound stage.",
    features: [
      "2-way speaker system",
      "160mm Zylon midwoofer",
      "30mm Zylon tweeter",
      "Frequency range: 55Hz — 40kHz",
      "MDF & birch plywood cabinet",
      "Magnetic grille",
    ],
    image:
      "https://usa.yamaha.com/files/NS-2000A_single-speaker-2000x2000-shadows_069672868d27b0dda40ce007988f12aa.jpg?impolicy=resize&imwid=800&imhei=800",
    badge: "New",
  },
  {
    id: "ns-f350",
    name: "Yamaha NS-F350",
    category: "speakers",
    price: 899,
    description:
      "Floor-standing speaker system for home theater and music. Powerful, clean sound with deep bass response in an elegant tower design.",
    features: [
      "3-way floor-standing system",
      "2 × 165mm woofers",
      "Frequency range: 30Hz — 45kHz",
      "Power handling: up to 120W",
      "Impedance: 6 Ohm",
      "Height: 1081mm",
    ],
    image:
      "https://usa.yamaha.com/files/ns-777_1_48d01f1fd3c4e0affbdbd54fa84c7b2b.jpg?impolicy=resize&imwid=800&imhei=800",
  },

  // Receivers
  {
    id: "r-n2000a",
    name: "Yamaha R-N2000A",
    category: "receivers",
    price: 3499,
    description:
      "Next-generation network Hi-Fi receiver. YPAO R.S.C. acoustic calibration technology, built-in streaming, and ESS ES9026PRO DAC for maximum precision.",
    features: [
      "Power: 2×90W (8 Ohm)",
      "ESS ES9026PRO DAC",
      "YPAO R.S.C. calibration",
      "MusicCast / AirPlay 2",
      "Tidal, Spotify, Qobuz",
      "MM phono stage",
    ],
    image:
      "https://usa.yamaha.com/files/16-R-N2000A_Carousel_Black_Straight_Airplay_c70fddf8fb00e209a0460f9aa7e4b64a.jpg?impolicy=resize&imwid=800&imhei=800",
    badge: "Premium",
  },
  {
    id: "r-n1000a",
    name: "Yamaha R-N1000A",
    category: "receivers",
    price: 1799,
    description:
      "Network Hi-Fi receiver with True Sound technology. YPAO auto-calibration, support for all streaming services, and Hi-Res Audio via network and USB.",
    features: [
      "Power: 2×100W (8 Ohm)",
      "ESS DAC chip",
      "YPAO calibration",
      "MusicCast multiroom",
      "Bluetooth / Wi-Fi / AirPlay 2",
      "USB DAC input",
    ],
    image:
      "https://usa.yamaha.com/files/RN1000A_BLfr_ULT__66a8bffe1d56ccfa75cb1f9daef1595e.jpg?impolicy=resize&imwid=800&imhei=800",
    badge: "Best Seller",
  },

  // Turntables
  {
    id: "gt-5000",
    name: "Yamaha GT-5000",
    category: "turntables",
    price: 6999,
    description:
      "High-End turntable with direct drive. Massive platter, balanced output, and a chassis with superior vibration damping for the purest vinyl playback.",
    features: [
      "Direct drive system",
      "3.6 kg platter",
      "Balanced XLR output",
      "Static-balanced tonearm",
      "Vibration damping chassis",
      "Weight: 26.4 kg",
    ],
    image:
      "https://usa.yamaha.com/files/GT5000WBicUTKABGLV_piano_v2_996de306fd5bb58c7693ed88642030a9.jpg?impolicy=resize&imwid=800&imhei=800",
    badge: "Legend",
  },
  {
    id: "tt-s303",
    name: "Yamaha TT-S303",
    category: "turntables",
    price: 449,
    description:
      "Elegant belt-drive turntable. Easy connection to any Hi-Fi system with built-in phono preamp and quality cartridge included.",
    features: [
      "Belt drive",
      "Built-in phono preamp",
      "Straight tonearm",
      "Speeds: 33⅓ & 45 RPM",
      "AT3600L cartridge included",
      "Anti-skating adjustment",
    ],
    image:
      "https://usa.yamaha.com/files/tts303-cat_e7c50b36a08cb8f0a11a73f6938cc01d.jpg?impolicy=resize&imwid=800&imhei=800",
  },

  // Headphones
  {
    id: "yh-5000se",
    name: "Yamaha YH-5000SE",
    category: "headphones",
    price: 4999,
    description:
      "Reference orthodynamic headphones with proprietary planar magnetic drivers. Ultra-light diaphragm and open-back design for absolutely natural sound reproduction.",
    features: [
      "Orthodynamic drivers",
      "Frequency range: 6Hz — 80kHz",
      "Impedance: 34 Ohm",
      "Swappable earpads (leather/suede)",
      "Detachable cable (XLR / 6.3mm)",
      "Weight: 320g",
    ],
    image:
      "https://usa.yamaha.com/files/Image-Index_YH-5000SE_2000x2000_591fd32846220b9b4cecfdbc966c5b72.jpg?impolicy=resize&imwid=800&imhei=800",
    badge: "Flagship",
  },
  {
    id: "yh-l700a",
    name: "Yamaha YH-L700A",
    category: "headphones",
    price: 649,
    description:
      "Wireless headphones with advanced noise cancellation and 3D sound. Yamaha's Advanced ANC technology and head tracking for a cinematic listening experience.",
    features: [
      "Bluetooth 5.2 with LDAC",
      "Active noise cancellation",
      "3D Sound Field with gyroscope",
      "Battery life: up to 34 hours",
      "USB-C fast charging",
      "Listening Care optimization",
    ],
    image:
      "https://usa.yamaha.com/files/YH4000_basic_f8884cf13e9d2a28c07313b680c91cad.jpg?impolicy=resize&imwid=800&imhei=800",
    badge: "Popular",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
