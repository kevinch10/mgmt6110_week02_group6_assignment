import { Product, Article, StoreLocation } from '../types';

export const HERO_IMAGE =
  'https://lh3.googleusercontent.com/aida/AEtjO1V0yYPxg_-k8acY4I6Njlx9fbKtilmDUFE59RIiMg3xWM1jMWyymTLJsDUjFmSOUads1Xtv-HJumhpKSdEQKIPhnGiAyfpuh1H-MyVrpvbZi2JyXX0QE-ytmfTGPVaBM7ncse_cCWsrFVFm8hC24bcc2jeKhzQzK0nfRLVqZNCtHhZWhVlIh51GoZ46NlwZ1yROdSBbnWmHFZDJZqONSf26RUTnzcAsEDNHoQ98HZ6VmMq0jtfyIUbe-4-i';

export const CATEGORY_IMAGES = {
  mensFootwear:
    'https://lh3.googleusercontent.com/aida/AEtjO1W5VeriIaPkGNCMJfQYj7M0tdn4rQ17Qst_22fgy6xZwN4BJ5Q4IlsiwynlpTGjT_YUOhJdBoNIrQiQHk8Ldjf-43_qxpQA4pMcYk_g-aJwrmAW_Ca8EbHEPI35IUO_4wRNbHYDBm_u4ns942_uuXCvnIhF6rnUTIjDLSvJavef4njenZPcFlrjxwq5AQC8emwPNNRDjypJ05nuz9ELZmaORyoZk2rGqG3d5H9hWWt5ejn27ajBmpF5VmZs',
  womensClothing:
    'https://lh3.googleusercontent.com/aida/AEtjO1V64czjb-eqGOpWdiqJGDeoksNdxD-N-u-XEa5ps_p6RjkYq76q2eRARyrsFbxCA5cs1koQPE_TEX1Z86KeHX61AF0wiYDYgLX2EWqwyz8jrwyBnaZxB0jReq96uFgO500t6EoUadAlJbV5JQWLLeclOkUDAr6uWBY5NwIhQ8iVMZwkL7qrwmA5pIGHqKJ-GFO7vUC1dsak92sVhjlPrOzWuV7eW28FV59-x0MTfJpnAi5F1n-ow68ZHXyT',
  kidsAccessories:
    'https://lh3.googleusercontent.com/aida/AEtjO1VXsU_JHTKqFDBoYQjD2bfSHLHRGw_PrBI3HyO0nvGfhkUhC0awGaZ95ekc-zT0LDqGkLDr6iIrHCjLAtMZwyTJnu12XXy2YXsrIFJ2U-qUhRuGDF_GjRGeL5WILdWlbA7nQV_nJLsscZxQOB6jvnaLeueUqDQ58fzGmEn7zPmq7WZgaJw3VxAiXlvhg3A_0jxya-M6FCeFALkZWjhYod9QjDgsr70qqg69REjtQxNYLLiFMShJT0OS8sPF',
};

export const SECONDARY_BANNER_IMAGE =
  'https://lh3.googleusercontent.com/aida/AEtjO1VxIlyD222odxLuNa2ZPcWaQVqS03J6tRQoY8P6J4vtI_qA5K2ilKlJu74lDfJXoc4QJNddKg0AxXScX2h6uH-cjt3B84zbDOL-6uYuSKMoG4f2LNl2XfvxqDNInbedQvVXiW6NBfWMxCCeo1Oy8h6KRRSwbvBGWxhb8iJGHUedN0FoIfWj-NIwhNGjlAlxNY4_vqX9aIG5D7qXson9rR9CglEh2UTDfhiKXGI7DgU3rPq0TW3Dwxel9NWa';

export const MOST_WANTED_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'On Running Cloudtilt',
    brand: 'On Running',
    category: 'men',
    subcategory: 'footwear',
    price: 269.0,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBnV9XO46uFRmxYW5eZxQ_XqoMyWEQw9gZ3gr_Y66j22HHT_KZpp5FE74qqYKW_Wl-u6d6HsLbRfRiYRrwt72s3A9iluNDxu09jcBZC2t0zqE26YQmja48tVgcGS7OKIVwjfX0h2tCmExPN2QALZECQrrfzGMl0B_oW8G-O7V1IFGpdG5Ilw5pxoP2p0mejId3fUBoKoL0vshKg8NF8XK3yfude8IyZpkazTrG1HZzTqT4ql_QTwNl7DQ',
    imageAlt:
      'Product shot of a white On Running Cloudtilt sneaker with distinctive hollow cloud elements in the sole, placed on a plain background.',
    badge: 'Trending',
    description:
      'Engineered with CloudTec Phase® technology for ultra-smooth weight transfer. Ultra-lightweight engineered mesh upper made with recycled polyester. Precision cushioning delivers exceptional comfort on urban surfaces.',
    features: [
      'CloudTec Phase® precision cushioning',
      'Sock-like mesh knit construction',
      'Speed-lacing system with toggle lock',
      '100% recycled polyester upper base',
    ],
    sizes: ['UK 7', 'UK 7.5', 'UK 8', 'UK 8.5', 'UK 9', 'UK 9.5', 'UK 10', 'UK 11'],
    color: 'All White / Ivory',
    sku: 'JD-ON-CLT-001',
    rating: 4.9,
    reviewsCount: 142,
  },
  {
    id: 'prod-2',
    name: 'adidas Samba OG',
    brand: 'adidas Originals',
    category: 'men',
    subcategory: 'footwear',
    price: 159.0,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCi_sL5ZkPKz8ZZsF_tL6JheKtFHFOX9f6Mci9ReVHGxTOBG6-gGtlXfBH-RMr-UIitCsDPefgqJwmJRpcLNuMLOWbUGsDbuc4uJ3oHEYD65M2MJeI3wnN6FO8wQkdv2XUwKT8SF5X3JodmMXQ9ReDZw6gVBhFchtHt6Q1Yt5aliTPhSzxdppEtADqY7DxRYnoHKpAXs_INv8HTlyI0Q0kfJoItebYPZNZyDfg0pbTt2hZyI5fPJRDFtg',
    imageAlt: 'Classic adidas Samba OG sneaker in white leather with black stripes and a gum sole.',
    badge: 'Trending',
    description:
      'Born on the pitch, the Samba is a timeless icon of street style. This silhouette stays true to its heritage with a tasteful low-profile full-grain leather upper, suede overlays, and signature gum rubber outsole.',
    features: [
      'Full grain leather upper with gritty suede T-toe',
      'Synthetic leather lining',
      'Gum rubber cupsole for authentic retro traction',
      'Gold foil Samba lateral branding',
    ],
    sizes: ['UK 6', 'UK 6.5', 'UK 7', 'UK 7.5', 'UK 8', 'UK 8.5', 'UK 9', 'UK 9.5', 'UK 10'],
    color: 'Cloud White / Core Black / Gum',
    sku: 'JD-ADI-SMB-002',
    rating: 4.8,
    reviewsCount: 389,
  },
  {
    id: 'prod-3',
    name: "Nike Air Force 1 '07",
    brand: 'Nike',
    category: 'men',
    subcategory: 'footwear',
    price: 165.0,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuASFkRlwnrdt9qiqIGJY4bGfz725h4sdq1qejprswXINqT7MUrOzhRQG5Nl3ox7blrC2huboMUXwf_3E6wwrwssYDFlm9oApcjWt6uOum8dJtATeJzlh8s0NovSZVQ34xId2GtqDh6l2uERJkGpfuq_8_HUbjMW_K3WQxLp5gMH2cEjyDv95NXfzca-PdIzx9HtlHgT20Fyj0qaED3n3Bbbx87ilX68eUsQHCEcGSmfKPlz9O0RaZP3pA',
    imageAlt: "All white Nike Air Force 1 '07 sneaker on a minimalist gray background.",
    badge: 'Trending',
    description:
      'The radiance lives on in the Nike Air Force 1 ’07, the basketball icon that puts a fresh spin on what you know best: stitched leather overlays, crisp monochrome accents, and the perfect amount of flash.',
    features: [
      'Crisp, stitched leather overlays on upper',
      'Nike Air cushioning originally designed for performance hoops',
      'Padded low-cut collar looks sleek and feels great',
      'Non-marking solid rubber outsole with pivot circles',
    ],
    sizes: ['UK 6.5', 'UK 7', 'UK 7.5', 'UK 8', 'UK 8.5', 'UK 9', 'UK 9.5', 'UK 10', 'UK 11'],
    color: 'Triple White',
    sku: 'JD-NK-AF1-003',
    rating: 4.9,
    reviewsCount: 520,
  },
  {
    id: 'prod-4',
    name: 'Asics Gel-1130 Mule',
    brand: 'Asics',
    category: 'men',
    subcategory: 'footwear',
    price: 159.0,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDEqN9YzRF1LVKVbYmXC93QMKzrz0dpaC3nElRx-TLZ_ABO1GDdId_fMPIulvNFDFzHKSA9zz5uZsa642u6TyfeLnEsjNoYFKCSgZ_tCgOZ7-qjVflKuvnYxE7rXUI884EvDZ4mza_o4ELjM-8eEITlQR025w61vThIa28nTyqqCV2J_hyN4mjN4I1OH96U0Nr387-37VKo2cp6VHgYBIpVZT4vAhdmE5ldNysSt_ct9Ihu9swAJqjEow',
    imageAlt: 'Asics Gel-1130 Mule sneaker in a metallic silver and grey colorway.',
    badge: 'Trending',
    description:
      'Spanning across decades of design evolution, the GEL-1130™ Mule sneaker pays homage to the ninth iteration of the GEL-1000™ series. Remixed into an easy slip-on mule format for effortless daily rotation.',
    features: [
      'Late 2000s runner aesthetic converted to mule slip-on',
      'GEL® technology cushioning in heel for shock absorption',
      'TRUSSTIC™ support system preserved for stability',
      'Breathable metallic silver mesh with synthetic overlays',
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    color: 'Pure Silver / Slate Grey',
    sku: 'JD-ASC-GEL-004',
    rating: 4.7,
    reviewsCount: 88,
  },
  // Additional products for Women's, Kids', and Category views
  {
    id: 'prod-5',
    name: 'adidas Originals ANFU Mary Jane',
    brand: 'adidas Originals',
    category: 'women',
    subcategory: 'footwear',
    price: 149.0,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBxfAdSlD9WeHcnxVbxp8Nt04q2XMHmgst32wHAKpzQGGhWwMuhqgQ9Efds7TC2bqTM6Q4dEa3Ob3Xg5QpZQx3Bsp9Ii4ur5eDWb9xLUWo2GWZTch3JQRELwfshzFxLN-34bZnSwfYlvL82nd8MQOh6snhsIOsteGzmt4Pk48MdJjzEqKMhggxsCxhAkmNLZsV_wbPhbfx66I3cXSRDdXiuM7t5a6XRLk-gMkC17Lv908nB_jeZFLOm7g',
    imageAlt: 'adidas Originals ANFU Mary Jane sporty silhouette',
    badge: 'Exclusive',
    description:
      'First at JD! The hybrid Mary Jane sports sneaker blends sporty heritage with balletic elegance. Soft tumbled leather straps with metallic buckle detailing on a durable low-profile gum sole.',
    features: [
      'Single strap Mary Jane buckle closure',
      'Smooth premium leather upper',
      'Cushioned OrthoLite® sockliner',
      'Low-profile court outsole',
    ],
    sizes: ['UK 3.5', 'UK 4', 'UK 4.5', 'UK 5', 'UK 5.5', 'UK 6', 'UK 6.5', 'UK 7'],
    color: 'Core Black / Chalk White',
    sku: 'JD-ADI-ANFU-005',
    rating: 4.9,
    reviewsCount: 74,
  },
  {
    id: 'prod-6',
    name: 'New Balance 530 Metallic',
    brand: 'New Balance',
    category: 'women',
    subcategory: 'footwear',
    price: 169.0,
    imageUrl:
      'https://lh3.googleusercontent.com/aida/AEtjO1VxIlyD222odxLuNa2ZPcWaQVqS03J6tRQoY8P6J4vtI_qA5K2ilKlJu74lDfJXoc4QJNddKg0AxXScX2h6uH-cjt3B84zbDOL-6uYuSKMoG4f2LNl2XfvxqDNInbedQvVXiW6NBfWMxCCeo1Oy8h6KRRSwbvBGWxhb8iJGHUedN0FoIfWj-NIwhNGjlAlxNY4_vqX9aIG5D7qXson9rR9CglEh2UTDfhiKXGI7DgU3rPq0TW3Dwxel9NWa',
    imageAlt: 'New Balance 530 sneaker in white silver metallic',
    badge: 'Hot Drop',
    description:
      'The 530 is a throwback to classic running shoe models from the 2000s. Featuring ABZORB heel cushioning, this retro runner pairs effortlessly with everyday casual streetwear looks.',
    features: [
      'ABZORB midsole absorbs impact through cushioning and compression resistance',
      'Mesh upper with synthetic metallic overlays',
      'Heritage runner silhouette',
    ],
    sizes: ['UK 4', 'UK 5', 'UK 6', 'UK 7', 'UK 8'],
    color: 'White / Silver / Sky Blue',
    sku: 'JD-NB-530-006',
    rating: 4.9,
    reviewsCount: 215,
  },
  {
    id: 'prod-7',
    name: 'On Running Cloud 6 Monochrome',
    brand: 'On Running',
    category: 'unisex',
    subcategory: 'footwear',
    price: 249.0,
    imageUrl:
      'https://lh3.googleusercontent.com/aida/AEtjO1WClsa4qEjpOXc8zc03CU9DDtLU9ihgbwsXsOvWs0-103dwtw8WRh-kk0k1TSJX_zlfpTcrpSqoQU2N_5Ujns_TNHKRBWwy6T2eiwQHmHQobjxU2JsrFtJGV_luUHQdEP7vKxyc2-Uf8YWI0Tvgm5vPCO_CdhstsCzaypxvkfn9WbisNKXYNBkkpLlZclkQBweF8dfKqd4Tlvteml6hjJBcwI_uSPkp1AUEIigxtK4RUw7OwGJSSl67E7m2',
    imageAlt: 'On Running Cloud 6 sneakers on feet with white socks',
    badge: 'Popular',
    description:
      'The best everyday sneaker in Singapore. Re-engineered with updated CloudTec® cushioning and a refined Speedboard® to power daily walking, commuting, and urban runs in breathable comfort.',
    features: [
      'Zero-Gravity foam CloudTec® elements',
      'Speed-lacing system for instantaneous step-in',
      'Antimicrobial mesh upper for Singapore humidity',
      'Molded heel design holds foot securely',
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    color: 'Undyed White / Pure',
    sku: 'JD-ON-CLD6-007',
    rating: 4.9,
    reviewsCount: 162,
  },
  {
    id: 'prod-8',
    name: 'Nike Dunk Low Retro Kids',
    brand: 'Nike',
    category: 'kids',
    subcategory: 'footwear',
    price: 129.0,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuASFkRlwnrdt9qiqIGJY4bGfz725h4sdq1qejprswXINqT7MUrOzhRQG5Nl3ox7blrC2huboMUXwf_3E6wwrwssYDFlm9oApcjWt6uOum8dJtATeJzlh8s0NovSZVQ34xId2GtqDh6l2uERJkGpfuq_8_HUbjMW_K3WQxLp5gMH2cEjyDv95NXfzca-PdIzx9HtlHgT20Fyj0qaED3n3Bbbx87ilX68eUsQHCEcGSmfKPlz9O0RaZP3pA',
    imageAlt: 'Nike Dunk Low Kids sneaker',
    badge: 'Kids Pick',
    description:
      'Created for the hardwood but taken to the streets, the 80s hoops icon returns with classic details and throwback flair. Padded collar and durable real leather for active young ballers.',
    features: [
      'Crisp leather upper ages to soft perfection',
      'Foam midsole offers lightweight, responsive cushioning',
      'Rubber outsole with hoops pivot circle adds durability',
    ],
    sizes: ['UK 1', 'UK 1.5', 'UK 2', 'UK 2.5', 'UK 3', 'UK 3.5', 'UK 4', 'UK 5'],
    color: 'White / Black Panda',
    sku: 'JD-NK-DNKK-008',
    rating: 4.8,
    reviewsCount: 95,
  },
];

export const BLOG_ARTICLES: Article[] = [
  {
    id: 'article-1',
    title: 'Just Launched: adidas Originals by JENNIE',
    subtitle: 'Be the first to cop the adidas Originals by JENNIE, now live at JD Sports Singapore.',
    author: 'JD Editorial Team',
    date: 'Aug 28, 2026',
    readTime: '3 min read',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/AEtjO1UXFrsZ3h47lT-QXzIHWb2oMnMgUklEj_9T7b95SB5K4e_xncymfWhfHR8er1RCPjEKW-1iEhgFlHZL7quFMMSGJrjzW6UVBKHN9RIspMDpTpFDQin56l_VUcgldbUdqdwiX2n9DpMGDFTYLshdXUhkMWGlEn9Scw2A_x1J6DNP8AS8RHH3giLHyfkjEofZyORD0dpWqqFWWE1Zcn0BrhiZ-o3ZpfGprcPFqge-xyYWTEJbtSbkN2JE96-V',
    imageAlt: 'Jennie from Blackpink modeling adidas Originals apparel in a moody, dimly lit studio setting.',
    tags: ['adidas', 'Jennie', 'Streetwear', 'Exclusive'],
    content: [
      'Global style icon and BLACKPINK superstar JENNIE joins forces with adidas Originals for an exclusive, highly anticipated capsule drop that redefines contemporary streetwear with minimalist precision.',
      'Anchored in monochrome contrasts and tailored sports tailoring, the collection features reinvented track silhouettes, sculpted corset-inspired zip tops, and reimagined platform Sambas created specifically for urban tastemakers.',
      'Available exclusively in Singapore across JD Sports Flagship at ION Orchard, Bugis+, and online with immediate Click & Collect availability.',
    ],
  },
  {
    id: 'article-2',
    title: 'First At JD: adidas Originals ANFU Mary Jane',
    subtitle: 'First at JD. The adidas Originals ANFU Mary Jane has launched at JD Sports on 15th August 2026.',
    author: 'Sneaker Culture Desk',
    date: 'Aug 15, 2026',
    readTime: '4 min read',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBxfAdSlD9WeHcnxVbxp8Nt04q2XMHmgst32wHAKpzQGGhWwMuhqgQ9Efds7TC2bqTM6Q4dEa3Ob3Xg5QpZQx3Bsp9Ii4ur5eDWb9xLUWo2GWZTch3JQRELwfshzFxLN-34bZnSwfYlvL82nd8MQOh6snhsIOsteGzmt4Pk48MdJjzEqKMhggxsCxhAkmNLZsV_wbPhbfx66I3cXSRDdXiuM7t5a6XRLk-gMkC17Lv908nB_jeZFLOm7g',
    imageAlt: 'Three female models sitting indoors, posing in casual adidas Originals ANFU Mary Jane footwear and sporty skirts.',
    tags: ['Mary Jane', 'Trend Report', 'adidas', 'Sneakers'],
    content: [
      'The balletcore phenomenon merges seamlessly with classic 3-Stripes heritage. The all-new adidas Originals ANFU Mary Jane brings a bold, feminine twist to athletic footwear without sacrificing traction or ease of wear.',
      'Featuring premium smooth leather uppers, adjustable single strap buckles, and authentic rubber court grip, this silhouette bridges the gap between preppy casuals and sporty tailoring.',
      'Stock is strictly limited for this first-wave launch. Pair them with crew socks or pleated tennis skirts for the quintessential Singapore street look.',
    ],
  },
  {
    id: 'article-3',
    title: 'Best Everyday Sneakers In Singapore: On Running Cloud 6',
    subtitle: 'Best Everyday Sneakers In Singapore: On Running Cloud 6 When it comes to everyday sneakers in Singapore, comfort isn’t optional...',
    author: 'Footwear Specialist',
    date: 'Aug 10, 2026',
    readTime: '5 min read',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/AEtjO1WClsa4qEjpOXc8zc03CU9DDtLU9ihgbwsXsOvWs0-103dwtw8WRh-kk0k1TSJX_zlfpTcrpSqoQU2N_5Ujns_TNHKRBWwy6T2eiwQHmHQobjxU2JsrFtJGV_luUHQdEP7vKxyc2-Uf8YWI0Tvgm5vPCO_CdhstsCzaypxvkfn9WbisNKXYNBkkpLlZclkQBweF8dfKqd4Tlvteml6hjJBcwI_uSPkp1AUEIigxtK4RUw7OwGJSSl67E7m2',
    imageAlt: "Close up of a person's lower legs wearing white On Running Cloud 6 sneakers and white ribbed socks, standing outdoors.",
    tags: ['On Running', 'Cloud 6', 'Comfort', 'Singapore Guide'],
    content: [
      'Navigating Singapore requires footwear that can effortlessly handle 15,000 daily steps across humid outdoor pavement and air-conditioned MRT stations. The Swiss-engineered On Running Cloud 6 answers the call.',
      'With re-engineered zero-gravity CloudTec® pods and breathable antimicrobial upper mesh, the Cloud 6 delivers supreme step-in comfort and unmatched all-day temperature regulation.',
      'Visit any JD Sports store to try the step-in test on our dedicated testing track or order online with free standard delivery.',
    ],
  },
];

export const SINGAPORE_STORES: StoreLocation[] = [
  {
    id: 'store-ion',
    name: 'JD Sports ION Orchard (Flagship)',
    address: '2 Orchard Turn, #B4-17/18/19 ION Orchard',
    postalCode: 'Singapore 238801',
    hours: '10:00 AM – 10:00 PM Daily',
    phone: '+65 6509 0920',
    mrt: 'Orchard MRT (NS22 / TE14)',
    features: ['Click & Collect (1 Hr)', 'Exclusive Drop Zone', 'Shoe Customization Bar'],
  },
  {
    id: 'store-bugis',
    name: 'JD Sports Bugis+',
    address: '201 Victoria Street, #02-25/26/27 Bugis+',
    postalCode: 'Singapore 188067',
    hours: '10:30 AM – 10:00 PM Daily',
    phone: '+65 6884 9230',
    mrt: 'Bugis MRT (EW12 / DT14)',
    features: ['Click & Collect', 'Streetwear Hub', 'Kids Footwear Lab'],
  },
  {
    id: 'store-vivocity',
    name: 'JD Sports VivoCity',
    address: '1 HarbourFront Walk, #01-155 VivoCity',
    postalCode: 'Singapore 098585',
    hours: '10:00 AM – 10:00 PM Daily',
    phone: '+65 6376 8112',
    mrt: 'HarbourFront MRT (NE1 / CC29)',
    features: ['Click & Collect', 'Performance Running Lab', 'Full Apparel Range'],
  },
  {
    id: 'store-jewel',
    name: 'JD Sports Jewel Changi Airport',
    address: '78 Airport Boulevard, #01-249/250 Jewel Changi',
    postalCode: 'Singapore 819666',
    hours: '10:00 AM – 10:00 PM Daily',
    phone: '+65 6214 3880',
    mrt: 'Changi Airport MRT (CG2)',
    features: ['Tourist Tax Refund', 'Click & Collect', 'Global Exclusives'],
  },
];
