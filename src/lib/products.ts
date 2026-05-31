export interface Product {
  id: string;
  name: string;
  category: 'maize' | 'rice' | 'pulses_grains';
  variety: string;
  originState: string;
  grades: string[];
  moistureSpec: string;
  packagingOptions: string[];
  description: string;
}

export const products: Product[] = [
  {
    id: "yellow-maize",
    name: "Yellow Maize",
    category: "maize",
    variety: "Feed Grade / Starch Grade (Zea mays)",
    originState: "Maharashtra / Karnataka / Madhya Pradesh",
    grades: ["Grade A (Machine Cleaned)", "Grade B (FAQ)"],
    moistureSpec: "14.0% Max",
    packagingOptions: ["50 kg PP Bags", "Bulk in Containers", "Loose Bulk"],
    description: "Sourced directly from central Indian farmers. High starch value, low moisture content, ideal for animal feed manufacturing and industrial starch processing."
  },
  {
    id: "white-maize",
    name: "White Maize",
    category: "maize",
    variety: "Food Grade / White Corn",
    originState: "Maharashtra / Madhya Pradesh",
    grades: ["Premium Food Grade", "Standard Quality"],
    moistureSpec: "13.5% Max",
    packagingOptions: ["25 kg PP Bags", "50 kg PP Bags"],
    description: "Carefully selected food-grade white maize, processed for human consumption. High grain uniformity, free from any contaminants or foreign matter."
  },
  {
    id: "basmati-rice",
    name: "Basmati Rice",
    category: "rice",
    variety: "1121 Sella / Traditional / Pusa Basmati",
    originState: "Punjab / Haryana / Uttar Pradesh",
    grades: ["Premium Long Grain", "Golden Sella", "Creamy Sella"],
    moistureSpec: "12.0% Max",
    packagingOptions: ["20 kg Non-Woven Bags", "25 kg PP Bags", "50 kg Jute Bags"],
    description: "Highly aromatic, extra-long slender grains. Parboiled or steam-milled using state-of-the-art facilities to guarantee optimal elongation upon cooking."
  },
  {
    id: "non-basmati-rice",
    name: "Non-Basmati Rice",
    category: "rice",
    variety: "IR 64 / Long Grain White Rice / Swarna Rice",
    originState: "Andhra Pradesh / Chhattisgarh / West Bengal",
    grades: ["5% Broken", "25% Broken", "100% Broken (Brewery Grade)"],
    moistureSpec: "14.0% Max",
    packagingOptions: ["25 kg PP Bags", "50 kg PP Bags", "Bulk in Container liner"],
    description: "Consistent and cost-effective food grains. Excellent milling yield with rigorous sorting processes, heavily requested across African and Middle Eastern markets."
  },
  {
    id: "toor-dal",
    name: "Toor Dal (Pigeon Peas)",
    category: "pulses_grains",
    variety: "Desi Toor / Oily & Non-Oily Polish",
    originState: "Maharashtra / Gujarat",
    grades: ["Premium Grade A", "Standard Bold"],
    moistureSpec: "12.0% Max",
    packagingOptions: ["25 kg PP Bags", "50 kg PP Bags"],
    description: "Polished or unpolished yellow split pigeon peas. Free from chemical additives, processed at modernized dal mills under hygienic parameters."
  },
  {
    id: "chana-dal",
    name: "Chana Dal (Split Chickpeas)",
    category: "pulses_grains",
    variety: "Desi Bengal Gram",
    originState: "Madhya Pradesh / Rajasthan",
    grades: ["Super Bold Cleaned", "Grade A Cleaned"],
    moistureSpec: "12.0% Max",
    packagingOptions: ["25 kg PP Bags", "50 kg PP Bags"],
    description: "Split Bengal gram with a sweet, nutty flavor. High protein content, machine sorted and color-camera picked to ensure zero discolored grains."
  },
  {
    id: "moong-dal",
    name: "Moong Dal (Split Green Gram)",
    category: "pulses_grains",
    variety: "Moghar (Washed) / Split Chilka",
    originState: "Rajasthan / Gujarat / Maharashtra",
    grades: ["Premium Sortex Cleaned", "Standard Choice"],
    moistureSpec: "12.0% Max",
    packagingOptions: ["25 kg PP Bags", "50 kg PP Bags"],
    description: "Husked and split yellow mung beans. Processed to premium dry-milling standards, optimal for wholesale distributors and global food chains."
  },
  {
    id: "soybean",
    name: "Soybean Grains",
    category: "pulses_grains",
    variety: "Yellow Soybean (Non-GMO)",
    originState: "Maharashtra / Madhya Pradesh",
    grades: ["Grade A (Oil Milling)", "Food Grade Non-GMO"],
    moistureSpec: "12.5% Max",
    packagingOptions: ["50 kg PP Bags", "Bulk in Containers"],
    description: "High oil and protein content Non-GMO soybean grains. Sourced directly from crop clusters, processed to eliminate dust, chaff, and cracked hulls."
  },
  {
    id: "wheat",
    name: "Wheat (Milling & Sharbati)",
    category: "pulses_grains",
    variety: "Lokwan / Sharbati / Milling Wheat",
    originState: "Madhya Pradesh / Rajasthan",
    grades: ["Premium Sharbati Grade", "Milling Grade (11.5% Protein)"],
    moistureSpec: "12.0% Max",
    packagingOptions: ["50 kg PP Bags", "Bulk in Vessels"],
    description: "Premium hard and semi-hard wheat grains. Sharbati variety is prized for its high gluten index, while Lokwan and Milling wheat provide high protein for global flour mills."
  }
];
