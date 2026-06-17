export type Product = {
  id: string;
  title: string;
  images: string[];
  featured_image: string;
  category: string;
  original_price: number;
  sale_price: number;
  discount_percent: number;
  short_description: string;
  warranty_months: number;
  stock_status: "in_stock" | "low_stock" | "out_of_stock";
};

const img = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const categories = [
  "All", "Mobiles", "Laptops", "Tablets", "Smart Watches",
  "Headphones", "Cameras", "TVs", "Gaming Consoles", "Home Appliances", "Accessories",
];

export const products: Product[] = [
  { id: "p1", title: "iPhone 14 Pro 256GB", category: "Mobiles", original_price: 1099, sale_price: 729, discount_percent: 34, short_description: "Certified refurbished, Grade A. Includes charger.", warranty_months: 6, stock_status: "in_stock", featured_image: img("1592286927505-1def25115558"), images: [img("1592286927505-1def25115558")] },
  { id: "p2", title: "MacBook Pro 14\" M2", category: "Laptops", original_price: 1999, sale_price: 1499, discount_percent: 25, short_description: "M2 Pro chip, 16GB RAM, 512GB SSD.", warranty_months: 12, stock_status: "in_stock", featured_image: img("1517336714731-489689fd1ca8"), images: [img("1517336714731-489689fd1ca8")] },
  { id: "p3", title: "iPad Air 5th Gen", category: "Tablets", original_price: 749, sale_price: 519, discount_percent: 31, short_description: "10.9\" Liquid Retina, M1 chip.", warranty_months: 6, stock_status: "in_stock", featured_image: img("1561154464-82e9adf32764"), images: [img("1561154464-82e9adf32764")] },
  { id: "p4", title: "Apple Watch Series 8", category: "Smart Watches", original_price: 499, sale_price: 299, discount_percent: 40, short_description: "GPS, 45mm, aluminum case.", warranty_months: 6, stock_status: "low_stock", featured_image: img("1546868871-7041f2a55e12"), images: [img("1546868871-7041f2a55e12")] },
  { id: "p5", title: "Sony WH-1000XM5", category: "Headphones", original_price: 399, sale_price: 249, discount_percent: 38, short_description: "Industry-leading noise canceling.", warranty_months: 6, stock_status: "in_stock", featured_image: img("1583394838336-acd977736f90"), images: [img("1583394838336-acd977736f90")] },
  { id: "p6", title: "Canon EOS R6 Mark II", category: "Cameras", original_price: 2499, sale_price: 1799, discount_percent: 28, short_description: "Full-frame mirrorless, 24MP.", warranty_months: 12, stock_status: "in_stock", featured_image: img("1502920917128-1aa500764cbd"), images: [img("1502920917128-1aa500764cbd")] },
  { id: "p7", title: "Samsung 55\" OLED 4K TV", category: "TVs", original_price: 1799, sale_price: 1099, discount_percent: 39, short_description: "S95B OLED, Quantum HDR.", warranty_months: 12, stock_status: "in_stock", featured_image: img("1593359677879-a4bb92f829d1"), images: [img("1593359677879-a4bb92f829d1")] },
  { id: "p8", title: "PlayStation 5 Console", category: "Gaming Consoles", original_price: 549, sale_price: 399, discount_percent: 27, short_description: "Disc edition, controller included.", warranty_months: 6, stock_status: "low_stock", featured_image: img("1606144042614-b2417e99c4e3"), images: [img("1606144042614-b2417e99c4e3")] },
  { id: "p9", title: "Dyson V11 Cordless Vacuum", category: "Home Appliances", original_price: 699, sale_price: 399, discount_percent: 43, short_description: "60-min runtime, HEPA filtration.", warranty_months: 12, stock_status: "in_stock", featured_image: img("1558317374-067fb5f30001"), images: [img("1558317374-067fb5f30001")] },
  { id: "p10", title: "AirPods Pro 2nd Gen", category: "Accessories", original_price: 249, sale_price: 169, discount_percent: 32, short_description: "Active noise cancellation, USB-C.", warranty_months: 6, stock_status: "in_stock", featured_image: img("1572569511254-d8f925fe2cbb"), images: [img("1572569511254-d8f925fe2cbb")] },
  { id: "p11", title: "Galaxy S23 Ultra 512GB", category: "Mobiles", original_price: 1379, sale_price: 899, discount_percent: 35, short_description: "200MP camera, S Pen included.", warranty_months: 6, stock_status: "in_stock", featured_image: img("1610945415295-d9bbf067e59c"), images: [img("1610945415295-d9bbf067e59c")] },
  { id: "p12", title: "Dell XPS 15 Laptop", category: "Laptops", original_price: 1899, sale_price: 1199, discount_percent: 37, short_description: "i7, 16GB, 512GB, OLED.", warranty_months: 12, stock_status: "in_stock", featured_image: img("1496181133206-80ce9b88a853"), images: [img("1496181133206-80ce9b88a853")] },
  { id: "p13", title: "Samsung Galaxy Tab S8", category: "Tablets", original_price: 699, sale_price: 449, discount_percent: 36, short_description: "11\" 120Hz, S Pen included.", warranty_months: 6, stock_status: "in_stock", featured_image: img("1544244015-0df4b3ffc6b0"), images: [img("1544244015-0df4b3ffc6b0")] },
  { id: "p14", title: "Garmin Fenix 7", category: "Smart Watches", original_price: 699, sale_price: 479, discount_percent: 31, short_description: "Multisport GPS, solar charging.", warranty_months: 6, stock_status: "in_stock", featured_image: img("1579586337278-3befd40fd17a"), images: [img("1579586337278-3befd40fd17a")] },
  { id: "p15", title: "Bose QuietComfort 45", category: "Headphones", original_price: 329, sale_price: 199, discount_percent: 40, short_description: "World-class noise cancellation.", warranty_months: 6, stock_status: "in_stock", featured_image: img("1545127398-14699f92334b"), images: [img("1545127398-14699f92334b")] },
  { id: "p16", title: "Sony A7 IV Mirrorless", category: "Cameras", original_price: 2499, sale_price: 1899, discount_percent: 24, short_description: "33MP full-frame, 4K60p.", warranty_months: 12, stock_status: "low_stock", featured_image: img("1606986628253-49eb04ea3b41"), images: [img("1606986628253-49eb04ea3b41")] },
  { id: "p17", title: "LG 65\" C2 OLED TV", category: "TVs", original_price: 2299, sale_price: 1499, discount_percent: 35, short_description: "Dolby Vision IQ, α9 Gen 5.", warranty_months: 12, stock_status: "in_stock", featured_image: img("1593784991095-a205069470b6"), images: [img("1593784991095-a205069470b6")] },
  { id: "p18", title: "Xbox Series X", category: "Gaming Consoles", original_price: 499, sale_price: 369, discount_percent: 26, short_description: "1TB SSD, 4K 120Hz gaming.", warranty_months: 6, stock_status: "in_stock", featured_image: img("1621259182978-fbf93132d53d"), images: [img("1621259182978-fbf93132d53d")] },
  { id: "p19", title: "Nespresso Vertuo Plus", category: "Home Appliances", original_price: 199, sale_price: 119, discount_percent: 40, short_description: "Centrifusion brewing tech.", warranty_months: 12, stock_status: "in_stock", featured_image: img("1572119865084-43c285814d63"), images: [img("1572119865084-43c285814d63")] },
  { id: "p20", title: "Magic Keyboard for iPad", category: "Accessories", original_price: 299, sale_price: 179, discount_percent: 40, short_description: "Floating design, trackpad.", warranty_months: 6, stock_status: "in_stock", featured_image: img("1587829741301-dc798b83add3"), images: [img("1587829741301-dc798b83add3")] },
];
